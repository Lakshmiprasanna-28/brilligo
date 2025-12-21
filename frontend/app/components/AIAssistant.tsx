"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  // If completely closed → show floating bubble
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-linear-to-r from-indigo-600 to-blue-600 shadow-2xl flex items-center justify-center text-white font-bold hover:scale-110 transition"
        aria-label="Open Brilligo AI"
      >
        AI
      </button>
    );
  }

  return (
    <div
      className={`fixed z-50 bg-white border border-slate-200 shadow-2xl flex flex-col transition-all
        ${
          isMaximized
            ? "inset-4 rounded-2xl"
            : "bottom-6 right-6 w-90 h-115 rounded-2xl"
        }
      `}
    >
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
        <span className="font-semibold">Brilligo AI</span>

        <div className="flex items-center gap-3 text-sm">
          {/* Maximize */}
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="hover:text-white/80 transition"
            aria-label="Maximize"
          >
            {isMaximized ? "🗗" : "🗖"}
          </button>

          {/* Open Full Page */}
          <Link
            href="/ai"
            className="hover:text-white/80 transition"
            aria-label="Open AI page"
          >
            ↗
          </Link>

          {/* Close */}
          <button
            onClick={() => {
              setIsOpen(false);
              setIsMaximized(false);
            }}
            className="hover:text-white/80 transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* ================= CHAT BODY ================= */}
      <div className="flex-1 p-4 space-y-3 text-sm bg-slate-50 text-slate-800 overflow-y-auto">
        <div className="bg-white p-3 rounded-xl border shadow-sm">
          👋 Hi! I’m <b>Brilligo AI</b>.<br />
          How can I help you today?
        </div>

        <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
          You can ask about:
          <ul className="list-disc list-inside mt-1 text-xs">
            <li>Learning paths</li>
            <li>Career guidance</li>
            <li>Finance tips</li>
            <li>Productivity</li>
          </ul>
        </div>
      </div>

      {/* ================= INPUT ================= */}
      <div className="p-3 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 px-3 py-2 text-sm border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
