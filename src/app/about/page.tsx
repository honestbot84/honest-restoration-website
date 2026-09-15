import type { Metadata } from "next";
import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Veteran-owned mold & moisture specialists. Est. 2018 on the Florida Gulf Coast. People first. Property second.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Who we are</p>
          <h1>Local. Veteran owned. Mold &amp; moisture only.</h1>
          <p>
            We built Honest Restoration to be the call you make when you want straight answers — not
            a scare.
          </p>
        </div>
      </section>

      <section className="section-tight pt-0">
        <div className="container-site grid gap-10 min-[800px]:grid-cols-[1.2fr_0.8fr] min-[800px]:items-start">
          <div>
            <p className="text-[1.1rem] leading-relaxed max-w-[42ch] text-shade/88 mb-5">
              The guy on the phone will be the one to inspect your home. We’re licensed, insured, and
              focused on one job: finding moisture, clearing mold, and leaving you clear on what
              happened.
            </p>
            <p className="text-[1.05rem] leading-relaxed max-w-[42ch] text-mangrove">
              No franchise script. No upsell theater. Education first, then solid work — so your home
              stays a place to sleep, raise kids, and catch your breath.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-card py-[1.35rem] px-4 text-center border border-cypress/[0.06]">
                <strong className="block font-display text-[1.35rem] font-bold text-cypress tracking-tight mb-1">
                  2018
                </strong>
                <span className="text-[0.8rem] text-mangrove font-medium">Established</span>
              </div>
              <div className="bg-white rounded-card py-[1.35rem] px-4 text-center border border-cypress/[0.06]">
                <strong className="block font-display text-[1.35rem] font-bold text-cypress tracking-tight mb-1">
                  Gulf
                </strong>
                <span className="text-[0.8rem] text-mangrove font-medium">Coast local</span>
              </div>
              <div className="bg-white rounded-card py-[1.35rem] px-4 text-center border border-cypress/[0.06]">
                <strong className="block font-display text-[1.35rem] font-bold text-cypress tracking-tight mb-1">
                  Vet
                </strong>
                <span className="text-[0.8rem] text-mangrove font-medium">Owned</span>
              </div>
            </div>
          </div>

          <aside className="bg-cypress text-linen rounded-card p-8 flex flex-col items-center text-center gap-5">
            <div className="mask-disc" aria-hidden="true">
              <Image src="/honest-mask.png" alt="" width={120} height={120} />
            </div>
            <p className="text-[1.05rem] leading-normal opacity-95">
              <strong>
                People first.
                <br />
                Property second.
              </strong>
            </p>
            <p className="text-[0.9rem] opacity-80">Clear words. Solid work. No theatrics.</p>
            <a href={PHONE_TEL} className="btn btn-linen btn-sm">
              {PHONE_DISPLAY}
            </a>
          </aside>
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="container-site">
          <div className="section-head">
            <h2>What we do</h2>
            <p>One focus. Done right.</p>
          </div>
          <div className="grid gap-[1.15rem] grid-cols-1 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3">
            <article className="card">
              <p className="card-num">Focus</p>
              <h3>Mold &amp; moisture</h3>
              <p>
                That’s the whole book. We don’t lead with storm or disinfection — we solve wet and
                growth.
              </p>
            </article>
            <article className="card">
              <p className="card-num">Approach</p>
              <h3>Education first</h3>
              <p>We teach enough so you can decide calmly. Panic sells; clarity lasts.</p>
            </article>
            <article className="card">
              <p className="card-num">Promise</p>
              <h3>Same person</h3>
              <p>
                Phone to inspection. You talk to the person who shows up — not a call center.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="close-cta">
        <div className="container-site">
          <h2>Want to talk it through?</h2>
          <p>Call. We’ll tell you straight.</p>
          <a href={PHONE_TEL} className="btn btn-primary">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
