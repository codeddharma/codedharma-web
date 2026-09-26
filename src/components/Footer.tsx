import Link from "next/link";
import { Lockup } from "./Logo";
import { socialIcons } from "./Icons";
import { nav, site, socials } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-oxide text-patina">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Lockup dark />
          <p className="max-w-sm text-[15px] text-patina/75">{site.tagline} {site.descriptor}</p>
        </div>
        <div>
          <p className="label text-patina/75">Explore</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {nav.map((n) => (
              <li key={n.href}><Link className="hover:text-verdigris" href={n.href}>{n.label}</Link></li>
            ))}
            <li><Link className="hover:text-verdigris" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="label text-patina/75">Talk to us</p>
          <p className="mt-3 text-[15px] select-all">{site.email}</p>
          <p className="mt-2 text-[15px] text-patina/75">{site.location}</p>
          <ul className="mt-4 flex gap-3" aria-label="CodeDharma on social media">
            {socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.label}>
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-patina/20 text-patina/85 transition-colors hover:border-verdigris hover:text-verdigris"
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-patina/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-patina/70">© {new Date().getFullYear()} CodeDharma</p>
      </div>
    </footer>
  );
}
