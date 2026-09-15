import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-shade text-linen/85 pt-14 pb-8 mt-auto">
      <div className="container-site">
        <div className="grid gap-10 pb-10 border-b border-linen/12 min-[700px]:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-[0.95rem] max-w-[28ch] leading-snug opacity-80">
              Mold &amp; moisture specialists on the Florida Gulf Coast. People first. Property
              second.
            </p>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-driftwood mb-4">
              Navigate
            </h4>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1.5 text-[0.95rem] opacity-85 hover:opacity-100 hover:text-linen transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-driftwood mb-4">
              Call
            </h4>
            <a
              href={PHONE_TEL}
              className="block py-1.5 font-display font-bold text-[1.15rem] text-linen opacity-100"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="block py-1.5 text-[0.95rem] opacity-85 hover:opacity-100 hover:text-linen transition-opacity"
            >
              Request a consult
            </Link>
            <p className="mt-3 text-[0.85rem] opacity-70">Est. 2018 · Veteran owned</p>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap justify-between gap-3 text-[0.8rem] opacity-55">
          <span>© 2026 Honest Restoration</span>
          <span>Mold &amp; Moisture · Florida Gulf Coast</span>
        </div>
      </div>
    </footer>
  );
}
