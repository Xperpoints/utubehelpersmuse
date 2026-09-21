"use client";

import { useState } from "react";

const TYPES = ["Tutorial", "Review", "Commentary", "Vlog"] as const;
const LENGTHS = ["Under 5 min", "5–10 min", "10–20 min"] as const;

interface Beat {
  title: string;
  points: string[];
}

interface Outline {
  hooks: string[];
  intro: string;
  beats: Beat[];
  rehooks: string[];
  cta: string;
  outro: string;
}

function buildOutline(topic: string, type: string, length: string): Outline {
  const beatCount = length === "Under 5 min" ? 4 : length === "5–10 min" ? 5 : 6;

  const hooks: Record<string, string[]> = {
    Tutorial: [
      `Stop doing ${topic} the hard way — here's the faster method nobody shows you.`,
      `In the next few minutes you'll learn ${topic} without the mistakes that waste most beginners' time.`,
      `If ${topic} has been confusing you, this video fixes that — starting with the one thing everyone gets wrong.`,
    ],
    Review: [
      `I spent 30 days with ${topic} so you don't have to — here's the honest truth.`,
      `Everyone's hyping ${topic}. I tested the claims, and some of them don't hold up.`,
      `Before you spend a dollar on ${topic}, watch this — it'll save you from the mistake I made.`,
    ],
    Commentary: [
      `Everyone's talking about ${topic}, but they're missing the real story.`,
      `Here's my unfiltered take on ${topic} — and why the popular opinion is wrong.`,
      `${topic} just changed everything. Let me explain what actually happened.`,
    ],
    Vlog: [
      `Today I'm taking you along as I tackle ${topic} — and it did not go as planned.`,
      `This is the real, unfiltered story of my ${topic} journey. No highlights reel.`,
      `I didn't expect ${topic} to change my week — but here's what happened.`,
    ],
  };

  const beatTemplates: Record<string, { title: string; points: string[] }[]> = {
    Tutorial: [
      { title: "The foundation", points: [`What ${topic} actually is, in plain language`, "The 2–3 concepts you must understand first", "Common beginner misconception to clear up now"] },
      { title: "Setup", points: [`Everything you need before starting ${topic}`, "Free vs paid options, honestly compared", "The 5-minute setup walkthrough"] },
      { title: "The core process", points: [`Step-by-step demonstration of ${topic}`, "What to do when something looks wrong", "Pro shortcut that saves real time"] },
      { title: "Mistakes to avoid", points: [`The #1 mistake beginners make with ${topic}`, "Two more subtle errors and how to fix them", "How to tell you're on the right track"] },
      { title: "Leveling up", points: [`Intermediate technique for ${topic}`, "Where to learn more (resources you trust)", "A small challenge for the viewer to try today"] },
      { title: "Real example", points: [`Walk through a complete ${topic} example start to finish`, "Narrate your decisions as you go", "Show the final result and what you'd improve"] },
    ],
    Review: [
      { title: "First impressions", points: [`Unboxing / initial look at ${topic}`, "Build quality and presentation", "What's in the box (or included)"] },
      { title: "The testing process", points: [`How you tested ${topic} — be specific`, "The criteria you're judging it against", "Anything surprising in the first days"] },
      { title: "Strengths", points: [`The 2–3 things ${topic} genuinely does well`, "Who benefits most from these strengths", "Comparison to what you used before"] },
      { title: "Weaknesses", points: [`Honest drawbacks of ${topic}`, "Deal-breakers for certain buyers", "Workarounds if they exist"] },
      { title: "Value verdict", points: [`Is ${topic} worth the price?`, "Better alternatives at different budgets", "Your clear recommendation by use case"] },
      { title: "Long-term notes", points: [`How ${topic} held up over time`, "Durability / reliability observations", "Would you buy it again?"] },
    ],
    Commentary: [
      { title: "What happened", points: [`The facts about ${topic} — no spin`, "Timeline of events in order", "Sources viewers can check themselves"] },
      { title: "Why it matters", points: [`The bigger picture behind ${topic}`, "Who is affected and how", "What most coverage is missing"] },
      { title: "The other side", points: [`The strongest counter-argument about ${topic}`, "Steel-man it fairly before responding", "Where you agree with critics"] },
      { title: "Your analysis", points: [`Your actual take on ${topic}`, "Evidence and reasoning, not just vibes", "What you'd need to see to change your mind"] },
      { title: "What happens next", points: [`Your prediction about ${topic}`, "What to watch for in the coming weeks", "How viewers can form their own view"] },
      { title: "Community angle", points: [`What your audience thinks about ${topic}`, "Best comments / responses so far", "Question to spark discussion below"] },
    ],
    Vlog: [
      { title: "Setting the scene", points: [`Where you are and why ${topic} matters today`, "The plan for the day in one line", "One detail that makes viewers feel present"] },
      { title: "The journey begins", points: [`First steps of ${topic} — show, don't just tell`, "Your honest expectations going in", "A small obstacle to create narrative tension"] },
      { title: "The middle", points: [`How ${topic} is actually going`, "An unplanned moment — keep the camera rolling", "Your real-time reaction, unfiltered"] },
      { title: "The turning point", points: [`What changed with ${topic}`, "The lesson or surprise", "How you felt in the moment"] },
      { title: "Reflection", points: [`What ${topic} taught you`, "What you'd do differently", "Advice for viewers in your shoes"] },
      { title: "What's next", points: [`Where ${topic} goes from here`, "Tease the next video naturally", "Thank viewers for coming along"] },
    ],
  };

  const templates = beatTemplates[type] ?? beatTemplates.Tutorial;
  const beats = templates.slice(0, beatCount);

  const rehooks = [
    "But here's where it gets interesting…",
    "And that's when I discovered something unexpected…",
    "Before we continue — the next part is the most important…",
    "Now, here's what nobody tells you about this…",
  ];

  return {
    hooks: hooks[type] ?? hooks.Tutorial,
    intro: `15 seconds: restate the promise from the hook, say who this video is for, and preview the ${beatCount} things you'll cover. No long channel intro — get to value immediately.`,
    beats,
    rehooks: rehooks.slice(0, beatCount - 1),
    cta: "Place your call-to-action after delivering real value (around 70% through): ask viewers to subscribe if the video helped, and point them to one specific next video.",
    outro: `30 seconds: recap the single biggest takeaway about ${topic}, tease the next video with a reason to watch it, end screen with 2 clickable options.`,
  };
}

