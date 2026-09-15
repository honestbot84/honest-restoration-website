import type { OfficialSource } from "@/lib/sources";

type SourcesProps = {
  sources: OfficialSource[];
  heading?: string;
};

/** Shared Sources & standards block — prefer MUST_LINKS + page secondaries. */
export default function Sources({
  sources,
  heading = "Sources & standards",
}: SourcesProps) {
  return (
    <section className="sources-block" aria-labelledby="sources-heading">
      <h2 id="sources-heading">{heading}</h2>
      <p className="sources-intro">
        Prefer official .gov and IICRC pages over secondhand blogs. Practices change — check the
        live source.
      </p>
      <ul className="source-list">
        {sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} rel="noopener noreferrer" target="_blank">
              {s.title}
            </a>
            {s.note ? <span className="source-note"> — {s.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
