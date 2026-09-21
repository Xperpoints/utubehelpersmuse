import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Creator Growth Guides — YouTube, Instagram, TikTok & More",
  description:
    "Practical creator growth guides for YouTube, Instagram, TikTok, Facebook, and WhatsApp: SEO, thumbnails, titles, monetization, and content strategy. No fluff, no hype.",
  alternates: { canonical: "https://utubehelpers.com/blog" },
};

const PER_PAGE = 24;

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const posts = getAllPosts();
  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  const currentPage = Math.min(totalPages, Math.max(1, parseInt(page ?? "1", 10) || 1));
  const pagePosts = posts.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Creator growth guides
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
        Practical, step-by-step guides to growing on YouTube, Instagram, TikTok, Facebook, and
        WhatsApp — SEO, packaging, retention, and monetization. Written by our founder, focused
        on tactics you can actually use.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pagePosts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
          >
            <div className="flex flex-wrap gap-2">
              {p.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-3 font-bold leading-snug text-slate-900 group-hover:text-red-600">
              {p.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
            <p className="mt-4 text-xs text-slate-500">
              {formatDate(p.date)} · {p.readingMinutes} min read
            </p>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Blog pages">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              href={n === 1 ? "/blog" : `/blog?page=${n}`}
              aria-current={n === currentPage ? "page" : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                n === currentPage
                  ? "bg-red-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {n}
            </Link>
          ))}
        </nav>
      )}

      {posts.length === 0 && (
        <p className="mt-10 text-slate-600">New guides are on the way — check back soon.</p>
      )}
    </div>
  );
}
