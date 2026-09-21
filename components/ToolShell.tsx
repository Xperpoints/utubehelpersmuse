import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolMeta } from "@/lib/tools";
import { tools } from "@/lib/tools";
import JsonLd from "./JsonLd";
import AuthorCard from "./AuthorCard";

interface Faq {
  q: string;
  a: string;
}

interface ToolShellProps {
  tool: ToolMeta;
  children: ReactNode;
  guide: ReactNode;
  faqs: Faq[];
}

const SITE_URL = "https://utubehelpers.com";

export default function ToolShell({ tool, children, guide, faqs }: ToolShellProps) {
  const related = tools.filter((t) => t.slug !== tool.slug && t.category === tool.category).slice(0, 3);
  const relatedFallback = tools.filter((t) => t.slug !== tool.slug).slice(0, 3);
  const relatedTools = related.length > 0 ? related : relatedFallback;

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    url: `${SITE_URL}/tools/${tool.slug}`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: tool.description,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <JsonLd data={[softwareJsonLd, faqJsonLd]} />

      <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-red-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-red-600">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{tool.name}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {tool.name}
      </h1>
      <p className="mt-3 text-lg text-slate-600">{tool.tagline}</p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {children}
      </div>

      <div className="prose-custom mt-10 text-slate-700">{guide}</div>

      {faqs.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-slate-200 bg-white px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="mr-2 text-red-600">+</span>
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <AuthorCard slug="hussnain" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Related tools</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {relatedTools.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-red-300 hover:shadow-md"
            >
              <p className="font-semibold text-slate-900">{t.name}</p>
              <p className="mt-1 text-sm text-slate-600">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
