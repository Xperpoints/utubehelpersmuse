import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about earnings estimates, copyright, and the educational nature of UtubeHelpers content.",
  alternates: { canonical: "https://utubehelpers.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Disclaimer</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: September 22, 2026</p>

      <div className="prose-custom mt-6 text-slate-700">
        <h2>Educational content</h2>
        <p>
          Guides and articles on UtubeHelpers are published for educational purposes and reflect
          the personal experience and opinions of the author. They are not professional, financial,
          or legal advice. YouTube&apos;s algorithms, policies, and monetization rules change over
          time — always verify current requirements in YouTube&apos;s official documentation.
        </p>

        <h2>Earnings estimates</h2>
        <p>
          Our YouTube Money Calculator and any earnings figures mentioned in guides are{" "}
          <strong>estimates based on typical ranges</strong>, not guarantees. Actual revenue depends
          on your niche, audience geography, ad rates, watch time, and many factors outside our
          control. Do not make financial decisions based solely on these estimates.
        </p>

        <h2>Growth results</h2>
        <p>
          Growth strategies described on this site are educational summaries of widely discussed
          creator tactics; results vary by channel. We make no claims that following our guides will result in any particular
          subscriber count, view count, or income.
        </p>

        <h2>Copyright and thumbnails</h2>
        <p>
          The thumbnail downloader retrieves images that belong to their respective video owners.
          Downloading a thumbnail does not transfer any rights to you. Only reuse thumbnails you
          own or have permission to use.
        </p>

        <h2>No affiliation</h2>
        <p>
          UtubeHelpers is an independent project and is not affiliated with, endorsed by, or
          sponsored by YouTube, Google LLC, or any other company mentioned on this site. All
          trademarks belong to their respective owners.
        </p>

        <h2>External links</h2>
        <p>
          We may link to external websites for reference. We are not responsible for the content,
          accuracy, or practices of external sites.
        </p>
      </div>
    </div>
  );
}
