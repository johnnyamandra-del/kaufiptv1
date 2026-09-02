/**
 * Single source of truth for all IPTVKauf business content.
 *
 * Alle Zahlen, Pakete, Preise und FAQ-Antworten stammen von der bestehenden
 * Seite des Betreibers https://iptvflixpro.de/ (Stand: analysiert 2026).
 *
 * >>> PLATZHALTER, die der Betreiber noch ersetzen muss, sind mit `PLACEHOLDER`
 *     markiert. Siehe README.md.
 */

export const site = {
  name: "IPTVKauf",
  domain: "iptvkauf.com",
  url: "https://iptvkauf.com",
  locale: "de_DE",
  // Kontakt ausschließlich über WhatsApp und Telegram (keine E-Mail).
  whatsappNumber: "+44 7400 455889",
  // WhatsApp-Link aus dem bestehenden Angebot (iptvflixpro.de).
  whatsappUrl: "https://wa.link/zohu8g",
  telegramUrl: "https://telegram.me/FlixProTvService",
  // PLACEHOLDER: vollständige Anbieterkennzeichnung für das Impressum
  legalName: "PLACEHOLDER – Firmenname / Betreiber",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "IPTV Pakete", href: "/pakete" },
  { label: "Funktionen", href: "/funktionen" },
  { label: "Geräte", href: "/geraete" },
  { label: "Anleitung", href: "/installation" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNav: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "IPTV Pakete", href: "/pakete" },
  { label: "Geräte", href: "/geraete" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const legalNav: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Widerrufsbelehrung", href: "/widerruf" },
];

