import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EDU_PAGE_CARDS, EDU_PILLS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Learn mold. Skip the panic. Plain-language education on mold & moisture for Florida Gulf Coast homeowners.",
};

export default function EducationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <p className="eyebrow">Mold &amp; moisture only</p>
          <h1>Learn mold. Skip the panic.</h1>
          <p>
            Short lessons for Gulf Coast homeowners. No scare tactics — just what you need to know.
          </p>
        </div>
      </section>

      <section className="section-tight pt-0">
        <div className="container-site">
          <div className="flex flex-wrap gap-2 mb-10" aria-label="Topics">
            {EDU_PILLS.map((pill) => (
              <Link key={pill.label} href={pill.href} className="pill">
                {pill.label}
              </Link>
            ))}
          </div>

          <div className="grid gap-[1.15rem] grid-cols-1 min-[600px]:grid-cols-2">
            {EDU_PAGE_CARDS.map((card) => (
              <Link
                key={card.id}
                id={card.id}
                href={card.href}
                className="card block no-underline hover:no-underline"
              >
                <p className="card-num">{card.num}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="belief">
        <div className="container-site grid gap-10 items-center min-[800px]:grid-cols-[1fr_auto] min-[800px]:gap-16">
          <div>
            <p className="belief-eyebrow">Still unsure?</p>
            <h2>Ask. We’ll tell you straight.</h2>
            <p className="belief-body">
              Not every stain is a crisis. Not every musty smell is “just old house.” Call and we’ll
              help you sort signal from noise.
            </p>
            <p className="belief-signoff">Honest Restoration · Est. 2018 · Veteran owned</p>
          </div>
          <div className="mask-disc mask-disc-lg" aria-hidden="true">
            <Image src="/honest-mask.png" alt="" width={160} height={160} />
          </div>
        </div>
      </section>

      <section className="close-cta">
        <div className="container-site">
          <h2>Ready for a real look?</h2>
          <p>Same person on the phone. Same person in your home.</p>
          <a href={PHONE_TEL} className="btn btn-primary">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
