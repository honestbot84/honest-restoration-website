import {
  TESTIMONIALS,
  TESTIMONIALS_AGGREGATE,
  TESTIMONIALS_MAPS_URL,
} from "@/lib/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <p
      className="text-[0.8rem] tracking-[0.12em] text-mangrove mb-3"
      aria-label={`${count} out of 5 stars`}
    >
      {"★".repeat(count)}
    </p>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container-site">
        <div className="section-head">
          <h2 id="testimonials-heading">What homeowners say</h2>
          <p>
            {TESTIMONIALS_AGGREGATE}
            {" · "}
            <a
              href={TESTIMONIALS_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-cypress"
            >
              Read on Google
            </a>
          </p>
        </div>

        <div className="grid gap-[1.15rem] grid-cols-1 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="card m-0">
              <Stars count={t.stars} />
              <p className="mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <cite className="not-italic font-display font-bold text-cypress text-[1.05rem] tracking-tight">
                  {t.name}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