/** Footer-Spalten im Stil der Referenz (Shop / Info / Installation / Kontakt). */
export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: "Shop",
    items: [
      { label: "IPTV Pakete", href: "/pakete" },
      { label: "Funktionen", href: "/funktionen" },
      { label: "Blog / Magazin", href: "/blog" },
    ],
  },
  {
    title: "Info",
    items: [
      { label: "Kundenstimmen", href: "/#kunden" },
      { label: "Ratgeber / Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Installation",
    items: [
      { label: "Alle Geräte", href: "/geraete" },
      { label: "Installationsanleitung", href: "/installation" },
      { label: "Welche App?", href: "/faq" },
    ],
  },
  {
    title: "Kontakt",
    items: [
      { label: "WhatsApp", href: site.whatsappUrl },
      { label: "Telegram", href: site.telegramUrl },
      { label: "Kontaktseite", href: "/kontakt" },
    ],
  },
];

/** Primärer CTA – führt zur Bestellung/Kontaktaufnahme via WhatsApp. */
export const primaryCta = {
  label: "Jetzt starten",
  href: site.whatsappUrl,
};

/* --------------------------------------------------------------------------- */
/* Hero                                                                       */
/* --------------------------------------------------------------------------- */

export const hero = {
  badge: "IPTV FÜR DIE GANZE FAMILIE",

  h1: {
    l1: "Entertainment für",
    l2: "die ganze Familie.",
    l3: "Einfach. Flexibel. Modern.",
  },

  sub: "Live-TV, Filme und Serien auf deinen Lieblingsgeräten – einfach eingerichtet und jederzeit verfügbar.",

  // >>> Foto hier ablegen: public/hero-family.jpg  (siehe public/README-hero.txt)
  //     Bis dahin greift ein dunkler CSS-Fallback (kein Bild).
  image: "/hero-family.jpg",

  imageAlt: "Familie genießt gemeinsam einen gemütlichen Fernsehabend",

  ctaPrimary: {
    label: "Jetzt IPTV auswählen",
    href: "/pakete",
  },

  ctaSecondary: {
    label: "Pakete ansehen",
    href: "#preise",
  },

  bullets: ["Schnelle Einrichtung", "Für viele Geräte", "Persönlicher Support"],
};

/* --------------------------------------------------------------------------- */
/* Kennzahlen-Band unter dem Hero                                             */
/*                                                                           */
/* HINWEIS: Diese Zahlen stammen aus dem vom Betreiber gelieferten Hero-Mock  */
/* (10.000+ / 50.000+) und weichen von den Angaben auf iptvflixpro.de ab     */
/* (dort 15.000+ / 40.000+). Bitte final festlegen, welche Werte stimmen,    */
/* und hier sowie in `packageFeatures` / Schema.org konsistent halten.       */
/* --------------------------------------------------------------------------- */

export const heroStats: { icon: string; value: string; label: string }[] = [
  { icon: "tv", value: "10.000+", label: "Live-Kanäle" },
  { icon: "play", value: "50.000+", label: "Filme & Serien" },
  { icon: "hd", value: "HD / FHD / 4K", label: "Beste Qualität" },
  { icon: "users", value: "24/7", label: "Kundenservice" },
];

/* --------------------------------------------------------------------------- */
/* Pakete & Preise – 1:1 aus iptvflixpro.de/preise                            */
/* --------------------------------------------------------------------------- */

export type Package = {
  id: string;
  name: string;
  duration: string;
  months: number;
  price: string; // EUR, deutsches Format ohne Symbol
  oldPrice: string;
  save: string;
  perMonth: string; // rechnerischer Monatspreis
  popular: boolean;
};

export const packages: Package[] = [
  {
    id: "1-monat",
    name: "Starterpaket",
    duration: "1 Monat",
    months: 1,
    price: "19,99",
    oldPrice: "29,99",
    save: "10,00",
    perMonth: "19,99",
    popular: false,
  },
  {
    id: "3-monate",
    name: "Starterpaket",
    duration: "3 Monate",
    months: 3,
    price: "35,99",
    oldPrice: "45,99",
    save: "10,00",
    perMonth: "12,00",
    popular: false,
  },
  {
    id: "6-monate",
    name: "Starterpaket",
    duration: "6 Monate",
    months: 6,
    price: "45,99",
    oldPrice: "59,99",
    save: "14,00",
    perMonth: "7,67",
    popular: false,
  },
  {
    id: "12-monate",
    name: "Starterpaket",
    duration: "12 Monate",
    months: 12,
    price: "69,99",
    oldPrice: "98,99",
    save: "29,00",
    perMonth: "5,83",
    popular: true,
  },
];

/** Leistungen, die in jedem Paket enthalten sind. */
export const packageFeatures: string[] = [
  "15.000+ Live-Kanäle",
  "40.000+ Filme & Serien (VOD)",
  "4K & HD Qualität, wo verfügbar",
  "EPG TV-Guide (Programmführer)",
  "Anti-Freeze-Streaming",
  "Aktivierung meist in wenigen Minuten",
  "Chat-Support rund um die Uhr",
  "1 Gerät gleichzeitig",
];

export const guarantee = "7 Tage Geld-zurück-Garantie";
export const paymentMethods = ["Kreditkarte", "PayPal", "Bitcoin", "USDT"];

/** Ein Paket per id finden (für die WhatsApp-Bestellseite /bestellen/[slug]). */
export function getPackage(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}

/** WhatsApp-Nummer nur aus Ziffern (für wa.me / web.whatsapp.com Deep-Links). */
export const whatsappPhone = site.whatsappNumber.replace(/\D/g, "");

export const pricingFinePrint =
  "Alle Preise inkl. ggf. anfallender Steuern. Einmalzahlung für die gewählte Laufzeit – kein Abo-Zwang, keine automatische Verlängerung. Kanal- und VOD-Zahlen sind Circa-Angaben und können sich ändern.";

/* --------------------------------------------------------------------------- */
/* Vorteile / Trust                                                           */
/* --------------------------------------------------------------------------- */

export type Benefit = { icon: string; title: string; text: string };

export const trustItems: string[] = [
  "Schnelle Einrichtung",
  "Für Smart TV & Streaming-Geräte",
  "Flexible Laufzeiten",
  "Chat-Support rund um die Uhr",
  "7 Tage Geld-zurück-Garantie",
];

export const benefits: Benefit[] = [
  {
    icon: "bolt",
    title: "Einfache Einrichtung",
    text: "Zugangsdaten in eine kompatible App eintragen und loslegen – meist in wenigen Minuten.",
  },
  {
    icon: "devices",
    title: "Viele kompatible Geräte",
    text: "Smart TV, Fire TV, Android TV, Smartphone, Tablet sowie Windows-PC und Mac.",
  },
  {
    icon: "calendar",
    title: "Flexible Laufzeiten",
    text: "Von 1 Monat bis 12 Monate – du entscheidest, wie lange du dabei bist.",
  },
  {
    icon: "chat",
    title: "Schneller Support",
    text: "Unser Chat-Support ist rund um die Uhr per WhatsApp und Telegram erreichbar.",
  },
];

/** „Alles für perfektes Streaming" – 6 Karten wie in der Referenz. */
export const streamingFeatures: Benefit[] = [
  {
    icon: "shield",
    title: "Kein Vertrag, kein Risiko",
    text: "Einmalzahlung für die gewählte Laufzeit. Keine automatische Verlängerung, dazu 7 Tage Geld-zurück-Garantie.",
  },
  {
    icon: "hd",
    title: "4K & HD ohne ständiges Ruckeln",
    text: "Anti-Freeze-Streaming und eine optimierte Server-Infrastruktur für ein möglichst stabiles Bild.",
  },
  {
    icon: "sparkles",
    title: "Kostenlos testen",
    text: "Für neue Kundinnen und Kunden gibt es einen kurzen Testzugang, um die Qualität vor dem Kauf zu prüfen.",
  },
  {
    icon: "devices",
    title: "Auf allen gängigen Geräten",
    text: "Samsung & LG Smart TV, Fire TV, Android TV, Smartphone, Tablet, Windows-PC und Mac.",
  },
  {
    icon: "chat",
    title: "Deutschsprachiger Support",
    text: "Chat-Support rund um die Uhr per WhatsApp und Telegram – bei Einrichtung, Verlängerung und Technik.",
  },
  {
    icon: "rocket",
    title: "Sofort startklar",
    text: "Zugangsdaten kommen in der Regel innerhalb weniger Minuten nach Zahlungseingang.",
  },
];

/* --------------------------------------------------------------------------- */
/* Kundenstimmen — PLATZHALTER                                                */
/* iptvflixpro.de enthält keine Kundenbewertungen. Bitte durch echte,        */
/* nachweisbare Bewertungen ersetzen (oder Sektion entfernen).               */
/* --------------------------------------------------------------------------- */

export const rating = {
  score: "PLATZHALTER", // z. B. "4,8"
  outOf: "5,0",
  basis: "PLATZHALTER – Anzahl echter Bewertungen",
  note: "Platzhalter-Angaben. Erst nach Einbindung eines echten Bewertungssystems (z. B. Trustpilot, Google) verwenden.",
};

export type Testimonial = { quote: string; name: string; location: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "PLATZHALTER – echtes Kundenzitat einsetzen. Beschreibe kurz die Erfahrung mit Einrichtung, Bildqualität und Support.",
    name: "PLATZHALTER Name",
    location: "PLATZHALTER Ort",
  },
  {
    quote:
      "PLATZHALTER – zweites Kundenzitat. Nur verwenden, wenn die Bewertung tatsächlich vorliegt und belegbar ist.",
    name: "PLATZHALTER Name",
    location: "PLATZHALTER Ort",
  },
  {
    quote:
      "PLATZHALTER – drittes Kundenzitat. Andernfalls diese Sektion in app/page.tsx auskommentieren.",
    name: "PLATZHALTER Name",
    location: "PLATZHALTER Ort",
  },
];

