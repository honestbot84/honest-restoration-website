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
  EPA_CLEANUP,
  IICRC_S520_STORE,
  MUST_LINKS,
} from "@/lib/sources";

export const metadata: Metadata = {
  title: "What Happens During Mold Remediation: Containment & Negative Air Explained",
  description:
    "What happens during mold remediation — containment, negative air pressure, and HEPA air scrubbing explained calmly for Walton & surrounding homeowners.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Education · 05</p>
          <h1 className="!max-w-[24ch]">
            What Happens During Mold Remediation: Containment &amp; Negative Air Explained
          </h1>
          <p>
            A calm walkthrough of the plastic, the air machines, and the moisture-first sequence —
            for Walton County &amp; surrounding homeowners.
          </p>
        </div>
      </section>

      <article className="section-tight pt-0 article-wrap">
        <div className="container-site">
          <div className="article">
            <p>
              If you&apos;ve heard &ldquo;containment&rdquo; and &ldquo;negative air&rdquo; and
              wondered what that looks like in a real house, this page is for you. Remediation is a
              controlled cleanup — not a scare pitch and not a promise to sterilize a home forever. The
              aim is to remove growth, protect clean rooms during the work, and leave materials dry
              enough that mold is less likely to return. Aligns with the EPA idea: clean up mold{" "}
              <em>and</em> fix the water problem.
            </p>

            <h2>The short version — what remediation is trying to do</h2>
            <p>
              Controlled removal of mold growth, plus moisture correction, while limiting spread to
              clean rooms. You&apos;ll often see plastic barriers and hear filtration equipment. That
              craft protects the rest of the house while work happens in the affected zone.
            </p>

            <h2>A homeowner-level process</h2>
            <p>
              Industry professional mold remediation is commonly framed for homeowners in five calm
              steps. This summary maps to publicly shared principles associated with{" "}
              <a href="https://iicrc.org/s520/" rel="noopener noreferrer" target="_blank">
                ANSI/IICRC S520
              </a>
              . It is <strong>not a substitute for the standard</strong>, and we do{" "}
              <strong>not</strong> paste or reconstruct the paid S-520 text.
            </p>
            <ol className="step-list">
              <li>
                <strong>Assess moisture</strong> — Find and stop the water or humidity source;
                understand what&apos;s wet and where growth is.
              </li>
              <li>
                <strong>Contain / limit spread</strong> — Isolate the work area; use negative air /
                HEPA as appropriate so disturbance doesn&apos;t travel.
              </li>
              <li>
                <strong>Remove</strong> — Clean hard surfaces; remove contaminated porous materials
                that can&apos;t be dried and cleaned (EPA / CDC homeowner framing).
              </li>
              <li>
                <strong>Dry</strong> — Dry structure and contents thoroughly so materials stop feeding
                growth.
              </li>
              <li>
                <strong>Verify</strong> — Moisture problem fixed; no visible mold or musty odor as a
                practical judgment — not a lab &ldquo;clearance number.&rdquo; Independent assessment
                when used. We don&apos;t invent clearance certificates or guarantees.
              </li>
            </ol>

            <h3>Why moisture comes first (and last)</h3>
            <p>
              If the leak, condensate, or humidity driver stays, growth returns. The EPA says it
              plainly: clean mold without fixing the water problem, and mold most likely comes back.
              Bridge to <Link href="/education/prevention">prevention</Link> and{" "}
              <Link href="/education/diy-vs-pro">DIY vs pro</Link>.
            </p>

            <aside className="aeo-block" data-aeo="what-happens">
              <p className="aeo-q">What happens during mold remediation?</p>
              <p>
                Professional mold remediation is a controlled cleanup: find and address the moisture,
                isolate the work area, remove materials that can&apos;t be salvaged, dry what&apos;s
                left, and clean salvageable surfaces while limiting spore spread to the rest of the
                home. Homeowners often see plastic containment and hear air-filtration equipment. The
                aim isn&apos;t to make a house spore-free forever — it&apos;s to remove growth, protect
                clean rooms during the work, and leave materials dry enough that mold is less likely to
                return.
              </p>
            </aside>

            <h2>What is containment?</h2>
            <p>
              Containment means sealing the mold work zone off from the rest of the house — usually with
              polyethylene sheeting, sealed vents or openings in that zone, and a controlled entry — so
              particles stirred during removal don&apos;t drift into bedrooms, hallways, or HVAC
              returns. It&apos;s a practical barrier system, not a scare tactic. Limited vs fuller
              setups scale with job size and complexity; we describe the idea in plain English and point
              readers to EPA public guidance rather than inventing square-footage rules as Honest
              policy.
            </p>

            <h3>What you&apos;ll see at home</h3>
            <p>
              Plastic walls, taped vents, bags of debris, careful entry and exit. Temporary
              inconvenience protects the parts of the home that aren&apos;t in the work area.
            </p>

            <aside className="aeo-block" data-aeo="containment">
              <p className="aeo-q">What is containment in mold remediation?</p>
              <p>
                Containment means sealing the mold work zone off from the rest of the house — usually
                with polyethylene sheeting, sealed vents or openings in that zone, and a controlled
                entry — so particles stirred during removal don&apos;t drift into bedrooms, hallways, or
                HVAC returns. It&apos;s a practical barrier system, not a scare tactic: the plastic is
                there to protect the parts of the home that aren&apos;t in the work area.
              </p>
            </aside>

            <h2>Negative air pressure, plain English</h2>
            <p>
              Negative air pressure means the contained work area is kept at a slightly lower air
              pressure than the rooms around it, so air tends to flow <em>into</em> the work zone
              instead of out. Crews often use a HEPA-filtered machine that pulls air from inside
              containment and exhausts filtered air outdoors when practical. If containment is working,
              plastic barriers may billow inward. This is education only — not a claim that we
              &ldquo;certify&rdquo; pressure.
            </p>

            <h3>HEPA air scrubbing explained</h3>
            <p>
              Scrubbing and negative air are related but not identical. Scrubbing focuses on filtering
              air in the zone (often recirculating). Negative air focuses on that inward airflow —
              typically by pulling and exhausting — to reduce spread. One machine doesn&apos;t always
              do both jobs the same way on every project.
            </p>

            <aside className="aeo-block" data-aeo="negative-air">
              <p className="aeo-q">What is negative air pressure in mold remediation?</p>
              <p>
                Negative air pressure means the contained work area is kept at a slightly lower air
                pressure than the rooms around it, so air tends to flow into the work zone instead of
                out. Crews often use a HEPA-filtered machine that pulls air from inside containment and
                exhausts filtered air outdoors when practical. If containment is working, plastic
                barriers may billow inward. HEPA air scrubbing is related but not identical — scrubbing
                focuses on filtering air in the zone; negative air focuses on that inward airflow to
                reduce spread.
              </p>
            </aside>

            <h2>How professionals think about standard of care (IICRC S-520)</h2>
            <p>
              ANSI/IICRC S520 is a procedural standard for professional mold remediation of structures
              and contents. The public IICRC page lists topic areas professionals study — inspection,
              structural / HVAC / contents remediation, post-remediation verification, and more. For
              homeowners, the useful frame remains:{" "}
              <strong>assess moisture → contain → remove → dry → verify</strong>. Read the official
              overview at{" "}
              <a href="https://iicrc.org/s520/" rel="noopener noreferrer" target="_blank">
                iicrc.org/s520
              </a>
              . Professionals who need the full document purchase it through IICRC channels. Mentioning
              S-520 here does not imply a specific certification claim — it explains the{" "}
              <em>idea</em> of a professional process.
            </p>

            <h2>What remediation is not</h2>
            <ul className="myth-list">
              <li>Not perfume or fragrance cover-ups</li>
              <li>Not painting or caulking over mold</li>
              <li>Not &ldquo;kill it from the air&rdquo; as a standalone fix</li>
              <li>Not storm-restoration theater on an education page</li>
            </ul>
            <p>Re-center: remove growth, control moisture, protect clean areas.</p>

            <h2>DIY vs this process</h2>
            <p>
              Small hard-surface spots are often DIY territory. Larger, hidden, recurring, or
              HVAC-tied work is where controlled remediation belongs. Calm escalation cues live on{" "}
              <Link href="/education/diy-vs-pro">DIY vs pro</Link> and the{" "}
              <a
                href="https://www.epa.gov/mold/mold-cleanup-your-home"
                rel="noopener noreferrer"
                target="_blank"
              >
                EPA cleanup page
              </a>
              .
            </p>

            <h2>If you&apos;re unsure — talk straight</h2>
            <p>
              Call. We&apos;ll tell you straight. Text or call{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>. Soft next step:{" "}
              <a href={MOLD_REMEDIATION_URL} rel="noopener noreferrer">
                mold remediation
              </a>
              . Also <Link href="/education/how-to-spot">how to spot</Link> and{" "}
              <Link href="/education">education hub</Link>.
            </p>

            <p className="soft-cta-line">
              <strong>Call. We&apos;ll tell you straight.</strong> ·{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </p>
            <p className="tagline-line">{TAGLINE} · Est. 2018 · Veteran owned</p>

            <EduSiblings current="/education/process" />

            <Sources sources={[...MUST_LINKS, EPA_CLEANUP, CDC_MOLD, IICRC_S520_STORE]} />

            <p className="disclaimer">
              This page is education, not medical advice and not a substitute for ANSI/IICRC S520.
              Containment and negative air language here is educational only — no certification
              implications. Health symptoms → talk with a doctor.
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
