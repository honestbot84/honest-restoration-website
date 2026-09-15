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
  MUST_LINKS,
} from "@/lib/sources";

export const metadata: Metadata = {
  title: "How to Spot Mold & Moisture Problems at Home",
  description:
    "Learn how to spot mold and moisture at home — musty smells, bathroom and closet clues, and signs dampness may be behind walls. Calm guidance for Walton County & surrounding homeowners.",
};

export default function HowToSpotPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Education · 02</p>
          <h1 className="!max-w-[22ch]">How to Spot Mold &amp; Moisture Problems at Home</h1>
          <p>
            Eyes, nose, and dampness clues — a calm checklist for Walton County &amp; surrounding
            homeowners.
          </p>
        </div>
      </section>

      <article className="section-tight pt-0 article-wrap">
        <div className="container-site">
          <div className="article">
            <p>
              You don&apos;t need panic or a lab kit to start. Most indoor mold problems show up as
              something you can see, smell, or connect to dampness. This page is a plain checklist for
              Florida Gulf Coast homes — what growth looks like, what a musty smell may mean, and which
              wall, bath, and closet clues matter. For the definition of mold itself, start with{" "}
              <Link href="/education/what-mold-is">what mold is</Link>.
            </p>

            <h2>Start with what you can see and smell</h2>
            <p>
              The{" "}
              <a
                href="https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/air-quality/mold/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Florida Department of Health
              </a>{" "}
              and the{" "}
              <a
                href="https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home"
                rel="noopener noreferrer"
                target="_blank"
              >
                EPA
              </a>{" "}
              both frame indoor mold as something you can usually see or smell. Look for staining or
              fuzzy growth on walls, ceilings, wood, or paper — it may look cottony, velvety, rough, or
              leathery, and it can be many colors. An earthy or musty odor counts even when you
              haven&apos;t found the patch yet.
            </p>

            <h3>What mold often looks like in bathrooms and closets</h3>
            <p>
              In bathrooms, spotting is common on grout, caulk, ceiling corners, behind the toilet, and
              under vanities — places where steam sits. In closets, watch exterior-wall closets, corners
              behind stored items, and spaces with poor airflow or damp shoes and laundry. Surface
              spotting in a steamy bath is common in Florida humidity; growth in a closed closet that
              never dries is a different moisture story.
            </p>

            <aside className="aeo-block" data-aeo="how-to-spot">
              <p className="aeo-q">How do I spot mold in a Florida home?</p>
              <p>
                Most indoor mold problems can be spotted with your eyes and nose. Look for staining or
                fuzzy growth on walls, ceilings, wood, or paper — it may look cottony, velvety, rough, or
                leathery and can be many colors. Pay attention to a persistent earthy or musty odor,
                especially in bathrooms, closets, or near the air conditioner. Then check for moisture
                clues: water stains, condensation, peeling paint, soft materials, or dampness under
                sinks. In Florida&apos;s humidity, those signs often appear before anything dramatic.
              </p>
            </aside>

            <h2>Musty smell vs humidity smell</h2>
            <p>
              High humidity can make air feel damp or stale. A mold-related musty smell is usually more
              earthy and often strongest in one room, closet, wall area, or near a vent. If the odor
              returns after you air the space out, or gets stronger when the AC runs, moisture may be
              feeding growth you can&apos;t see yet. Either way, the useful step is the same: find and
              reduce dampness. A simple humidity meter helps you watch indoor moisture — public
              guidance commonly aims to keep indoor relative humidity from staying too high (EPA: below
              60% when possible; Florida DOH: below 60%). Deeper climate context lives on{" "}
              <Link href="/education/florida-humidity">Florida humidity</Link>.
            </p>

            <h3>When the smell has no visible source</h3>
            <p>
              The EPA notes that mold can hide behind walls or wallpaper, under carpet and pad, around
              leaking pipes, inside ducts, or above ceilings after a roof leak. Those are places to
              consider — not a DIY demolition list. Note where the smell is strongest, whether it
              returns after cleaning or airing out, and whether it ties to a known wet event. If the
              odor keeps coming back with no clear surface source, it&apos;s reasonable to get a calm
              professional look.
            </p>

            <aside className="aeo-block" data-aeo="musty-vs-humidity">
              <p className="aeo-q">What does a musty smell mean — mold or humidity?</p>
              <p>
                High humidity can make air feel damp or stale. A mold-related musty smell is usually
                more earthy and often strongest in one room, closet, wall area, or near a vent. If the
                odor returns after you air the space out, or gets stronger when the AC runs, moisture
                may be feeding growth you can&apos;t see yet. Either way, the useful step is the same:
                find and reduce dampness. A simple humidity meter helps you watch indoor moisture;
                public guidance commonly aims to keep indoor humidity from staying too high (cite EPA
                and Florida DOH — below 60% when possible).
              </p>
            </aside>

            <h2>Signs of moisture (including behind walls)</h2>
            <p>
              You usually won&apos;t see inside a wall — you notice clues on the surface. Watch for
              bubbling or peeling paint, discoloration, soft or warped drywall or baseboards, water
              stains, condensation nearby, or a musty smell that seems to come from a wall. A past leak
              or a chronically humid closet on an exterior wall raises the chances. Don&apos;t tear
              open walls on a guess.
            </p>

            <h3>Quick look list</h3>
            <ul className="check-list">
              <li>Under sinks and around toilets</li>
              <li>Shower and tub surrounds, ceiling corners</li>
              <li>Windows and exterior-wall closets</li>
              <li>AC closet / drain pan area (visual only, safely)</li>
              <li>Attic access if odor seems to rise</li>
              <li>Any known past leak area</li>
            </ul>

            <aside className="aeo-block" data-aeo="moisture-behind-walls">
              <p className="aeo-q">What are signs of moisture behind walls?</p>
              <p>
                You usually won&apos;t see inside the wall — you notice clues on the surface. Watch for
                bubbling or peeling paint, discoloration, soft or warped drywall or baseboards, water
                stains, condensation nearby, or a musty smell that seems to come from a wall or outlet
                area. A past leak or chronically humid closet on an exterior wall raises the chances.
                Don&apos;t tear open walls on a guess; note what you see and smell, dry what you can
                safely, and get a professional look if the clues persist or spread.
              </p>
            </aside>

            <h2>What to do once you&apos;ve spotted clues</h2>
            <ol className="step-list">
              <li>
                <strong>Note it.</strong> Location, smell, and any dampness you can see or feel.
              </li>
              <li>
                <strong>Dry what you can safely.</strong> The EPA stresses drying water-damaged areas
                and items within 24–48 hours when possible; Florida DOH also stresses cleaning and
                drying spills promptly.
              </li>
              <li>
                <strong>Small hard-surface spots</strong> may be DIY-cleanable — see{" "}
                <Link href="/education/diy-vs-pro">DIY vs pro</Link> and the{" "}
                <a
                  href="https://www.epa.gov/mold/mold-cleanup-your-home"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  EPA Mold Cleanup
                </a>{" "}
                page.
              </li>
              <li>
                <strong>Large, hidden, recurring, HVAC-related, or leak-tied issues</strong> — pause
                the guesswork and get a professional look.
              </li>
            </ol>

            <h3>How professionals think about mold work</h3>
            <p>
              For larger jobs, professional mold remediation follows industry procedures summarized
              for homeowners as: assess moisture → contain → remove → dry → verify. That framing
              aligns with the public overview of{" "}
              <a href="https://iicrc.org/s520/" rel="noopener noreferrer" target="_blank">
                ANSI/IICRC S520
              </a>
              . It is a summary for homeowners, not a substitute for the standard — and we do not
              reproduce the paid text. More detail on{" "}
              <Link href="/education/process">our process</Link>.
            </p>

            <h2>If you&apos;re still unsure</h2>
            <p>
              Call. We&apos;ll tell you straight. Text or call{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>. Soft next steps:{" "}
              <a href={MOLD_REMEDIATION_URL} rel="noopener noreferrer">
                mold remediation
              </a>
              , <Link href="/education/prevention">prevention</Link>, or the{" "}
              <Link href="/education">education hub</Link>.
            </p>

            <p className="soft-cta-line">
              <strong>Call. We&apos;ll tell you straight.</strong> ·{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </p>
            <p className="tagline-line">{TAGLINE} · Est. 2018 · Veteran owned</p>

            <EduSiblings current="/education/how-to-spot" />

            <Sources sources={[...MUST_LINKS, EPA_CLEANUP, CDC_MOLD]} />

            <p className="disclaimer">
              This page is education, not medical advice. If you have health symptoms, talk with a
              doctor. A remediator addresses the house — not a medical diagnosis.
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
