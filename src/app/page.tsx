import Image from "next/image";
import Link from "next/link";
import {
  HOME_EDU_CARDS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROCESS_STEPS,
  TRUST_ITEMS,
} from "@/lib/constants";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 min-[900px]:pt-[5.5rem] min-[900px]:pb-24">
        <div className="container-site grid gap-12 items-center min-[900px]:grid-cols-[1.15fr_0.85fr] min-[900px]:gap-16">
          <div>
            <p className="eyebrow">Mold &amp; moisture · Florida Gulf Coast</p>
            <h1 className="font-display font-bold text-cypress mb-5 max-w-[12.5ch]" style={{ fontSize: "clamp(3.15rem, 8.5vw, 5.35rem)", letterSpacing: "-0.04em", lineHeight: 1.02 }}>
              Finally, a mold specialist you can trust.
            </h1>
            <p className="text-[clamp(1.05rem,2vw,1.25rem)] text-shade/85 max-w-[32ch] leading-snug mb-8">
              The guy on the phone will be the one to inspect your home.
            </p>
            <div className="flex flex-wrap gap-3 mb-7">
              <a href={PHONE_TEL} className="btn btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <a href="#process" className="btn btn-secondary">
                How we work
              </a>
            </div>
            <p className="text-[0.85rem] text-mangrove tracking-wide">
              Est. 2018 · Veteran owned · People first. Property second.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="bg-linen border border-cypress/[0.08] rounded-[32px] p-10 w-full max-w-[380px] flex items-center justify-center shadow-mask">
              <Image
                src="/honest-mask.png"
                alt="Honest Restoration mascot — friendly respirator mask"
                width={260}
                height={260}
                className="w-[min(260px,70vw)] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <div className="border-y border-cypress/10 py-[1.35rem] bg-white/35">
        <div className="container-site">
          <ul className="flex flex-wrap justify-center gap-y-2.5 gap-x-7 text-center max-[640px]:gap-x-5">
            {TRUST_ITEMS.map((item, i) => (
              <li
                key={item}
                className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase text-cypress/75"
              >
                {i > 0 && (
                  <span className="mr-7 opacity-35 font-normal max-[640px]:hidden" aria-hidden="true">
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Education */}
      <section className="section" id="learn">
        <div className="container-site">
          <div className="section-head">
            <h2>Learn mold. Skip the panic.</h2>
            <p>Short answers. Straight talk.</p>
          </div>
          <div className="grid gap-[1.15rem] grid-cols-1 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3">
            {HOME_EDU_CARDS.map((card) => (
              <Link
                key={card.num}
                href={card.href}
                className="card block no-underline hover:no-underline"
              >
                <p className="card-num">{card.num}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/education" className="btn btn-secondary">
              More education →
            </Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white/45" id="process">
        <div className="container-site">
          <div className="section-head">
            <h2>How we work</h2>
            <p>Clear steps. No theatrics.</p>
          </div>
          <div className="grid gap-4 min-[700px]:grid-cols-5 min-[700px]:gap-3.5">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step}
                className="bg-linen border border-cypress/[0.08] rounded-card px-[1.15rem] py-6"
              >
                <p className="text-[0.75rem] font-bold tracking-[0.08em] text-gulf-rust mb-3">
                  {i + 1}
                </p>
                <h3 className="font-display text-[1.05rem] font-bold text-cypress tracking-tight leading-snug">
                  {step}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 gap-x-6">
            <span className="font-semibold text-cypress text-[1.1rem]">Ready when you are</span>
            <a href={PHONE_TEL} className="btn btn-primary">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Belief */}
      <section className="belief">
        <div className="container-site grid gap-10 items-center min-[800px]:grid-cols-[1fr_auto] min-[800px]:gap-16">
          <div>
            <p className="belief-eyebrow">Our belief</p>
            <h2>People first. Property second.</h2>
            <p className="belief-body">
              Your home is where you sleep, raise kids, and catch your breath. We treat mold and
              moisture like a problem to solve — not a scare to sell. Clear words. Solid work. No
              theatrics.
            </p>
            <p className="belief-signoff">Honest Restoration · Est. 2018 · Veteran owned</p>
          </div>
          <div className="mask-disc mask-disc-lg" aria-hidden="true">
            <Image src="/honest-mask.png" alt="" width={160} height={160} />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="close-cta">
        <div className="container-site">
          <h2>Something feel off in the house?</h2>
          <p>Call. We’ll tell you straight.</p>
          <a href={PHONE_TEL} className="btn btn-primary">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
