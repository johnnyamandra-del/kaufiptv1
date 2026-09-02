type Props = { data: Record<string, unknown> | Record<string, unknown>[] };

/** Rendert Schema.org JSON-LD. Server-Komponente, kein Client-JS. */
export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD ist statisch und stammt aus vertrauenswürdigen Quellen (lib/seo.ts)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
