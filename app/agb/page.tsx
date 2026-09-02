import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { guarantee } from "@/lib/content";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    description: "Allgemeine Geschäftsbedingungen für die Nutzung des Angebots von IPTVKauf.",
    path: "/agb",
  }),
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <p>
        Die folgenden Bedingungen sind ein <strong>Entwurfsgerüst</strong>. Sie
        müssen an das konkrete Geschäftsmodell angepasst und vor Verwendung
        anwaltlich geprüft werden.
      </p>

      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese AGB gelten für alle Verträge zwischen PLATZHALTER (nachfolgend
        „Anbieter“) und dem Kunden über die auf iptvkauf.com angebotenen
        Leistungen.
      </p>

      <h2>§ 2 Leistungsgegenstand</h2>
      <p>
        Der Anbieter stellt dem Kunden einen Zugang zu einem IPTV-Dienst
        (Zugangsdaten zur Nutzung mit einer kompatiblen Anwendung) für die
        gewählte Laufzeit bereit. PLATZHALTER – genaue Leistungsbeschreibung,
        Verfügbarkeitszusagen und deren Grenzen, Anzahl paralleler Streams je
        Paket. Kanal- und Inhaltsangaben sind circa und können sich ändern.
      </p>

      <h2>§ 3 Vertragsschluss</h2>
      <p>
        PLATZHALTER – Darstellung des Bestellablaufs (z.&nbsp;B. Bestellung über
        WhatsApp), Zeitpunkt des Vertragsschlusses, Bestätigung.
      </p>

      <h2>§ 4 Preise und Zahlung</h2>
      <p>
        Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen
        Preise als Einmalzahlung für die gewählte Laufzeit. Zahlungsarten:
        PLATZHALTER (z.&nbsp;B. Kreditkarte, PayPal, Kryptowährungen).
      </p>

      <h2>§ 5 Bereitstellung / Aktivierung</h2>
      <p>
        Die Zugangsdaten werden nach Zahlungseingang in der Regel innerhalb
        weniger Minuten per WhatsApp oder Telegram übermittelt. PLATZHALTER –
        rechtlich belastbare Formulierung zu Fristen.
      </p>

      <h2>§ 6 Laufzeit</h2>
      <p>
        Der Vertrag läuft für die gewählte Dauer und endet automatisch ohne
        Kündigung. Eine automatische Verlängerung findet nicht statt.
        PLATZHALTER – bestätigen bzw. anpassen.
      </p>

      <h2>§ 7 Widerrufsrecht</h2>
      <p>
        Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Einzelheiten
        regelt die <a href="/widerruf">Widerrufsbelehrung</a>. PLATZHALTER –
        Regelung zum vorzeitigen Erlöschen des Widerrufsrechts bei digitalen
        Inhalten (§ 356 Abs. 5 BGB) und die dafür nötige ausdrückliche
        Zustimmung des Kunden.
      </p>

      <h2>§ 8 Geld-zurück-Garantie</h2>
      <p>
        Zusätzlich zum gesetzlichen Widerrufsrecht wird eine {guarantee}{" "}
        angeboten. PLATZHALTER – genaue Bedingungen, Ausschlüsse und Ablauf der
        Rückerstattung.
      </p>

      <h2>§ 9 Pflichten des Kunden</h2>
      <p>
        PLATZHALTER – u.&nbsp;a. Geheimhaltung der Zugangsdaten, keine
        Weitergabe an Dritte, Nutzung nur im vertraglich vereinbarten Umfang,
        Beachtung geltenden Rechts im Land des Kunden.
      </p>

      <h2>§ 10 Haftung</h2>
      <p>
        PLATZHALTER – Haftungsregelung nach den gesetzlichen Vorgaben
        (Vorsatz/grobe Fahrlässigkeit, Kardinalpflichten, Begrenzung der Höhe).
      </p>

      <h2>§ 11 Schlussbestimmungen</h2>
      <p>
        PLATZHALTER – anwendbares Recht, Gerichtsstand (soweit zulässig),
        salvatorische Klausel.
      </p>
    </LegalPage>
  );
}
