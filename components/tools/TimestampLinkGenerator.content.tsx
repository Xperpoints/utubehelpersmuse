import type { ReactNode } from "react";
import Link from "next/link";

export const timestampLinkGuide: ReactNode = (
  <>
    <h2>What are video chapters?</h2>
    <p>
      Chapters split your video into labeled segments that viewers can jump between on the
      progress bar. You create them by listing timestamps in your description — YouTube does the
      rest automatically. They&apos;re one of the highest-ROI additions you can make: two
      minutes of work that improves every future viewing session.
    </p>
    <h2>Chapters help your SEO too</h2>
    <p>
      Google often shows &quot;key moments&quot; from chaptered videos directly in search
      results, with links that jump to the exact second. That means your video can rank for
      specific questions answered three minutes in — not just for the video&apos;s main topic.
      Well-labeled chapters effectively multiply the search queries a single video can capture.
    </p>
    <h2>The rules YouTube enforces</h2>
    <p>
      Three requirements, all strict: you need <strong>at least 3 chapters</strong>, the first
      must start at <strong>00:00</strong>, and each chapter must be at least <strong>10 seconds
      long</strong>. Miss any of these and YouTube silently ignores all of them — no error, no
      warning. The generator above sorts your chapters and reminds you of the 00:00 rule so you
      don&apos;t get bitten.
    </p>
    <h2>Use timestamps beyond the description</h2>
    <p>
      Pin a comment with the chapter list on long videos — many viewers read comments before
      watching. And when you share a video with someone, link to the exact moment that matters
      using a timestamp link (the per-row links above) instead of making them scrub through 20
      minutes. It&apos;s a small courtesy that gets your content watched instead of closed.
    </p>
    <h2>Write labels like mini-titles</h2>
    <p>
      &quot;Part 2&quot; tells nobody anything. &quot;The mistake that cost me $500&quot; makes
      people click. Each chapter label is a tiny headline competing for attention on the
      progress bar — write them with the same care you&apos;d give a{" "}
      <Link href="/tools/youtube-title-generator">video title</Link>.
    </p>
  </>
);

export const timestampLinkFaqs = [
  {
    q: "How many chapters should a YouTube video have?",
    a: "There's no maximum, but aim for one chapter per distinct section or topic — most 10-minute videos work well with 4–8 chapters. The hard requirement is a minimum of 3 chapters, with the first starting at 00:00 and each at least 10 seconds long.",
  },
  {
    q: "Why aren't my chapters showing on the progress bar?",
    a: "The usual culprits: fewer than 3 timestamps, the first one isn't 00:00, a chapter shorter than 10 seconds, or a typo in the timestamp format. Chapters also don't appear if your video has a copyright claim or is unsuitable for some viewers. Fix the formatting and they typically appear within a few hours.",
  },
  {
    q: "What's the difference between t=90 and t=1m30s in a link?",
    a: "Both work and mean the same thing — 90 seconds into the video. The t=90 format (seconds) is simpler and what this tool generates. The 1m30s style is just YouTube's human-readable alternative you'll see in share dialogs.",
  },
  {
    q: "Do chapters work on YouTube Shorts?",
    a: "No. Chapters are a long-form feature — Shorts are under 60 seconds and play in a swipe feed where chapter navigation doesn't apply. Focus on the hook instead; our script generator can help structure it.",
  },
  {
    q: "Can I add chapters after a video is already published?",
    a: "Yes. Edit the description in YouTube Studio, add your timestamp list, and save. Chapters usually appear within a few hours. It's one of the easiest retroactive improvements you can make to your back catalog.",
  },
];
