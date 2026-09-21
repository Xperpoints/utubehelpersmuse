import type { ReactNode } from "react";
import Link from "next/link";

export const youtubeChapterGuide: ReactNode = (
  <>
    <h2>What chapters do for your videos</h2>
    <p>
      Chapters split a video into labeled segments that viewers can jump between, both in
      the player progress bar and in the description. They improve the viewing experience
      for tutorials, reviews, and anything over a few minutes long — and they give YouTube
      extra structured signals about what each section covers, which can help the video
      surface for section-specific searches. Some creators worry chapters hurt retention by
      letting viewers skip; in practice, viewers who can find what they need stay longer
      and come back more often than viewers who scrub blindly and give up.
    </p>
    <h2>The formatting rules YouTube enforces</h2>
    <p>
      Chapters only work if the format is exact: each line needs a timestamp followed by a
      title, the first timestamp must be 00:00, and you need at least three chapters for
      them to appear in the player. Timestamps must be in ascending order, and each chapter
      needs a reasonable minimum length — cramming twenty chapters into a three-minute
      video won&apos;t render properly. The generator above validates all of this for you:
      it flags bad formats line by line, enforces the 00:00 start, and warns you if you
      have fewer than three chapters.
    </p>
    <h2>Write chapter titles like mini-titles</h2>
    <p>
      Chapter titles appear in search results and in the player, so treat them as
      micro-headlines rather than labels. &quot;Part 3&quot; tells nobody anything;
      &quot;The 5-minute editing workflow&quot; tells a searcher exactly what they&apos;ll
      get. Include the natural keywords for that section — if a segment covers
      keyword research, say so — because YouTube can match section titles to specific
      queries. Keep them short enough to read at a glance; if a title needs a full
      sentence, it&apos;s really a paragraph. Draft them alongside your script using our{" "}
      <Link href="/tools/youtube-video-script-generator">Script Generator</Link> so the
      structure exists before you edit.
    </p>
    <h2>Where chapters fit in your description</h2>
    <p>
      Chapters go in the video description, usually after your main summary paragraph and
      key links. The first two lines of the description still matter most for search and
      for what viewers see before clicking &quot;show more,&quot; so don&apos;t lead with
      the chapter list — summarize the video&apos;s value first, then add chapters below.
      Our <Link href="/tools/youtube-description-generator">Description Generator</Link>{" "}
      builds that structure for you. One practical tip: finalizing chapters after editing
      (rather than before filming) keeps timestamps accurate, since sections almost always
      shift in the edit.
    </p>
    <h2>Chapters as a retention tool, not just navigation</h2>
    <p>
      Used deliberately, chapters shape how viewers experience pacing. Labeling an upcoming
      payoff (&quot;09:45 The result&quot;) gives viewers a reason to keep watching through
      slower sections. Review your retention graph against your chapter markers in Studio:
      if everyone drops at the same chapter, that section needs tightening or moving.
      Pair chapters with shareable moments using our{" "}
      <Link href="/tools/youtube-timestamp-link-generator">Timestamp Link Generator</Link>{" "}
      to send people straight to your best segments from social posts and community tabs —
      each shared timestamp is another entry point into the video.
    </p>
  </>
);

export const youtubeChapterFaqs = [
  {
    q: "How do I add chapters to a YouTube video?",
    a: "Add a list of timestamps with titles to your video description — one per line, starting with 00:00. YouTube detects the format automatically. You need at least three chapters, timestamps in ascending order, and each chapter should be a reasonable length for them to display in the player.",
  },
  {
    q: "Why aren't my YouTube chapters showing up?",
    a: "The usual causes: the first timestamp isn't 00:00, there are fewer than three chapters, timestamps aren't in order, or a chapter is too short. Chapters can also take a little while to appear after you save the description. Check each line against the format the generator above enforces.",
  },
  {
    q: "Do chapters hurt watch time because viewers skip?",
    a: "Generally no. Viewers who skip to what they need are more satisfied than viewers who scrub frustratedly and leave. Chapters also let YouTube match specific sections to search queries, which can bring in viewers who'd never have clicked otherwise. The net effect for most tutorial-style content is positive.",
  },
  {
    q: "Can chapters help my video rank in search?",
    a: "They can help indirectly. Chapter titles give YouTube more structured text about what each section covers, and Google sometimes shows key moments from videos in search results. Write descriptive, keyword-natural chapter titles rather than generic labels like 'Part 1'.",
  },
  {
    q: "Should short videos have chapters?",
    a: "Usually not worth it. Chapters shine on videos long enough to have distinct sections — roughly 5+ minutes. On a 90-second video, chapters add clutter without helping navigation. Save the effort for your longer tutorials, reviews, and deep dives.",
  },
];
