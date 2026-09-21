import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { getAuthor } from "@/lib/authors";
import { formatDate } from "@/lib/format";
import JsonLd from "@/components/JsonLd";
import AuthorCard from "@/components/AuthorCard";

const SITE_URL = "https://utubehelpers.com";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      keywords: post.tags,
      alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.description,
        url: `${SITE_URL}/blog/${post.slug}`,
        publishedTime: post.date,
        authors: [getAuthor(post.author).name],
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
      },
    };
  } catch {
    return { title: "Guide not found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const author = getAuthor(post.author);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);
  const relatedFallback = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : relatedFallback;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: author.name,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "UtubeHelpers",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const faqJsonLd =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={faqJsonLd ? [articleJsonLd, faqJsonLd] : articleJsonLd} />

      <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-red-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-red-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{post.title}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
            {author.initials}
          </span>
          <span className="font-semibold text-slate-700">{author.name}</span>
        </span>
        <span>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingMinutes} min read</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose-custom mt-8 text-slate-700">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      {post.faqs.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {post.faqs.map((f) => (
              <details key={f.q} className="rounded-lg border border-slate-200 bg-white px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="mr-2 text-red-600">+</span>
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <AuthorCard slug={post.author} />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Keep reading</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {relatedPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-red-300 hover:shadow-md"
            >
              <p className="font-semibold leading-snug text-slate-900">{p.title}</p>
              <p className="mt-2 text-xs text-slate-500">
                {formatDate(p.date)} · {p.readingMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
