"use client";

import { useState } from "react";

interface Template {
  title: (t: string) => string;
  angle: string;
}

const FORMATS = ["Tutorial", "Listicle", "Comparison", "Review", "Challenge", "Storytime"] as const;

const TEMPLATES: Record<string, Template[]> = {
  Tutorial: [
    { title: (t) => `How to ${t} for Beginners (Step by Step)`, angle: "Search-friendly evergreen — beginners type exactly this into search." },
    { title: (t) => `${t} Tutorial: Everything You Need to Know in 2026`, angle: "Authority play — positions you as the complete guide for the year." },
    { title: (t) => `The Fastest Way to Learn ${t} (No Fluff)`, angle: "Speed promise — appeals to impatient viewers who skip long intros." },
    { title: (t) => `${t} for Beginners: 5 Mistakes to Avoid`, angle: "Fear-of-failure angle — mistakes content gets high click-through." },
    { title: (t) => `Learn ${t} in 10 Minutes (Full Crash Course)`, angle: "Time-boxed promise — great for lunch-break and commute viewers." },
    { title: (t) => `How I Learned ${t} (And What I'd Do Differently)`, angle: "Personal experience — builds trust and stands out from generic tutorials." },
    { title: (t) => `${t} Basics: Start Here If You're a Complete Beginner`, angle: "Zero-assumption framing — widens your audience to total newcomers." },
    { title: (t) => `Advanced ${t}: 7 Techniques Pros Use`, angle: "Skill-ladder content — captures viewers who outgrew beginner videos." },
    { title: (t) => `Free ${t} Course: From Zero to Confident`, angle: "Course framing — encourages binge-watching and playlist saves." },
    { title: (t) => `${t} Explained Simply (With Real Examples)`, angle: "Clarity promise — wins when the topic is known to be confusing." },
    { title: (t) => `The Only ${t} Guide You'll Ever Need`, angle: "Definitive claim — high click potential, but the video must deliver." },
    { title: (t) => `${t} Tips Nobody Tells Beginners`, angle: "Insider-knowledge angle — curiosity gap drives the click." },
  ],
  Listicle: [
    { title: (t) => `10 ${t} Tips That Actually Work`, angle: "Numbered promise — listicles are reliably clickable and skimmable." },
    { title: (t) => `7 ${t} Mistakes You're Probably Making`, angle: "Self-diagnosis hook — viewers click to check themselves." },
    { title: (t) => `15 Best ${t} Ideas for 2026`, angle: "Roundup format — strong search traffic and easy to update yearly." },
    { title: (t) => `Top 5 ${t} Tools You Need Right Now`, angle: "Buyer-intent list — attracts viewers ready to spend." },
    { title: (t) => `12 ${t} Hacks That Save You Hours`, angle: "Efficiency promise — 'hacks' framing still converts in how-to niches." },
    { title: (t) => `${t}: 8 Things I Wish I Knew Sooner`, angle: "Regret framing — personal and relatable, great for retention." },
    { title: (t) => `The 6 Levels of ${t} (Beginner to Pro)`, angle: "Progression format — viewers watch to find their level." },
    { title: (t) => `9 ${t} Myths You Need to Stop Believing`, angle: "Myth-busting — contrarian takes earn comments and shares." },
    { title: (t) => `20 ${t} Ideas You Haven't Tried Yet`, angle: "Novelty promise — works when the niche feels saturated." },
    { title: (t) => `5 ${t} Trends That Will Matter in 2026`, angle: "Trend forecasting — timely content with a built-in expiry urgency." },
    { title: (t) => `${t} Dos and Don'ts: The Ultimate List`, angle: "Dual framing — doubles the reasons to click." },
    { title: (t) => `11 Underrated ${t} Tips Pros Swear By`, angle: "'Underrated' signals fresh info even experts missed." },
  ],
  Comparison: [
    { title: (t) => `${t} vs Alternatives: Which Is Actually Best?`, angle: "Decision-helper — captures high-intent comparison searches." },
    { title: (t) => `I Tried Every ${t} Method So You Don't Have To`, angle: "Exhaustive test framing — builds authority through effort." },
    { title: (t) => `Cheap vs Expensive ${t}: Is It Worth It?`, angle: "Price-comparison — evergreen buyer-intent content." },
    { title: (t) => `${t}: Beginner vs Pro Approach`, angle: "Skill-gap comparison — viewers identify with one side." },
    { title: (t) => `Old Way vs New Way: ${t} in 2026`, angle: "Recency angle — implies everything viewers knew is outdated." },
    { title: (t) => `Ranking Every ${t} Option From Worst to Best`, angle: "Tier-list energy — strong retention as viewers wait for #1." },
    { title: (t) => `${t} Showdown: The Honest Pros and Cons`, angle: "'Honest' framing — trust-builder in review-heavy niches." },
    { title: (t) => `What $100 vs $1000 Gets You in ${t}`, angle: "Budget contrast — inherently visual and curiosity-driving." },
    { title: (t) => `${t} Myths vs Facts: What's Actually True?`, angle: "Debunk format — great for niches full of bad advice." },
    { title: (t) => `Before and After: ${t} Transformation`, angle: "Transformation proof — the result is the thumbnail." },
    { title: (t) => `${t}: What Experts Do Differently`, angle: "Expert-gap framing — aspirational and clickable." },
    { title: (t) => `Two ${t} Strategies Tested: Here's the Winner`, angle: "Experiment format — the test itself is the entertainment." },
  ],
  Review: [
    { title: (t) => `${t} Review: Honest Thoughts After 30 Days`, angle: "Time-tested review — 'after 30 days' beats first-impression reviews." },
    { title: (t) => `Is ${t} Worth It in 2026? (Honest Review)`, angle: "Purchase-decision search — high-intent viewers." },
    { title: (t) => `${t}: 5 Things I Love and 3 I Hate`, angle: "Balanced take — more believable than pure praise." },
    { title: (t) => `I Used ${t} for a Month — Here's What Happened`, angle: "Diary format — narrative structure keeps viewers watching." },
    { title: (t) => `${t} Review: Who Should (and Shouldn't) Buy It`, angle: "Audience filter — qualifies viewers, builds trust." },
    { title: (t) => `The Truth About ${t} Nobody Mentions`, angle: "Hidden-truth angle — curiosity gap for saturated review niches." },
    { title: (t) => `${t} Unboxing and First Impressions`, angle: "Launch-window content — publish fast when products are new." },
    { title: (t) => `${t} Long-Term Review: Still Worth It?`, angle: "Durability angle — stands out among day-one reviews." },
    { title: (t) => `Don't Buy ${t} Until You Watch This`, angle: "Warning framing — strong CTR, but the critique must be real." },
    { title: (t) => `${t} vs The Hype: Realistic Expectations`, angle: "Expectation-setting — attracts skeptics tired of hype." },
    { title: (t) => `Every ${t} Claim Tested (Honest Results)`, angle: "Claim-verification — methodical and highly watchable." },
    { title: (t) => `${t}: The Good, The Bad, and The Ugly`, angle: "Classic structure — viewers stay for all three acts." },
  ],
  Challenge: [
    { title: (t) => `I Did ${t} Every Day for 30 Days`, angle: "Commitment challenge — the streak is the story arc." },
    { title: (t) => `${t} Challenge: Can I Learn It in 24 Hours?`, angle: "Time-pressure challenge — urgency keeps viewers watching." },
    { title: (t) => `Surviving 7 Days of ${t} (Hardest Challenge Yet)`, angle: "Endurance framing — difficulty is the entertainment." },
    { title: (t) => `${t} With No Experience: Day 1 to Day 30`, angle: "Zero-to-hero arc — satisfying progression viewers binge." },
    { title: (t) => `I Let My Subscribers Control My ${t} for a Week`, angle: "Audience participation — drives comments and community." },
    { title: (t) => `$10 vs $1000 ${t} Challenge`, angle: "Budget challenge — inherently visual contrast." },
    { title: (t) => `${t} Challenge: Last to Quit Wins`, angle: "Competition format — collaboration potential with other creators." },
    { title: (t) => `Trying ${t} Until I Succeed (No Quitting)`, angle: "Persistence narrative — failure moments become highlights." },
    { title: (t) => `100 Days of ${t}: What Changed?`, angle: "Long-arc payoff — the transformation justifies the click." },
    { title: (t) => `${t} Speedrun: How Fast Can a Beginner Learn?`, angle: "Gaming-language framing — pulls in speedrun-culture viewers." },
    { title: (t) => `I Tried the Hardest ${t} Challenge on the Internet`, angle: "Superlative claim — must genuinely attempt something hard." },
    { title: (t) => `${t} for 24 Hours Straight (Exhausting)`, angle: "Marathon format — the struggle is relatable content." },
  ],
  Storytime: [
    { title: (t) => `How ${t} Changed My Life`, angle: "Transformation story — emotional stakes drive watch time." },
    { title: (t) => `My ${t} Journey: From Failure to Success`, angle: "Redemption arc — the classic high-retention narrative." },
    { title: (t) => `What ${t} Taught Me About Life`, angle: "Reflection format — deeper connection with loyal viewers." },
    { title: (t) => `The ${t} Mistake That Almost Ended Everything`, angle: "High-stakes hook — viewers need to know what happened." },
    { title: (t) => `Why I Quit ${t} (And What I Do Instead)`, angle: "Contrarian exit story — strong CTR from the surprise." },
    { title: (t) => `My First Year of ${t}: Honest Recap`, angle: "Anniversary content — relatable milestone viewers love." },
    { title: (t) => `The Day ${t} Finally Clicked For Me`, angle: "Breakthrough moment — aspirational for struggling viewers." },
    { title: (t) => `${t} Horror Story: What Went Wrong`, angle: "Cautionary tale — schadenfreude plus genuine lessons." },
    { title: (t) => `How I Made My First $1000 With ${t}`, angle: "Money milestone — specific numbers beat vague claims." },
    { title: (t) => `Nobody Talks About This Side of ${t}`, angle: "Untold-story angle — curiosity about the hidden reality." },
    { title: (t) => `My ${t} Routine: A Day in My Life`, angle: "Routine content — intimate format that builds parasocial trust." },
    { title: (t) => `Answering Your ${t} Questions (Q&A)`, angle: "Community format — rewards engaged subscribers." },
  ],
};

