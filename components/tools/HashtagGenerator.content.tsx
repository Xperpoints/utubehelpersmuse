import type { ReactNode } from "react";
import Link from "next/link";

export const hashtagGeneratorGuide: ReactNode = (
  <>
    <h2>Do hashtags actually matter on YouTube?</h2>
    <p>
      Let&apos;s be honest: hashtags are a minor signal. They won&apos;t make a video go viral,
      and YouTube&apos;s own guidance treats them as a small categorization aid. But
      &quot;minor&quot; doesn&apos;t mean &quot;useless.&quot; Clicking a hashtag takes viewers
      to a results page of videos sharing that tag, which can send you a trickle of browse
      traffic — especially for niche tags with little competition. And they cost ten seconds to
      add. The right mindset: hashtags are free lottery tickets, not a strategy.
    </p>
    <h2>The 15-hashtag limit and the 3-shown rule</h2>
    <p>
      YouTube allows a maximum of <strong>15 hashtags per video</strong>. The first three appear
      as clickable links above your video title; the rest live quietly at the bottom of your
      description. Order matters: put your most specific, most relevant hashtags first, because
      those are the ones viewers will actually see. Generic tags like #youtube or #video are
      fine as filler but will never be your traffic drivers — the niche-specific ones will.
    </p>
    <h2>Title vs. description: where should they go?</h2>
    <p>
      Almost always the description. Hashtags in the title consume your precious ~60 visible
      characters and can make titles look cluttered. The exception: when a hashtag <em>is</em>{" "}
      the topic — a challenge name, an event, or a branded series tag your audience already
      searches for. In those cases one hashtag in the title is justified. Otherwise, bottom of
      the description, out of the way, doing its quiet job.
    </p>
    <h2>The over-tagging penalty is real</h2>
    <p>
      YouTube&apos;s policy is explicit: misleading hashtags can get your video removed or your
      channel penalized. &quot;Misleading&quot; includes the classic growth-hack of slapping
      #mrbeast or #trending on an unrelated video hoping for spillover traffic. It doesn&apos;t
      work — YouTube ignores irrelevant hashtags — and it risks a strike. The rule is simple:
      every hashtag must describe what&apos;s actually in the video. When in doubt, leave it
      out.
    </p>
    <h2>Branded hashtags for series</h2>
    <p>
      Here&apos;s where hashtags genuinely shine: creating a branded tag for a series, like
      #BudgetTravelDiaries for every episode of your travel series. It gives loyal viewers a
      one-click archive of related videos and, over time, can become a small search destination
      of its own. Add your branded tag to every video in the series (first position, so it
      shows above the title) and mention it in the video itself so viewers learn to use it.
    </p>
    <h2>Hashtags vs. tags: don&apos;t confuse them</h2>
    <p>
      Hashtags are visible, clickable, and limited to 15. Tags are hidden metadata entered in
      YouTube Studio, limited to 500 total characters, and serve a different purpose. You need
      both, handled separately — use our <Link href="/tools/youtube-tag-generator">Tag
      Generator</Link> for the hidden ones and the tool above for the visible ones.
    </p>
  </>
);

export const hashtagGeneratorFaqs = [
  {
    q: "How many hashtags should I use on a YouTube video?",
    a: "Use 3 to 8 relevant hashtags. YouTube allows up to 15, but only the first 3 display above your title, so lead with your most specific ones. More than a handful of generic tags adds nothing and looks spammy.",
  },
  {
    q: "Should hashtags go in the title or the description?",
    a: "Put them at the bottom of the description in almost all cases. Only put a hashtag in the title when it's central to the video — like a challenge name, event, or branded series tag. Title hashtags eat into your visible character space.",
  },
  {
    q: "Do hashtags increase views?",
    a: "Slightly, sometimes. Hashtag pages can send a small amount of browse traffic, particularly for niche tags with little competition. But hashtags are a minor discovery signal — they won't compensate for a weak title, thumbnail, or video.",
  },
  {
    q: "What happens if I use more than 15 hashtags?",
    a: "YouTube will ignore all hashtags on the video — every single one becomes non-functional. The limit is strict, so count before you publish. The generator above caps output at 12 to keep you safely under.",
  },
  {
    q: "Should I use trending hashtags that aren't related to my video?",
    a: "No. YouTube's policy treats misleading hashtags as spam, and irrelevant trending tags get ignored by the algorithm anyway. Worse, they can lead to removal of the video or penalties against your channel. Every hashtag must describe your actual content.",
  },
];
