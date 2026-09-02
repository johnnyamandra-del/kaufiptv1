import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Datenschutzerklärung",
    description: "Informationen zur Verarbeitung personenbezogener Daten bei IPTVKauf.",
    path: "/datenschutz",
  }),
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        Diese Datenschutzerklärung informiert über Art, Umfang und Zweck der
        Verarbeitung personenbezogener Daten auf {site.domain}. Sie ist ein
        <strong> Gerüst</strong> und muss an die tatsächlich eingesetzten Dienste
        und Prozesse angepasst und juristisch geprüft werden.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        PLATZHALTER – Name, Anschrift und Kontaktdaten des Verantwortlichen
        (siehe Impressum).
      </p>

      <h2>2. Datenschutzbeauftragter</h2>
      <p>
        PLATZHALTER – Kontaktdaten des/der Datenschutzbeauftragten, sofern eine
        Benennungspflicht besteht.
      </p>

      <h2>3. Hosting</h2>
      <p>
        PLATZHALTER – Name und Anschrift des Hosting-Anbieters, Art der
        verarbeiteten Daten (z.&nbsp;B. Server-Logfiles: IP-Adresse,
        Zeitstempel, aufgerufene URL, User-Agent), Rechtsgrundlage
        (Art.&nbsp;6&nbsp;Abs.&nbsp;1&nbsp;lit.&nbsp;f DSGVO) sowie ob ein
        Auftragsverarbeitungsvertrag (AVV) besteht.
      </p>

      <h2>4. Server-Logfiles</h2>
      <p>
        Beim Aufruf der Website werden technisch notwendige Zugriffsdaten
        automatisch verarbeitet. PLATZHALTER – Speicherdauer und Löschkonzept
        ergänzen.
      </p>

      <h2>5. Kontaktaufnahme (WhatsApp, Telegram)</h2>
      <p>
        Bei Kontaktaufnahme über WhatsApp oder Telegram werden die übermittelten
        Daten zur Bearbeitung der Anfrage verarbeitet
        (Art.&nbsp;6&nbsp;Abs.&nbsp;1&nbsp;lit.&nbsp;b bzw. lit.&nbsp;f DSGVO).
        <br />
        <strong>Hinweis WhatsApp / Telegram:</strong> PLATZHALTER – Angaben zur
        Nutzung von WhatsApp (WhatsApp Ireland Ltd. / Meta) und Telegram
        (Telegram Messenger Inc.), zu möglicher Drittlandübermittlung und den
        entsprechenden Garantien.
      </p>

      <h2>6. Bestellabwicklung und Zahlungsdienstleister</h2>
      <p>
        Zur Vertragsabwicklung verarbeitete Daten: PLATZHALTER (z.&nbsp;B. Name,
        Kontaktdaten, gewähltes Paket, Zahlungsstatus). Eingesetzte Zahlungsdienste:
        PLATZHALTER (z.&nbsp;B. PayPal, Kreditkarten-Acquirer, Krypto-Zahlungs-
        anbieter) – jeweils mit Anbieter, Zweck, Rechtsgrundlage und Link zu
        deren Datenschutzhinweisen.
      </p>

      <h2>7. Cookies und Reichweitenmessung</h2>
      <p>
        PLATZHALTER – Auflistung eingesetzter Cookies/Technologien. Werden nur
        technisch notwendige Cookies genutzt, ist dies hier zu bestätigen. Beim
        Einsatz von Analyse- oder Marketing-Tools ist ein
        Consent-Management-Verfahren erforderlich
        (Art.&nbsp;6&nbsp;Abs.&nbsp;1&nbsp;lit.&nbsp;a DSGVO, § 25 TDDDG).
      </p>

      <h2>8. Schriftarten</h2>
      <p>
        Diese Website bindet die Schriftart „Inter“ über <code>next/font</code>{" "}
        <strong>lokal, selbst gehostet</strong> ein. Es findet dabei keine
        Verbindung zu Google-Servern statt. PLATZHALTER – anpassen, falls die
        Einbindung geändert wird.
      </p>

      <h2>9. Rechte der betroffenen Personen</h2>
      <ul>
        <li>Auskunft (Art.&nbsp;15 DSGVO)</li>
        <li>Berichtigung (Art.&nbsp;16 DSGVO)</li>
        <li>Löschung (Art.&nbsp;17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
        <li>Widerspruch (Art.&nbsp;21 DSGVO)</li>
        <li>Widerruf erteilter Einwilligungen (Art.&nbsp;7&nbsp;Abs.&nbsp;3 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde (Art.&nbsp;77 DSGVO)</li>
      </ul>

      <h2>10. Aktualität</h2>
      <p>
        PLATZHALTER – Datum der letzten Aktualisierung. Diese Erklärung wird bei
        Änderungen an Diensten oder Rechtslage angepasst.
      </p>
    </LegalPage>
  );
}
