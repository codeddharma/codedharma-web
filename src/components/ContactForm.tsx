"use client";

import { useState } from "react";
import { industries, site } from "@/content/site";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const field = "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[16px] outline-none focus:border-verdigris-deep focus:ring-2 focus:ring-verdigris/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="rounded-2xl border border-verdigris bg-white p-8" role="status">
        <h2 className="font-serif text-2xl">Thanks. We&apos;ve got your message.</h2>
        <p className="mt-2 text-oxide-80">We&apos;ll reply within one working day to find a time for the call.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      {/* Honeypot for bots */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[15px] font-medium">Your name
          <input id="name" name="name" required className={field} autoComplete="name" />
        </label>
        <label className="grid gap-1.5 text-[15px] font-medium">Business name
          <input id="business" name="business" required className={field} autoComplete="organization" />
        </label>
        <label className="grid gap-1.5 text-[15px] font-medium">Email
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </label>
        <label className="grid gap-1.5 text-[15px] font-medium">Phone / WhatsApp <span className="font-normal text-stone">(optional)</span>
          <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" />
        </label>
      </div>
      <label className="grid gap-1.5 text-[15px] font-medium">Industry
        <select id="industry" name="industry" className={field} defaultValue="">
          <option value="" disabled>Choose one</option>
          {industries.map((i) => (<option key={i}>{i}</option>))}
          <option>Other</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-[15px] font-medium">What&apos;s slowing your business down?
        <textarea id="problem" name="problem" required rows={5} className={field} placeholder="For example: we re-type every order from WhatsApp into Excel, and it takes hours every day." />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status.state === "sending"} className="rounded-lg bg-oxide px-5 py-3 text-[15px] font-semibold text-patina hover:bg-oxide-80 disabled:opacity-60">
          {status.state === "sending" ? "Sending…" : "Request my discovery call"}
        </button>
        {status.state === "error" && (
          <p className="text-[15px] text-rust" role="alert">{status.message} You can also email us at {site.email}.</p>
        )}
      </div>
    </form>
  );
}
