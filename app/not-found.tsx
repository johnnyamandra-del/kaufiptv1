import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="section flex min-h-[70vh] items-center pt-40">
      <div className="container-x text-center">
        <p className="eyebrow mx-auto mb-6">Fehler 404</p>
        <h1 className="text-4xl sm:text-5xl">Diese Seite gibt es nicht</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          Der Link ist veraltet oder die Adresse wurde falsch eingegeben.
          Zurück zur Startseite oder direkt zu den Paketen.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Zur Startseite
            <Icon name="arrow" size={16} />
          </Link>
          <Link href="/pakete" className="btn-secondary">
            IPTV Pakete ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
