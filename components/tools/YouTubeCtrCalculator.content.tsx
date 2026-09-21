import type { ReactNode } from "react";
import Link from "next/link";

export const youtubeCtrGuide: ReactNode = (
  <>
    <h2>What click-through rate actually measures</h2>
    <p>
      Click-through rate (CTR) is the percentage of impressions — times your thumbnail and
      title were shown — that turned into views. It is YouTube&apos;s cleanest read on your
      packaging: the video itself hasn&apos;t been watched yet, so CTR isolates how compelling
      your title-thumbnail combination is to the people being shown it. That makes it the
      first metric to check when a good video underperforms. If retention is strong but CTR is
      weak, the content is fine and the packaging is the bottleneck. The calculator above
      gives you the number; YouTube Studio&apos;s Reach tab shows it per video and per traffic
      source.
    </p>
    <h2>There is no universal &quot;good&quot; CTR</h2>
    <p>
      You&apos;ll see benchmarks quoted online, but treat them as rough orientation, not
      targets. CTR varies enormously by niche (entertainment vs. B2B tutorials), by format
      (Shorts behave nothing like long-form), and by traffic source — search impressions
      convert differently than browse or suggested. A 4% CTR can be excellent in one context
      and weak in another. The most useful comparison is against your own channel&apos;s
      history: is this video above or below your recent average for similar content? That
      trend tells you far more than any internet benchmark.
    </p>
    <h2>When CTR is low, fix the packaging first</h2>
    <p>
      A persistently low CTR usually means one of three things: the title is vague, the
      thumbnail is unreadable at small sizes, or the two don&apos;t match — the title
      promises one thing while the thumbnail suggests another. Audit thumbnails on your
      phone at feed size, where most viewing happens: if you can&apos;t read the text or
      identify the subject in under a second, redesign it. Our{" "}
      <Link href="/tools/youtube-title-generator">Title Generator</Link> helps you draft
      titles with clear curiosity gaps, and you can grab any frame for testing with the{" "}
      <Link href="/tools/youtube-thumbnail-downloader">Thumbnail Downloader</Link>. Change
      one element at a time so you learn what moved the number.
    </p>
    <h2>High CTR with low retention is a warning sign</h2>
    <p>
      A tempting title that the video doesn&apos;t deliver on produces clicks followed by
      quick exits — and YouTube notices. Watch time and satisfaction ultimately outweigh CTR
      in how far a video spreads. The healthiest pattern is CTR and average view duration
      rising together: packaging that attracts the right viewers, and content that keeps
      them. If your CTR climbs but retention falls, your packaging is overpromising. Dial
      the title back toward what the video genuinely delivers; honest packaging builds the
      subscriber trust that compounds across uploads.
    </p>
    <h2>Use CTR as a testing loop, not a vanity metric</h2>
    <p>
      YouTube lets you test thumbnails directly in Studio, which turns CTR from a scoreboard
      into a laboratory. Form a hypothesis (&quot;a close-up face will beat the wide
      shot&quot;), run the test, and keep notes on what wins for your audience — patterns
      differ by niche, and your own data beats generic advice. Review CTR alongside
      impressions: a 12% CTR on 500 impressions is noise, while 6% on 500,000 is a real
      signal. For a full pre-publish review that covers packaging plus everything else,
      run through our <Link href="/tools/youtube-upload-checklist">Upload Checklist</Link>{" "}
      before every video goes live.
    </p>
  </>
);

export const youtubeCtrFaqs = [
  {
    q: "What is a good CTR on YouTube?",
    a: "There is no official benchmark, and what counts as good varies by niche, format, and traffic source. As a very rough orientation, many creators see roughly 2–10%, but the most useful comparison is your own channel's history — compare each video against your recent average for similar content rather than chasing an internet number.",
  },
  {
    q: "How is YouTube CTR calculated?",
    a: "Clicks divided by impressions, multiplied by 100. YouTube Studio shows it in Analytics under the Reach tab, broken down by traffic source. Note that not every view counts as a click from an impression — views from external sites, playlists, or direct links may not register impressions the same way.",
  },
  {
    q: "Does a higher CTR mean YouTube will promote my video more?",
    a: "Not directly. CTR tells YouTube your packaging appeals to the audience being shown it, which can earn the video more impressions — but what happens after the click (watch time, satisfaction) matters more for long-term distribution. High CTR with poor retention is worse than moderate CTR with strong retention.",
  },
  {
    q: "Why did my CTR drop on an older video?",
    a: "As YouTube shows a video to broader, less-targeted audiences over time, CTR typically falls — that's normal. A drop can also mean the topic is getting stale or newer competing videos have stronger packaging. Compare against the video's own early performance rather than panicking at the absolute number.",
  },
  {
    q: "How can I improve my YouTube CTR?",
    a: "Make thumbnails readable at phone-feed size with one clear subject and minimal text, write titles with a specific curiosity gap rather than vague labels, and make sure title and thumbnail tell one coherent story. Test one change at a time using YouTube's thumbnail testing feature and track what your specific audience responds to.",
  },
];
