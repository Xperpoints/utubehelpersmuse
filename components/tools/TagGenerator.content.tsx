import type { ReactNode } from "react";
import Link from "next/link";

export const tagGeneratorGuide: ReactNode = (
  <>
    <h2>What are YouTube tags?</h2>
    <p>
      Tags are short keywords you attach to your video in YouTube Studio. They help YouTube
      understand what your video is about — especially useful when your title uses slang,
      abbreviations, or words with multiple meanings. Think of them as a backup signal: your
      title, description, and the video itself do the heavy lifting, and tags fill in the gaps.
    </p>
    <h2>Do tags actually help you rank?</h2>
    <p>
      Honestly? A little — not a lot. YouTube has said publicly that tags play a minimal role in
      discovery compared to titles, descriptions, watch time, and click-through rate. But
      &quot;minimal&quot; isn&apos;t &quot;zero.&quot; Good tags help in three specific cases:
      misspelled searches (viewers constantly mistype), ambiguous topics, and brand-new channels
      where YouTube has no watch-history data to learn from yet. They take two minutes to add,
      so there&apos;s no reason to skip them.
    </p>
    <h2>How to use this generator</h2>
    <p>
      Type your video&apos;s topic the way a viewer would describe it — not the clever version,
      the plain version. &quot;Sourdough bread for beginners&quot; beats &quot;my crusty journey.&quot;
      The generator builds a mix of exact-match tags, question-based tags (&quot;how to…&quot;),
      format tags (&quot;tutorial&quot;, &quot;guide&quot;), and broad single-word tags. Review the
      list, delete anything irrelevant by clicking the ×, then copy the rest into YouTube
      Studio&apos;s tag box.
    </p>
    <h2>The 500-character rule</h2>
    <p>
      YouTube allows a maximum of 500 characters across all your tags combined — not per tag.
      The character meter above tracks this live. If you go over, YouTube simply ignores the
      excess, so trim ruthlessly: one strong tag beats three weak ones saying the same thing.
    </p>
    <h2>Tag mistakes to avoid</h2>
    <p>
      Don&apos;t stuff 40 barely-related tags hoping to catch every search — irrelevant tags can
      confuse the algorithm about your video&apos;s topic. Don&apos;t copy a competitor&apos;s
      exact tag set either; model the strategy, not the list. And never put tags in your
      description pretending they&apos;re hashtags — that&apos;s a different feature with
      different rules. For hashtag help, try our{" "}
      <Link href="/tools/youtube-hashtag-generator">YouTube Hashtag Generator</Link>.
    </p>
    <h2>Tags are one piece of the puzzle</h2>
    <p>
      If your packaging is weak, perfect tags won&apos;t save the video. Spend most of your
      optimization energy on the title and thumbnail — our{" "}
      <Link href="/tools/youtube-title-generator">Title Generator</Link> can help — and treat tags as
      the finishing touch they are.
    </p>
  </>
);

export const tagGeneratorFaqs = [
  {
    q: "How many tags should I use on a YouTube video?",
    a: "There is no magic number. Aim for 8–15 highly relevant tags that fit within YouTube's 500-character total limit. Relevance beats quantity every time — ten precise tags outperform thirty loose ones.",
  },
  {
    q: "Do YouTube tags help with SEO in 2026?",
    a: "They help marginally. YouTube's own documentation describes tags as a minor discovery signal, most useful for misspelled searches and ambiguous topics. Titles, descriptions, watch time, and click-through rate matter far more.",
  },
  {
    q: "Should I copy tags from popular videos in my niche?",
    a: "Study them, don't clone them. Looking at a competitor's tags (see our Tag Extractor) reveals how they categorize content, but your tags should describe your specific video. Copy-pasted irrelevant tags can confuse YouTube about your topic.",
  },
  {
    q: "What is the character limit for YouTube tags?",
    a: "500 characters total across all tags combined. The generator above shows a live character count so you stay under the limit before pasting into YouTube Studio.",
  },
  {
    q: "Are hashtags and tags the same thing?",
    a: "No. Tags are hidden metadata entered in YouTube Studio that help categorize your video. Hashtags are visible in your title or description (starting with #) and are clickable. Use our Hashtag Generator for those.",
  },
];
