import type { ReactNode } from "react";
import Link from "next/link";

export const instagramHashtagGuide: ReactNode = (
  <>
    <h2>How Instagram hashtags actually work</h2>
    <p>
      Hashtags on Instagram are a categorization system, not a growth hack. When you add them to
      a post or Reel, you&apos;re telling Instagram what your content is about so it can show it
      on hashtag pages, in search results, and occasionally in Explore to people who follow or
      engage with those tags. They won&apos;t rescue a weak post — a boring Reel with perfect
      hashtags still flops — but they help the right post find the right audience. Think of them
      as signage: useful, cheap, and no substitute for the product itself.
    </p>
    <h2>The 30-hashtag limit (and why you should use fewer)</h2>
    <p>
      Instagram allows up to <strong>30 hashtags per post</strong>, but maxing out the limit is
      rarely the best move. A wall of 30 tags looks spammy to the humans reading your caption,
      and in practice most creators see their best results with somewhere between 8 and 15
      well-chosen tags. Relevance beats volume every time: ten tags your ideal viewer actually
      follows will outperform thirty generic ones. If you&apos;re tempted to add more
      &ldquo;just in case,&rdquo; spend that energy on the caption instead — our{" "}
      <Link href="/tools/instagram-caption-generator">Caption Generator</Link> can help with the
      draft.
    </p>
    <h2>Broad, niche, and long-tail: the mix that works</h2>
    <p>
      The generator above splits tags into three groups for a reason. <strong>Broad
      tags</strong> (#instagood, #photooftheday) have enormous audiences but brutal competition —
      your post disappears from the &ldquo;recent&rdquo; tab in minutes. <strong>Niche
      tags</strong> (#HomeBakingTips) have smaller but far more interested audiences, and
      they&apos;re where most discovery actually happens for growing accounts.{" "}
      <strong>Long-tail tags</strong> (#HomeBakingForBeginners) have the least traffic but also
      the least competition, so your post can rank near the top for longer. A healthy set mixes
      all three: a few broad tags for lottery-ticket exposure, a core of niche tags for real
      discovery, and long-tail tags for staying power.
    </p>
    <h2>Caption or first comment: where should they go?</h2>
    <p>
      Instagram treats hashtags the same wherever you put them — caption or first comment makes
      no difference to reach. So this is purely an aesthetics decision. Hashtags in the caption
      keep everything in one place but can clutter your message; hashtags in the first comment
      keep the caption clean but require you to post that comment immediately (a delayed comment
      means delayed categorization). Most creators put 3–5 key tags at the end of the caption
      and the rest in the first comment, or all of them after a few line breaks. Pick the style
      you&apos;ll actually stick with — consistency matters more than placement.
    </p>
    <h2>Always check tags in-app before posting</h2>
    <p>
      Hashtag performance decays. A tag that drove discovery last year might be dead, banned, or
      flooded with spam today. Before you publish, search your most important tags inside the
      Instagram app: check that the tag page is active, that recent posts are relevant to your
      niche, and that the follower count suggests a living audience. If a tag&apos;s recent posts
      are all bots and unrelated spam, drop it. Some creators also report reduced reach after
      repeatedly using the exact same 30-tag block on every post, so rotate your sets — generate
      a fresh batch for different content pillars. And if you&apos;re repurposing content for
      Reels specifically, pair your tags with a strong hook using our{" "}
      <Link href="/tools/instagram-reel-ideas">Reel Ideas Generator</Link>. (Curious how this
      compares to YouTube? Hashtags work quite differently there — see our{" "}
      <Link href="/tools/youtube-hashtag-generator">YouTube Hashtag Generator</Link>.)
    </p>
  </>
);

export const instagramHashtagFaqs = [
  {
    q: "How many hashtags should I use on Instagram?",
    a: "Instagram allows up to 30, but 8–15 relevant hashtags is the sweet spot for most creators. Focus on relevance over quantity — tags your ideal audience actually follows will do more than a maxed-out block of generic ones.",
  },
  {
    q: "Should hashtags go in the caption or the first comment?",
    a: "It makes no difference to reach — Instagram treats them identically. Put them wherever keeps your caption looking clean. Many creators place a few key tags at the end of the caption and the rest in the first comment, posted immediately.",
  },
  {
    q: "Do hashtags still work in 2026?",
    a: "Yes, but they're a categorization aid, not a growth strategy. They help Instagram show your content on hashtag pages and in search to interested people. They won't compensate for content people don't want to watch — the post itself matters far more.",
  },
  {
    q: "Can hashtags get my account shadowbanned?",
    a: "Using banned or spam-associated hashtags can limit an individual post's visibility, which is why checking tags in the app before posting matters. There's no evidence that normal, relevant hashtag use harms accounts. Avoid repeating the identical 30-tag block on every post and never use tags unrelated to your content.",
  },
  {
    q: "Should I use the same hashtags on every post?",
    a: "No — rotate them. Using the identical set every time looks automated and wastes the chance to target different sub-topics. Build 3–4 hashtag sets for your main content pillars and cycle through them.",
  },
];
