import type { ReactNode } from "react";
import Link from "next/link";

export const videoIdeasGuide: ReactNode = (
  <>
    <h2>Where video ideas actually come from</h2>
    <p>
      The best video ideas don&apos;t come from staring at a blank page — they come from
      listening. Your comment section is a goldmine: every question a viewer asks is a video
      waiting to happen. Your competitors&apos; most-viewed videos show you proven demand in
      your niche. And YouTube&apos;s search autocomplete literally tells you what people are
      typing. This generator gives you a starting spark, but make idea-mining a weekly habit
      and you&apos;ll never run dry.
    </p>
    <h2>Build an idea backlog</h2>
    <p>
      Keep a running list of at least 30 ideas at all times — a notes app, a spreadsheet, or a
      whiteboard all work. Score each idea on two axes: <strong>demand</strong> (are people
      searching for this or clicking similar videos?) and <strong>packaging potential</strong>{" "}
      (can you make a title and thumbnail that pop?). Film the ideas that score high on both.
      When an idea scores high on demand but low on packaging, that&apos;s a creative challenge
      worth solving, not a reason to skip it.
    </p>
    <h2>Validate before you film</h2>
    <p>
      Before committing hours to production, run a 10-minute validation. Search your exact idea
      on YouTube: if several videos on the topic have strong views relative to the
      channels&apos; sizes, demand exists. Check whether you can beat their packaging — if your
      title and thumbnail idea is clearly more clickable, you have an edge. Finally, ask whether
      the idea fits your channel&apos;s promise. A viral-but-off-topic video brings subscribers
      who won&apos;t watch your next upload.
    </p>
    <h2>Why series formats compound</h2>
    <p>
      One-off videos start from zero every time. Series — &quot;30 Days of X,&quot; weekly
      challenges, episode-numbered tutorials — give viewers a reason to subscribe and return.
      Each episode promotes the next, and playlists of series get suggested together. If
      you&apos;re starting out, commit to one series of at least 5 episodes before judging the
      results.
    </p>
    <h2>Turn ideas into clickable packages</h2>
    <p>
      An idea is only half the work; the title and thumbnail decide whether anyone clicks. Once
      you&apos;ve picked an idea from the list above, run it through our{" "}
      <Link href="/tools/youtube-title-generator">YouTube Title Generator</Link> to sharpen the
      wording, and sketch three thumbnail concepts before you film a single frame.
    </p>
  </>
);

export const videoIdeasFaqs = [
  {
    q: "How many video ideas should I keep banked?",
    a: "Aim for at least 30 at all times. A healthy backlog removes the pressure of coming up with something brilliant on filming day, and it lets you pick the strongest idea each week instead of settling for whatever came to mind.",
  },
  {
    q: "What if my niche feels completely saturated?",
    a: "Saturation usually means demand is proven — the opportunity is in differentiation. Narrow your angle (a specific sub-audience), upgrade the packaging, or combine two formats nobody has merged yet. New creators break through saturated niches every month with better titles and fresher takes.",
  },
  {
    q: "Are tutorials or vlogs better for growing a new channel?",
    a: "Tutorials, in most cases. Searchable how-to content brings in viewers who have never heard of you, while vlogs mostly appeal to people who already care about you. Once tutorials build your audience, vlogs deepen the connection.",
  },
  {
    q: "How do I validate a video idea before filming?",
    a: "Search the topic on YouTube and check whether similar videos get strong views relative to their channels' sizes. Confirm you can make a more clickable title and thumbnail than what's ranking. And make sure the idea fits what your channel is about — off-topic virality rarely converts to loyal subscribers.",
  },
  {
    q: "What should I do when I'm completely out of ideas?",
    a: "Go back to the sources: read your last 50 comments for questions, check competitors' popular videos from the last 90 days, and type your niche into YouTube search to harvest autocomplete suggestions. Between those three, you'll find a month of ideas in under an hour.",
  },
];
