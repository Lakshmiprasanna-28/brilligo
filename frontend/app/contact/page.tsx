"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="text-slate-600 dark:text-slate-400 mb-10">
        Have questions, feedback, or need support? We’d love to hear from you.
      </p>

      {submitted ? (
        <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300">
          ✅ Thank you for reaching out! We’ll get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              required
              className="w-full rounded-xl border px-4 py-3 bg-white dark:bg-slate-800 dark:border-slate-700"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-xl border px-4 py-3 bg-white dark:bg-slate-800 dark:border-slate-700"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-xl border px-4 py-3 bg-white dark:bg-slate-800 dark:border-slate-700"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}
