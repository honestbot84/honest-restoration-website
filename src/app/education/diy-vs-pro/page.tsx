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
  CDC_CLEANUP,
  EPA_CLEANUP,
  MUST_LINKS,
} from "@/lib/sources";

export const metadata: Metadata = {
  title: "DIY Mold Cleanup vs Calling a Pro: A Florida Homeowner Guide",
  description:
    "Under about 10 square feet on a hard surface, DIY may be fine. Larger, hidden, or moisture-driven growth? Calm Florida guidance — assessor vs remediator explained.",
};

const DIY_SOURCES = [
  ...MUST_LINKS,
  EPA_CLEANUP,
  CDC_CLEANUP,
  {
    href: "https://www2.myfloridalicense.com/mold-related-services/",
    title: "Florida DBPR — Mold-Related Services",
    note: "verify licenses; separate assessor vs remediator",
  },
];

export default function DiyVsProPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Education · 03</p>
          <h1 className="!max-w-[22ch]">
            DIY Mold Cleanup vs Calling a Pro: A Florida Homeowner Guide
          </h1>
          <p>
            Small surface spots are common here. Size, material, moisture, and health context decide
            the next step.
          </p>
        </div>
      </section>

      <article className="section-tight pt-0 article-wrap">
        <div className="container-site">
          <div className="article">
            <p>
              In Florida humidity homes, small surface mold is ordinary. The useful question isn&apos;t
              &ldquo;is mold evil?&rdquo; — it&apos;s whether this patch is a wipe-and-dry job or a
              moisture problem that needs a remediator. This guide is for Walton County &amp;
              surrounding homeowners who want straight talk before they buy another bottle of cleaner
              or schedule a visit.
            </p>

            <h2>When DIY mold cleanup is usually reasonable</h2>
            <p>
              The{" "}
              <a
                href="https://www.epa.gov/mold/mold-cleanup-your-home"
                rel="noopener noreferrer"
                target="_blank"
              >
                EPA
              </a>{" "}
              says that if the moldy area is less than about 10 square feet (roughly a 3 ft × 3 ft
              patch), in most cases a healthy adult can handle the job following their tips. Prefer
              hard, nonporous surfaces; find and fix the moisture source; scrub with detergent and
              water; dry thoroughly. Use basic protection — gloves, goggles, and consider an N95 as
              the EPA describes. People with asthma, mold allergy, or immune concerns should not do
              mold cleanup — the{" "}
              <a
                href="https://www.cdc.gov/mold-health/about/clean-up.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                CDC
              </a>{" "}
              and Florida DOH are clear on that. This is public guidance, not a promise that every
              under-10 patch is DIY-safe.
            </p>

            <h3>What &ldquo;about 10 square feet&rdquo; is (and isn&apos;t)</h3>
            <p>
              It&apos;s a size cue from EPA homeowner guidance — not a hard law, and not a guarantee.
              Florida&apos;s mold-related licensing definitions also use greater than 10 square feet
              when licensed assessment or remediation is offered to the public (verify current statute
              wording via DBPR / Online Sunshine). Homeowners may address mold on their own property
              under public exemptions — we&apos;re not giving legal advice; check official sources if
              that matters for your situation.
            </p>

            <aside className="aeo-block" data-aeo="should-i-diy">
              <p className="aeo-q">Should I remove mold myself in Florida?</p>
              <p>
                Often yes, if the moldy area is small — generally less than about 10 square feet — on a
                hard, nonporous surface, the moisture problem is fixed, and you&apos;re able to clean
                carefully with basic protection. Public EPA and Florida Department of Health guidance
                uses that size cue for homeowner cleanup. If growth is larger, in drywall or
                insulation, keeps coming back, follows sewage or major water damage, involves the HVAC
                system, or anyone in the home has health concerns about doing the work, it&apos;s
                usually wiser to get a professional remediator involved.
              </p>
            </aside>

            <h2>When to hire a mold remediator in Florida</h2>
            <ul className="check-list">
              <li>Growth larger than about 10 square feet</li>
              <li>Lots of water damage or materials that stayed wet too long</li>
              <li>Porous materials — drywall, insulation, carpet and pad</li>
              <li>Hidden or recurring growth; musty smell without a clear surface source</li>
              <li>Sewage or contaminated water</li>
              <li>Suspected HVAC contamination</li>
              <li>Health concerns before cleanup — talk with a doctor first, then address the house</li>
            </ul>

            <h3>Moisture first — cleanup without drying fails</h3>
            <p>
              The EPA is blunt: if you clean up the mold but don&apos;t fix the water problem, the mold
              problem will most likely come back. Humidity, condensate, and leaks are the usual
              drivers here — see <Link href="/education/prevention">prevention</Link>.
            </p>

            <aside className="aeo-block" data-aeo="when-to-hire">
              <p className="aeo-q">When should I hire a mold remediator in Florida?</p>
              <p>
                Hire a remediator when the affected area is bigger than a small surface patch,
                materials are porous or hidden behind walls, moisture hasn&apos;t been controlled,
                growth returns after cleaning, or the water source was contaminated. In Florida, mold
                remediators are separately licensed from mold assessors through the Department of
                Business and Professional Regulation. A remediator focuses on removing and cleaning
                mold-contaminated materials; an assessor investigates and documents the problem. Honest
                Restoration works with assessors when independent assessment is the right step — and
                we&apos;ll tell you straight if a small DIY cleanup is enough.
              </p>
            </aside>

            <h2>Mold assessor vs remediator in Florida</h2>
            <p>
              Florida treats them as separate licensed roles. A <strong>mold assessor</strong>{" "}
              evaluates the building — inspection and, when appropriate, sampling — to understand where
              moisture and mold amplification are. A <strong>mold remediator</strong> performs the
              cleanup and removal work on mold-contaminated materials. Public rules generally keep the
              same provider from assessing a structure and then remediating it — or remediating and then
              assessing — within a 12-month window (verify current Fla. Stat. / DBPR guidance). Honest
              works with assessors when independent assessment is the right step. We do not invent
              license numbers on this page.
            </p>

            <h3>How to check a Florida license</h3>
            <p>
              Before you hire, verify at{" "}
              <a
                href="https://www2.myfloridalicense.com/mold-related-services/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Florida DBPR Mold-Related Services
              </a>
              . Prefer official DBPR pages over word-of-mouth claims.
            </p>

            <aside className="aeo-block" data-aeo="assessor-vs-remediator">
              <p className="aeo-q">What&apos;s the difference between a mold assessor and a remediator?</p>
              <p>
                Florida treats them as separate licensed roles. A mold assessor evaluates the building
                — inspection and, when appropriate, sampling — to understand where moisture and mold
                amplification are. A mold remediator performs the cleanup and removal work on
                mold-contaminated materials (generally defined in statute for areas greater than 10
                square feet when offered as a licensed service to the public). Public rules generally
                keep the same provider from assessing a structure and then remediating it — or
                remediating and then assessing — within a 12-month window. Verify current statute and
                DBPR guidance before you hire; Honest partners with assessors rather than blurring
                roles.
              </p>
            </aside>

            <h2>What professional remediation is aiming for</h2>
            <p>
              Industry procedures for professional mold remediation are framed for homeowners as:
              assess moisture → contain → remove → dry → verify. That maps to the public overview of{" "}
              <a href="https://iicrc.org/s520/" rel="noopener noreferrer" target="_blank">
                ANSI/IICRC S520
              </a>
              . This summary is not a substitute for the standard; we never paste the paid text. Walk
              through the craft on <Link href="/education/process">our process</Link>.
            </p>

            <h2>If you&apos;re unsure, ask a straight question</h2>
            <p>
              Still deciding? Note the size, the material (hard vs porous), whether moisture is fixed,
              and whether anyone in the home should avoid DIY cleanup. Then call. We&apos;ll tell you
              straight. Text or call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>. Also:{" "}
              <Link href="/education/how-to-spot">how to spot</Link>,{" "}
              <Link href="/education/what-mold-is">what mold is</Link>,{" "}
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

            <EduSiblings current="/education/diy-vs-pro" />

            <Sources sources={DIY_SOURCES} />

            <p className="disclaimer">
              This page is education, not medical, legal, or licensing advice. Verify current Florida
              statutes and DBPR rules before you hire. Health symptoms → talk with a doctor.
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