interface Idea {
  title: string;
  angle: string;
}

export function VideoIdeasTool() {
  const [niche, setNiche] = useState("");
  const [format, setFormat] = useState<string>("Tutorial");
  const [offset, setOffset] = useState(0);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleGenerate = (newOffset?: number) => {
    const topic = niche.trim();
    if (!topic) return;
    const off = newOffset ?? offset;
    const templates = TEMPLATES[format] ?? TEMPLATES.Tutorial;
    const picked: Idea[] = [];
    for (let i = 0; i < 10; i++) {
      const tpl = templates[(i + off) % templates.length];
      picked.push({ title: tpl.title(topic), angle: tpl.angle });
    }
    setIdeas(picked);
    setCopiedIdx(null);
  };

  const handleShuffle = () => {
    const next = offset + 5;
    setOffset(next);
    handleGenerate(next);
  };

  const copyIdea = async (title: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(title);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="vi-niche" className="block text-sm font-semibold text-slate-900">
        Your niche or topic
      </label>
      <input
        id="vi-niche"
        type="text"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate(0)}
        placeholder="e.g. indoor plants, budget travel, excel tips"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <label htmlFor="vi-format" className="mt-4 block text-sm font-semibold text-slate-900">
        Video format
      </label>
      <select
        id="vi-format"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      >
        {FORMATS.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => {
            setOffset(0);
            handleGenerate(0);
          }}
          disabled={!niche.trim()}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Generate ideas
        </button>
        {ideas.length > 0 && (
          <button
            onClick={handleShuffle}
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Shuffle for more
          </button>
        )}
      </div>

      {ideas.length > 0 && (
        <div className="mt-6 space-y-3">
          {ideas.map((idea, idx) => (
            <div
              key={`${offset}-${idx}`}
              className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div>
                <p className="font-semibold text-slate-900">{idea.title}</p>
                <p className="mt-1 text-sm text-slate-600">{idea.angle}</p>
              </div>
              <button
                onClick={() => copyIdea(idea.title, idx)}
                className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {copiedIdx === idx ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
