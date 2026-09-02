/**
 * Blog / Magazin – eigenständige, rechtlich unbedenkliche Ratgeber-Artikel
 * rund um Heimkino, Bild, Ton, Netzwerk und Wohnkomfort.
 *
 * Bewusst allgemein gehalten: keine Marken-, Produkt- oder Rechtethemen,
 * kein Bezug zu Streaming-Diensten oder -Anbietern.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

/** Zum Thema passende Illustration (siehe components/BlogVisual.tsx). */
export type BlogVisualType =
  | "home-cinema"
  | "screen-size"
  | "hdmi"
  | "network"
  | "display"
  | "audio"
  | "calibration"
  | "family-night"
  | "energy"
  | "eye-comfort";

export type BlogPost = {
  slug: string;
  category: string;
  visual: BlogVisualType;
  title: string;
  excerpt: string;
  date: string; // ISO (yyyy-mm-dd)
  readingMinutes: number;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "heimkino-wohnzimmer-einrichten",
    category: "Heimkino",
    visual: "home-cinema",
    title: "Das perfekte Heimkino: So richtest du dein Wohnzimmer für Filmabende ein",
    excerpt:
      "Mit ein paar gezielten Handgriffen wird aus dem normalen Wohnzimmer ein echtes Kino-Gefühl – von der Sitzposition bis zur Beleuchtung.",
    date: "2026-08-18",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Ein gutes Heimkino beginnt nicht beim teuersten Gerät, sondern bei der Planung des Raums. Wer Bild, Ton und Sitzposition aufeinander abstimmt, holt aus vorhandener Technik oft mehr heraus als mit einem Neukauf.",
      },
      { type: "h2", text: "Die richtige Sitzposition" },
      {
        type: "p",
        text: "Der Hauptsitzplatz sollte mittig zur Bildfläche stehen. Als Faustregel gilt bei hochauflösenden Inhalten ein Sitzabstand vom etwa 1,5-Fachen der Bilddiagonale. So wirkt das Bild groß, ohne dass einzelne Bildpunkte stören.",
      },
      { type: "h2", text: "Licht gezielt einsetzen" },
      {
        type: "p",
        text: "Direkte Lichtquellen hinter dem Betrachter oder Reflexionen auf der Scheibe kosten Kontrast. Eine dimmbare, indirekte Beleuchtung hinter dem Bildschirm reduziert den Helligkeitssprung zum dunklen Raum und entlastet die Augen.",
      },
      { type: "h2", text: "Ordnung bei den Kabeln" },
      {
        type: "ul",
        items: [
          "Kabel bündeln und beschriften",
          "Steckdosenleiste mit Schalter für Standby-Verbraucher",
          "Geräte mit Abstand aufstellen, damit die Lüftung frei bleibt",
        ],
      },
      {
        type: "p",
        text: "Schon diese drei Bereiche – Sitzplatz, Licht und Verkabelung – machen den größten Unterschied. Das Feintuning der Technik kommt erst danach.",
      },
    ],
  },
  {
    slug: "bildschirmgroesse-sitzabstand",
    category: "Ratgeber",
    visual: "screen-size",
    title: "Welche Bildschirmgröße passt zu deinem Raum? Der Sitzabstand-Guide",
    excerpt:
      "Zu klein wirkt verloren, zu groß ermüdet. So findest du die passende Bilddiagonale für dein Sofa.",
    date: "2026-08-05",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        text: "Die passende Größe hängt vor allem vom Abstand zwischen Sofa und Bildfläche ab – und von der Auflösung des Materials.",
      },
      { type: "h2", text: "Die Faustformel" },
      {
        type: "p",
        text: "Bei hochauflösendem Material kannst du näher sitzen, ohne dass das Bild unruhig wird. Ein Sitzabstand von etwa dem 1,5-Fachen der Bilddiagonale ist ein guter Startwert. Bei 2,5 Metern Abstand landest du damit rechnerisch bei rund 65 Zoll.",
      },
      { type: "h2", text: "Raum und Möbel einbeziehen" },
      {
        type: "p",
        text: "Miss den tatsächlichen Abstand zur Sitzfläche, nicht zur Wand. Berücksichtige außerdem die Höhe: Die Bildmitte sollte ungefähr auf Augenhöhe der sitzenden Person liegen.",
      },
      { type: "h2", text: "Im Zweifel eine Nummer größer" },
      {
        type: "p",
        text: "Die meisten Menschen gewöhnen sich schnell an ein größeres Bild und empfinden es später selten als zu groß. Wichtiger als ein paar Zoll ist eine blendfreie Aufstellung.",
      },
    ],
  },
  {
    slug: "hdmi-earc-optisches-kabel",
    category: "Technik",
    visual: "hdmi",
    title: "HDMI, eARC und optisches Kabel: Welche Verbindung wofür?",
    excerpt:
      "Drei gängige Anschlüsse, drei Einsatzzwecke. Ein kurzer Überblick, welcher Stecker wann sinnvoll ist.",
    date: "2026-07-22",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Bei der Verkabelung von Bild- und Tongeräten tauchen immer wieder dieselben Anschlüsse auf. Wer ihre Stärken kennt, spart sich Fehlkäufe.",
      },
      { type: "h2", text: "HDMI für Bild und Ton" },
      {
        type: "p",
        text: "HDMI überträgt Bild und Ton über ein einziges Kabel. Für hohe Auflösungen und Bildwiederholraten lohnt sich ein Kabel mit ausreichender Bandbreite, erkennbar an Bezeichnungen wie „High Speed“ oder „Ultra High Speed“.",
      },
      { type: "h2", text: "eARC für den Tonrückkanal" },
      {
        type: "p",
        text: "Über den erweiterten Audio-Rückkanal (eARC) schickt der Bildschirm den Ton an Soundbar oder Verstärker zurück – auch aufwendigere Tonformate. Voraussetzung: Beide Geräte unterstützen eARC und das Kabel ist dafür geeignet.",
      },
      { type: "h2", text: "Optisches Kabel als Alternative" },
      {
        type: "p",
        text: "Der optische Ausgang (Toslink) ist weit verbreitet und unempfindlich gegen elektrische Störungen, überträgt aber nicht die neuesten Tonformate. Für Stereo und einfache Mehrkanaltonspuren reicht er problemlos.",
      },
    ],
  },
  {
    slug: "wlan-wohnzimmer-optimieren",
    category: "Netzwerk",
    visual: "network",
    title: "WLAN im Wohnzimmer optimieren: Tipps für eine stabile Verbindung",
    excerpt:
      "Ruckler und Ladepausen liegen oft am Funknetz, nicht am Anschluss. Mit diesen Schritten wird die Verbindung zuverlässiger.",
    date: "2026-07-09",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Eine stabile Verbindung ist im Wohnzimmer meist wichtiger als der maximale Spitzenwert. Häufig genügen kleine Anpassungen.",
      },
      { type: "h2", text: "Router-Standort prüfen" },
      {
        type: "p",
        text: "Der Router gehört möglichst frei und leicht erhöht in den Raum – nicht in den Schrank und nicht hinter Metall. Jede Wand und jedes große Möbelstück dämpft das Signal.",
      },
      { type: "h2", text: "Das passende Frequenzband" },
      {
        type: "p",
        text: "Das 5-GHz-Band ist schneller und weniger überfüllt, hat aber eine geringere Reichweite. Für Geräte in der Nähe des Routers ist es ideal; für weiter entfernte Räume kann 2,4 GHz stabiler sein.",
      },
      { type: "h2", text: "Kabel schlägt Funk" },
      {
        type: "p",
        text: "Wo möglich, ist eine Verbindung per Netzwerkkabel oder über das Stromnetz (Powerline) die zuverlässigste Lösung. Ein kurzes Kabel zum Sideboard wirkt oft Wunder.",
      },
      {
        type: "ul",
        items: [
          "Router-Firmware aktuell halten",
          "Bei vielen Nachbarnetzen den WLAN-Kanal wechseln",
          "Für große Wohnungen ein Mesh-System einsetzen",
        ],
      },
    ],
  },
  {
    slug: "oled-qled-mini-led-erklaert",
    category: "Technik",
    visual: "display",
    title: "OLED, QLED und Mini-LED: Display-Technologien einfach erklärt",
    excerpt:
      "Die Kürzel auf dem Datenblatt klingen ähnlich, bedeuten aber Unterschiedliches. Was dahintersteckt – ohne Fachchinesisch.",
    date: "2026-06-24",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Beim Bildschirmkauf begegnen einem vor allem drei Begriffe. Sie beschreiben, wie das Bild erzeugt und beleuchtet wird.",
      },
      { type: "h2", text: "OLED" },
      {
        type: "p",
        text: "Jeder Bildpunkt leuchtet selbst und lässt sich einzeln vollständig abschalten. Das ergibt sehr tiefes Schwarz und hohen Kontrast, besonders in abgedunkelten Räumen.",
      },
      { type: "h2", text: "QLED bzw. LCD mit Quantum Dots" },
      {
        type: "p",
        text: "Hier sorgt eine Hintergrundbeleuchtung für Helligkeit, eine Quantum-Dot-Schicht verbessert die Farben. Solche Geräte werden oft sehr hell und eignen sich gut für helle Wohnzimmer.",
      },
      { type: "h2", text: "Mini-LED" },
      {
        type: "p",
        text: "Eine Weiterentwicklung der Hintergrundbeleuchtung mit vielen kleinen LEDs in einzeln steuerbaren Zonen. Das verbessert den Kontrast gegenüber klassischem LCD, ohne die Helligkeit zu opfern.",
      },
      {
        type: "p",
        text: "Keine Technik ist pauschal „die beste“ – entscheidend sind Raumhelligkeit, Blickwinkel und Budget.",
      },
    ],
  },
  {
    slug: "soundbar-receiver-lautsprecher-vergleich",
    category: "Audio",
    visual: "audio",
    title: "Soundbar, Verstärker oder Lautsprecher-Set: Was bringt den besten Ton?",
    excerpt:
      "Guter Klang muss nicht kompliziert sein. Drei Wege zu besserem Ton – mit ihren Vor- und Nachteilen.",
    date: "2026-06-10",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Der eingebaute Lautsprecher flacher Bildschirme ist meist der Schwachpunkt. Für spürbar besseren Ton gibt es drei gängige Ansätze.",
      },
      { type: "h2", text: "Soundbar" },
      {
        type: "p",
        text: "Eine einzelne Leiste unter dem Bildschirm, oft mit separatem Subwoofer. Einfach aufzustellen, meist nur ein Kabel, deutlicher Sprung gegenüber den TV-Lautsprechern. Ideal für alle, die es unkompliziert mögen.",
      },
      { type: "h2", text: "Verstärker mit einzelnen Lautsprechern" },
      {
        type: "p",
        text: "Die flexibelste Lösung: ein Verstärker plus einzelne Boxen, später erweiterbar bis zum Raumklang. Dafür braucht es Platz, Verkabelung und etwas Einrichtungszeit.",
      },
      { type: "h2", text: "Kompaktes Stereo-Set" },
      {
        type: "p",
        text: "Zwei gute Regallautsprecher an einem kleinen Verstärker klingen für Filme und Musik oft erstaunlich ausgewogen – ein guter Mittelweg.",
      },
      {
        type: "p",
        text: "Wichtig in allen Fällen: Lautsprecher möglichst auf Ohrhöhe ausrichten und etwas Abstand zur Wand lassen.",
      },
    ],
  },
  {
    slug: "bildeinstellungen-richtig-einstellen",
    category: "Ratgeber",
    visual: "calibration",
    title: "Bildeinstellungen richtig einstellen: Mehr aus deinem Fernseher holen",
    excerpt:
      "Ab Werk ist das Bild oft zu kühl und zu grell. Mit wenigen Reglern wird es natürlicher.",
    date: "2026-05-27",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        text: "Viele Geräte sind im Auslieferungszustand auf maximale Wirkung im hellen Ladengeschäft getrimmt. Zu Hause wirkt das schnell übertrieben.",
      },
      { type: "h2", text: "Bildmodus wechseln" },
      {
        type: "p",
        text: "Ein Modus wie „Film“, „Kino“ oder „Filmmaker“ kommt der Vorlage meist am nächsten. Einstellungen wie „Dynamisch“ oder „Lebendig“ verfälschen Farben und Helligkeit.",
      },
      { type: "h2", text: "Zwischenbildberechnung reduzieren" },
      {
        type: "p",
        text: "Die Glättung von Bewegungen lässt Kinofilme oft nach billiger Videoaufnahme aussehen. Es lohnt sich, sie abzuschalten oder auf eine niedrige Stufe zu stellen.",
      },
      { type: "h2", text: "Helligkeit an den Raum anpassen" },
      {
        type: "p",
        text: "Am Abend darf der Bildschirm deutlich dunkler sein als tagsüber. Viele Geräte regeln das automatisch – wer es manuell macht, spart Energie und schont die Augen.",
      },
    ],
  },
  {
    slug: "familien-filmabend-ideen",
    category: "Lifestyle",
    visual: "family-night",
    title: "Gemütlicher Filmabend mit der Familie: Ideen für jede Altersgruppe",
    excerpt:
      "Ein fester Filmabend pro Woche schafft Routine und gemeinsame Erinnerungen. So wird er für alle schön.",
    date: "2026-05-13",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        text: "Ein regelmäßiger Filmabend braucht wenig Aufwand und bringt die Familie zusammen. Mit etwas Planung fühlt er sich besonders an.",
      },
      { type: "h2", text: "Die Auswahl abwechselnd treffen" },
      {
        type: "p",
        text: "Wenn jede Woche ein anderes Familienmitglied den Film aussucht, kommt jeder einmal zum Zug – und alle entdecken Neues.",
      },
      { type: "h2", text: "Die Umgebung vorbereiten" },
      {
        type: "ul",
        items: [
          "Decken und Kissen bereitlegen",
          "Snacks vorher portionieren",
          "Telefone in einen anderen Raum legen",
          "Licht dimmen statt komplett ausschalten",
        ],
      },
      { type: "h2", text: "Kurz nachbesprechen" },
      {
        type: "p",
        text: "Ein paar Minuten Austausch nach dem Abspann – Lieblingsszene, Musik, Figuren – machen aus dem Schauen ein gemeinsames Erlebnis, gerade mit Kindern.",
      },
    ],
  },
  {
    slug: "energie-sparen-beim-fernsehen",
    category: "Ratgeber",
    visual: "energy",
    title: "Energie sparen beim Fernsehen: Verbrauch verstehen und senken",
    excerpt:
      "Große Bildschirme verbrauchen mehr – aber mit ein paar Einstellungen lässt sich der Stromhunger deutlich zügeln.",
    date: "2026-04-29",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        text: "Der Stromverbrauch eines Bildschirms hängt vor allem von Größe, Helligkeit und Bildinhalt ab. An mehreren Stellschrauben lässt sich sparen, ohne dass das Bild leidet.",
      },
      { type: "h2", text: "Helligkeit senken" },
      {
        type: "p",
        text: "Die Hintergrundbeleuchtung ist der größte Einzelposten. In abgedunkelten Räumen reicht ein Bruchteil der maximalen Helligkeit völlig aus.",
      },
      { type: "h2", text: "Automatische Helligkeit nutzen" },
      {
        type: "p",
        text: "Ein Umgebungslichtsensor passt das Bild an die Raumhelligkeit an und senkt den Verbrauch am Abend spürbar.",
      },
      { type: "h2", text: "Standby ernst nehmen" },
      {
        type: "p",
        text: "Mehrere Geräte im Bereitschaftsbetrieb summieren sich übers Jahr. Eine schaltbare Steckdosenleiste trennt Bildschirm, Spielekonsole und Lautsprecher gemeinsam vom Netz.",
      },
    ],
  },
  {
    slug: "entspannt-schauen-bei-wenig-licht",
    category: "Wohlbefinden",
    visual: "eye-comfort",
    title: "Entspannt schauen bei wenig Licht: Die Augen am Abend schonen",
    excerpt:
      "Der grelle Bildschirm im dunklen Raum ermüdet die Augen. Mit indirektem Licht und den richtigen Einstellungen wird es angenehmer.",
    date: "2026-04-15",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        text: "Wer abends im dunklen Zimmer auf einen hellen Bildschirm schaut, kennt das Gefühl müder Augen. Der starke Kontrast zwischen Bild und Umgebung ist die Hauptursache.",
      },
      { type: "h2", text: "Indirektes Licht einsetzen" },
      {
        type: "p",
        text: "Eine gedämpfte Lichtquelle hinter dem Bildschirm oder an der Wand dahinter verkleinert den Helligkeitssprung. Neutralweißes Licht wirkt dabei ruhiger als sehr warmes oder sehr kaltes.",
      },
      { type: "h2", text: "Das Bild an die Uhrzeit anpassen" },
      {
        type: "p",
        text: "Am Abend dürfen Helligkeit und Blauanteil sinken. Viele Geräte bieten dafür Zeitpläne oder einen Nachtmodus.",
      },
      { type: "h2", text: "Pausen einplanen" },
      {
        type: "p",
        text: "Der Blick sollte gelegentlich in die Ferne schweifen. Die bekannte 20-20-20-Regel – alle 20 Minuten für 20 Sekunden etwas in rund 6 Metern Entfernung ansehen – lässt sich auch beim Filmabend locker einbauen.",
      },
    ],
  },
];

export const blogPostsByDate = [...blogPosts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
