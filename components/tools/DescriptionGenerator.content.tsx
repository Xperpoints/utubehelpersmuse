import type { ReactNode } from "react";
import Link from "next/link";

export const descriptionGeneratorGuide: ReactNode = (
  <>
    <h2>Description anatomy: what goes where</h2>
    <p>
      A strong description has a clear structure. The <strong>first 1–2 lines</strong> are the
      hook and keyword-rich summary — this is all most viewers (and search snippets) ever see,
      so it must stand alone. Next comes the <strong>body</strong>: what the video covers, in
      scannable bullets. Then <strong>chapters</strong> with timestamps, then{" "}
      <strong>links and resources</strong>, then your <strong>call to action</strong>, and
      finally <strong>hashtags</strong>. The generator above builds exactly this skeleton for
      you — your job is to fill it with specifics only you know.
    </p>
    <h2>Why the first 150 characters matter most</h2>
    <p>
      YouTube shows roughly the first 100–150 characters of your description in search results
      and above the &quot;show more&quot; fold on the watch page. Everything after that is one
      click away — which most viewers never make. So never open with &quot;Hey guys, welcome
      back to my channel!!&quot; Open with what the video delivers and the keyword someone
      would search: &quot;Learn how to start a podcast in 2026 — equipment, recording, and
      publishing, explained step by step.&quot; That single habit improves both click-through
      and search relevance.
    </p>
    <h2>Keywords without stuffing</h2>
    <p>
      Yes, descriptions help YouTube understand your video — use your main keyword naturally in
      the first two sentences and once or twice more in the body. But &quot;naturally&quot; is
      doing real work in that sentence. Repeating &quot;best budget microphone, budget
      microphone review, cheap budget microphone&quot; reads as spam to both viewers and the
      algorithm, and YouTube&apos;s spam policies explicitly call out keyword stuffing. Write
      for a human first; the keyword placement will take care of itself. Need the keyword list?
      Our <Link href="/tools/youtube-tag-generator">Tag Generator</Link> doubles as a keyword
      brainstorming tool.
    </p>
    <h2>Chapters are an SEO bonus</h2>
    <p>
      Timestamps in the format MM:SS (starting with 00:00) automatically become video chapters,
      which appear in the progress bar — and Google sometimes shows them as &quot;key
      moments&quot; in search results, giving your video extra SERP real estate. Chapters also
      improve retention on long videos because viewers can jump to what they need instead of
      bouncing. Name each chapter descriptively (&quot;02:15 - Choosing your microphone&quot;),
      not cutely (&quot;02:15 - The fun part&quot;). Our{" "}
      <Link href="/tools/youtube-timestamp-link-generator">Timestamp Link Generator</Link> formats
      these for you.
    </p>
    <h2>Links, disclosure, and honesty</h2>
    <p>
      Descriptions are where affiliate links, sponsors, and resources live — and where honesty
      is legally required. If you earn a commission from a link, disclose it plainly
      (&quot;Links marked * are affiliate links&quot;) and tick the paid-promotion box in
      YouTube Studio when applicable. Beyond compliance, disclosure builds trust: audiences can
      smell hidden sponsorships, and getting caught costs far more than a disclosure line ever
      will.
    </p>
    <h2>Hashtag rules in 30 seconds</h2>
    <p>
      YouTube allows up to 15 hashtags per video but only displays the first 3 above the title —
      so make those three count. Put them at the very bottom of the description (or sparingly in
      the title). Never use misleading or unrelated trending hashtags; YouTube can remove them
      or penalize the video. For finding the right ones, try our{" "}
      <Link href="/tools/youtube-hashtag-generator">Hashtag Generator</Link>.
    </p>
  </>
);

export const descriptionGeneratorFaqs = [
  {
    q: "Do YouTube descriptions actually affect ranking?",
    a: "Yes — descriptions are one of the few places YouTube can directly 'read' your video's topic, so a clear, keyword-relevant description helps with search. But it's a supporting signal: it won't rescue a video nobody clicks on or watches. Think of it as necessary but not sufficient.",
  },
  {
    q: "How long should my video description be?",
    a: "Long enough to be genuinely useful — typically 150 to 300 words for most videos. The critical part is the first 150 characters (visible before 'show more'). After that, add chapters, links, and detail for the viewers who expand it. Don't pad with filler.",
  },
  {
    q: "Should I copy-paste the same description on every video?",
    a: "No. A boilerplate footer (social links, disclosure, hashtags) is fine to reuse, but the top section must be unique to each video. Duplicate descriptions across videos give YouTube no distinguishing signal and look lazy to the viewers who do read them.",
  },
  {
    q: "Where should hashtags go — title or description?",
    a: "Put them at the bottom of the description. YouTube shows the first 3 above your title automatically. Adding hashtags to the title itself eats into your 60 visible characters and usually isn't worth it unless the hashtag is central to the video.",
  },
  {
    q: "Can I include affiliate links in my description?",
    a: "Yes, affiliate links are allowed, but you must disclose the relationship clearly in the description and check the paid promotion box in YouTube Studio when required. Always verify the current policy — and never link to anything deceptive or malicious.",
  },
];
