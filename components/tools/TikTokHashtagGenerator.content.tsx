import type { ReactNode } from "react";
import Link from "next/link";

export const tiktokHashtagGuide: ReactNode = (
  <>
    <h2>Do hashtags still matter on TikTok?</h2>
    <p>
      More than on most platforms, yes — but not in the way people think. Hashtags
      won&apos;t magically push a weak video onto everyone&apos;s For You page. What
      they do is give TikTok an extra categorization signal about your content, and they
      create clickable pathways: when someone taps a hashtag, they land on a feed of
      every video using it. That&apos;s a small but real discovery channel, especially
      for niche tags where your video can rank near the top instead of drowning under
      millions of posts. Think of hashtags as the finishing touch on a video that
      already has a strong hook, not as the strategy itself.
    </p>
    <h2>How this generator structures your tags</h2>
    <p>
      The tool above splits your hashtags into three groups on purpose. <strong>Broad
      reach</strong> tags like #fyp and #foryou put you in the giant general discovery
      pools — competitive, but worth one or two slots. <strong>Niche</strong> tags
      describe exactly what your video covers, so TikTok can match it with viewers who
      actually watch that kind of content; these tend to drive your most loyal new
      followers. <strong>Branded</strong> tags are ones you invent yourself, like a
      series name, so repeat viewers can tap through your whole catalog. A caption
      with all three layers gives the algorithm the clearest possible picture of who
      should see your video.
    </p>
    <h2>Why you should verify trends before posting</h2>
    <p>
      TikTok trends have a short half-life. A hashtag that was exploding last week can
      be stale today, and the generator above can&apos;t know what&apos;s hot right
      now. Before you post, spend two minutes in{" "}
      <a
        href="https://ads.tiktok.com/business/creativecenter/inspiration/popular/pc/en"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-red-600 underline"
      >
        TikTok&apos;s Creative Center
      </a>{" "}
      checking which hashtags are rising in your region and category. If a trending tag
      genuinely fits your video, swap it in for one of the broad tags. Never force an
      unrelated trending hashtag onto your video — it confuses the algorithm about
      your audience and the viewers it attracts will swipe away, which hurts more
      than the tag helps.
    </p>
    <h2>How many hashtags to use</h2>
    <p>
      There&apos;s no official magic number, and creators argue about this constantly.
      In practice, 3 to 5 relevant hashtags per caption is the sweet spot most
      experienced creators settle on: enough to categorize the video clearly without
      making the caption look spammy. Stuffing a dozen tags rarely helps and can make
      your caption unreadable. Pick one broad tag, two or three niche tags, and your
      branded tag if you&apos;re running a series. Then watch your analytics: if a
      particular tag consistently appears on your best-performing videos, keep it in
      the rotation.
    </p>
    <h2>Pair hashtags with a caption that earns the click</h2>
    <p>
      Hashtags categorize; captions convert. A great tag set on a video nobody watches
      past the first second does nothing. Once you&apos;ve picked your tags, write a
      caption with a real hook using our{" "}
      <Link href="/tools/tiktok-caption-generator" className="font-semibold text-red-600 underline">
        TikTok Caption Generator
      </Link>
      , brainstorm the video itself with the{" "}
      <Link href="/tools/tiktok-video-ideas" className="font-semibold text-red-600 underline">
        TikTok Video Ideas Generator
      </Link>
      , and if you also post to Instagram, compare approaches with our{" "}
      <Link href="/tools/instagram-hashtag-generator" className="font-semibold text-red-600 underline">
        Instagram Hashtag Generator
      </Link>
      . Tags are one layer of a repeatable posting system — hook, caption, tags,
      consistency — and it&apos;s the system that grows accounts, not any single tag.
    </p>
  </>
);

export const tiktokHashtagFaqs = [
  {
    q: "How many hashtags should I put on a TikTok?",
    a: "Most experienced creators use 3 to 5 relevant hashtags per video. That's enough to categorize your content clearly without cluttering the caption. One broad tag, two or three niche tags, and your branded series tag is a solid default mix.",
  },
  {
    q: "Do hashtags like #fyp actually work?",
    a: "They don't hurt, but they're not a growth hack either. #fyp puts your video in an enormous pool where competition is fierce. Niche hashtags are generally more useful because they help TikTok show your video to viewers who already watch that kind of content.",
  },
  {
    q: "Should I use trending hashtags that aren't related to my video?",
    a: "No. An unrelated trending tag may get you impressions from the wrong audience, and those viewers will swipe away quickly. Low watch time signals to TikTok that your video isn't engaging, which can hurt its distribution more than the tag helped.",
  },
  {
    q: "What are branded hashtags and why make my own?",
    a: "A branded hashtag is one you invent for your own series or identity, like #BakeWithMia. When viewers tap it, they see your whole catalog in one feed. It costs nothing, builds a recognizable format, and makes binge-watching your content effortless.",
  },
  {
    q: "Where can I check which hashtags are trending right now?",
    a: "TikTok's Creative Center publishes currently popular hashtags by region and category, and it's free to browse. Check it before posting and swap in any rising tag that genuinely fits your video.",
  },
];
