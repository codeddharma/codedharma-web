import { products } from "@/content/site";

/** A CodeDharma product, shown in the product's own colours (Splizo: slate ink, amber accent on white). */
export function ProductCard({ compact = false }: { compact?: boolean }) {
  const p = products[0];
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener"
      className="group block rounded-2xl border border-line bg-white p-6 text-[#0F172A] shadow-[0_18px_40px_-28px_rgba(15,23,42,.45)] transition-shadow hover:shadow-[0_24px_50px_-26px_rgba(15,23,42,.55)] md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="label text-[#475569]">Our first product</span>
        <span className="label whitespace-nowrap rounded-full bg-[#B45309] px-2.5 py-1 text-white">{p.status}</span>
      </div>
      <p className="mt-5 text-3xl font-bold tracking-tight">{p.name}</p>
      <p className="mt-1 text-lg font-semibold text-[#B45309] [text-wrap:balance]">{p.tagline}</p>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#334155]">{p.description}</p>
      {!compact && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.points.map((pt) => (
            <li key={pt} className="rounded-full border border-[#E2E8F0] px-3 py-1 text-sm text-[#334155]">{pt}</li>
          ))}
        </ul>
      )}
      <p className="mt-6 text-[15px] font-semibold group-hover:underline">Join the waitlist<span className="whitespace-nowrap"> →</span></p>
    </a>
  );
}
