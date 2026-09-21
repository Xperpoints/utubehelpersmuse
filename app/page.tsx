import Link from "next/link";
import { tools } from "@/lib/tools";
import { getAllPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";

const platformSections = [
  { name: "YouTube", categories: ["SEO & Discovery", "Channel Branding", "Content Planning", "Utilities", "Analytics"] as const },
  { name: "Instagram", categories: ["Instagram"] as const },
  { name: "TikTok", categories: ["TikTok"] as const },
  { name: "Facebook", categories: ["Facebook"] as const },
  { name: "WhatsApp", categories: ["WhatsApp"] as const },
] as const;

const siteFaqs = [
  {
    q: "Are UtubeHelpers tools really free?",
    a: "Yes. Every tool on this site is free to use with no signup, no account, and no hidden paywalls. Most tools run entirely in your browser, which keeps our costs low and your data private.",
  },
  {
    q: "Do I need to create an account to use the tools?",
    a: "No. We deliberately built every tool to work without registration. Open the tool, use it, copy your result — that's it.",
  },
  {
    q: "Is my data safe when I use these tools?",
    a: "Most tools process everything locally in your browser — nothing you type is sent to our servers. We don't ask for your YouTube login or any personal information to use the tools.",
  },
  {
    q: "Who writes the guides on the blog?",
    a: "Our founder, Hussnain, researches, reviews, and publishes every guide — practical, step-by-step advice focused on tactics creators can actually use rather than recycled generic tips.",
  },
  {
    q: "Is UtubeHelpers affiliated with YouTube?",
    a: "No. UtubeHelpers is an independent project and is not affiliated with, endorsed by, or sponsored by YouTube or Google LLC.",
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            100% free · No signup
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Free creator tools for YouTube, Instagram, TikTok, Facebook &amp; WhatsApp
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Generate better tags, titles, and captions. Download thumbnails. Estimate your
            engagement. Plan content that gets watched. Every tool is free — built for creators,
            on every platform that matters.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-700"
            >
              Browse all 40 free tools
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Read the growth guides
            </Link>
          </div>
        </div>
      </section>

      {/* Tools by category */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Every tool, free</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Forty purpose-built utilities for creators on five platforms — YouTube, Instagram,
          TikTok, Facebook, and WhatsApp. Pick one and get to work — no account needed.
        </p>

        {platformSections.map((platform) => {
          const platformTools = tools.filter((t) =>
            (platform.categories as readonly string[]).includes(t.category)
          );
          if (platformTools.length === 0) return null;
          return (
            <div key={platform.name} className="mt-10">
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                {platform.name} tools
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {platformTools.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/tools/${t.slug}`}
                    className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
                  >
                    <p className="font-semibold text-slate-900 group-hover:text-red-600">{t.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Why section */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why creators use UtubeHelpers</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-2xl">🔓</p>
              <h3 className="mt-3 font-bold text-slate-900">No signup, ever</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We hate sign-up walls as much as you do. Every tool works the second the page
                loads — no email, no account, no trial expiring.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-2xl">⚡</p>
              <h3 className="mt-3 font-bold text-slate-900">Fast and private</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Most tools run entirely in your browser — nothing you type is sent to our servers
                — and pages load in a blink.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-2xl">🎯</p>
              <h3 className="mt-3 font-bold text-slate-900">Built for creators</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Every tool solves one real creator problem, and every guide walks through a
                tactic step by step — no recycled tips, no fluff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Latest growth guides</h2>
          <Link href="/blog" className="text-sm font-semibold text-red-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {recentPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-red-300 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                {p.tags[0] ?? "Guide"}
              </p>
              <h3 className="mt-2 font-bold leading-snug text-slate-900 group-hover:text-red-600">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.description}</p>
              <p className="mt-3 text-xs text-slate-500">
                {formatDate(p.date)} · {p.readingMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Common questions</h2>
        <div className="mt-6 space-y-3">
          {siteFaqs.map((f) => (
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
    </div>
  );
}
