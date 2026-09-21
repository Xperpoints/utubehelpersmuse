import type { ReactNode } from "react";
import Link from "next/link";

export const facebookPostCounterGuide: ReactNode = (
  <>
    <h2>Why post length matters on Facebook</h2>
    <p>
      Facebook does not publish an official ideal post length, and there is no magic number that
      guarantees reach. But across years of creator experience, a pattern keeps showing up:
      shorter posts tend to get read in full, and posts that get read in full tend to earn more
      reactions, comments, and shares per view. Every extra line is another chance for a
      fast-scrolling reader to move on. That does not mean long posts never work — detailed
      stories, heartfelt announcements, and useful explainers can perform very well — but length
      should always be a deliberate choice, not an accident. Counting your characters before you
      publish is the simplest possible quality check, and it takes ten seconds.
    </p>
    <h2>The fold: what readers see before &quot;see more&quot;</h2>
    <p>
      On phones, Facebook typically shows only the first one to two lines of a post before
      cutting it off with a &quot;see more&quot; link. That visible slice is your real headline.
      If it does not earn a tap, the rest of your post effectively does not exist. A practical
      habit is to write the post, then re-read only the first 80–125 characters and ask: would a
      stranger tap to read more? Put the hook, the question, or the surprising statement up
      front, and move background context below the fold. The counter above helps you see exactly
      where that cutoff zone falls in your draft, so you can shape the opening lines on purpose
      rather than by luck.
    </p>
    <h2>Short posts vs. long posts: when each wins</h2>
    <p>
      Short posts (under about 80 characters) are ideal for questions, polls, announcements, and
      captions that accompany a strong photo or video — the media carries the message and the
      text just frames it. Medium posts (roughly 80–250 characters) suit opinions, quick tips,
      and updates with one clear point. Long posts (250+ characters) work best when the story
      itself is the content: personal milestones, lessons learned, or detailed how-tos where
      readers arrive already invested. A common mistake is writing a medium post with a long
      post&apos;s structure — burying the point in paragraph three. Match the structure to the
      length: short posts lead with the punchline, long posts earn attention line by line with
      spacing and short paragraphs. If you are planning a week of content, our{" "}
      <Link href="/tools/facebook-post-ideas">Facebook Post Ideas generator</Link> can give you
      a mix of formats so you are not writing the same length every day.
    </p>
    <h2>Hashtags on Facebook: less is more</h2>
    <p>
      Unlike Instagram, Facebook has never been a hashtag-driven platform. One or two relevant
      hashtags are generally plenty; stuffing a post with a dozen tags tends to look spammy and
      does little for discovery. Use hashtags for branded campaigns (your show name, your event)
      or genuinely browsed topics, not as a substitute for good writing. The counter above
      tracks your hashtag count so you can spot tag-stuffing before your audience does. If you
      are cross-posting to Instagram too, our{" "}
      <Link href="/tools/instagram-hashtag-generator">Instagram Hashtag Generator</Link> is
      built for that platform&apos;s very different hashtag culture.
    </p>
    <h2>How to use this tool in your posting routine</h2>
    <p>
      Draft the post in the box above, glance at the verdict, then tighten. A useful editing
      pass: cut the draft by a third and see if anything important was lost — usually it
      wasn&apos;t. Read it aloud; if you stumble, your readers will too. Check that the first
      line works as a standalone hook. Then publish, and watch which lengths your own audience
      responds to, because every page&apos;s followers behave a little differently. Pair the
      habit with our{" "}
      <Link href="/tools/facebook-engagement-rate-calculator">
        Facebook Engagement Rate Calculator
      </Link>{" "}
      to see whether shorter posts actually move your numbers, and give your page a clear,
      searchable identity with our{" "}
      <Link href="/tools/facebook-page-name-generator">Facebook Page Name Generator</Link> if
      you are still setting things up.
    </p>
  </>
);

export const facebookPostCounterFaqs = [
  {
    q: "What is the best length for a Facebook post?",
    a: "There is no official ideal length. Many creators find that posts under about 80 characters earn strong engagement because they are read in full, while 80–250 characters works well for posts with one clear point. Longer posts can succeed for stories and detailed updates, but the first line must earn the tap on 'see more'. Test lengths with your own audience rather than chasing a universal number.",
  },
  {
    q: "Does Facebook cut off long posts?",
    a: "Yes — on mobile, Facebook typically shows only the first one to two lines before a 'see more' link. Readers who do not tap never see the rest. Always put your hook, question, or key point in those first 80–125 characters.",
  },
  {
    q: "How many hashtags should a Facebook post have?",
    a: "One or two relevant hashtags is generally plenty. Facebook is not a hashtag-driven platform like Instagram, and loading a post with tags tends to look spammy without helping discovery. Use them for branded campaigns or genuinely browsed topics.",
  },
  {
    q: "Do shorter posts really get more engagement?",
    a: "Often, but not always. Shorter posts are more likely to be read completely, which gives them more chances to earn a reaction or comment. But a compelling long story can outperform a lazy short post. Length is one factor among many — the hook, the topic, and the media matter more.",
  },
  {
    q: "Is my post text sent anywhere when I use this counter?",
    a: "No. The counting happens entirely in your browser as you type. Your draft never leaves your device, so you can safely draft sensitive announcements here.",
  },
];