/* --------------------------------------------------------------------------- */
/* „Von Streaming-Fans für Streaming-Fans"                                    */
/* --------------------------------------------------------------------------- */

export const trustSplit = {
  eyebrow: "Warum IPTVKauf",
  heading: "Von Streaming-Fans für Streaming-Fans – ehrlich & unkompliziert",
  body: "IPTVKauf setzt auf einen klaren Ablauf, moderne Geräteunterstützung und erreichbaren Support. Kein Kabel, kein Technikertermin – nur dein Bildschirm und eine stabile Internetverbindung. Die Angaben auf dieser Seite stammen aus dem bestehenden Angebot des Betreibers; wo Zahlen schwanken, nennen wir bewusst den vorsichtigeren Wert.",
  checklist: [
    "Transparente Preise als Einmalzahlung – ohne Abo-Falle",
    "Zugangsdaten meist innerhalb weniger Minuten",
    "Kompatibel mit gängigen Smart TVs und Streaming-Geräten",
    "Deutschsprachiger Chat-Support rund um die Uhr",
  ],
};

/* --------------------------------------------------------------------------- */
/* „Freunde werben" — PLATZHALTER                                             */
/* --------------------------------------------------------------------------- */

export const referral = {
  eyebrow: "Freunde werben",
  heading: "Freunde empfehlen & 1 Monat gratis sichern",
  sub: "PLATZHALTER – Konditionen des Empfehlungsprogramms festlegen (Prämie für Werber und/oder Geworbenen, Bedingungen, Auszahlung). Nur veröffentlichen, wenn das Programm real angeboten wird.",
  points: [
    "PLATZHALTER – Schritt 1: deinen persönlichen Empfehlungslink teilen",
    "PLATZHALTER – Schritt 2: Freund bestellt ein Paket",
    "PLATZHALTER – Schritt 3: Prämie / Gratismonat wird gutgeschrieben",
  ],
};

