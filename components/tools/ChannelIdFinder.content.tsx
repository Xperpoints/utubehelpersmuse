import type { ReactNode } from "react";
import Link from "next/link";

export const channelIdFinderGuide: ReactNode = (
  <>
    <h2>Channel ID vs handle vs custom URL</h2>
    <p>
      YouTube identifies channels three ways, and mixing them up causes real headaches. The{" "}
      <strong>channel ID</strong> is a permanent 24-character code starting with
      &quot;UC&quot; — it never changes and uniquely identifies the channel. The{" "}
      <strong>handle</strong> (like @SomeCreator) is the human-friendly name from YouTube&apos;s
      2022 rollout — unique, but changeable. <strong>Custom URLs</strong> (/c/Name) and legacy{" "}
      <strong>usernames</strong> (/user/Name) are older formats that still float around. When a
      form asks for your channel ID, only the UC… code works.
    </p>
    <h2>When do you actually need the ID?</h2>
    <p>
      More often than you&apos;d think: embedding a channel&apos;s upload feed on a website,
      using the YouTube Data API, verifying ownership with third-party tools, contacting
      YouTube support (they identify channels by ID, not name), and some brand-deal platforms.
      Handles are great for humans; IDs are what machines want.
    </p>
    <h2>Where YouTube shows it now</h2>
    <p>
      YouTube used to bury the ID in page source. These days it&apos;s much easier: open any
      channel, go to the <strong>About</strong> tab, click <strong>Share channel</strong>, and
      choose <strong>Copy channel ID</strong>. For your own channel, YouTube Studio → Settings →
      Channel shows it too. If someone sends you a /channel/UC… link, the ID is right there in
      the URL — which is exactly what the finder above extracts.
    </p>
    <h2>A brief history of handles</h2>
    <p>
      Before late 2022, channels were a mess of /user/, /c/, and /channel/ URLs. YouTube
      introduced @handles to give every channel one unique, mentionable identity across
      comments, Shorts, and search — similar to other social platforms. If your channel predates
      handles, you were assigned one automatically, but you can change it in YouTube Studio.
    </p>
    <h2>Keep your ID handy</h2>
    <p>
      Save your channel ID in the same place you keep other channel essentials. And if
      you&apos;re setting up the rest of your channel properly, our{" "}
      <Link href="/tools/youtube-channel-banner-generator">Banner Guide</Link> and{" "}
      <Link href="/tools/youtube-channel-name-generator">Channel Name Generator</Link> are good next
      stops.
    </p>
  </>
);

export const channelIdFinderFaqs = [
  {
    q: "What's the difference between a channel ID and a handle?",
    a: "The channel ID is a permanent 24-character code starting with 'UC' that never changes and is used by YouTube's systems. A handle (@name) is the human-friendly public name — unique, but you can change it. Forms and APIs that ask for an ID need the UC… code, not the handle.",
  },
  {
    q: "Can two channels have the same handle?",
    a: "No. Handles are unique across YouTube — that's their entire purpose. If the handle you want is taken, you'll need a variation. Channel names (the display name), on the other hand, don't have to be unique.",
  },
  {
    q: "How do I find my own channel's ID?",
    a: "Three easy ways: YouTube Studio → Settings → Channel; your channel's About tab → Share channel → Copy channel ID; or open your channel and look at the URL if it uses the /channel/UC… format.",
  },
  {
    q: "Does a channel ID ever change?",
    a: "No. The channel ID is permanent for the life of the channel — unlike handles, display names, and custom URLs, which you can change. That's exactly why official systems and APIs use it as the identifier.",
  },
  {
    q: "What is a custom URL on YouTube?",
    a: "A custom URL (youtube.com/c/YourName) was an older vanity URL format granted to eligible channels. They still work, but YouTube now pushes @handles as the standard. Neither is the channel ID — use the finder above to get the actual ID.",
  },
];
