import type { ReactNode } from "react";
import Link from "next/link";

export const tiktokCaptionGuide: ReactNode = (
  <>
    <h2>Why your caption matters more than you think</h2>
    <p>
      On TikTok, the video does the heavy lifting — but the caption does the quiet
      work around it. A good caption gives context the video can&apos;t, sparks the
      comment you need for engagement, and carries your hashtags into the search
      system. Many creators treat the caption as an afterthought and type something
      like &quot;lol&quot; before posting. That&apos;s a missed opportunity: the
      caption is the cheapest place on the platform to add personality, clarity, and
      a reason to engage. The generator above builds you a starting caption with a
      hook, an optional call to action, and hashtags — then you make it yours.
    </p>
    <h2>The anatomy of a caption that works</h2>
    <p>
      Strong TikTok captions tend to follow the same skeleton. First, a <strong>hook
      line</strong> that adds something the video alone doesn&apos;t say — a bold
      claim, a question, or the setup to the payoff. Second, one short line of
      context or personality. Third, a <strong>call to action</strong> that tells
      viewers exactly what to do: comment their take, save it for later, follow for
      part two. Vague CTAs like &quot;engage with this post&quot; do nothing;
      specific ones tied to the video&apos;s content actually move the needle.
      Finally, your hashtags, kept to a handful of relevant ones.
    </p>
    <h2>Match the tone to the video, not just your mood</h2>
    <p>
      The tone selector in the tool exists because a funny caption on a serious video
      creates whiplash, and a formal caption on a comedy skit kills the joke. As a
      rule of thumb, mirror the energy of the first three seconds of your video: if
      the opening is high-energy and playful, the caption should be too. That said,
      contrast can work deliberately — a deadpan caption under chaotic footage is a
      classic comedy format. The point is to choose the tone on purpose rather than
      defaulting to whatever you typed last time. Consistency of voice across your
      captions is also part of what makes an account feel recognizable.
    </p>
    <h2>Keep it short and skimmable</h2>
    <p>
      TikTok truncates long captions behind a &quot;more&quot; tap, and most viewers
      will never expand it. Put the important words — the hook and the CTA — in the
      first line or two, where they&apos;re visible without tapping. If you need to
      explain something longer, that explanation usually belongs in the video itself
      (as voiceover or on-screen text) rather than buried in the caption. Short
      captions also pair better with hashtags: a wall of text plus a wall of tags
      looks spammy, while two sharp lines plus three clean tags looks intentional.
    </p>
    <h2>Build the whole post, not just the caption</h2>
    <p>
      A caption is one piece of the posting checklist. Brainstorm the concept first
      with our{" "}
      <Link href="/tools/tiktok-video-ideas" className="font-semibold text-red-600 underline">
        TikTok Video Ideas Generator
      </Link>
      , pick your tags with the{" "}
      <Link href="/tools/tiktok-hashtag-generator" className="font-semibold text-red-600 underline">
        TikTok Hashtag Generator
      </Link>
      , and if you cross-post to Instagram, compare caption styles with our{" "}
      <Link href="/tools/instagram-caption-generator" className="font-semibold text-red-600 underline">
        Instagram Caption Generator
      </Link>
      . And before you publish under a brand-new name, make sure your handle is
      memorable with the{" "}
      <Link href="/tools/tiktok-username-generator" className="font-semibold text-red-600 underline">
        TikTok Username Generator
      </Link>
      . The creators who grow fastest aren&apos;t the ones with one viral video —
      they&apos;re the ones with a repeatable system for every post.
    </p>
  </>
);

export const tiktokCaptionFaqs = [
  {
    q: "How long should a TikTok caption be?",
    a: "Shorter is generally better. TikTok truncates long captions behind a 'more' tap that most viewers never open, so put your hook and call to action in the first one or two lines. Aim for something readable at a glance — a couple of sharp sentences plus a few hashtags.",
  },
  {
    q: "Should every TikTok have a call to action?",
    a: "Not every single one, but most should. A specific CTA tied to the video ('comment your guess', 'save this for your trip') gives viewers a reason to engage, and engagement is a key distribution signal. Vary your CTAs so your captions don't feel templated.",
  },
  {
    q: "Do I need hashtags in my caption?",
    a: "A few relevant hashtags help TikTok categorize your video and create a tappable path to related content. Three to five targeted tags is the sweet spot for most creators — enough for discovery without cluttering the caption.",
  },
  {
    q: "Can I edit my caption after posting?",
    a: "TikTok doesn't let you edit a caption after a video is published — you'd need to delete and repost. That's why it's worth spending an extra minute on the caption before you hit post rather than rushing it.",
  },
  {
    q: "Should my caption just describe what's in the video?",
    a: "Usually not. Viewers can already see the video — the caption should add something: context, a question, a joke, or the next step. 'Watch till the end' style captions that create curiosity tend to outperform plain descriptions.",
  },
];
