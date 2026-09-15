import Link from "next/link";
import { EDU_PILLARS, type EduPillarHref } from "@/lib/sources";

type EduSiblingsProps = {
  current: EduPillarHref;
};

export default function EduSiblings({ current }: EduSiblingsProps) {
  return (
    <nav className="edu-siblings" aria-label="More education">
      <p className="edu-siblings-label">More in this series</p>
      <ul>
        <li>
          <Link href="/education">Education hub</Link>
        </li>
        {EDU_PILLARS.filter((p) => p.href !== current).map((p) => (
          <li key={p.href}>
            <Link href={p.href}>
              {p.num} · {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