/* --------------------------------------------------------------------------- */
/* Geräte – aus FAQ von iptvflixpro.de                                        */
/* --------------------------------------------------------------------------- */

export type Device = { name: string; icon: string; note?: string };

export const devices: Device[] = [
  { name: "Fire TV Stick", icon: "stick" },
  { name: "Android TV", icon: "tv" },
  { name: "Google TV", icon: "tv" },
  { name: "Samsung Smart TV", icon: "tv" },
  { name: "LG Smart TV", icon: "tv" },
  { name: "iPhone & iPad", icon: "phone" },
  { name: "Mac", icon: "desktop" },
  { name: "PC & Windows", icon: "desktop" },
  { name: "Android-Box & Tablet", icon: "box" },
];

/* --------------------------------------------------------------------------- */
/* So funktioniert's                                                          */
/* --------------------------------------------------------------------------- */

export type Step = { step: string; title: string; text: string };

export const howItWorks: Step[] = [
  {
    step: "Schritt 1",
    title: "Paket auswählen",
    text: "Wähle die Laufzeit, die zu dir passt – von 1 Monat bis 12 Monate.",
  },
  {
    step: "Schritt 2",
    title: "Bestellung abschließen",
    text: "Bestellung über WhatsApp abschließen und per Kreditkarte, PayPal oder Krypto zahlen.",
  },
  {
    step: "Schritt 3",
    title: "Einrichten & streamen",
    text: "Zugangsdaten per WhatsApp oder Telegram erhalten, in die App eintragen und loslegen.",
  },
];

export const setupSection = {
  eyebrow: "Installation",
  heading: "In wenigen Minuten startklar",
  sub: "Wähle dein Gerät für die passende Anleitung. Du bist unsicher, ob dein Modell passt? Frag uns kurz vor der Bestellung.",
};

/* --------------------------------------------------------------------------- */
/* Funktionen (Detailseite)                                                   */
/* --------------------------------------------------------------------------- */

export type Feature = { icon: string; title: string; text: string };

