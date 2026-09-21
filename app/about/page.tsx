import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "UtubeHelpers was founded by Hussnain in 2026 to give YouTube creators free, no-signup tools and honest growth guides. Learn who we are and why we built this.",
  alternates: { canonical: "https://utubehelpers.com/about" },
};

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hussnain",
    url: "https://utubehelpers.com/about",
    jobTitle: "Founder of UtubeHelpers",
    description:
      "Founder of UtubeHelpers. Builds free YouTube creator tools and writes practical channel-growth guides based on hands-on experience.",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd data={personJsonLd} />
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        About UtubeHelpers
      </h1>

      <div className="prose-custom mt-6 text-slate-700">
        <p>
          Hi, I&apos;m <strong>Hussnain</strong>, the founder of UtubeHelpers. I started this site
          in 2026 for a simple reason: every useful creator tool I found was either expensive,
          locked behind a signup wall, or stuffed with upsells. The free ones were usually
          abandoned, ad-riddled, or just plain bad.
        </p>
        <p>
          So I built the tools I wished existed — fast, free, no-account utilities that do one job
          well. A tag generator that doesn&apos;t ask for your email. A thumbnail downloader that
          just works. A revenue calculator with honest numbers instead of hype.
        </p>

        <h2>What this site is</h2>
        <ul>
          <li>
            <strong>40 free tools</strong> for creators on YouTube, Instagram, TikTok, Facebook,
            and WhatsApp — SEO helpers, branding utilities, content planners, and calculators.
          </li>
          <li>
            <strong>Practical growth guides</strong> — step-by-step walkthroughs of widely used
            creator tactics, written plainly, including the common mistakes to avoid.
          </li>
          <li>
            <strong>Privacy-respecting software.</strong> Most tools run entirely in your browser.
            We don&apos;t ask for your YouTube login, and we don&apos;t sell data.
          </li>
        </ul>

        <h2>What this site is not</h2>
        <ul>
          <li>Not a get-rich-quick scheme. Growing on YouTube takes consistent, good work.</li>
          <li>
            Not affiliated with YouTube or Google. We&apos;re an independent project built by a
            creator.
          </li>
          <li>
            Not a replacement for thinking. Tools amplify good strategy — they don&apos;t replace
            making videos people want to watch.
          </li>
        </ul>

        <h2>How we make money</h2>
        <p>
          Right now, we don&apos;t — there are no ads, paywalls, or paid tiers. In the future
          we may show discreet ads to cover hosting costs. The tools themselves will stay free,
          and we&apos;ll never sell your personal data.
        </p>

        <h2>Editorial standards</h2>
        <p>
          Every guide on this site is researched, reviewed, and published by me. I use AI as
          a drafting aid, then verify the claims, cut filler, and only publish what I&apos;d
          stand behind. When I don&apos;t know something, I say so. When numbers are estimates, I
          label them as estimates. If you ever catch an error,{" "}
          <Link href="/contact">tell me</Link> — I&apos;ll fix it and credit you.
        </p>

        <h2>Get in touch</h2>
        <p>
          Questions, tool requests, corrections, or just want to say hi? Head to the{" "}
          <Link href="/contact">contact page</Link> — I read everything.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
            H
          </span>
          <div>
            <p className="font-bold text-slate-900">Hussnain</p>
            <p className="text-sm text-slate-600">Founder, UtubeHelpers · Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
