import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "40 Free Creator Tools — YouTube, Instagram, TikTok, Facebook, WhatsApp",
  description:
    "Browse all 40 free creator tools: YouTube tag, title, and keyword generators, Instagram caption and hashtag tools, TikTok idea generators, Facebook utilities, and WhatsApp link and QR tools. No signup required.",
  alternates: { canonical: "https://utubehelpers.com/tools" },
};

const platforms = [
  {
    name: "YouTube",
    blurb: "The core creator toolkit — SEO, packaging, analytics, and workflow helpers.",
    categories: ["SEO & Discovery", "Channel Branding", "Content Planning", "Utilities", "Analytics"] as const,
  },
  { name: "Instagram", blurb: "Hashtags, captions, bios, Reels ideas, and engagement tools.", categories: ["Instagram"] as const },
  { name: "TikTok", blurb: "Hashtags, captions, video ideas, and engagement tools for TikTok.", categories: ["TikTok"] as const },
  { name: "Facebook", blurb: "Page names, post ideas, character counter, and engagement tools.", categories: ["Facebook"] as const },
  { name: "WhatsApp", blurb: "Click-to-chat links, text formatting, and QR codes for your audience.", categories: ["WhatsApp"] as const },
] as const;

export default function ToolsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Free creator tools
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
        Forty free utilities for creators on YouTube, Instagram, TikTok, Facebook, and WhatsApp —
        from naming your channel to optimizing the post you publish tomorrow. No accounts, no
        paywalls, no watermarks.
      </p>

      {platforms.map((platform) => (
        <section key={platform.name} className="mt-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">{platform.name} tools</h2>
          <p className="mt-1 text-sm text-slate-600">{platform.blurb}</p>
          {platform.categories.map((cat) => {
            const catTools = tools.filter((t) => t.category === cat);
            if (catTools.length === 0) return null;
            return (
              <div key={cat} className="mt-6">
                {platform.name === "YouTube" && (
                  <h3 className="text-lg font-bold text-slate-800">{cat}</h3>
                )}
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catTools.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
                    >
                      <p className="font-bold text-slate-900 group-hover:text-red-600">{t.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.description}</p>
                      <span className="mt-3 inline-block text-sm font-semibold text-red-600">
                        Use it free →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
}