export const features: Feature[] = [
  { icon: "live", title: "Live-TV", text: "15.000+ Live-Kanäle aus Deutschland, Europa und weltweit." },
  { icon: "ball", title: "Live-Sport", text: "Sport-Übertragungen inklusive Bundesliga und Champions League." },
  { icon: "film", title: "VOD-Bibliothek", text: "40.000+ Filme und Serien auf Abruf, jederzeit abspielbar." },
  { icon: "hd", title: "4K & HD", text: "Gestochen scharfes Bild – wo verfügbar in 4K Ultra HD." },
  { icon: "grid", title: "EPG TV-Guide", text: "Elektronischer Programmführer für den vollen Überblick." },
  { icon: "wave", title: "Anti-Freeze-Streaming", text: "Optimierte Server-Infrastruktur für ein unterbrechungsarmes Bild." },
  { icon: "devices", title: "Multi-Device", text: "Nutzung auf verschiedenen Geräten – parallele Streams je nach Paket." },
  { icon: "globe", title: "Mehrsprachige Inhalte", text: "Inhalte u. a. aus USA, UK, Deutschland, Europa, Asien und der arabischen Welt." },
  { icon: "bolt", title: "Schnelle Aktivierung", text: "Zugangsdaten meist innerhalb weniger Minuten nach Zahlungseingang." },
];

export const whyCards: Benefit[] = [
  { icon: "sparkles", title: "Einfache Nutzung", text: "Paket wählen, Zugangsdaten erhalten, App einrichten, streamen." },
  { icon: "tv", title: "Moderne Geräteunterstützung", text: "Kompatibel mit gängigen Smart TVs, Streaming- und mobilen Geräten." },
  { icon: "rocket", title: "Schnelle Einrichtung", text: "Nach Zahlungseingang kommen die Zugangsdaten in der Regel binnen Minuten." },
  { icon: "shield", title: "Kundenservice", text: "Persönlicher Chat-Support bei Einrichtung, Verlängerung und Technik." },
];

/* --------------------------------------------------------------------------- */
/* App / Player                                                               */
/* --------------------------------------------------------------------------- */

export const appSection = {
  heading: "Welche App brauche ich?",
  intro:
    "IPTVKauf funktioniert mit gängigen IPTV-Playern. Nach der Bestellung erhältst du deine Zugangsdaten und eine Schritt-für-Schritt-Anleitung für dein Gerät.",
  steps: [
    "Kompatible IPTV-App auf deinem Gerät installieren",
    "Zugangsdaten aus der Bestätigung eintragen",
    "Senderliste laden – anschließend kannst du streamen",
  ],
  playerNote:
    "PLACEHOLDER: Bitte die exakten empfohlenen Player pro Gerät (z. B. für Fire TV, Samsung, LG, Android) hier ergänzen.",
};

/* --------------------------------------------------------------------------- */
/* Customer Journey                                                           */
/* --------------------------------------------------------------------------- */

export const journey = {
  heading: "Von der Bestellung bis zum ersten Stream – unkompliziert.",
  steps: [
    { title: "Paket wählen", text: "Laufzeit auf iptvkauf.com auswählen." },
    { title: "Bestellung abschließen", text: "Zahlung per Kreditkarte, PayPal oder Krypto." },
    { title: "Zugangsdaten erhalten", text: "Per WhatsApp oder Telegram, meist binnen Minuten." },
    { title: "App einrichten", text: "Anleitung folgen und Zugangsdaten eintragen." },
    { title: "Streamen", text: "Live-TV, Filme und Serien auf deinem Gerät genießen." },
  ],
};

/* Blog / Magazin: Inhalte liegen in lib/blog.ts (eigenständige Ratgeber). */

/* --------------------------------------------------------------------------- */
/* Kontakt-Sektion (Startseite)                                               */
/* --------------------------------------------------------------------------- */

export const contactChannels = [
  {
    icon: "whatsapp",
    name: "WhatsApp",
    desc: "Schnellster Weg für Bestellung, Testzugang und Support.",
    value: site.whatsappNumber,
    href: site.whatsappUrl,
    external: true,
  },
  {
    icon: "telegram",
    name: "Telegram",
    desc: "Schnelle Hilfe und Updates direkt per Telegram.",
    value: "@FlixProTvService",
    href: site.telegramUrl,
    external: true,
  },
];

/** Social-Links im Footer/Kontaktbereich. PLATZHALTER – echte Profile eintragen. */
export const socialLinks: { icon: string; label: string; href: string }[] = [
  { icon: "whatsapp", label: "WhatsApp", href: site.whatsappUrl },
  { icon: "telegram", label: "Telegram", href: site.telegramUrl },
];