export function VideoScriptTool() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState<string>("Tutorial");
  const [length, setLength] = useState<string>("5–10 min");
  const [outline, setOutline] = useState<Outline | null>(null);
  const [pickedHook, setPickedHook] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setOutline(buildOutline(topic.trim(), type, length));
    setPickedHook(0);
    setCopied(false);
  };

  const plainText = () => {
    if (!outline) return "";
    const t = topic.trim();
    const lines = [
      `VIDEO SCRIPT OUTLINE — ${t} (${type}, ${length})`,
      "",
      "HOOK (pick one):",
      ...outline.hooks.map((h, i) => `${i === pickedHook ? ">> " : "   "}${h}`),
      "",
      "INTRO:",
      outline.intro,
      "",
    ];
    outline.beats.forEach((b, i) => {
      lines.push(`BEAT ${i + 1}: ${b.title}`);
      b.points.forEach((p) => lines.push(`  - ${p}`));
      if (outline.rehooks[i]) lines.push(`  RE-HOOK: ${outline.rehooks[i]}`);
      lines.push("");
    });
    lines.push("CTA:", outline.cta, "", "OUTRO:", outline.outro);
    return lines.join("\n");
  };

  const copyOutline = async () => {
    try {
      await navigator.clipboard.writeText(plainText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const selectCls =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

  return (
    <div>
      <label htmlFor="vs-topic" className="block text-sm font-semibold text-slate-900">
        Video topic
      </label>
      <input
        id="vs-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. meal prepping on a budget"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vs-type" className="block text-sm font-semibold text-slate-900">
            Video type
          </label>
          <select id="vs-type" value={type} onChange={(e) => setType(e.target.value)} className={selectCls}>
            {TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vs-length" className="block text-sm font-semibold text-slate-900">
            Target length
          </label>
          <select id="vs-length" value={length} onChange={(e) => setLength(e.target.value)} className={selectCls}>
            {LENGTHS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Generate script outline
      </button>

      {outline && (
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Your outline — pick a hook to start</p>
            <button
              onClick={copyOutline}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? "Copied!" : "Copy full outline"}
            </button>
          </div>

          <div className="mt-3 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Hook options (click to choose)</p>
            {outline.hooks.map((h, i) => (
              <button
                key={i}
                onClick={() => setPickedHook(i)}
                className={`w-full rounded-lg border p-4 text-left text-sm ${
                  pickedHook === i
                    ? "border-red-500 bg-red-50 font-semibold text-slate-900"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs font-bold">
                  {i + 1}
                </span>
                {h}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Intro</p>
            <p className="mt-1 text-sm text-slate-700">{outline.intro}</p>
          </div>

          <div className="mt-4 space-y-3">
            {outline.beats.map((b, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="font-bold text-slate-900">
                  <span className="mr-2 text-red-600">{i + 1}.</span>
                  {b.title}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-700">
                  {b.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                {outline.rehooks[i] && (
                  <p className="mt-2 rounded bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                    Re-hook: &ldquo;{outline.rehooks[i]}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">CTA</p>
              <p className="mt-1 text-sm text-slate-700">{outline.cta}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Outro</p>
              <p className="mt-1 text-sm text-slate-700">{outline.outro}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
