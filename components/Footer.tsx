import Link from "next/link";
import { tools } from "@/lib/tools";

export default function Footer() {
  const featured = tools.slice(0, 6);

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 font-bold text-white">
                U
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Utube<span className="text-red-600">Helpers</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Free, no-signup YouTube tools and practical growth guides for creators — built by a
              creator, for creators.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Popular tools
            </h3>
            <ul className="mt-4 space-y-2.5">
              {featured.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tools/${t.slug}`}
                    className="text-sm text-slate-600 hover:text-red-600"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/tools" className="text-sm text-slate-600 hover:text-red-600">
                  All free tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-slate-600 hover:text-red-600">
                  Growth guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-600 hover:text-red-600">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-600 hover:text-red-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-slate-600 hover:text-red-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-slate-600 hover:text-red-600">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-slate-600 hover:text-red-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} UtubeHelpers.com — All rights reserved. Not affiliated with
            YouTube or Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
