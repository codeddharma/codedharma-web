"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Lockup } from "./Logo";
import { nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-mist/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Lockup />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] transition-colors hover:text-verdigris-deep ${pathname === item.href ? "text-verdigris-deep" : "text-oxide-80"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-lg bg-oxide px-4 py-2 text-[15px] font-semibold text-patina hover:bg-oxide-80">
            Book a call
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden rounded-md border border-line px-3 py-1.5 text-sm"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-line md:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {[...nav, { href: "/contact", label: "Book a free discovery call" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-2.5 text-base">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
