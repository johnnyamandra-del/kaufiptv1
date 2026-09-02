import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { BlogVisual } from "@/components/BlogVisual";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { blogPostsByDate, formatDate } from "@/lib/blog";

export const metadata: Metadata = pageMeta({
  title: "Magazin & Ratgeber",
  description:
    "Praktische Tipps rund um Heimkino, Bild, Ton, Netzwerk und Wohnkomfort – verständlich erklärt und regelmäßig erweitert.",
  path: "/blog",
  keywords: ["Heimkino Tipps", "Bildeinstellungen", "WLAN optimieren", "Soundbar Ratgeber"],
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Startseite", path: "/" },
          { name: "Magazin", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Magazin"
        title={
          <>
            Ratgeber für <span className="text-gradient">dein Heimkino</span>
          </>
        }
        intro="Tipps zu Bild, Ton, Netzwerk und Wohnkomfort – ohne Fachchinesisch, für ein besseres Erlebnis zu Hause."
      />

      <section className="section pt-8">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogPostsByDate.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40"
                >
                  <BlogVisual type={post.visual} category={post.category} />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs text-ink-faint">
                      {formatDate(post.date)} · {post.readingMinutes} Min. Lesezeit
                    </p>
                    <h2 className="mt-2 text-base font-semibold leading-snug text-ink">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="link-arrow mt-4">
                      Weiterlesen
                      <Icon name="arrow" size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
