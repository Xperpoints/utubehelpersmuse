import type { ReactNode } from "react";

export const moneyCalculatorGuide: ReactNode = (
  <>
    <h2>RPM vs. CPM: what you&apos;re actually paid on</h2>
    <p>
      Advertisers pay per thousand ad impressions — that&apos;s <strong>CPM</strong> (cost per
      mille). You, the creator, earn <strong>RPM</strong> (revenue per mille): your actual
      revenue per 1,000 views <em>after</em> YouTube takes its 45% cut. RPM is always lower than
      CPM, and it&apos;s the number that matters for your planning. When someone brags about a
      &quot;$20 CPM,&quot; their take-home RPM is roughly $11 — and that&apos;s before
      considering that not every view shows an ad.
    </p>
    <h2>Why RPM varies so wildly</h2>
    <p>
      Three forces move your RPM. <strong>Niche:</strong> advertisers pay more to reach people
      with money to spend, so finance, business software, and legal content command $10–$20+
      RPMs while gaming and entertainment sit around $2–$4. <strong>Geography:</strong> a view
      from the US, UK, or Australia is worth several times a view from a lower-ad-spend
      country. <strong>Season:</strong> advertisers flood the market in Q4 (holiday shopping),
      so November–December RPMs can run 30–50% above summer lows. Same channel, same content —
      different month, different paycheck.
    </p>
    <h2>Realistic RPM ranges by niche</h2>
    <p>
      These are broad but honest ballparks for long-form content: Finance &amp; investing
      $10–$20 · Tech &amp; software $6–$12 · Education $4–$8 · Health &amp; fitness $4–$7 ·
      Vlogging &amp; lifestyle $2.50–$5 · Gaming $1.50–$4 · Entertainment &amp; memes $1.50–$3.
      Your mileage will vary — a finance channel with a mostly non-US audience can earn less
      than a gaming channel with a US audience. Check your own RPM in YouTube Studio under
      Analytics → Revenue; after a few thousand monetized views, that number is your truth.
    </p>
    <h2>Why Shorts pay so much less</h2>
    <p>
      Shorts RPMs typically land between $0.05 and $0.15 — roughly a tenth of long-form. The
      reasons are structural: ads in the Shorts feed are pooled and shared across all creators
      based on view share, and short vertical slots command lower ad rates. Shorts are
      fantastic for subscriber growth and discovery, but if ad revenue is the goal, long-form
      watch time is where the money lives. Many successful creators use Shorts as the funnel
      and long-form as the business.
    </p>
    <h2>The real formula: views × RPM × consistency</h2>
    <p>
      Here&apos;s the math nobody can escape: monthly revenue = (monthly views ÷ 1,000) × RPM.
      There are only two levers — more views or a higher RPM — and both compound with
      consistency. A channel doing 500,000 monthly views at a $4 RPM earns about $2,000/month.
      The unsexy truth is that the creators earning life-changing money mostly just published
      good videos, on schedule, for years. Use the goal mode above to work backwards from the
      income you want to the view volume you need — then ask whether your niche and upload
      cadence can plausibly get you there.
    </p>
  </>
);

export const moneyCalculatorFaqs = [
  {
    q: "What is a good RPM on YouTube?",
    a: "It depends entirely on niche and audience. $3–$6 is typical for general content, $6–$12 is strong (tech, education), and $12+ is excellent (finance, B2B software). Rather than chasing benchmarks, track your own RPM trend in YouTube Studio — a rising RPM means your audience is becoming more valuable to advertisers.",
  },
  {
    q: "Why do finance channels earn so much more than gaming channels?",
    a: "Advertisers bid for attention based on customer value. A bank or broker will pay $30+ to reach someone considering investments, while a game studio pays a few dollars to reach a player. Higher customer lifetime value means higher ad bids, which flows through to higher creator RPMs.",
  },
  {
    q: "How much does YouTube pay for 100,000 views?",
    a: "At a $4 RPM, 100,000 views earns roughly $400. At a $12 finance RPM, the same views earn about $1,200. Geography matters too — 100k US views can be worth 3–5x more than 100k views from lower ad-spend regions.",
  },
  {
    q: "Do YouTube Shorts pay less than long videos?",
    a: "Much less — Shorts RPMs are typically $0.05–$0.15 versus $2–$12+ for long-form. Shorts ad revenue is pooled and split by view share, and vertical ad slots command lower rates. Treat Shorts as a growth tool and long-form as the revenue engine.",
  },
  {
    q: "When does YouTube actually pay me?",
    a: "Once your AdSense balance reaches the $100 payment threshold, YouTube pays out around the 21st of the following month. You must be in the YouTube Partner Program (1,000 subscribers plus 4,000 valid watch hours in 12 months, or 10M Shorts views in 90 days) before any of this applies.",
  },
];
