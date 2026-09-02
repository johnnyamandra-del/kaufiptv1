import Link from "next/link";

type Props = { className?: string; onClick?: () => void };

/** IPTVKauf-Logo (Bilddatei public/logo.png). */
export function Logo({ className = "", onClick }: Props) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="IPTVKauf – zur Startseite"
      className={`inline-flex items-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="IPTVKauf"
        width={640}
        height={210}
        decoding="async"
        className="h-11 w-auto sm:h-14"
      />
    </Link>
  );
}
