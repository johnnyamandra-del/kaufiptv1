import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Impressum",
    description: "Impressum und Anbieterkennzeichnung von IPTVKauf.",
    path: "/impressum",
  }),
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG (ehem. § 5 TMG)</h2>
      <p>
        PLATZHALTER – Name des Betreibers / der Gesellschaft
        <br />
        PLATZHALTER – Rechtsform (z.&nbsp;B. Einzelunternehmen, UG, GmbH)
        <br />
        PLATZHALTER – Straße und Hausnummer
        <br />
        PLATZHALTER – PLZ und Ort
        <br />
        PLATZHALTER – Land
      </p>

      <h2>Vertreten durch</h2>
      <p>PLATZHALTER – vertretungsberechtigte Person(en)</p>

      <h2>Kontakt</h2>
      <p>
        WhatsApp: {site.whatsappNumber}
        <br />
        Telegram: {site.telegramUrl}
        <br />
        PLATZHALTER – E-Mail-Adresse für die Anbieterkennzeichnung (nach § 5 DDG
        ist eine schnelle elektronische Kontaktaufnahme, in der Regel eine
        E-Mail-Adresse, erforderlich – hier eintragen).
      </p>

      <h2>Registereintrag</h2>
      <p>
        PLATZHALTER – Registergericht
        <br />
        PLATZHALTER – Registernummer (HRB/HRA)
        <br />
        (entfällt bei nicht eingetragenen Einzelunternehmen)
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        PLATZHALTER – Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG
        (falls vorhanden)
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        PLATZHALTER – Name und Anschrift der verantwortlichen Person
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere Kontaktdaten findest du oben.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        PLATZHALTER – Angabe, ob der Betreiber zur Teilnahme an einem
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bereit
        oder verpflichtet ist.
      </p>

      <h2>Haftung für Inhalte und Links</h2>
      <p>
        PLATZHALTER – Standard-Haftungsausschluss für eigene Inhalte und externe
        Links (bitte vom Rechtsbeistand einsetzen lassen).
      </p>
    </LegalPage>
  );
}
