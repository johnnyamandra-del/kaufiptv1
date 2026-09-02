import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { BlogVisual } from "./BlogVisual";
import { blogPostsByDate, formatDate } from "@/lib/blog";

export function BlogTeaser() {
  const posts = blogPostsByDate.slice(0, 3);

  return (
    <Section
      id="magazin"
      eyebrow="Magazin"
      title={
        <>
          Ratgeber für <span className="text-gradient">dein Heimkino</span>
        </>
      }
      intro="Tipps zu Bild, Ton, Netzwerk und Wohnkomfort – verständlich erklärt."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <BlogVisual type={post.visual} category={post.category} />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-ink-faint">
                  {formatDate(post.date)} · {post.readingMinutes} Min. Lesezeit
                </p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-ink">
                  {post.title}
                </h3>
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

      <Reveal>
        <div className="mt-8 text-center">
          <Link href="/blog" className="link-arrow">
            Alle Beiträge ansehen
            <Icon name="arrow" size={15} />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
