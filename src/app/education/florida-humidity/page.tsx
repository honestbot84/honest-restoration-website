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
  title: "Florida Humidity & Indoor Moisture: What Gulf Coast Homes Need to Know",
  description:
    "Why Florida Gulf Coast homes stay damp indoors, what “below 60%” humidity means (EPA & Florida DOH), and how AC and dehumidifiers fit — calm education from Honest Restoration.",
};

const HUMIDITY_SOURCES = [
  ...MUST_LINKS,
  UF_IFAS_MOISTURE,
  CDC_MOLD,
  {
    href: "https://blogs.ifas.ufl.edu/sumterco/2022/10/04/check-indoor-humidity/",
    title: "UF/IFAS Extension — Check indoor humidity",
    note: "Florida climate / hygrometer tips",
  },
];

export default function FloridaHumidityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Education · 06</p>
          <h1 className="!max-w-[24ch]">
            Florida Humidity &amp; Indoor Moisture: What Gulf Coast Homes Need to Know
          </h1>
          <p>
            Why Gulf Coast air shows up indoors — calm RH targets, AC context, and when a
            dehumidifier helps. Checklist habits live on Prevention.
          </p>
        </div>
      </section>

      <article className="section-tight pt-0 article-wrap">
        <div className="container-site">
          <div className="article">
            <p>
              Gulf Coast air is wet by nature. Indoor mold risk rises when that moisture stays on
              materials long enough for growth. This page owns the climate and relative-humidity
              explanation for Walton County &amp; surrounding homeowners. The daily action checklist
              lives on <Link href="/education/prevention">prevention</Link> — we won&apos;t clone it
              here.
            </p>

            <h2>What &ldquo;indoor humidity below 60&rdquo; means</h2>
            <p>
              The{" "}
              <a
                href="https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home"
                rel="noopener noreferrer"
                target="_blank"
              >
                EPA Brief Guide
              </a>{" "}
              says: if possible, keep indoor humidity below 60 percent (ideally between 30 and 50
              percent) relative humidity — and that you can check with a simple humidity meter. The{" "}
              <a
                href="https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/air-quality/mold/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Florida Department of Health
              </a>{" "}
              likewise advises keeping humidity levels below 60%, notes that below 50% is better for
              controlling mold growth and dust mites, and recommends using an air conditioner or
              dehumidifier to get there.{" "}
              <a
                href="https://edis.ifas.ufl.edu/publication/FY922"
                rel="noopener noreferrer"
                target="_blank"
              >
                UF/IFAS EDIS
              </a>{" "}
              aligns with the same below-60% / ideally 30–50% framing for Florida homes.
            </p>

            <h3>Feelings vs numbers</h3>
            <p>
              Clammy isn&apos;t a thermometer reading. Put a hygrometer in a main living space — and
              optionally a damp closet — for a few days, including mild or rainy weather. The CDC often
              states indoor RH no higher than 50% as a prevention target; we attribute that to CDC when
              we use it, and keep EPA / Florida DOH wording clear when we cite them.
            </p>

            <aside className="aeo-block" data-aeo="rh-target">
              <p className="aeo-q">What indoor humidity should I keep in a Florida home?</p>
              <p>
                Public guidance from the U.S. EPA says that if possible you should keep indoor humidity
                below 60 percent relative humidity — ideally between 30 and 50 percent — and that you
                can check with a simple humidity meter. Florida Department of Health likewise advises
                keeping humidity levels below 60% and notes that below 50% is better for controlling
                both mold growth and dust mites. In a Gulf Coast home, measuring beats guessing from how
                clammy the air feels.
              </p>
            </aside>

            <h2>Why Gulf Coast homes collect indoor moisture</h2>
            <p>
              Outdoor humid air enters through doors, windows, and leaks. Showers, cooking, and laundry
              add more. Warm moist air hits cold vents, pipes, or exterior walls and condenses.
              Air-conditioner condensate and drain-pan issues add another moisture pathway. UF/IFAS
              Extension education notes that Florida outdoor relative humidity is often high — nights
              can reach 80–100% — so opening windows during humid weather can raise indoor RH rather
              than &ldquo;air out&rdquo; the house.
            </p>

            <h3>Humidity vs a leak</h3>
            <p>
              High RH can feed mold without a dramatic puddle. A hidden leak can look like
              &ldquo;just humidity.&rdquo; If one room stays wet or stains grow, treat it as a moisture
              investigation — see <Link href="/education/how-to-spot">how to spot</Link>.
            </p>

            <h2>Air conditioning and humidity</h2>
            <p>
              Your AC removes moisture when warm indoor air runs across a cold coil and condensate
              drains away — so it helps most when the system runs long enough to dehumidify, not only to
              cool. In mild or rainy Florida weather, short cycles can leave indoor relative humidity
              high even when the thermostat looks fine. Keep drip pans and drains clear (EPA tip). Fan
              AUTO vs continuous ON is a high-level homeowner note in humid climates — continuous fan
              can sometimes re-evaporate coil moisture; we&apos;re not redesigning your HVAC here.
            </p>

            <h3>If you still need a dehumidifier with central AC</h3>
            <p>
              Florida DOH advises: if you still need a dehumidifier while running central air, have the
              air-conditioning system examined for problems. That&apos;s a qualified HVAC look — Honest
              is a mold and moisture remediator, not your AC contractor. Measure RH, then decide.
            </p>

            <aside className="aeo-block" data-aeo="ac-humidity">
              <p className="aeo-q">Can my air conditioner control humidity enough?</p>
              <p>
                Your AC removes moisture when warm indoor air runs across a cold coil and condensate
                drains away — so it helps most when the system runs long enough to dehumidify, not only
                to cool. In mild or rainy Florida weather, short cycles can leave indoor relative
                humidity high even when the thermostat looks fine. Florida DOH advises using an air
                conditioner or a dehumidifier to keep indoor humidity below 60%, and if you still need a
                dehumidifier with central AC, have the air conditioning system examined for problems.
              </p>
            </aside>

            <h2>Dehumidifiers in a Florida home</h2>
            <p>
              Use measured relative humidity as the guide. If readings stay above about 60% after normal
              AC use — especially overnight or in damp rooms — a dehumidifier can help pull moisture
              without overcooling the house. Portable vs whole-home are options at a concept level;
              empty or drain as the manufacturer directs. A dehumidifier does not replace drying wet
              materials or fixing leaks. For the step-by-step habit list, see{" "}
              <Link href="/education/prevention">prevention</Link>.
            </p>

            <aside className="aeo-block" data-aeo="when-dehumidifier">
              <p className="aeo-q">When should I use a dehumidifier in a Florida home?</p>
              <p>
                Use measured relative humidity as the guide. If readings stay above about 60% after
                normal AC use — especially overnight or in damp rooms — a dehumidifier can help pull
                moisture without overcooling the house. Fix leaks and drainage issues first; a
                dehumidifier does not replace drying wet materials or addressing mold that has already
                grown. For a step-by-step home checklist, see Honest&apos;s{" "}
                <Link href="/education/prevention">prevention guide</Link>; if growth is already
                present, ask about a professional look.
              </p>
            </aside>

            <h2>When humidity control isn&apos;t enough</h2>
            <p>
              If growth is already visible, musty and spreading, HVAC-related, or materials stayed wet
              too long — moisture control alone doesn&apos;t remove established mold. The EPA
              recommends drying water-damaged areas within 24–48 hours when possible; Florida DOH often
              stresses about 24 hours for spills. When professional remediation is needed, industry
              procedures are described in the public overview of{" "}
              <a href="https://iicrc.org/s520/" rel="noopener noreferrer" target="_blank">
                ANSI/IICRC S520
              </a>{" "}
              (summary and link only — we do not paste the paid standard). Soft service path:{" "}
              <a href={MOLD_REMEDIATION_URL} rel="noopener noreferrer">
                mold remediation
              </a>
              .
            </p>

            <h2>What to do next</h2>
            <ol className="step-list">
              <li>
                <strong>Measure RH</strong> with a simple humidity meter.
              </li>
              <li>
                <strong>Read the prevention checklist</strong> at{" "}
                <Link href="/education/prevention">/education/prevention</Link>.
              </li>
              <li>
                <strong>If you&apos;re unsure or growth is present</strong> — Call. We&apos;ll tell you
                straight. <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>.
              </li>
            </ol>
            <p>
              Also useful: <Link href="/education/what-mold-is">what mold is</Link>,{" "}
              <Link href="/education/how-to-spot">how to spot</Link>,{" "}
              <Link href="/education">education hub</Link>.
            </p>

            <p className="soft-cta-line">
              <strong>Call. We&apos;ll tell you straight.</strong> ·{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </p>
            <p className="tagline-line">{TAGLINE} · Est. 2018 · Veteran owned</p>

            <EduSiblings current="/education/florida-humidity" />

            <Sources sources={HUMIDITY_SOURCES} />

            <p className="disclaimer">
              This page is education, not medical advice. Humidity numbers are attributed to the agency
              cited. Health symptoms → talk with a doctor. A remediator addresses the house — not a
              medical diagnosis.
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
