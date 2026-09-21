import type { ReactNode } from "react";
import Link from "next/link";

export const titleGeneratorGuide: ReactNode = (
  <>
    <h2>Why titles drive clicks more than anything else</h2>
    <p>
      Your title and thumbnail are the only things a viewer sees before deciding to click, and
      the title does specific work the thumbnail can&apos;t: it carries the searchable keywords,
      sets the expectation, and creates the curiosity gap. YouTube&apos;s algorithm watches what
      happens next — impressions that turn into clicks tell it your packaging works, and it
      shows the video to more people. A great video with a weak title simply never gets its
      chance.
    </p>
    <h2>The curiosity gap vs. clickbait (the honest line)</h2>
    <p>
      Here&apos;s the line, stated plainly: curiosity makes viewers <em>want</em> to know the
      answer; clickbait <em>lies</em> about the answer. &quot;The Truth About Meal Prep Nobody
      Tells You&quot; is curiosity — it works if your video genuinely shares something
      uncommon. &quot;You Won&apos;t BELIEVE What Happened!!&quot; on a video where nothing
      surprising happens is clickbait, and it punishes you twice: viewers feel tricked and leave
      (killing retention), and they stop trusting your future titles. Write titles you&apos;d
      click yourself — then make sure the video earns them.
    </p>
    <h2>Front-load your keywords</h2>
    <p>
      Put the most important words first. &quot;Sourdough Bread for Beginners: Full
      Guide&quot; beats &quot;Full Guide to Sourdough Bread for Beginners&quot; because search
      results and suggested feeds truncate long titles, and viewers scan left to right. This
      matters doubly on mobile, where YouTube cuts titles at around 60 characters — anything
      after that is invisible until someone taps. The character counts above flag titles that
      cross the 70-character danger zone.
    </p>
    <h2>The 60-character mobile reality</h2>
    <p>
      Most YouTube watch time happens on phones, and phones show roughly the first 40–60
      characters of a title depending on the surface. Design your titles so the first half alone
      is compelling: lead with the benefit, the number, or the hook. If your title only makes
      sense in full, rewrite it. Test this yourself — pull up YouTube on your phone and look at
      how your favorite creators&apos; titles read truncated.
    </p>
    <h2>Test titles with Test &amp; Compare</h2>
    <p>
      YouTube Studio now lets you test up to three titles (and thumbnails) against each other
      and shows you which earns more watch time. Use it. Write your best two or three variants
      from the generator, run the test for a week or two, and let real viewer behavior decide.
      Over time you&apos;ll build an instinct for what your specific audience clicks — which is
      worth more than any formula. For the visual half of packaging, read our{" "}
      <Link href="/blog/best-youtube-thumbnail-practices">thumbnail best practices guide</Link>.
    </p>
  </>
);

export const titleGeneratorFaqs = [
  {
    q: "How long should a YouTube title be?",
    a: "Aim for under 60 characters so the full title displays on mobile, and stay under 100 characters total (YouTube's hard limit). Front-load the important words — viewers and the algorithm both weight the beginning of the title more heavily.",
  },
  {
    q: "What's the difference between curiosity and clickbait?",
    a: "Curiosity withholds an answer your video genuinely provides; clickbait promises something the video doesn't deliver. Curiosity earns clicks and retention. Clickbait earns clicks and angry early exits, which tanks your video's performance and erodes trust.",
  },
  {
    q: "Should my main keyword go at the start of the title?",
    a: "Usually yes. Leading with the keyword helps with search relevance and guarantees it's visible when titles get truncated on mobile. Natural phrasing still matters — don't force it if it reads awkwardly.",
  },
  {
    q: "Can I change my video's title after publishing?",
    a: "Yes, anytime in YouTube Studio, and it's one of the best optimization levers you have. If a video underperforms in its first 48 hours, try a new title (and thumbnail) before giving up on it. YouTube will re-test the video with fresh packaging.",
  },
  {
    q: "Do emojis in titles help get clicks?",
    a: "Rarely, and they can hurt. An emoji can add visual pop in some niches, but overuse looks spammy and wastes precious character space. One relevant emoji at most — and never as a substitute for a strong hook in words.",
  },
];
