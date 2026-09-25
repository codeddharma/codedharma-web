import type { Metadata } from "next";
import { CtaBand, MethodRail, PageHero, Section } from "@/components/Blocks";
import { faqs, method } from "@/content/site";

export const metadata: Metadata = { title: "How we work", description: "Understand, observe, analyze, recommend, prioritize, build, support, evolve. Discovery first, technology second." };

const detail: Record<string, string> = {
  Understand: "We start with the business itself: what you sell, who you serve, how you make money, and where you want to be in two years.",
  Observe: "Where it helps, we visit and watch the work happen. We talk to the people doing it, because the real process is rarely the one on paper.",
  Analyze: "We map where time, money and accuracy are lost, and put rough numbers on each problem.",
  Recommend: "For each problem we suggest the simplest thing that works: automation, AI, software, an existing tool, a process change, or nothing.",
  Prioritize: "Together we rank the options by impact, feasibility, cost and value, and agree the scope before any building starts.",
  Build: "We build in small phases, so you can use something useful early and decide what comes next.",
  Support: "After launch we stay close, fix what needs fixing and help your team settle in.",
  Evolve: "Technology keeps moving. We keep you informed about what could improve next, and when it's worth it.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Discovery first. Technology second."
        intro="The right solution can't always be found in a requirements document or a short call. We need to understand the business before we decide what technology it needs."
      />
      <Section className="pt-4 md:pt-6"><MethodRail /></Section>
      <Section className="pt-0 md:pt-0">
        <ol className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {method.map((m, i) => (
            <li key={m.step} className="grid grid-cols-[3rem_1fr] gap-4">
              <span className="font-mono text-sm text-stone tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div className="space-y-2">
                <h2 className="font-serif text-2xl">{m.step}</h2>
                <p className="text-[16px] leading-relaxed text-oxide-80">{detail[m.step]}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="border-t border-line bg-patina/60">
        <h2 className="font-serif text-3xl md:text-4xl">Questions we&apos;re often asked</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                {f.q}
                <span aria-hidden className="text-verdigris-deep transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-oxide-80">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
