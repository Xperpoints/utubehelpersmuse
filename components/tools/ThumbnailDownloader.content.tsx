import type { ReactNode } from "react";
import Link from "next/link";

export const thumbnailDownloaderGuide: ReactNode = (
  <>
    <h2>What thumbnails are actually for</h2>
    <p>
      A thumbnail has exactly one job: earn the click. It works together with your title as a
      single unit — the title makes the promise, the thumbnail makes it irresistible. YouTube
      measures this with click-through rate (CTR), and even a one-point CTR improvement can mean
      thousands of extra views on a video the algorithm is already testing. That&apos;s why
      studying thumbnails isn&apos;t vanity — it&apos;s one of the highest-leverage things a
      creator can do.
    </p>
    <h2>Studying high-CTR thumbnails the smart way</h2>
    <p>
      When a video in your niche outperforms, download its thumbnail and look at it like a
      designer, not a fan. How many words are on it? Where is the focal point? What colors pop
      against YouTube&apos;s white and dark backgrounds? Is there a face, and what emotion does
      it show? Save the best ones to a swipe file and look for patterns across ten or twenty
      examples — the patterns are the strategy. Then adapt them to your own branding rather than
      copying any single design.
    </p>
    <h2>The four quality levels, explained</h2>
    <p>
      YouTube stores every video&apos;s thumbnail in up to four resolutions. <strong>Full HD
      (1280×720)</strong> is the original upload quality and only exists when the creator
      uploaded a high-resolution image — older or auto-generated thumbnails often lack it.{" "}
      <strong>HD (640×480)</strong> exists for nearly all videos and is plenty for study
      purposes. <strong>Medium (480×360)</strong> and <strong>Small (320×180)</strong> are
      fallbacks YouTube keeps for embeds and slow connections. For reference or recovery work,
      always grab the highest available.
    </p>
    <h2>A serious word on copyright</h2>
    <p>
      Downloading a thumbnail does not give you any rights to it. The image belongs to the video
      owner (or their designer), and reusing it on your own videos — even edited — can get you a
      copyright strike. Legitimate uses: studying design, recovering a thumbnail you lost from
      your own video, or referencing it in commentary or critique. When in doubt, design your
      own. Our guide on <Link href="/blog/best-youtube-thumbnail-practices">thumbnail best
      practices</Link> walks through the design rules that actually move CTR.
    </p>
    <h2>How to set a custom thumbnail in YouTube Studio</h2>
    <p>
      Go to YouTube Studio → Content → click your video → Details, and you&apos;ll see the
      thumbnail section at the top. Click &quot;Upload thumbnail&quot; and choose a 1280×720 JPG
      or PNG under 2MB. (If the option is missing, verify your account with a phone number
      first — YouTube requires it.) You can swap thumbnails anytime after publishing, which
      makes them the easiest thing on YouTube to A/B test: if a video underperforms in its
      first 48 hours, a thumbnail refresh is often the first fix to try.
    </p>
  </>
);

export const thumbnailDownloaderFaqs = [
  {
    q: "Why is the Full HD thumbnail missing for some videos?",
    a: "YouTube only generates a maxres (1280×720) thumbnail when the creator uploaded a high-resolution image. Older videos, auto-generated thumbnails, or low-res uploads won't have one. The HD (640×480) version exists for nearly every video and is the best available fallback.",
  },
  {
    q: "Is it legal to download YouTube thumbnails?",
    a: "Downloading for personal study, design reference, or recovering your own lost thumbnail is fine. What's not okay is reusing someone else's thumbnail on your videos without permission — that's copyright infringement and can earn a strike. Downloading gives you a file, not rights.",
  },
  {
    q: "What size should my YouTube thumbnail be?",
    a: "1280×720 pixels (16:9 aspect ratio), as a JPG or PNG under 2MB. YouTube displays thumbnails much smaller than that in most places, so design for legibility at small sizes: big text, one focal point, high contrast.",
  },
  {
    q: "How do I download the thumbnail from my own video?",
    a: "Paste your video's URL into the tool above and download the Full HD version — it's the exact image you uploaded (or YouTube's auto-generated frame). This is the fastest way to recover a thumbnail if you lost the original file.",
  },
  {
    q: "Does thumbnail image quality affect my video's performance?",
    a: "The file's resolution doesn't directly affect ranking, but visual clarity absolutely affects click-through rate. A crisp, high-contrast thumbnail outperforms a blurry one because viewers judge quality in a split second. Always upload at 1280×720.",
  },
];
