import type { Metadata } from "next";
import Link from "next/link";
import EduSiblings from "@/components/education/EduSiblings";
import Sources from "@/components/education/Sources";
import {
  MOLD_REMEDIATION_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TAGLINE,
} from "@/lib/constants";
import {
  CDC_MOLD,
  MUST_LINKS,
  UF_IFAS_MOISTURE,
} from "@/lib/sources";

export const metadata: Metadata = {
  title: "What Mold Is (and Isn't) in a Florida Gulf Coast Home",
  description:
    "Mold spores are normal. Growing mold needs moisture. Calm, plain-language facts for Walton & surrounding Gulf Coast homeowners — no scare tactics.",
};

export default function WhatMoldIsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Education · 01</p>
          <h1 className="!max-w-[22ch]">
            What Mold Is (and Isn&apos;t) in a Florida Gulf Coast Home
          </h1>
          <p>Calm facts about spores, moisture, and growth — so you can decide without panic.</p>
        </div>
      </section>

      <article className="section-tight pt-0 article-wrap">
        <div className="container-site">
          <div className="article">
            <p>
              Mold is all around you. Outdoors, indoors, in almost every home — including well-kept
              ones on the Florida Gulf Coast. That sounds alarming until you separate{" "}
              <em>spores in the air</em> from <em>mold growing on damp materials</em>. Spores are
              normal. Growth needs moisture. This page is the calm version of that story for Walton
              County &amp; surrounding homeowners: what mold actually is, what it needs here, what the
              myths get wrong, and what to do if you&apos;re unsure.
            </p>

            <h2>What mold actually is</h2>
            <p>
              Mold is a fungus. It reproduces with tiny airborne spores. Those spores land on
              surfaces every day. Most of the time nothing happens — there&apos;s nothing wet enough
              for them to colonize. When materials stay damp, spores can grow into visible or musty
              indoor mold. The{" "}
              <a
                href="https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home"
                rel="noopener noreferrer"
                target="_blank"
              >
                EPA&apos;s Brief Guide to Mold, Moisture and Your Home
              </a>{" "}
              puts it plainly: the key to mold control is moisture control.
            </p>

            <h3>Spores are normal — growth is the issue</h3>
            <p>
              Public health guidance from the{" "}
              <a
                href="https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/air-quality/mold/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Florida Department of Health
              </a>{" "}
              and the EPA treats outdoor and indoor background spores as part of everyday air. It is
              not realistic — or necessary — to eliminate every spore. The practical problem is indoor
              growth fed by moisture: leaks, condensate, spills that didn&apos;t dry, or rooms that
              stay damp. Fix the wet, then the growth. Cleaning a stain without drying the source is a
              temporary win — water tends to come back.
            </p>

            <aside className="aeo-block" data-aeo="what-is-mold">
              <p className="aeo-q">What is mold in a Florida home?</p>
              <p>
                Mold is a fungus that reproduces with tiny airborne spores. Those spores are normal
                indoors and outdoors. In a Florida Gulf Coast home, mold becomes a problem when spores
                land on damp materials — drywall, wood, paper, fabric, or dust — and stay wet long
                enough to grow. Warmth and high humidity make that easier here, which is why moisture
                control matters more than trying to &ldquo;eliminate&rdquo; every spore.
              </p>
            </aside>

            <h2>What mold needs to grow in a Florida home</h2>
            <p>
              Growth usually needs three things at once: moisture, something organic to feed on, and
              time. Everyday &ldquo;food&rdquo; is already in the house — drywall paper, wood, dust,
              fabric. Warmth helps. On the Gulf Coast, lasting dampness is the lever you can actually
              pull. Common moisture pathways here include bathroom steam, AC condensate or drain
              issues, condensation on cold surfaces, plumbing leaks, undried wet spots, closed
              closets, and humid outdoor air finding its way indoors.
            </p>

            <h3>Humidity isn&apos;t the same as a mold emergency</h3>
            <p>
              High outdoor humidity is normal here. That doesn&apos;t mean every humid day is a
              crisis. What matters is whether indoor surfaces and materials stay wet — or relative
              humidity indoors stays high enough that condensation and slow drying become routine. The
              EPA suggests keeping indoor humidity below 60 percent when possible (ideally 30–50%);
              Florida DOH likewise emphasizes keeping humidity below 60% with AC or a dehumidifier.
              For climate depth, see{" "}
              <Link href="/education/florida-humidity">Florida humidity</Link>; for daily habits, see{" "}
              <Link href="/education/prevention">prevention</Link>.
            </p>

            <h2>Is mold always dangerous?</h2>
            <p>
              No — and also don&apos;t ignore growth. Background spores are not the same as a damp
              closet full of growth. People vary in how they react. Some notice irritation more than
              others. Florida DOH frames the worry question as &ldquo;yes and no&rdquo;: spores are
              normal; growing mold indoors can raise exposure and damage materials. Color alone
              doesn&apos;t diagnose a &ldquo;toxic&rdquo; problem — headlines often outrun the science
              homeowners need. If you have health symptoms, talk with a doctor. A remediator addresses
              the house, not a medical diagnosis.
            </p>

            <h3>Color myths</h3>
            <p>
              Black, green, white, or orange stains don&apos;t tell you a medical story by themselves.
              What they do signal is: something has been damp enough for fungi to grow. You don&apos;t
              need the species name before cleanup. The useful next step is finding and stopping the
              moisture, then cleaning or removing affected materials as appropriate — not guessing
              from color charts.
            </p>

            <aside className="aeo-block" data-aeo="always-dangerous">
              <p className="aeo-q">Is mold always dangerous?</p>
              <p>
                No. Background mold spores are part of everyday air. Visible or musty indoor growth is
                different: it can raise exposure and may irritate people who are sensitive, and it can
                damage building materials if moisture continues. How someone reacts varies. Public
                health guidance is to fix the moisture and remove indoor growth promptly — not to
                assume a rare &ldquo;toxic&rdquo; diagnosis from color alone. If you have health
                symptoms, talk with a doctor; a remediator addresses the house, not a medical
                diagnosis.
              </p>
            </aside>

            <h2>Mold vs mildew in Florida humidity</h2>
            <p>
              Homeowners often say &ldquo;mildew&rdquo; for flat, powdery surface growth (shower
              grout, a windowsill) and &ldquo;mold&rdquo; for thicker or deeper growth. Both are
              fungi. In Florida humidity, surface growth in damp rooms is common. The better question
              is whether moisture is ongoing — and whether growth sits on a hard surface or has moved
              into porous materials.
            </p>

            <h3>Surface spot vs moisture problem</h3>
            <p>
              Small surface spots on hard, cleanable materials can often be cleaned and dried. If
              growth returns, spreads, hides behind walls or under flooring, or follows a leak, treat
              it as a moisture problem that may need a closer look. See{" "}
              <Link href="/education/diy-vs-pro">DIY vs pro</Link> and{" "}
              <Link href="/education/how-to-spot">how to spot it</Link>.
            </p>

            <aside className="aeo-block" data-aeo="mold-vs-mildew">
              <p className="aeo-q">Mold vs mildew in Florida humidity?</p>
              <p>
                Homeowners usually call flat, powdery surface growth &ldquo;mildew&rdquo; (think
                shower grout or windowsills) and thicker or deeper growth &ldquo;mold.&rdquo; Both are
                fungi. In Florida&apos;s humidity, surface growth is common in damp rooms, but the
                useful question is whether moisture is ongoing and whether growth is only on a hard
                surface or into porous materials. Clean and dry small surface spots; if growth returns,
                spreads, hides behind walls, or follows a leak, treat it as a moisture problem that may
                need a professional look.
              </p>
            </aside>

            <h2>What mold isn&apos;t</h2>
            <ul className="myth-list">
              <li>
                <strong>Not proof you failed as a homeowner.</strong> Spores are normal; Gulf air
                holds water. Moisture pathways are the issue.
              </li>
              <li>
                <strong>Not diagnosed by color alone.</strong> &ldquo;Black mold&rdquo; headlines
                don&apos;t replace moisture finding.
              </li>
              <li>
                <strong>Not fixed by fragrance or fog alone.</strong> Smell cover-ups don&apos;t dry
                materials.
              </li>
              <li>
                <strong>Not the same as every musty smell.</strong> Musty can mean growth — or damp
                that hasn&apos;t colonized yet. Either way, find the wet.
              </li>
              <li>
                <strong>Not a reason to panic-clean without drying.</strong> Clean what you can; stop
                the moisture source.
              </li>
            </ul>

            <h2>What to do if you&apos;re unsure</h2>
            <p>
              Start simple: find what&apos;s wet, stop the source if you can, increase drying and
              airflow, and clean small surface spots on hard materials. If the smell returns, the area
              grows, soft drywall or flooring is involved, or you can&apos;t find the source — pause
              the guesswork. Professional mold remediation follows industry procedures summarized for
              homeowners as assess moisture → contain → remove → dry → verify (see{" "}
              <Link href="/education/process">our process</Link> and the public{" "}
              <a href="https://iicrc.org/s520/" rel="noopener noreferrer" target="_blank">
                IICRC S520 info page
              </a>
              — we do not reproduce the paid standard).
            </p>
            <p>
              Call. We&apos;ll tell you straight. Same calm face on the phone and in the house. Text
              or call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>. You can also read more on our{" "}
              <a href={MOLD_REMEDIATION_URL} rel="noopener noreferrer">
                mold remediation
              </a>{" "}
              page or browse the <Link href="/education">education hub</Link>.
            </p>

            <p className="soft-cta-line">
              <strong>Call. We&apos;ll tell you straight.</strong> ·{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </p>
            <p className="tagline-line">
              {TAGLINE} · Est. 2018 · Veteran owned
            </p>

            <EduSiblings current="/education/what-mold-is" />

            <Sources
              sources={[
                ...MUST_LINKS,
                CDC_MOLD,
                UF_IFAS_MOISTURE,
              ]}
            />

            <p className="disclaimer">
              This page is education, not medical advice. If you have health symptoms, talk with a
              doctor. A remediator addresses the house — not a medical diagnosis. Follow current EPA,
              CDC, and Florida DOH guidance linked above.
            </p>
          </div>
        </div>
      </article>

      <section className="close-cta">
        <div className="container-site">
          <h2>Call. We&apos;ll tell you straight.</h2>
          <p>Same person on the phone. Same person in your home.</p>
          <a href={PHONE_TEL} className="btn btn-primary">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
