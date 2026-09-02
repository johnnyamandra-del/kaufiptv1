# IPTVKauf – Website

Premium, konversionsorientierte IPTV-Website für **iptvkauf.com**, primär für
deutschsprachige Kundschaft. Mobile-first, SEO-optimiert.

**Design:** Layout-Struktur nach der vom Betreiber vorgegebenen Referenz
(„german4k"), umgesetzt in einem **dunklen Navy-Blau-Theme** (Blau + Weiß statt
Lila). Farbtokens zentral in `tailwind.config.ts` (`bg`, `surface`, `ink`,
`brand`) – dort einmal ändern, färbt die ganze Seite um.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · keine schwere
Animationsbibliothek (Fade-in via IntersectionObserver).

---

## Schnellstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # Produktions-Build
```

Node 18.18+ oder 20+ empfohlen.

---

## Projektstruktur

```
app/
  layout.tsx           Root-Layout, globale Metadaten, Header/Footer, JSON-LD
  page.tsx             Startseite (alle Sektionen)
  pakete/              IPTV Pakete & Preise
  funktionen/          Funktionsübersicht
  geraete/             Unterstützte Geräte + Installationsanleitung (#installation)
  faq/                 Vollständiges FAQ
  kontakt/             Kontakt (WhatsApp, E-Mail, Formular-Platzhalter)
  impressum/ datenschutz/ agb/ widerruf/   Rechts-Gerüste (noindex)
  opengraph-image.tsx  Dynamisch generiertes OG/Twitter-Bild (1200×630)
  sitemap.ts           -> /sitemap.xml
  robots.ts            -> /robots.txt
components/            Header, Hero, StatsBar, PricingSection, PricingCard,
                       StreamingFeatures, Testimonials, TrustSplit,
                       ResellerBanner, Referral, SetupSection, BlogTeaser,
                       FAQ, ContactSection, Footer, + Features/Benefits/
                       CustomerJourney/CTA/PageHero/LegalPage (Unterseiten)
```

## Startseiten-Aufbau (Layout nach Referenz „german4k", Theme: Navy-Blau)

Hero · Kennzahlen-Band · Preise · „Alles für perfektes Streaming" (6) ·
Kundenstimmen (Carousel) · „Von Streaming-Fans für Streaming-Fans" ·
Reseller-Banner · „Freunde werben" · „In wenigen Minuten startklar"
(3 Schritte + Geräte-Grid) · Magazin/Blog (3) · FAQ · „Noch Fragen? Schreib uns"

```
lib/
  content.ts           >>> EINZIGE QUELLE für alle Inhalte, Preise, Pakete, FAQ
  seo.ts               Metadaten-Helper + Schema.org (Organization, Product,
                       FAQPage, WebSite, BreadcrumbList)
public/                favicon.svg, site.webmanifest
```

Fast alle Texte, Preise und Listen kommen aus **`lib/content.ts`** – dort
zentral pflegen.

---

## Inhaltliche Grundlage

Alle Geschäftsangaben wurden aus der bestehenden Seite des Betreibers
**https://iptvflixpro.de/** übernommen (Startseite, `/preise/`, FAQ,
`/kontakt/`, „Über uns"). Nichts wurde frei erfunden.

Übernommen:

- **Pakete/Preise:** „Starterpaket" mit 1 / 3 / 6 / 12 Monaten – 19,99 € /
  35,99 € / 45,99 € / 69,99 € (Altpreise 29,99 / 45,99 / 59,99 / 98,99 €).
- **Leistungen:** 15.000+ Live-Kanäle, 40.000+ Filme & Serien (VOD), 4K & HD,
  EPG, Anti-Freeze-Streaming, Aktivierung in Minuten, Chat-Support 24/7,
  Bundesliga/Champions League, 7-Tage-Geld-zurück-Garantie, kurzer Testzugang.
- **Geräte:** Samsung/LG Smart TV, Fire TV Stick, Android TV, Android-Box,
  Smartphone (Android/iOS), Tablet, Windows-PC, Mac.
- **Zahlung:** Kreditkarte, PayPal, Krypto (Bitcoin, USDT).
- **Kontakt:** WhatsApp +44 7400 455889 (wa.link/zohu8g),
  support@iptvflixpro.com.

### Bewusst konservativ gewählt

Die Quelle nennt widersprüchliche Zahlen. Verwendet wurde jeweils der
vorsichtigere Wert:

| Angabe        | Quelle nennt         | hier verwendet |
| ------------- | -------------------- | -------------- |
| Live-Kanäle   | „15.000+" / „16.000+" | **15.000+**    |
| VOD-Titel     | „40.000+" / „80.000"  | **40.000+**    |

„80.000 deutsche Live-Sender" von der Startseite wurde als unplausibel nicht
übernommen. Reißerische/rechtlich riskante Aussagen („100 % legal", „niemals
gesperrt" o. Ä.) wurden vermieden.

---

## ⚠️ Platzhalter, die DU noch ersetzen musst

Im Code als `PLACEHOLDER` / `PLATZHALTER` markiert:

1. **`lib/content.ts` → `site`**
   - `legalName` – vollständiger Firmen-/Betreibername.
   - Optional: `email` / `whatsappNumber` / `whatsappUrl` auf dedizierte
     iptvkauf.com-Kanäle umstellen (aktuell die von iptvflixpro.de).
2. **`app/impressum/page.tsx`** – komplette Anbieterkennzeichnung: Name,
   Rechtsform, Anschrift, Vertretungsberechtigte, Register + Nummer,
   USt-IdNr., inhaltlich Verantwortlicher (§ 18 MStV),
   Verbraucherschlichtung.
3. **`app/datenschutz/page.tsx`** – Hosting-Anbieter, Zahlungsdienstleister,
   Cookie-/Analyse-Tools, WhatsApp-Drittlandhinweis, Speicherfristen.
4. **`app/agb/page.tsx`** – Leistungsbeschreibung, Vertragsschluss-Ablauf,
   Widerruf/Erlöschen bei digitalen Inhalten, Garantie-Bedingungen, Haftung,
   Gerichtsstand.
5. **`app/widerruf/page.tsx`** – Anschrift, Rückzahlungsweg, § 356 Abs. 5 BGB.
6. **`lib/content.ts` → `appSection.playerNote`** – konkrete empfohlene
   IPTV-Player pro Gerät (Fire TV, Samsung, LG, Android, iOS …).
7. **`app/kontakt/page.tsx`** + `components/Referral.tsx` – Formulare haben
   kein Backend (Buttons bewusst `disabled`). Bei Bedarf an
   Formspree/Resend/eigene API-Route anbinden.
8. **Domain** – `lib/content.ts → site.url` steht auf `https://iptvkauf.com`.

### Neue Sektionen aus der Referenz – aktuell mit Platzhaltern

Diese Bereiche haben **keine belegte Grundlage** auf iptvflixpro.de. Inhalt in
`lib/content.ts` einsetzen **oder** die Sektion in `app/page.tsx` entfernen:

9.  **`site.telegramUrl`** – echter Telegram-Kanal/-Kontakt (sonst zeigen
    `ContactSection`, Footer & `socialLinks` auf `t.me/PLACEHOLDER`).
10. **`testimonials` + `rating`** – echte, belegbare Kundenbewertungen
    (z. B. Trustpilot/Google) oder `<Testimonials />` entfernen.
11. **`reseller`** – Konditionen des Reseller-Programms, sonst
    `<ResellerBanner />` entfernen (Anker `/#reseller` dann auch aus der Nav).
12. **`referral`** – Konditionen „Freunde werben", sonst `<Referral />` entfernen.
13. **`blogPosts`** – echte Ratgeber-Artikel verlinken oder `<BlogTeaser />`
    entfernen. Es gibt aktuell **keine** `/blog`-Route.
14. **`stats`** – „Hunderte zufriedene Kunden" stammt aus „hundreds of satisfied
    customers" (About-Text). Bei belastbarer Zahl konkretisieren.
15. **`socialLinks`** – echte Social-Profile ergänzen.

> Die Rechtstexte sind **Gerüste, keine Rechtsberatung**. Vor dem Livegang
> anwaltlich prüfen lassen. Impressum/Datenschutz/AGB/Widerruf sind auf
> `noindex` gesetzt.

---

## SEO

- Pro Seite: Title, Meta-Description, Canonical, Open Graph, Twitter Cards.
- `app/opengraph-image.tsx` erzeugt das Social-Preview-Bild automatisch.
- `robots.ts` + `sitemap.ts` liefern `/robots.txt` und `/sitemap.xml`.
- JSON-LD: `Organization`, `WebSite` (global), `Product` + `Offer` (Startseite,
  Pakete), `FAQPage` (Startseite, FAQ), `BreadcrumbList` (Unterseiten).
- Semantische Überschriften-Hierarchie (genau ein `<h1>` pro Seite).

## Performance / A11y

- Nur 3 Client-Komponenten (Header, FAQ-Accordion, Reveal). Rest ist RSC.
- Systemschrift-Fallback, `font-display: swap`, selbst gehostete Inter.
- `prefers-reduced-motion` wird respektiert.
- Fokus-Stile, Skip-Link, `aria-*` an Navigation/Accordion.
- Bilder: aktuell rein CSS/SVG – bei echten Fotos `next/image` verwenden.
