import type { ReactNode } from "react";
import Link from "next/link";

export const youtubeUploadChecklistGuide: ReactNode = (
  <>
    <h2>Why uploads fail before anyone presses play</h2>
    <p>
      Most underperforming videos weren&apos;t beaten by the algorithm — they were beaten
      by their own upload screen. A vague title, a missing description, no end screen, the
      wrong audience setting: each small skip costs a little discoverability or a little
      trust, and they compound. A checklist turns publishing from a memory test into a
      repeatable process. Run it the same way every time and the quality floor of your
      channel rises permanently, because your worst upload is suddenly as polished as your
      best one. The interactive checklist above tracks your progress per video — use it
      until the steps become habit.
    </p>
    <h2>Packaging: the two things viewers judge first</h2>
    <p>
      Title and thumbnail decide whether anyone clicks, so they deserve deliberate effort,
      not leftovers. Write the title before you design the thumbnail so the two tell one
      coherent story instead of repeating each other. Check the thumbnail at phone-feed
      size — tiny text and busy backgrounds die there. If you&apos;re stuck, our{" "}
      <Link href="/tools/youtube-title-generator">Title Generator</Link> drafts options
      with real curiosity gaps, and you can study any competitor&apos;s approach with the{" "}
      <Link href="/tools/youtube-thumbnail-downloader">Thumbnail Downloader</Link>. Never
      let YouTube auto-pick a frame; an auto-selected blurry mid-blink frame quietly
      taxes every impression the video ever gets.
    </p>
    <h2>Metadata: give YouTube something to work with</h2>
    <p>
      The description&apos;s first two lines should state what the video covers using the
      natural search phrasing — that&apos;s what appears in search results and above the
      fold. Chapters go below for longer videos (our{" "}
      <Link href="/tools/youtube-chapter-generator">Chapter Generator</Link> formats
      them), followed by links. Tags take two minutes: a handful of relevant ones under
      the 500-character limit, built with our{" "}
      <Link href="/tools/youtube-tag-generator">Tag Generator</Link>. Cards and end
      screens are the most-skipped items on this list and among the highest-leverage:
      pointing an engaged viewer to one more video is the cheapest view you&apos;ll ever
      earn. Always add the video to a relevant playlist — it&apos;s free session time.
    </p>
    <h2>Settings: the boring items with real consequences</h2>
    <p>
      Visibility mistakes are embarrassingly common — videos published publicly before the
      thumbnail was ready, or left unlisted by accident. Scheduling gives you a buffer to
      catch errors. Captions deserve a real review pass: auto-captions mangle names,
      brands, and technical terms, and many viewers watch muted. Set the video language so
      recommendations reach the right audience. And take the &quot;made for kids&quot;
      declaration seriously — it&apos;s a legal requirement with real penalties for
      getting it wrong, and it changes which features (like comments and personalized ads)
      are available on the video.
    </p>
    <h2>Make the checklist yours</h2>
    <p>
      Twelve items cover the universal basics, but every niche has its extras. A finance
      channel might add &quot;disclaimer checked by compliance&quot;; a creator selling
      products might add &quot;affiliate links disclosed.&quot; After a month of using the
      list, review which items you skip most and ask whether the item or your process is
      the problem. The goal isn&apos;t ritual — it&apos;s catching the one skipped step
      that would have cost the video. Pair the checklist with a content system: hashtags
      from our <Link href="/tools/youtube-hashtag-generator">Hashtag Generator</Link> for
      discoverability, and a pre-publish keyword pass with our{" "}
      <Link href="/tools/youtube-keyword-generator">Keyword Generator</Link> so every
      upload is both polished and findable.
    </p>
  </>
);

export const youtubeUploadChecklistFaqs = [
  {
    q: "What should I check before publishing a YouTube video?",
    a: "At minimum: a deliberate title and custom thumbnail, a description with keywords in the first two lines, tags, chapters for longer videos, cards, an end screen, playlist placement, correct visibility, reviewed captions, video language, and the made-for-kids audience declaration. The checklist above walks through all twelve in order.",
  },
  {
    q: "Does the description really matter for YouTube SEO?",
    a: "Yes — especially the first 1–2 lines, which appear in search results and above the fold. A clear summary using natural search phrasing helps YouTube understand the video and helps searchers decide to click. The rest of the description is prime real estate for chapters, links, and timestamps.",
  },
  {
    q: "Should I schedule videos or publish immediately?",
    a: "Scheduling is usually the safer choice. It gives you a buffer to catch mistakes in the title, thumbnail, or settings, and lets you publish at a consistent time your audience expects. The algorithm doesn't meaningfully prefer one over the other — consistency and quality matter far more.",
  },
  {
    q: "What happens if I get the 'made for kids' setting wrong?",
    a: "It's a legal declaration under children's privacy rules, not just a YouTube preference. Mislabeling can lead to penalties, and the setting changes available features — videos marked as made for kids lose comments, personalized ads, and some other features. When in doubt, review YouTube's official guidance for your content type.",
  },
  {
    q: "Are end screens and cards still worth adding?",
    a: "Absolutely. They're among the highest-leverage items per minute of effort: a viewer who just finished your video is your warmest possible audience for the next one. An end screen pointing to your best related video converts engaged viewers into session time better than almost anything else you can do post-upload.",
  },
];
