import type { ReactNode } from "react";
import Link from "next/link";

export const youtubeKeywordGuide: ReactNode = (
  <>
    <h2>Why keyword research still matters on YouTube</h2>
    <p>
      YouTube is the world&apos;s second-largest search engine, and a meaningful share of views
      still comes from search — especially for tutorials, reviews, and how-to content. Keyword
      research is simply the habit of learning the words your viewers actually type before you
      write your title. A video called &quot;My Morning Routine&quot; competes with millions of
      vlogs; a video called &quot;5-Minute Morning Routine for Night-Shift Nurses&quot; matches a
      specific search with far less competition. The generator above builds those specific,
      searchable phrases from your topic so you start from real search language instead of
      guessing.
    </p>
    <h2>Questions: the easiest wins for new channels</h2>
    <p>
      Question-style keywords (&quot;how to...&quot;, &quot;what is...&quot;, &quot;why
      does...&quot;) are gold for smaller channels because the searcher has a clear problem and
      big channels often ignore these narrow queries. When someone searches &quot;how to
      propagate pothos in water,&quot; they want one answer, not a celebrity gardener. Answer
      the exact question in the first 30 seconds, then expand. Put the question phrasing in
      your title or first description line with our{" "}
      <Link href="/tools/youtube-title-generator">Title Generator</Link> and{" "}
      <Link href="/tools/youtube-description-generator">Description Generator</Link>, and
      YouTube can confidently match your video to that search.
    </p>
    <h2>Comparisons signal viewers ready to act</h2>
    <p>
      Comparison searches — &quot;X vs Y,&quot; &quot;best X for beginners,&quot; &quot;X pros
      and cons&quot; — come from viewers close to a decision, which makes them valuable even at
      low volume. These videos also earn strong watch time because viewers watch carefully to
      make up their minds. Be genuinely honest in comparisons: viewers smell a rigged verdict
      instantly, and a balanced take earns the trust that turns a searcher into a subscriber.
      If your niche has tools, products, or methods worth comparing, make these videos a
      regular part of your upload schedule.
    </p>
    <h2>Long-tail phrases are how small channels get found</h2>
    <p>
      A long-tail keyword is a longer, more specific phrase — &quot;easy sourdough for
      beginners step by step&quot; instead of &quot;sourdough.&quot; Individually they get
      fewer searches, but they convert better and face weaker competition. For a new channel,
      ranking for ten long-tail phrases beats ranking for nothing while chasing one giant
      keyword. Use the long-tail group above as title candidates, then brainstorm the video
      itself with our <Link href="/tools/youtube-video-ideas-generator">Video Ideas
      Generator</Link> so the content fully delivers on the specific promise.
    </p>
    <h2>Validate before you film</h2>
    <p>
      Generated keywords are hypotheses, not data — always sanity-check them. Type each
      promising phrase into YouTube search: autocomplete suggestions confirm real people
      search it, and the results page shows your competition. If the top results are all
      massive channels with years of authority, pick a longer, more specific variant. If the
      results are thin or outdated, you may have found a gap. Finally, remember keywords are
      only the entry ticket: the title gets the click, but retention and satisfaction decide
      whether YouTube keeps recommending the video. Pair solid keyword targeting with
      packaging that earns the click using our{" "}
      <Link href="/tools/youtube-tag-generator">Tag Generator</Link> for the metadata
      finishing touch.
    </p>
  </>
);

export const youtubeKeywordFaqs = [
  {
    q: "What is a good keyword for a YouTube video?",
    a: "A good keyword matches what viewers actually type, fits your video's content exactly, and has competition you can realistically beat. For new channels, that usually means specific long-tail phrases (4+ words) rather than broad single-word topics dominated by huge channels.",
  },
  {
    q: "Where do I put keywords on YouTube?",
    a: "The title carries the most weight, followed by the first 1–2 lines of the description and what you actually say in the video (YouTube transcribes speech). Tags are a minor signal. Never stuff keywords unnaturally — write for humans first and let the phrasing occur naturally.",
  },
  {
    q: "How do I check if a keyword is too competitive?",
    a: "Search the exact phrase on YouTube and look at the top results. If they're all large, established channels with high view counts, it's competitive. If results are sparse, outdated, or from small channels, you have a realistic opening. Autocomplete suggestions also confirm real search demand.",
  },
  {
    q: "Should small channels target broad or specific keywords?",
    a: "Specific. Broad keywords like 'fitness' or 'cooking' are dominated by channels with massive authority. Long-tail phrases like '15-minute dumbbell workout for beginners at home' have less competition and attract viewers who know exactly what they want — which also improves your watch time.",
  },
  {
    q: "Do YouTube tags still matter for keyword ranking?",
    a: "Only marginally. YouTube describes tags as a minor discovery signal, mostly useful for misspellings and ambiguous topics. Your title, description, spoken content, and viewer engagement signals matter far more. Spend two minutes on tags, not two hours.",
  },
];
