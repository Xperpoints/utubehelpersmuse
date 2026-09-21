import type { ReactNode } from "react";
import Link from "next/link";

export const youtubeWatchTimeGuide: ReactNode = (
  <>
    <h2>Why watch time is the metric that matters most</h2>
    <p>
      Watch time — the total hours viewers spend watching your videos — is YouTube&apos;s
      clearest signal that your content is worth recommending. Clicks get viewers in the
      door; watch time proves the visit was worthwhile. It&apos;s also half of the standard
      monetization threshold: 4,000 valid public watch hours in the last 12 months alongside
      1,000 subscribers. The calculator above turns your views and average view duration
      into a concrete hours total so you can see exactly where you stand and how far you
      have left to go.
    </p>
    <h2>Average view duration beats raw view counts</h2>
    <p>
      Two channels can have identical view counts and wildly different watch hours. A
      channel averaging 8-minute views banks four times the watch time of one averaging 2
      minutes per view. That&apos;s why longer videos with solid retention are the fastest
      route to 4,000 hours — a 12-minute video holding 50% retention earns 6 minutes per
      viewer, while a 3-minute video at the same retention earns 90 seconds. Check your
      average view duration in Studio&apos;s Engagement tab, then structure videos to earn
      every minute: open with the payoff, cut ruthlessly, and use our{" "}
      <Link href="/tools/youtube-video-script-generator">Script Generator</Link> to plan
      retention beats before you film.
    </p>
    <h2>Retention curves show you where viewers leave</h2>
    <p>
      The average view duration number hides the story — the retention graph tells it. Look
      for the steepest drops: long intros, tangents, and slow segments are the usual
      suspects. A common fix is moving the most valuable moment earlier and teasing what
      comes next (&quot;and at the end I&apos;ll show you the mistake that cost me
      $200&quot;). Small structural changes often lift retention by a minute or more, which
      compounds across every future view. Review one retention graph per week and fix the
      single biggest drop you find.
    </p>
    <h2>The Shorts question, answered honestly</h2>
    <p>
      Shorts can explode your subscriber count, but Shorts views don&apos;t accumulate toward
      the 4,000 watch hours — they feed a separate 10-million-Shorts-views-in-90-days
      threshold instead. Many creators do both: Shorts for discovery and subscribers,
      long-form for watch hours and deeper ad revenue. If monetization is the goal, make
      sure long-form remains a real part of your schedule rather than assuming viral Shorts
      alone will get you there. And since thresholds and policies change, always verify the
      current requirements on YouTube&apos;s official monetization page.
    </p>
    <h2>A realistic plan to reach 4,000 hours</h2>
    <p>
      Do the math backwards from the goal: 4,000 hours is 240,000 minutes. If your videos
      average 5 minutes of view duration, you need 48,000 views in a rolling year — about
      4,000 views a month, or a handful of modestly performing videos. That reframes the
      goal from intimidating to achievable: publish consistently in a searchable niche using
      keywords from our <Link href="/tools/youtube-keyword-generator">Keyword
      Generator</Link>, keep viewers watching with chapters from our{" "}
      <Link href="/tools/youtube-chapter-generator">Chapter Generator</Link>, and let the
      hours compound. Track the trend monthly — a rising average view duration means every
      future view works harder for you.
    </p>
  </>
);

export const youtubeWatchTimeFaqs = [
  {
    q: "How many watch hours do I need to monetize on YouTube?",
    a: "The standard long-form path requires 4,000 valid public watch hours in the last 12 months plus 1,000 subscribers, along with meeting YouTube's policies. There is also a separate Shorts path based on Shorts views. Policies change, so verify current thresholds on YouTube's official monetization page.",
  },
  {
    q: "Do YouTube Shorts views count toward the 4,000 watch hours?",
    a: "No. Shorts views don't accumulate toward the 4,000 watch hours; they count toward a separate 10-million-Shorts-views-in-90-days threshold. If you're pursuing monetization through long-form, you need watch time from regular videos, not Shorts.",
  },
  {
    q: "What's a good average view duration?",
    a: "It depends on video length — what matters is the percentage. Holding 50%+ of viewers through a video is generally strong, while under 30% suggests structural problems like slow intros or tangents. Longer videos naturally have lower percentage retention but can still bank more total minutes per viewer.",
  },
  {
    q: "Do my own views count toward watch time?",
    a: "No. YouTube filters out your own views and other invalid traffic from watch-time totals. Only genuine viewer watch time counts toward monetization thresholds, which is another reason to focus on content real viewers want to finish.",
  },
  {
    q: "How can I increase watch time fastest as a small channel?",
    a: "Publish longer videos (8–15 minutes) in searchable niches so each view banks more minutes, fix the biggest drop-off point in your retention graphs, and open videos with the payoff instead of a slow intro. Consistency matters more than any single trick — every video is another chance to accumulate hours.",
  },
];
