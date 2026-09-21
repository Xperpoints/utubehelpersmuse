import type { ReactNode } from "react";

export const commentPickerGuide: ReactNode = (
  <>
    <h2>How to run a fair giveaway</h2>
    <p>
      A giveaway lives or dies on trust. Before you announce anything, write down the rules:
      who can enter, how to enter, the deadline, how the winner is chosen, and what the prize
      is. Post the rules where everyone can see them — your video description is the natural
      home — and don&apos;t change them midway. Viewers forgive small prizes; they don&apos;t
      forgive moving goalposts.
    </p>
    <h2>Why transparency matters more than the prize</h2>
    <p>
      Most giveaway drama isn&apos;t about the prize — it&apos;s about suspicion. &quot;How do
      we know you didn&apos;t just pick your friend?&quot; The fix is simple: show the process.
      Screen-record your winner draw, publish the list of eligible entries if practical, and
      announce winners publicly. This tool draws using a Fisher-Yates shuffle — the standard
      unbiased shuffling algorithm — so every entry has a mathematically equal chance.
    </p>
    <h2>The legal basics (not legal advice)</h2>
    <p>
      Giveaway laws vary by country and sometimes by state. Common requirements include stating
      &quot;no purchase necessary,&quot; setting clear eligibility (age, location), and not
      running lotteries disguised as giveaways. YouTube also has contest policies — check the
      current rules in YouTube&apos;s help center before launching. When in doubt, keep the
      mechanics simple: comment to enter, random draw, public announcement.
    </p>
    <h2>Announcing the winner</h2>
    <p>
      Announce winners in a community post or a short video, and give them a clear way to claim
      the prize within a set window (7 days is standard). If a winner doesn&apos;t respond,
      draw again publicly rather than quietly picking someone else. Document each step —
      screenshots of the draw protect you if anyone questions the result later.
    </p>
    <h2>Don&apos;t buy engagement with gimmicks</h2>
    <p>
      Requiring subscriptions, likes, or shares as entry conditions can violate platform
      policies and attracts prize-hunters who unsubscribe the day after. The healthiest
      giveaways reward your existing community: a simple comment entry keeps it fun, fair, and
      within the rules.
    </p>
  </>
);

export const commentPickerFaqs = [
  {
    q: "Is the winner selection truly random?",
    a: "Yes. The tool shuffles all eligible entries with the Fisher-Yates algorithm — the standard method for unbiased shuffling — using your browser's random number generator. Every entry has an equal probability of being drawn, and already-drawn winners are excluded from re-rolls.",
  },
  {
    q: "Why do I have to paste comments manually?",
    a: "Reading your YouTube comments automatically requires YouTube API access tied to your Google account, which would force a login flow and data permissions. Manual pasting keeps the tool free, private, and working without any account — everything stays in your browser.",
  },
  {
    q: "How can I prove to my audience the draw was fair?",
    a: "Screen-record the entire draw from pasting comments to revealing the winner, and publish the recording. State your rules publicly before the deadline, and consider publishing the entry list. Transparency before, during, and after the draw eliminates suspicion.",
  },
  {
    q: "Can I filter entries by a keyword or hashtag?",
    a: "Yes — use the 'only include comments containing' field. This is useful when your entry rule is commenting a specific phrase or hashtag. Combine it with duplicate removal so each person gets exactly one entry.",
  },
  {
    q: "Are there legal requirements for YouTube giveaways?",
    a: "Often, yes — and they vary by location. Common rules include 'no purchase necessary' entry, clear eligibility criteria, and stated start/end dates. YouTube also has its own contest policies. This isn't legal advice: check your local laws and YouTube's current policies before running a giveaway with significant prizes.",
  },
];
