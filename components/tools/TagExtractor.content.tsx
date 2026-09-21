import type { ReactNode } from "react";
import Link from "next/link";

export const tagExtractorGuide: ReactNode = (
  <>
    <h2>Why study a competitor&apos;s tags?</h2>
    <p>
      Tags won&apos;t tell you why a video went viral — but they do reveal how an experienced
      creator categorizes their content. When you look at the tags on a top-performing video in
      your niche, you&apos;re seeing which keywords they consider core to the topic, which
      long-tail phrases they&apos;re targeting, and whether they bother with misspellings or
      brand-adjacent terms. That&apos;s competitive intelligence you can get in under a minute,
      and it often surfaces keyword angles you hadn&apos;t considered for your own videos.
    </p>
    <h2>What the view-source method actually reveals</h2>
    <p>
      YouTube stores a video&apos;s tags in the page&apos;s embedded metadata under the{" "}
      <strong>keywords</strong> field. The steps above pull that field straight from the source,
      so what you see is exactly what the creator typed into YouTube Studio — no guessing, no
      third-party database that might be stale. You&apos;ll also notice when the field is empty,
      which is itself useful information: plenty of large channels skip tags entirely because
      their titles and watch history already do the categorizing.
    </p>
    <h2>Limitations to keep in mind</h2>
    <p>
      This method shows tags as they exist right now. Creators sometimes edit tags after
      publishing, so a tag set you see today might change next week. It also tells you nothing
      about which tags actually drove traffic — a video can rank for searches related to tags it
      never used, thanks to its title, description, captions, and viewer behavior. Treat tags
      as one clue among many, alongside the title structure, thumbnail style, description
      keywords, and chapter names.
    </p>
    <h2>Model the strategy, don&apos;t clone the list</h2>
    <p>
      There&apos;s nothing wrong with learning from public metadata — tags are visible to anyone
      who looks, and studying them is standard competitive research. But copying a
      competitor&apos;s exact tag list onto an unrelated video is both ineffective and sloppy:
      irrelevant tags can confuse YouTube about what your video covers. The right move is to
      note the <em>patterns</em> — do they lead with the exact topic? Do they include
      &quot;for beginners&quot; variants? Year markers? — and then write your own tags from
      scratch using our <Link href="/tools/youtube-tag-generator">Tag Generator</Link> as a starting
      point.
    </p>
    <h2>Where tags fit in your overall optimization</h2>
    <p>
      Think of optimization in layers. The title and thumbnail decide whether anyone clicks.
      The first two minutes decide whether they stay. The description gives YouTube crawlable
      context for search. Tags sit at the bottom of that stack — a small, cheap, worth-doing
      finishing touch. Spend your competitive research time accordingly: an hour studying why a
      rival&apos;s packaging works will beat an hour cataloging their tags every single time.
      Pair this tool with our <Link href="/tools/youtube-title-generator">Title Generator</Link> and{" "}
      <Link href="/tools/youtube-description-generator">Description Generator</Link> to cover the
      layers that matter most.
    </p>
  </>
);

export const tagExtractorFaqs = [
  {
    q: "Why can't this tool fetch the tags automatically?",
    a: "YouTube intentionally hides tags from its public pages and API, and web browsers block one site from reading another site's pages (a security rule called CORS). Any tool claiming fully automatic extraction is either using the view-source technique server-side or estimating. The manual method above is the reliable, honest approach.",
  },
  {
    q: "Is it legal to look at another creator's tags?",
    a: "Yes. Tags are embedded in the public page source of every YouTube video — they're not private data. Viewing page source in your own browser is completely legal. What's not okay is scraping tags at scale to spam or mislead, or copying them onto unrelated videos.",
  },
  {
    q: "Do YouTube tags actually matter for ranking?",
    a: "Only marginally. YouTube describes tags as a minor discovery signal, mainly useful for misspelled searches and ambiguous topics. Titles, descriptions, thumbnails, click-through rate, and watch time carry far more weight. Tags are worth two minutes of effort, not two hours.",
  },
  {
    q: "How do I add tags to my own video?",
    a: "In YouTube Studio, go to Content, click your video, scroll to the Details section, and find the Tags field (click 'Show more' if it's hidden). Paste your tags there, keeping the total under 500 characters. You can also use our Tag Generator to build the list first.",
  },
  {
    q: "Can I see a video's tags on my phone?",
    a: "Not easily — mobile browsers don't offer a convenient 'view source' option. Use a desktop or laptop browser for the method above. Alternatively, request the desktop version of the YouTube page on a tablet browser, though the steps are fiddlier.",
  },
];
