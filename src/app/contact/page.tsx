import type { Metadata } from "next";
import { PageHero, Section } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Book a free 30-minute discovery call with CodeDharma." };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Free discovery call"
        title="Tell us what's|slowing you down."
        intro="About 30 minutes of questions about how your business runs. No pitch deck and no obligation. If we see something worth doing, we'll tell you what we'd look at first."
      />
      <Section className="pt-4 md:pt-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <aside className="space-y-6 rounded-2xl bg-patina/70 p-7 h-fit">
            <div>
              <p className="label text-stone">Email</p>
              <p className="mt-1 text-lg select-all">{site.email}</p>
            </div>
            <div>
              <p className="label text-stone">What happens next</p>
              <ol className="mt-2 space-y-2 text-[15px] text-oxide-80">
                <li>1. We reply within one working day to find a time.</li>
                <li>2. A 30-minute call about your business and its day-to-day work.</li>
                <li>3. A short written note of what we heard and where we&apos;d start.</li>
              </ol>
            </div>
            <p className="text-sm text-stone">{site.location}</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