/* --------------------------------------------------------------------------- */
/* FAQ – neu formuliert auf Basis der echten Antworten von iptvflixpro.de     */
/* --------------------------------------------------------------------------- */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Was ist IPTV?",
    a: "IPTV (Internet Protocol Television) überträgt Fernsehen über das Internet – ohne Satellitenschüssel oder Kabelanschluss. Du benötigst nur ein internetfähiges Gerät und eine stabile Verbindung, um Live-TV, Filme und Serien in HD und, wo verfügbar, in 4K zu streamen.",
  },
  {
    q: "Wie funktioniert IPTVKauf?",
    a: "Du wählst ein Paket, schließt die Bestellung ab und erhältst deine Zugangsdaten per WhatsApp oder Telegram. Diese trägst du einmalig in eine kompatible IPTV-App ein – danach kannst du sofort streamen.",
  },
  {
    q: "Welche Geräte werden unterstützt?",
    a: "Smart TVs von Samsung und LG, Fire TV Stick, Android TV und Android-Box, Smartphones (Android & iOS), Tablets sowie Windows-PC und Mac. Ob mehrere Geräte gleichzeitig genutzt werden können, hängt vom gewählten Paket ab; das Starterpaket ist für ein Gerät ausgelegt.",
  },
  {
    q: "Wie schnell erhalte ich meine Zugangsdaten?",
    a: "In der Regel innerhalb weniger Minuten nach Zahlungseingang. In Ausnahmefällen kann es etwas länger dauern – unser Support hilft dir dann weiter.",
  },
  {
    q: "Wie richte ich IPTV ein?",
    a: "Nach der Bestellung bekommst du eine Schritt-für-Schritt-Anleitung. Kurz gefasst: kompatible App installieren, Zugangsdaten eintragen, Senderliste laden – fertig.",
  },
  {
    q: "Welche App benötige ich?",
    a: "IPTVKauf funktioniert mit gängigen IPTV-Playern. Welche App für dein Gerät am besten geeignet ist, erfährst du in unserer Installationsanleitung oder direkt vom Support.",
  },
  {
    q: "Kann ich IPTV auf mehreren Geräten nutzen?",
    a: "Die Anzahl paralleler Streams richtet sich nach dem Paket. Das Starterpaket ist für ein Gerät gleichzeitig vorgesehen. Wenn du mehr Geräte nutzen möchtest, sprich uns vor der Bestellung an.",
  },
  {
    q: "Welche Internetgeschwindigkeit brauche ich?",
    a: "Empfohlen werden mindestens 10 Mbit/s für HD und rund 20 Mbit/s für 4K. Eine stabile Verbindung ist wichtiger als der reine Spitzenwert.",
  },
  {
    q: "Welche Zahlungsmethoden gibt es?",
    a: "Kreditkarte, PayPal und Kryptowährungen (unter anderem Bitcoin und USDT). Weitere Optionen auf Anfrage.",
  },
  {
    q: "Gibt es einen Test?",
    a: "Für neue Kundinnen und Kunden bieten wir einen kurzen Testzugang an, damit du die Qualität vor dem Kauf prüfen kannst. Kontaktiere uns dazu über WhatsApp oder Telegram.",
  },
  {
    q: "Gibt es eine Geld-zurück-Garantie?",
    a: "Ja. Wir bieten eine 7-tägige Geld-zurück-Garantie nach Maßgabe unserer Rückerstattungsrichtlinie.",
  },
  {
    q: "Wie funktioniert der Support?",
    a: "Unser Chat-Support ist rund um die Uhr erreichbar. Du erreichst uns per WhatsApp und Telegram – meist antworten wir innerhalb weniger Minuten.",
  },
  {
    q: "Ist IPTV legal?",
    a: "IPTV als Technologie ist legal. Entscheidend ist, dass die genutzten Inhalte aus legalen Quellen stammen. Bitte beachte die rechtlichen Rahmenbedingungen in deinem Land.",
  },
];
