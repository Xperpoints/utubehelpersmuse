import type { ReactNode } from "react";
import Link from "next/link";

export const channelNameGuide: ReactNode = (
  <>
    <h2>What makes a good channel name</h2>
    <p>
      A good channel name is <strong>memorable, spellable, and flexible</strong>. Memorable
      means it sticks after one hearing — short, rhythmic, easy to say out loud. Spellable
      means a viewer can type it correctly after hearing it once; if you have to spell it
      every time (&quot;it&apos;s Fitnezz with two z&apos;s&quot;), you&apos;ll bleed word-of-mouth
      traffic. Flexible means it won&apos;t trap you: &quot;Daily Keto Recipes&quot; is a prison
      the day you want to cover fitness, while &quot;Fresh Plate&quot; can grow with you.
    </p>
    <h2>The mistakes everyone makes</h2>
    <p>
      The classic errors: <strong>random numbers</strong> (&quot;GamerX2019&quot; — instantly
      dated, hard to say), <strong>copycat names</strong> (adding &quot;TV&quot; to a famous
      channel&apos;s name just makes you look like the knockoff), and <strong>hyper-narrow
      names</strong> that box out your future self. Another quiet killer is the name that only
      makes sense written down — say every candidate out loud, because most of your growth will
      come from people <em>hearing</em> your name in videos, podcasts, and conversations.
    </p>
    <h2>Channel name vs. handle: know the difference</h2>
    <p>
      Your <strong>channel name</strong> is the display name on your banner and videos — you can
      change it twice every 14 days. Your <strong>@handle</strong> (like @freshplate) is your
      unique identifier for mentions, Shorts watermarks, and your channel URL. Handles must be
      unique across YouTube; channel names don&apos;t have to be, but sharing a name with an
      established creator is still a terrible idea. Ideally, your name and handle match or are
      close cousins so viewers only have to remember one thing.
    </p>
    <h2>Should the name include keywords?</h2>
    <p>
      A keyword in the name (&quot;Budget Travel with Sam&quot;) gives a tiny search-relevance
      nudge and instantly tells new viewers what you cover. But it&apos;s optional — some of
      the biggest channels on YouTube are abstract names that earned meaning through content.
      If you include a keyword, keep it to one, and make sure you actually want to be
      associated with it in five years. Personality-driven channels age better with flexible
      names; tutorial channels benefit more from descriptive ones.
    </p>
    <h2>Rebranding without losing your audience</h2>
    <p>
      Already have a channel with a name you regret? Don&apos;t panic — rebrands are survivable.
      Announce it clearly in a community post and a short video, keep your handle redirect in
      mind (update links everywhere), and give it a month before judging. Viewers follow
      creators, not names; the channels that botch rebrands are the ones that change names
      silently and confuse everyone. One clean announcement beats months of ambiguity.
    </p>
    <h2>Before you commit</h2>
    <p>
      Run every finalist through the checklist above: search it on YouTube and Google, check the
      @handle availability, say it out loud, imagine it on a thumbnail and a T-shirt. Then stop
      deliberating — the name matters far less than the next hundred videos you publish under
      it. Once you&apos;ve chosen, lock in your branding with our{" "}
      <Link href="/tools/youtube-channel-banner-generator">Banner Guide</Link> so the channel looks
      as good as the name sounds.
    </p>
  </>
);

export const channelNameFaqs = [
  {
    q: "Can I change my YouTube channel name later?",
    a: "Yes — in YouTube Studio under Customization → Basic info. You can change it twice every 14 days, and changing the name doesn't affect your videos, subscribers, or URL (unless you also change your handle). Rebrands are common and survivable with a clear announcement.",
  },
  {
    q: "What's the difference between a channel name and a handle?",
    a: "The channel name is your display name shown on videos and your channel page. The @handle is your unique identifier used for mentions, channel URLs (youtube.com/@handle), and Shorts. Handles must be globally unique; channel names don't have to be — but duplicating a famous creator's name is still a bad idea.",
  },
  {
    q: "Should my channel name include keywords about my niche?",
    a: "It helps slightly with search relevance and instantly communicates your topic, which is valuable for tutorial-style channels. But it's optional — personality-driven channels often do better with flexible, brandable names that won't box them in as their content evolves.",
  },
  {
    q: "What if the name I want is already taken?",
    a: "Don't just add numbers or extra letters — 'FitnessPro1' looks amateur next to 'FitnessPro'. Instead, try a different angle: combine words, use a distinctive prefix/suffix, or pivot to a more original brandable name. Always verify with the YouTube and Google checks above before committing.",
  },
  {
    q: "Is a one-word or two-word name better?",
    a: "Two words is the sweet spot for most creators — distinctive enough to be searchable, short enough to remember ('Fresh Plate', 'Pixel Forge'). One-word names are powerful but usually taken. Three or more words start getting forgettable unless they form a natural phrase.",
  },
];
