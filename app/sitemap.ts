import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  type Row = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    lastModified?: Date;
  };

  const routes: Row[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/pakete", priority: 0.9, changeFrequency: "weekly" },
    { path: "/funktionen", priority: 0.7, changeFrequency: "monthly" },
    { path: "/geraete", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.5, changeFrequency: "yearly" },
    { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
    { path: "/agb", priority: 0.2, changeFrequency: "yearly" },
    { path: "/widerruf", priority: 0.2, changeFrequency: "yearly" },
  ];

  for (const post of blogPosts) {
    routes.push({
      path: `/blog/${post.slug}`,
      priority: 0.6,
      changeFrequency: "yearly",
      lastModified: new Date(post.date + "T00:00:00"),
    });
  }

  return routes.map((r) => ({
    url: new URL(r.path, site.url).toString(),
    lastModified: r.lastModified ?? now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
