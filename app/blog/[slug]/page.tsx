import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { BlogVisual } from "@/components/BlogVisual";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/content";
import { blogPosts, blogPostsByDate, getPost, formatDate } from "@/lib/blog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = blogPostsByDate.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "de-DE",
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <JsonLd
        data={[
          articleLd,
          breadcrumbLd([
            { name: "Startseite", path: "/" },
            { name: "Magazin", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <PageHero eyebrow={post.category} title={post.title} intro={post.excerpt}>
        <p className="text-xs text-ink-faint">
          {formatDate(post.date)} · {post.readingMinutes} Min. Lesezeit
        </p>
        <BlogVisual
          type={post.visual}
          category={post.category}
          variant="banner"
          className="mt-8 rounded-2xl border border-surface-border"
        />
      </PageHero>

      <article className="section pt-8">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-ink-muted sm:text-base [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:marker:text-brand-cyan">
                {post.body.map((block, i) => {
                  if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
                  if (block.type === "ul")
                    return (
                      <ul key={i}>
                        {block.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    );
                  return <p key={i}>{block.text}</p>;
                })}
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12 border-t border-surface-border pt-6">
                <Link href="/blog" className="link-arrow">
                  <Icon name="arrow" size={15} className="rotate-180" />
                  Zurück zum Magazin
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="section pt-0">
        <div className="container-x">
          <h2 className="mb-8 text-2xl font-semibold text-ink">Weitere Beiträge</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="text-[11px] font-medium text-brand-cyan">
                    {p.category}
                  </span>
                  <h3 className="mt-2 flex-1 text-sm font-semibold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <span className="link-arrow mt-3">
                    Lesen
                    <Icon name="arrow" size={13} />
                  </span>
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
