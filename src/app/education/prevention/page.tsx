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
  EPA_CLEANUP,
  MUST_LINKS,
  UF_IFAS_MOISTURE,
} from "@/lib/sources";

export const metadata: Metadata = {
  title: "How to Prevent Mold in Florida Gulf Coast Homes",
  description:
    "Practical ways to prevent mold in Florida humidity—keep indoor RH below 60%, manage AC condensate, and know when a dehumidifier helps. Calm guidance for Walton & surrounding.",
};

export default function PreventionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Education · 04</p>
          <h1 className="!max-w-[22ch]">How to Prevent Mold in Florida Gulf Coast Homes</h1>
          <p>
            Moisture habits that stay calm — for Walton County &amp; surrounding homeowners. Deeper
            climate context lives on Florida humidity.
          </p>
        </div>
      </section>

      <article className="section-tight pt-0 article-wrap">
        <div className="container-site">
          <div className="article">
            <p>
              Prevention here is mostly moisture management — not panic shopping. Spores are normal;
              growth needs damp materials and time. This page is the practical checklist for Gulf Coast
              homes. For why outdoor humidity fights you, see{" "}
              <Link href="/education/florida-humidity">Florida humidity</Link>. For what mold actually
              is, see <Link href="/education/what-mold-is">what mold is</Link>.
            </p>

            <h2>Prevention starts with moisture, not panic</h2>
            <p>
              The{" "}
              <a
                href="https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home"
                rel="noopener noreferrer"
                target="_blank"
              >
                EPA
              </a>{" "}
              puts it in eight words: &ldquo;The key to mold control is moisture control.&rdquo; The{" "}
              <a
                href="https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/air-quality/mold/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Florida Department of Health
              </a>{" "}
              agrees — keep humidity down, fix leaks, dry wet spots promptly. You don&apos;t need to
              sterilize the air. You need materials that don&apos;t stay wet.
            </p>

            <h2>Keep indoor humidity in a sensible range</h2>
            <p>
              Public targets cluster around keeping indoor relative humidity <strong>below 60%</strong>.
              The EPA suggests ideally 30–50% when possible. Florida DOH emphasizes below 60% with AC
              or a dehumidifier, and notes that below 50% is better for mold and dust mites. Put a
              simple hygrometer in a main living space — and optionally a damp closet — for a few days,
              including mild or rainy weather. Numbers beat &ldquo;it feels muggy.&rdquo;
            </p>

            <h3>Measure, don&apos;t guess</h3>
            <p>
              Closets and baths can run higher than the living room. Shoulder seasons, when the AC
              short-cycles, are when indoor RH often creeps up. That pattern is climate, not a
              personal failing — see the humidity sibling for more.
            </p>

            <aside className="aeo-block" data-aeo="prevent-mold">
              <p className="aeo-q">How do I prevent mold in Florida humidity?</p>
              <p>
                Focus on moisture, not fear. Keep indoor relative humidity below 60% when you can
                (many public guides also suggest aiming lower, roughly 30–50%). Fix leaks promptly, dry
                wet materials within 24–48 hours, vent bathrooms and kitchens to the outside, and keep
                air-conditioner condensate pans and drain lines clear. If the house stays muggy even
                with the AC running, a dehumidifier can help remove extra moisture. Spores are normal;
                damp materials that stay wet are what invite growth.
              </p>
            </aside>

            <aside className="aeo-block" data-aeo="below-60">
              <p className="aeo-q">Should indoor humidity stay below 60% in Florida homes?</p>
              <p>
                Yes — public guidance from the EPA and the Florida Department of Health uses keeping
                indoor relative humidity below 60% as a practical target for limiting indoor mold
                growth, with lower levels often better. Florida&apos;s outdoor air is frequently wetter
                than that, so the useful measure is what your hygrometer shows <em>inside</em>. For
                more on how Gulf Coast humidity behaves in homes, see Honest Restoration&apos;s{" "}
                <Link href="/education/florida-humidity">Florida humidity</Link> page; use this
                prevention page for the daily habits that keep moisture down.
              </p>
            </aside>

            <h2>Everyday habits that keep a Florida home drier</h2>
            <ul className="check-list">
              <li>Fix roof, plumbing, window, and AC drain leaks promptly</li>
              <li>
                Dry spills and wet materials within 24–48 hours when possible (EPA); Florida DOH also
                stresses cleaning and drying spills within about 24 hours
              </li>
              <li>Run bath and kitchen exhaust that vents outdoors; vent dryers outdoors</li>
              <li>Give closets a little airflow — don&apos;t pack them wall-to-wall against damp exterior walls</li>
              <li>Grade soil away from the foundation; keep sprinklers from soaking walls</li>
              <li>
                Avoid opening windows when outdoor air is wetter than indoors — common on the Gulf
                Coast
              </li>
            </ul>

            <h2>AC condensate, drain pans, and moisture you don&apos;t see</h2>
            <p>
              Cooling makes condensate. Clogged drip pans, slow drain lines, or standing water near an
              air handler can feed mold quietly. The EPA recommends keeping drip pans clean and drains
              flowing. A quick visual check of the pan and drain line is a homeowner habit — not an HVAC
              sales pitch. If the system itself is flooding or you suspect growth in the equipment, get
              qualified help rather than guessing.
            </p>

            <h3>Fan ON vs AUTO (short note)</h3>
            <p>
              In humid climates, running the fan continuously can sometimes re-evaporate moisture off a
              wet coil back into the house. Fan AUTO lets the coil drain between cycles. Treat that as
              a common homeowner tip, not a guarantee — and not a redesign of your HVAC system.
            </p>

            <h2>When a dehumidifier helps prevent mold</h2>
            <p>
              Air conditioning removes moisture as a byproduct of cooling. Sometimes RH stays high
              anyway — mild or rainy stretches, short cycles, or rooms that don&apos;t cool long enough
              to dry out. The EPA says to use AC and/or a dehumidifier when needed. A dehumidifier is a
              tool for lowering relative humidity — not a substitute for repairing a leak or clearing a
              clogged condensate drain. Fix leaks first; then decide if measured RH still needs help.
            </p>

            <aside className="aeo-block" data-aeo="dehumidifier">
              <p className="aeo-q">Does a dehumidifier help prevent mold?</p>
              <p>
                It can, when indoor humidity stays high despite a working air conditioner and basic
                moisture habits. Air conditioning removes some moisture while it cools, but it is not
                always enough in humid weather or mild seasons when the system short-cycles. A
                dehumidifier is a tool for lowering relative humidity — not a substitute for repairing
                a leak or clearing a clogged condensate drain. If you already have significant or
                recurring mold growth, address the moisture source and consider professional help rather
                than relying on a machine alone.
              </p>
            </aside>

            <h2>If moisture already won — prevention meets cleanup</h2>
            <p>
              If you already see growth or smell musty dampness: clean small hard-surface spots safely;
              fix the moisture; if large, hidden, HVAC-related, or recurring, see{" "}
              <Link href="/education/how-to-spot">how to spot</Link> and{" "}
              <Link href="/education/diy-vs-pro">DIY vs pro</Link>. Professional mold remediation
              follows industry procedures summarized as assess moisture → contain → remove → dry →
              verify — see the public{" "}
              <a href="https://iicrc.org/s520/" rel="noopener noreferrer" target="_blank">
                IICRC S520
              </a>{" "}
              page (we do not reproduce the paid standard) and{" "}
              <Link href="/education/process">our process</Link>.
            </p>

            <h2>What to do if you&apos;re unsure</h2>
            <p>
              Measure RH. Find dampness. Dry what you can. If you&apos;re stuck, call. We&apos;ll tell
              you straight. Text or call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>. Soft path:{" "}
              <a href={MOLD_REMEDIATION_URL} rel="noopener noreferrer">
                mold remediation
              </a>
              .
            </p>

            <p className="soft-cta-line">
              <strong>Call. We&apos;ll tell you straight.</strong> ·{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </p>
            <p className="tagline-line">{TAGLINE} · Est. 2018 · Veteran owned</p>

            <EduSiblings current="/education/prevention" />

            <Sources sources={[...MUST_LINKS, EPA_CLEANUP, UF_IFAS_MOISTURE]} />

            <p className="disclaimer">
              This page is education, not medical advice. Health symptoms → talk with a doctor. A
              remediator addresses the house — not a medical diagnosis.
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
