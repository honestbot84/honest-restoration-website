"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-[100] h-[72px] bg-linen/92 backdrop-blur-[12px] border-b border-cypress/[0.08]">
      <div className="container-site flex items-center justify-between h-[72px] gap-6">
        <Logo />

        <nav className="hidden min-[860px]:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-[0.9rem] font-medium text-cypress transition-opacity duration-200 ${
                isActive(link.href) ? "opacity-100" : "opacity-85 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={PHONE_TEL}
          className="btn btn-primary btn-sm hidden min-[860px]:inline-flex"
        >
          {PHONE_DISPLAY}
        </a>

        <button
          type="button"
          className="w-11 h-11 flex min-[860px]:hidden flex-col items-center justify-center gap-[5px] rounded-[10px]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-0.5 bg-cypress rounded-sm transition-all duration-250 ease-brand ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-cypress rounded-sm transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-cypress rounded-sm transition-all duration-250 ease-brand ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`${
          open ? "flex" : "hidden"
        } min-[860px]:!hidden absolute top-[72px] left-0 right-0 bg-linen border-b border-cypress/10 flex-col gap-1 px-5 pt-5 pb-7 shadow-nav`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            onClick={close}
            className="py-3.5 px-2 font-medium text-cypress text-[1.05rem] rounded-[10px] hover:bg-cypress/[0.06]"
          >
            {link.label}
          </Link>
        ))}
        <a href={PHONE_TEL} className="btn btn-primary mt-3 text-center" onClick={close}>
          Call {PHONE_DISPLAY}
        </a>
      </nav>
    </header>
  );
}
