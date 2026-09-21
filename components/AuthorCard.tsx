import Link from "next/link";
import { getAuthor } from "@/lib/authors";

export default function AuthorCard({ slug }: { slug: string }) {
  const author = getAuthor(slug);

  return (
    <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
          {author.initials}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Written by
          </p>
          <p className="mt-0.5 text-base font-bold text-slate-900">{author.name}</p>
          <p className="text-sm text-slate-600">
            {author.role} · {author.location}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{author.bio}</p>
          <Link href="/about" className="mt-2 inline-block text-sm font-semibold text-red-600 hover:underline">
            More about {author.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}
