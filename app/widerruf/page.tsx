import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Widerrufsbelehrung",
    description: "Widerrufsrecht und Muster-Widerrufsformular für Verbraucher bei IPTVKauf.",
    path: "/widerruf",
  }),
  robots: { index: false, follow: true },
};

export default function WiderrufPage() {
  return (
    <LegalPage title="Widerrufsbelehrung">
      <p>
        Nachfolgend ein an das gesetzliche Muster angelehntes Gerüst. Es muss an
        das Geschäftsmodell (digitale Inhalte / Dienstleistung) angepasst und
        juristisch geprüft werden – insbesondere die Klauseln zum{" "}
        <strong>vorzeitigen Erlöschen</strong> des Widerrufsrechts.
      </p>

      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
        Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem
        Tag des Vertragsschlusses.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (PLATZHALTER – Name,
        Anschrift und Kontaktdaten laut Impressum) mittels einer eindeutigen
        Erklärung (z.&nbsp;B. per WhatsApp oder Telegram) über Ihren Entschluss,
        diesen Vertrag zu widerrufen, informieren. Sie können dafür das
        beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht
        vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
        über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
        absenden.
      </p>

      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
        wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
        vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
        Ihren Widerruf bei uns eingegangen ist. PLATZHALTER – Angaben zum
        Rückzahlungsweg.
      </p>

      <h2>Vorzeitiges Erlöschen des Widerrufsrechts</h2>
      <p>
        PLATZHALTER – Bei Verträgen über die Lieferung digitaler Inhalte, die
        nicht auf einem körperlichen Datenträger geliefert werden, erlischt das
        Widerrufsrecht unter den Voraussetzungen des § 356 Abs. 5 BGB, wenn der
        Verbraucher ausdrücklich zugestimmt hat, dass mit der Ausführung vor
        Ablauf der Widerrufsfrist begonnen wird, und seine Kenntnis vom Verlust
        des Widerrufsrechts bestätigt hat. Der genaue Ablauf (Einholen der
        Zustimmung im Bestellprozess) ist hier zu beschreiben.
      </p>

      <h2>Muster-Widerrufsformular</h2>
      <p>
        (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
        Formular aus und senden Sie es zurück.)
      </p>
      <ul>
        <li>An: PLATZHALTER – Name, Anschrift und Kontaktdaten laut Impressum</li>
        <li>
          Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag
          über die Erbringung der folgenden Dienstleistung: __________
        </li>
        <li>Bestellt am: __________</li>
        <li>Name des/der Verbraucher(s): __________</li>
        <li>Anschrift des/der Verbraucher(s): __________</li>
        <li>Datum: __________</li>
        <li>
          Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
        </li>
      </ul>
    </LegalPage>
  );
}
