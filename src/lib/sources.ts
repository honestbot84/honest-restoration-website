/** Official .gov / IICRC outbound links for education pages. Prefer these over blogs. */

export type OfficialSource = {
  href: string;
  title: string;
  note?: string;
};

/** Must-link trio for every education pillar. */
export const MUST_LINKS: OfficialSource[] = [
  {
    href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home",
    title: "EPA — A Brief Guide to Mold, Moisture, and Your Home",
    note: "moisture control & homeowner basics",
  },
  {
    href: "https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/air-quality/mold/",
    title: "Florida Department of Health — Mold",
    note: "Florida public-health guidance",
  },
  {
    href: "https://iicrc.org/s520/",
    title: "IICRC — About ANSI/IICRC S520",
    note: "professional mold remediation standard (info page; we do not reproduce the paid text)",
  },
];

export const EPA_CLEANUP: OfficialSource = {
  href: "https://www.epa.gov/mold/mold-cleanup-your-home",
  title: "EPA — Mold Cleanup in Your Home",
};

export const EPA_PUBLICATIONS: OfficialSource = {
  href: "https://www.epa.gov/mold/publications-about-mold",
  title: "EPA — Publications about mold",
};

export const CDC_MOLD: OfficialSource = {
  href: "https://www.cdc.gov/mold-health/about/index.html",
  title: "CDC — Mold overview",
};

export const CDC_CLEANUP: OfficialSource = {
  href: "https://www.cdc.gov/mold-health/about/clean-up.html",
  title: "CDC — Mold clean-up guidelines",
};

export const UF_IFAS_MOISTURE: OfficialSource = {
  href: "https://edis.ifas.ufl.edu/publication/FY922",
  title: "UF/IFAS EDIS — Moisture Control in Your Home",
};

export const FL_DOH_IAQ: OfficialSource = {
  href: "https://www.floridahealth.gov/community-environmental-public-health/environmental-public-health/air-quality/",
  title: "Florida DOH — Indoor Air Quality",
};

export const FL_DOH_EMERGENCY_PDF: OfficialSource = {
  href: "https://www.floridahealth.gov/wp-content/uploads/2025/08/emergency-information-factsheet-mold.pdf",
  title: "Florida DOH — Mold emergency factsheet (PDF)",
};

export const IICRC_S520_STORE: OfficialSource = {
  href: "https://iicrc.gilmoreglobal.com/en/product/0f64eadb-7f50-4a26-bd8c-92418a95f6fb",
  title: "IICRC Webstore — ANSI/IICRC S520:2024 (purchase)",
};

/** Education pillar routes for sibling nav. */
export const EDU_PILLARS = [
  { href: "/education/what-mold-is", label: "What mold is", num: "01" },
  { href: "/education/how-to-spot", label: "How to spot it", num: "02" },
  { href: "/education/diy-vs-pro", label: "DIY vs pro", num: "03" },
  { href: "/education/prevention", label: "Prevention", num: "04" },
  { href: "/education/process", label: "Our process", num: "05" },
  { href: "/education/florida-humidity", label: "Florida humidity", num: "06" },
] as const;

export type EduPillarHref = (typeof EDU_PILLARS)[number]["href"];
