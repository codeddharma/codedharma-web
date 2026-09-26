import type { Metadata } from "next";
import { ButtonLink, Lines, PageHero, Section } from "@/components/Blocks";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = { title: "Labs", description: "CodeDharma Labs turns problems that many businesses share into products they can all use." };

const path = ["Build for one", "Learn from the work", "Generalize", "Productize", "Serve many"];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="CodeDharma Labs"
        title="A smaller budget shouldn't mean|a smaller chance to improve."
        intro="Some problems show up in business after business in the same industry. Instead of one company paying for a custom system, Labs builds one solution that many can share."
      />
      <Section className="pt-4 md:pt-6">
        <ol className="grid gap-3 sm:grid-cols-5">
          {path.map((p, i) => (
            <li key={p} className="rounded-xl border border-line bg-white p-4">
              <span className="font-mono text-xs text-stone">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 font-serif text-lg">{p}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="pt-0 md:pt-0">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <p className="label text-verdigris-deep">Our first product</p>
            <h2 className="font-serif text-3xl md:text-4xl"><Lines text="Built for one household first." /></h2>
            <p className="max-w-xl text-lg leading-relaxed text-oxide-80">Splizo started with one family&apos;s money spread across bank apps, UPI and a spreadsheet nobody updated. We built it for them first. Now it&apos;s opening to every household that has the same problem.</p>
          </div>
          <ProductCard />
        </div>
      </Section>
      <Section className="border-t border-line">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-3xl"><Lines text="Does your whole industry|share a problem?" /></h2>
            <p className="text-lg text-oxide-80">Tell us about it. If it&apos;s painful, frequent and common enough, it may become the next Labs experiment.</p>
          </div>
          <ButtonLink href="/contact">Tell us the problem</ButtonLink>
        </div>
      </Section>
    </>
  );
}
