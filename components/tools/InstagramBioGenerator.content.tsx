import type { ReactNode } from "react";
import Link from "next/link";

export const instagramBioGuide: ReactNode = (
  <>
    <h2>Your bio is a landing page, not a resume</h2>
    <p>
      You have <strong>150 characters</strong> and about three seconds of a visitor&apos;s
      attention. Most bios fail because they read like a resume — a list of credentials and
      adjectives — when they should read like a landing page: who this is for, what they get,
      and what to do next. Nobody follows a bio; they follow the promise the bio makes. Before
      writing a word, answer one question: if a stranger lands on your profile, what&apos;s the
      single reason they should hit follow? Everything in your bio exists to deliver that
      answer.
    </p>
    <h2>The four lines that matter</h2>
    <p>
      A strong bio typically covers four things in four short lines. <strong>Identity</strong>:
      your name or brand, plainly stated. <strong>Value</strong>: what you do or post about, in
      concrete terms (&ldquo;home workouts&rdquo; beats &ldquo;fitness enthusiast&rdquo;).{" "}
      <strong>Relevance</strong>: who it&apos;s for — this is the line that makes the right
      visitor think &ldquo;that&apos;s me.&rdquo; <strong>Action</strong>: what to do next, like
      checking your pinned posts or tapping your link. The generator above builds exactly this
      four-line structure in three different styles. Pick the one closest to your voice, then
      customize the specifics.
    </p>
    <h2>Your bio is searchable — use keywords</h2>
    <p>
      Instagram search indexes the name field and bio text, which means the words you choose
      affect discoverability. If you&apos;re a sourdough baker in Austin, having
      &ldquo;sourdough&rdquo; in your bio helps you surface when someone searches it;
      &ldquo;bread artist on a journey&rdquo; does not. This isn&apos;t about keyword stuffing —
      one or two natural, specific terms is plenty. Think about what your ideal follower would
      actually type into search, and make sure those words appear. Vague is the enemy:
      &ldquo;creator,&rdquo; &ldquo;lifestyle,&rdquo; and &ldquo;content&rdquo; describe everyone
      and therefore no one.
    </p>
    <h2>Line breaks and readability</h2>
    <p>
      A bio crammed into one paragraph is a bio nobody reads. Line breaks are free and they
      transform scannability — each line becomes a separate thought the eye can catch in a
      glance. Put the most important line first, because on some screens only the first line or
      two is visible without expanding. Skip the emoji-every-line aesthetic unless it genuinely
      fits your brand; clean text with clear line breaks reads as more credible for most
      professional accounts. And resist the urge to list every interest — a bio trying to appeal
      to everyone converts no one.
    </p>
    <h2>One link — make it count</h2>
    <p>
      Instagram gives you limited link real estate in the bio, so the destination matters.
      Link to the single action you want most: your latest offer, your newsletter signup, your
      booking page — not your homepage and hope. If you genuinely need multiple destinations, a
      simple link-in-bio page works, but keep it to a handful of links; a page with forty
      buttons is just a second homepage. Whatever you link, make sure the bio&apos;s action
      line points to it explicitly (&ldquo;New program below&rdquo;), so the visitor connects
      the promise to the click. And once your bio is set, make sure your handle is just as
      intentional — our <Link href="/tools/instagram-username-generator">Username
      Generator</Link> can help. Then keep the voice consistent in your posts with our{" "}
      <Link href="/tools/instagram-caption-generator">Caption Generator</Link>.
    </p>
  </>
);

export const instagramBioFaqs = [
  {
    q: "How many characters can an Instagram bio have?",
    a: "150 characters, including spaces and line breaks. That constraint is actually helpful — it forces you to say only what matters. The generator above shows a live character count and warns you if a draft goes over.",
  },
  {
    q: "Should I use emojis in my Instagram bio?",
    a: "Sparingly, and only if they fit your brand. Emojis can add personality and visual structure, but an emoji on every line tends to read as less credible, especially for professional accounts. Clean text with line breaks is the safer default.",
  },
  {
    q: "What should the name field say — my real name or keywords?",
    a: "Ideally both. The name field is searchable on Instagram, so 'Sara Ahmed | Home Workouts' gives you identity plus discoverability. If you must choose, lean toward whatever your audience would search for.",
  },
  {
    q: "How often should I update my bio?",
    a: "Update it whenever your focus changes — a new offer, a new content series, a seasonal push. Otherwise, a good bio can stay stable for months. Review it quarterly and ask: does this still describe what a new visitor will actually find here?",
  },
  {
    q: "Do I need a call to action in my bio?",
    a: "Yes — one. Tell visitors what to do next: check your pinned posts, tap your link, DM a keyword. Without an action line, interested visitors often just leave. Keep it to a single ask so it doesn't compete with itself.",
  },
];
