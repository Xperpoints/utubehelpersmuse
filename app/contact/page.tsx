"use client";

import { useState } from "react";

const CONTACT_EMAIL = "contact@utubehelpers.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("General question");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Hussnain,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0A— ${encodeURIComponent(name)}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[UtubeHelpers] ${subject}`
    )}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Contact us
      </h1>
      <p className="mt-3 leading-relaxed text-slate-600">
        Tool requests, corrections, partnership ideas, or just feedback — I read every message
        personally.
      </p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-slate-900">Prefer email?</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-1 inline-block font-semibold text-red-600 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
            Your name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="Jane Creator"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-900">
            Topic
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            <option>General question</option>
            <option>Tool request</option>
            <option>Report a bug</option>
            <option>Correction to a guide</option>
            <option>Business / partnership</option>
            <option>Privacy request</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="Tell me what's on your mind…"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 sm:w-auto"
        >
          Send message
        </button>
        <p className="text-xs text-slate-500">
          This opens your email app with your message pre-filled — nothing is stored on our
          servers.
        </p>
      </form>
    </div>
  );
}
