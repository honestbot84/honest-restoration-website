import type { Metadata } from "next";
import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call Honest Restoration at 850-686-6675. Mold & moisture on the Florida Gulf Coast. Est. 2018 · Veteran owned.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Get in touch</p>
          <h1>Call. We’ll tell you straight.</h1>
          <p>
            Something feel off in the house? Start with a conversation — no pressure, no script.
          </p>
        </div>
      </section>

      <section className="section-tight pt-0">
        <div className="container-site">
          <div className="grid gap-5 min-[700px]:grid-cols-2">
            <div className="bg-white rounded-card px-7 py-8 border border-cypress/[0.06]">
              <h3 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-gulf-rust mb-3">
                Phone
              </h3>
              <a
                href={PHONE_TEL}
                className="font-display font-bold text-cypress tracking-tight mb-2 block hover:text-gulf-rust transition-colors"
                style={{ fontSize: "clamp(1.5rem, 3vw, 1.85rem)", letterSpacing: "-0.02em" }}
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-mangrove text-[0.95rem]">
                Same person answers. Same person inspects.
              </p>
            </div>

            <div className="bg-white rounded-card px-7 py-8 border border-cypress/[0.06]">
              <h3 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-gulf-rust mb-3">
                Service
              </h3>
              <p
                className="font-display font-bold text-cypress tracking-tight mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 1.85rem)", letterSpacing: "-0.02em" }}
              >
                Mold &amp; Moisture
              </p>
              <p className="text-mangrove text-[0.95rem]">
                Florida Gulf Coast · Licensed &amp; insured
              </p>
            </div>

            <div className="bg-white rounded-card px-7 py-8 border border-cypress/[0.06]">
              <h3 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-gulf-rust mb-3">
                Hours
              </h3>
              <p
                className="font-display font-bold text-cypress tracking-tight mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 1.85rem)", letterSpacing: "-0.02em" }}
              >
                Call anytime
              </p>
              <p className="text-mangrove text-[0.95rem]">
                We’ll schedule an inspection that fits your week.
              </p>
            </div>

            <div className="bg-white rounded-card px-7 py-8 border border-cypress/[0.06]">
              <h3 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-gulf-rust mb-3">
                About us
              </h3>
              <p
                className="font-display font-bold text-cypress tracking-tight mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 1.85rem)", letterSpacing: "-0.02em" }}
              >
                Est. 2018
              </p>
              <p className="text-mangrove text-[0.95rem]">
                Veteran owned · People first. Property second.
              </p>
            </div>
          </div>

          <div className="mt-5 bg-cypress text-linen rounded-card px-8 py-10 flex flex-wrap items-center justify-between gap-6">
            <h2
              className="font-display font-bold tracking-tight max-w-[18ch] leading-snug"
              style={{ fontSize: "clamp(1.5rem, 3vw, 1.85rem)", letterSpacing: "-0.02em" }}
            >
              Ready when you are.
            </h2>
            <a href={PHONE_TEL} className="btn btn-linen">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="belief">
        <div className="container-site grid gap-10 items-center min-[800px]:grid-cols-[1fr_auto] min-[800px]:gap-16">
          <div>
            <p className="belief-eyebrow">Before you call</p>
            <h2>What helps us help you</h2>
            <p className="belief-body">
              Where you notice the smell or stain. How long it’s been there. Any recent leaks,
              storms, or AC issues. That’s enough to start — we’ll take it from there.
            </p>
            <p className="belief-signoff">Honest Restoration · Est. 2018 · Veteran owned</p>
          </div>
          <div className="mask-disc mask-disc-lg" aria-hidden="true">
            <Image src="/honest-mask.png" alt="" width={160} height={160} />
          </div>
        </div>
      </section>
    </>
  );
}
