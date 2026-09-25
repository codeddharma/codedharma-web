import Link from "next/link";
import { Mark } from "@/components/Logo";
import { ButtonLink, CtaBand, Heading, MethodRail, Section } from "@/components/Blocks";
import { industries, services, signs, site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-7">
            <p className="label text-verdigris-deep">{site.category}</p>
            <h1 className="font-serif text-5xl leading-[1.04] md:text-7xl">{site.tagline}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-oxide-80 md:text-xl">
              {site.descriptor} We spend time where the work happens, find what&apos;s slowing you down, and build only what moves you forward.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">{site.cta}</ButtonLink>
              <ButtonLink href="/how-we-work" variant="ghost">See how we work</ButtonLink>
            </div>
          </div>

          {/* Example discovery note: shows what "understand first" produces */}
          <figure className="rounded-2xl bg-oxide p-6 text-patina shadow-[0_24px_60px_-30px_rgba(29,35,34,.6)] md:p-8">
            <div className="flex items-center justify-between">
              <span className="label text-verdigris">Discovery note · example</span>
              <Mark className="h-8 w-auto" ink="#DCE6E0" />
            </div>
            <dl className="mt-6 divide-y divide-patina/10 text-[15px]">
              <div className="grid grid-cols-[7.5rem_1fr] gap-3 py-3"><dt className="text-patina/60">Business</dt><dd>Distributor, 22 staff</dd></div>
              <div className="grid grid-cols-[7.5rem_1fr] gap-3 py-3"><dt className="text-patina/60">Observed</dt><dd>2 people re-type ~140 WhatsApp orders a day into Excel</dd></div>
              <div className="grid grid-cols-[7.5rem_1fr] gap-3 py-3"><dt className="text-patina/60">Cost</dt><dd className="tabular-nums">≈ 9 hrs / week, 3–4 order errors a week</dd></div>
              <div className="grid grid-cols-[7.5rem_1fr] gap-3 py-3"><dt className="text-patina/60">Recommend</dt><dd>Order capture from WhatsApp straight into the sheet, with a daily check. No new software.</dd></div>
            </dl>
            <figcaption className="mt-5 text-sm text-patina/55">Illustrative example of what we write after observing a business.</figcaption>
          </figure>
        </div>
      </section>

      {/* Problem */}
      <Section className="border-t border-line bg-patina/60">
        <Heading eyebrow="The everyday signs" title="Most businesses don't need more software. They need less re-typing." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((s) => (
            <li key={s} className="rounded-xl border border-line bg-mist p-5 text-[17px] leading-snug">{s}</li>
          ))}
        </ul>
        <p className="mt-8 text-lg text-oxide-80">If a few of these sound familiar, there&apos;s usually a lot of time to win back.</p>
      </Section>

      {/* Method */}
      <Section>
        <Heading
          eyebrow="How we work"
          title="We understand the business before we choose the technology."
          intro="Every engagement follows the same eight steps. The first two happen where your work does, with the people who do it."
        />
        <div className="mt-12"><MethodRail detailed /></div>
        <div className="mt-8"><ButtonLink href="/how-we-work" variant="ghost">Read the full method</ButtonLink></div>
      </Section>

      {/* Services */}
      <Section className="border-t border-line">
        <Heading eyebrow="What we build" title="Whatever the problem needs. Nothing it doesn't." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/what-we-build#${s.slug}`} className="group flex flex-col gap-3 bg-mist p-6 transition-colors hover:bg-white">
              <h3 className="font-serif text-xl">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-oxide-80">{s.short}</p>
              <span className="mt-auto text-sm font-semibold text-verdigris-deep group-hover:underline">Learn more</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Honesty */}
      <section className="bg-oxide px-5 py-20 text-patina md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Heading dark eyebrow="Honest over impressive" title="Sometimes the right answer is to build nothing." />
          <div className="space-y-6 text-lg leading-relaxed text-patina/80">
            <p>If an existing tool solves your problem, we&apos;ll tell you. If a process change fixes it, we&apos;ll show you. We respect your goal, and we&apos;ll be honest when the solution needs rethinking.</p>
            <p>When we do build, you own it. Everything is documented, so your team is stronger and never locked in to us.</p>
          </div>
        </div>
      </section>

      {/* Labs + industries */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-6">
            <Heading
              eyebrow="CodeDharma Labs"
              title="One problem, many businesses, one shared solution."
              intro="When we find a problem that many businesses in an industry share, we build one product they can all use, so no single business carries the full cost."
            />
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-stone p-4">
              <span className="label rounded-full bg-bronze px-2.5 py-1 text-oxide">In progress</span>
              <span className="text-[15px]">Experiment 001 is being built. Revealing soon.</span>
            </div>
            <ButtonLink href="/labs" variant="ghost">Visit Labs</ButtonLink>
          </div>
          <div className="space-y-6">
            <Heading eyebrow="Where we're looking" title="We follow problems, not industries." intro="Right now we're talking to businesses in:" />
            <ul className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <li key={i} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[15px]">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Name story */}
      <Section className="border-t border-line bg-patina/60">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <Mark className="h-40 w-auto md:h-52" ink="#1D2322" />
          <div className="space-y-5">
            <Heading eyebrow="Why CodeDharma" title="Code is what we build with. Dharma is the direction." />
            <p className="max-w-2xl text-lg leading-relaxed text-oxide-80">
              Our mark draws on Karna from the Mahabharata: the Vijaya bow he mastered, and the armour and earrings he was born with. For us they stand for skill, responsibility, and the capability every business already has.
            </p>
            <Link href="/about" className="inline-block font-semibold text-verdigris-deep hover:underline">Read our story</Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
