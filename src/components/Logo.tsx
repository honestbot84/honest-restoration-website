import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "default" | "footer";
};

export default function Logo({ variant = "default" }: LogoProps) {
  const honestClass =
    variant === "footer"
      ? "font-display font-bold text-[0.95rem] tracking-[0.04em] uppercase text-linen"
      : "font-display font-bold text-[0.95rem] tracking-[0.04em] uppercase text-cypress";
  const restClass =
    variant === "footer"
      ? "font-display font-medium text-[0.7rem] tracking-[0.18em] uppercase text-driftwood"
      : "font-display font-medium text-[0.7rem] tracking-[0.18em] uppercase text-gulf-rust";

  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Honest Restoration home">
      <Image
        src="/honest-mask.png"
        alt=""
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
        priority
      />
      <span className="flex flex-col leading-[1.05]">
        <span className={honestClass}>Honest</span>
        <span className={restClass}>Restoration</span>
      </span>
    </Link>
  );
}
