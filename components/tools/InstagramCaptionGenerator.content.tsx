import type { ReactNode } from "react";
import Link from "next/link";

export const instagramCaptionGuide: ReactNode = (
  <>
    <h2>The first 125 characters do the heavy lifting</h2>
    <p>
      Instagram truncates captions after roughly 125 characters with a &ldquo;more&rdquo; link,
      and most people never tap it. That means your opening line isn&apos;t an introduction —
      it&apos;s a headline competing with everything else in the feed. Lead with the payoff, the
      twist, or the tension: the result before the backstory, the opinion before the context.
      If your caption starts with &ldquo;So today I wanted to share something I&apos;ve been
      thinking about lately,&rdquo; you&apos;ve spent your headline on throat-clearing. Say the
      interesting thing first; the context can live below the fold for the minority who tap
      through.
    </p>
    <h2>A structure that works: hook, value, CTA</h2>
    <p>
      You don&apos;t need to be a copywriter — you need a repeatable structure. <strong>Hook</strong>:
      one line that earns the tap on &ldquo;more.&rdquo; <strong>Value</strong>: the story, the
      tip, the behind-the-scenes detail — whatever the post promised. Keep paragraphs short;
      walls of text get skimmed. <strong>CTA</strong>: one clear ask at the end. The generator
      above builds exactly this skeleton, and it works for photos, carousels, and Reels alike.
      For Reels specifically, your caption plays backup to the video&apos;s own hook — see our{" "}
      <Link href="/tools/instagram-reel-ideas">Reel Ideas Generator</Link> for the video side of
      the equation.
    </p>
    <h2>Match the tone to your audience, not your mood</h2>
    <p>
      Funny captions get shares, professional ones build authority, motivational ones get saves,
      casual ones build intimacy. None is universally best — the right tone is the one your
      specific audience responds to. A finance educator going full meme-page risks confusing the
      followers who came for clarity; a comedy account suddenly posting earnest essays risks the
      reverse. Check your own analytics: which of your past captions got the most saves and
      shares? Double down on that voice. Consistency of tone is part of your brand — followers
      should be able to recognize your caption blind.
    </p>
    <h2>Calls to action that actually get responses</h2>
    <p>
      &ldquo;Comment below!&rdquo; is the CTA equivalent of elevator music — technically present,
      universally ignored. Specific asks outperform generic ones because they lower the effort
      of responding. &ldquo;What&apos;s the one thing you&apos;d add?&rdquo; beats
      &ldquo;Thoughts?&rdquo;. &ldquo;Save this for your next grocery run&rdquo; beats
      &ldquo;Save this!&rdquo; because it names the future moment. And questions with a
      constrained answer (&ldquo;Team A or Team B?&rdquo;) get more replies than open-ended ones
      because they&apos;re answerable in two seconds. One CTA per caption — two asks compete
      with each other and both lose.
    </p>
    <h2>Editing AI drafts into your actual voice</h2>
    <p>
      Use the generated caption as a first draft, never a final post. The fastest way to make it
      yours: read it aloud and fix every sentence you wouldn&apos;t actually say. Swap generic
      phrases for your specific details — real numbers, real place names, real opinions. Add one
      sentence only you could write. Then handle the hashtag block: keep the tags, but verify
      the important ones inside the Instagram app before posting (our{" "}
      <Link href="/tools/instagram-hashtag-generator">Hashtag Generator</Link> guide explains
      why). A caption that sounds like a template performs like a template. The tool saves you
      from the blank page; your voice is what makes it worth reading.
    </p>
  </>
);

export const instagramCaptionFaqs = [
  {
    q: "How long should an Instagram caption be?",
    a: "There's no magic length — short captions work for strong visuals, longer ones for storytelling and education. What matters is the first ~125 characters, which is all most people see before the 'more' cutoff. Put your hook there regardless of total length.",
  },
  {
    q: "Should I put hashtags in my Instagram caption?",
    a: "You can, and it makes no difference to reach whether they're in the caption or the first comment. Many creators put a few key hashtags at the end of the caption and the rest in the first comment to keep the caption readable.",
  },
  {
    q: "Do longer captions get more engagement?",
    a: "Not inherently. Longer captions give people more reason to spend time on your post, which can help, but only if the writing earns that time. A tight 40-word caption outperforms a rambling 300-word one. Match length to how much you actually have to say.",
  },
  {
    q: "How do I write a good hook for my caption?",
    a: "Lead with the payoff, the twist, or the tension — the result before the backstory. Ask yourself what would make a stranger stop scrolling, and put that in the first line. Avoid throat-clearing openers like 'So today I wanted to share…'",
  },
  {
    q: "Is it okay to use AI to write my captions?",
    a: "As a drafting aid, yes — Instagram doesn't penalize AI-assisted captions. But always edit the output into your own voice: read it aloud, fix anything you wouldn't say, and add specific details only you could write. Unedited template captions tend to underperform.",
  },
];
