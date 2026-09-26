import type { Metadata } from "next";
import { Mark } from "@/components/Logo";
import { CtaBand, PageHero, Section } from "@/components/Blocks";
import { values } from "@/content/site";

export const metadata: Metadata = { title: "About", description: "Why CodeDharma exists, what the name means, and the values behind our work." };

const anatomy = [
  { part: "Vijaya", story: "The bow Karna mastered as the finest archer of his age.", meaning: "The skill we bring." },
  { part: "Kavacha", story: "The armour he was born with, and gave away when asked.", meaning: "Responsibility for what we build, and value given generously but sustainably." },
  { part: "Code + point", story: "Brackets holding a single point.", meaning: "Technology, guided by purpose." },
  { part: "Kundala", story: "The golden earrings from his father, Surya.", meaning: "The capability a business already has. We recognise it before adding anything." },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About CodeDharma"
        title="Technology should give every business|a chance to move forward."
        intro="Big companies have teams to find and fix their operational problems. Most small and growing businesses don't. CodeDharma exists to close that gap, by understanding the business first and then applying the right technology, or none."
      />
      <Section className="pt-6 md:pt-10">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr]">
          <div className="rounded-2xl bg-oxide p-10"><Mark className="h-44 w-auto" ink="#DCE6E0" /></div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl">The name and the mark</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-oxide-80">
              <strong className="font-semibold text-oxide">Code</strong> is technology: engineering, systems, building. <strong className="font-semibold text-oxide">Dharma</strong> is purpose, responsibility and right action. Together: technology, guided by purpose.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-oxide-80">
              The mark draws on Karna from the Mahabharata. His story is complicated, and we don&apos;t treat him as a simple hero. We take lessons from it: capability needs direction, loyalty should never replace judgment, and a label never tells you what someone is capable of.
            </p>
            <dl className="grid gap-4 sm:grid-cols-2">
              {anatomy.map((a) => (
                <div key={a.part} className="rounded-xl border border-line bg-white p-5">
                  <dt className="font-serif text-xl">{a.part}</dt>
                  <dd className="mt-1 text-sm text-stone">{a.story}</dd>
                  <dd className="mt-2 text-[15px]">{a.meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
      <Section className="border-t border-line bg-patina/60">
        <h2 className="font-serif text-3xl md:text-4xl">What we hold ourselves to</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl bg-mist p-6">
              <h3 className="font-serif text-2xl">{v.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-oxide-80">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl space-y-4">
          <p className="label text-verdigris-deep">Founder</p>
          <h2 className="font-serif text-3xl">Neel Shah</h2>
          <p className="text-lg leading-relaxed text-oxide-80">
            A senior full-stack engineer with more than five years of experience building web products, from customer-facing platforms to internal tools. Neel started CodeDharma to bring that engineering to businesses that usually can&apos;t access it, starting with a conversation about how the business actually runs.
          </p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
