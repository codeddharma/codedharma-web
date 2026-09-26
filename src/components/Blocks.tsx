import Link from "next/link";
import { method, site } from "@/content/site";

/**
 * Headline text with preferred break points. Put "|" between phrases:
 * on phones each phrase starts on its own line and is balanced on its own,
 * on wider screens the phrases flow together as one headline.
 */
export function Lines({ text }: { text: string }) {
  const parts = text.split("|");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i} className="block [text-wrap:balance] sm:inline">
          {p}
          {i < parts.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Heading({ eyebrow, title, intro, dark = false }: { eyebrow?: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow && <p className={`label ${dark ? "text-verdigris" : "text-verdigris-deep"}`}>{eyebrow}</p>}
      <h2 className="font-serif text-3xl leading-[1.12] md:text-[2.6rem]"><Lines text={title} /></h2>
      {intro && <p className={`text-lg leading-relaxed ${dark ? "text-patina/75" : "text-oxide-80"}`}>{intro}</p>}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "bronze" | "ghost" | "ghost-dark" }) {
  const styles = {
    primary: "bg-oxide text-patina hover:bg-oxide-80",
    bronze: "bg-bronze-deep text-white hover:bg-bronze-darker",
    ghost: "border-[1.5px] border-oxide text-oxide hover:bg-oxide hover:text-patina",
    "ghost-dark": "border-[1.5px] border-patina/70 text-patina hover:bg-patina hover:text-oxide",
  }[variant];
  return (
    <Link href={href} className={`inline-flex items-center rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

export function MethodRail({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-white sm:grid-cols-4 lg:grid-cols-8">
      {method.map((m, i) => (
        <li
          key={m.step}
          className={`flex flex-col gap-1.5 border-b border-r border-line p-4 ${i === 0 ? "bg-verdigris-deep text-white" : ""}`}
        >
          <span className={`label ${i === 0 ? "text-white/80" : "text-stone"}`}>{String(i + 1).padStart(2, "0")}</span>
          <span className="font-serif text-lg">{m.step}</span>
          {detailed && <span className={`text-sm leading-snug ${i === 0 ? "text-white/90" : "text-oxide-80"}`}>{m.line}</span>}
        </li>
      ))}
    </ol>
  );
}

export function CtaBand() {
  return (
    <section className="bg-oxide px-5 py-20 text-patina">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-serif text-3xl leading-tight md:text-[2.6rem]"><Lines text="Tell us what's|slowing you down." /></h2>
          <p className="text-lg text-patina/75">A free 30-minute discovery call. No pitch deck, just questions about how your business runs.</p>
        </div>
        <ButtonLink href="/contact" variant="bronze">{site.cta}</ButtonLink>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="px-5 pb-10 pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl space-y-5">
        <p className="label text-verdigris-deep">{eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] md:text-6xl"><Lines text={title} /></h1>
        <p className="max-w-2xl text-lg leading-relaxed text-oxide-80">{intro}</p>
      </div>
    </section>
  );
}
