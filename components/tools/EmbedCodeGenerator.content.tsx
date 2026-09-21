import type { ReactNode } from "react";
import Link from "next/link";

export const embedCodeGuide: ReactNode = (
  <>
    <h2>What does embedding a YouTube video do?</h2>
    <p>
      Embedding lets a YouTube video play directly on any website — a blog post, a course page,
      a portfolio — without visitors leaving the page. The video still lives on YouTube: views
      count for the creator, and the familiar player controls work exactly as expected. For
      creators, embeds are free distribution; for site owners, they&apos;re rich content without
      hosting costs.
    </p>
    <h2>Why fixed widths break on mobile</h2>
    <p>
      The default embed code YouTube gives you is 560 pixels wide. On a phone screen that&apos;s
      wider than the viewport, so the video overflows or gets awkwardly squished. The fix is a
      responsive wrapper: a container with <strong>aspect-ratio: 16 / 9</strong> and the iframe
      set to fill it completely. The video then scales to any screen while keeping its shape —
      no black bars, no overflow.
    </p>
    <h2>Privacy-enhanced mode and GDPR</h2>
    <p>
      Standard embeds load cookies from youtube.com the moment the page loads, which can be a
      problem under GDPR and similar privacy laws. Privacy-enhanced mode serves the player from{" "}
      <strong>youtube-nocookie.com</strong> instead, which doesn&apos;t store tracking cookies
      until the visitor actually plays the video. If your audience is in the EU, turn it on —
      it costs you nothing and keeps you compliant. (This isn&apos;t legal advice; check your
      local requirements.)
    </p>
    <h2>When videos refuse to embed</h2>
    <p>
      Creators can disable embedding in YouTube Studio, and some music videos are restricted by
      rights holders. If a video won&apos;t embed, that&apos;s the owner&apos;s choice — respect
      it and link to the video instead. Never try to circumvent embedding restrictions.
    </p>
    <h2>Start times for tutorials</h2>
    <p>
      If you&apos;re embedding a long tutorial but only need one section, set a start time so
      the video opens at the relevant moment. It&apos;s a small courtesy that dramatically
      improves the experience for your readers. For building full chapter lists instead, use our{" "}
      <Link href="/tools/youtube-timestamp-link-generator">Timestamp Link Generator</Link>.
    </p>
  </>
);

export const embedCodeFaqs = [
  {
    q: "Why won't a YouTube video embed on my site?",
    a: "The most common reason is that the creator disabled embedding in YouTube Studio, or the video has copyright restrictions (common with music content). Some videos are also region-restricted. If embedding is blocked, link to the video instead — don't try to work around the restriction.",
  },
  {
    q: "How do I make a YouTube embed responsive?",
    a: "Wrap the iframe in a container with aspect-ratio: 16 / 9 and set the iframe to width: 100% and height: 100%. This makes the video scale to any screen size while keeping its 16:9 shape, instead of overflowing on mobile.",
  },
  {
    q: "Why doesn't autoplay work with sound?",
    a: "All major browsers block autoplay with sound to protect users from unexpected audio. A video will only autoplay if it starts muted (mute=1) or if the visitor has previously interacted with your site. This is a browser policy, not something embed code can override.",
  },
  {
    q: "What's the difference between youtube.com and youtube-nocookie.com embeds?",
    a: "The standard youtube.com embed sets tracking cookies as soon as the page loads. The youtube-nocookie.com (privacy-enhanced) version doesn't store cookies until the visitor presses play. Functionally the player is identical; the nocookie version is the safer choice for privacy regulations like GDPR.",
  },
  {
    q: "Does embedding someone's video hurt the creator?",
    a: "No — it helps them. Embedded views count toward the video's total view count, and the creator still earns ad revenue from ads shown in the embedded player. Embedding is free distribution for creators, which is why most leave it enabled.",
  },
];
