import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-6xl font-extrabold text-slate-200">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">This page doesn&apos;t exist</h1>
      <p className="mt-2 text-slate-600">
        The page you&apos;re looking for was moved or never existed. Let&apos;s get you back on
        track.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Go home
        </Link>
        <Link
          href="/tools"
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Browse free tools
        </Link>
      </div>
    </div>
  );
}
