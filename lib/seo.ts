import type { Metadata } from "next";
import { site, packages, faqs } from "./content";

export const metadataBase = new URL(site.url);

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

/** Baut konsistente Metadaten inkl. Open Graph & Twitter für jede Seite. */
export function pageMeta({
  title,
  description,
  path = "/",
  keywords,
}: PageMetaInput): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle =
    path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      // Bild kommt aus app/opengraph-image.tsx (Next.js File-Convention)
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Schema.org structured data                                         */
/* ------------------------------------------------------------------ */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    slogan: "Dein Entertainment. Einfach. Flexibel. Modern.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: site.whatsappUrl,
        availableLanguage: ["de"],
      },
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "de-DE",
  };
}

export function productLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${site.name} IPTV – Starterpaket`,
    description:
      "IPTV-Zugang mit 15.000+ Live-Kanälen und 40.000+ Filmen & Serien (VOD) in HD und, wo verfügbar, 4K. Kompatibel mit Smart TV, Fire TV, Android TV, Smartphone, Tablet und Computer.",
    brand: { "@type": "Brand", name: site.name },
    offers: packages.map((p) => ({
      "@type": "Offer",
      name: `Starterpaket – ${p.duration}`,
      price: p.price.replace(",", "."),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/pakete`,
    })),
  };
}

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site.url).toString(),
    })),
  };
}
