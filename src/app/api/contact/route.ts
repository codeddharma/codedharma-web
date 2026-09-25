// Sends discovery-call requests to hello@codedharma.com using Resend (https://resend.com).
// Env vars: RESEND_API_KEY, CONTACT_TO (default hello@codedharma.com), CONTACT_FROM (a verified sender on your domain).

type Payload = {
  name?: string; business?: string; email?: string; phone?: string;
  industry?: string; problem?: string; company_website?: string;
};

const clean = (v: unknown, max = 2000) => String(v ?? "").trim().slice(0, max);
const escape = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success.
  if (clean(body.company_website)) return Response.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    industry: clean(body.industry, 80),
    problem: clean(body.problem, 4000),
  };

  if (!data.name || !data.business || !data.problem || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ error: "Please fill in your name, business, a valid email and what's slowing you down." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form submission not sent", data);
    return Response.json({ error: "The form isn't connected yet." }, { status: 503 });
  }

  const rows = Object.entries(data)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#7C8985">${k}</td><td style="padding:4px 0">${escape(v || "—").replace(/\n/g, "<br>")}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "CodeDharma Website <website@codedharma.com>",
      to: [process.env.CONTACT_TO || "hello@codedharma.com"],
      reply_to: data.email,
      subject: `Discovery call request: ${data.business} (${data.industry || "industry not set"})`,
      html: `<h2 style="font-family:Georgia,serif">New discovery call request</h2><table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "We couldn't send your message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
