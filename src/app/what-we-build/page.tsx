import type { Metadata } from "next";
import { CtaBand, PageHero, Section } from "@/components/Blocks";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "What we build", description: "Workflow automation, AI assistants, document processing, custom software, digitalization and integrations, chosen for the problem." };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="What we build"
        title="Whatever the problem needs.|Nothing it doesn't."
        intro="We decide what to build only after discovery. These are the kinds of work that usually come out of it."
      />
      <Section className="pt-6 md:pt-8">
        <div className="divide-y divide-line border-y border-line">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-24 gap-6 py-10 md:grid-cols-[1fr_1fr_1fr]">
              <div className="space-y-2">
                <h2 className="font-serif text-2xl md:text-3xl">{s.title}</h2>
                <p className="text-[15px] leading-relaxed text-oxide-80">{s.short}</p>
              </div>
              <div>
                <p className="label text-stone">You might notice</p>
                <ul className="mt-3 space-y-1.5 text-[15px]">
                  {s.signs.map((x) => (<li key={x} className="flex gap-2"><span aria-hidden className="text-bronze">·</span>{x}</li>))}
                </ul>
              </div>
              <div>
                <p className="label text-stone">What changes</p>
                <p className="mt-3 text-[15px] leading-relaxed">{s.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
