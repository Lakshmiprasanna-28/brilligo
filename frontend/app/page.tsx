"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ecosystemModules = [
  { title: "Careervexa", desc: "Structured learning paths, skill tracking, and real-world growth guidance.", href: "/learn" },
  { title: "JobPrepx", desc: "Smart resumes, interview preparation, and job-ready confidence.", href: "/career" },
  { title: "Fintrix", desc: "Simple, secure finance tracking for students and families.", href: "/finance" },
  { title: "Document Tools", desc: "Everyday PDF and document tools — fast, reliable, and simple.", href: "/documents" },
  { title: "Portfolio Builder", desc: "Build a professional digital identity that speaks for you.", href: "/portfolio" },
  { title: "Freelance Marketplace", desc: "Discover projects, showcase skills, and grow independent income.", href: "/freelance" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt="Brilligo Logo"
              width={44}
              height={44}
              className="rounded-xl group-hover:scale-105 transition"
              priority
            />
            <span className="text-xl font-bold bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Brilligo
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {[
              { label: "Modules", href: "#ecosystem" },
              { label: "Learn", href: "/learn" },
              { label: "Career", href: "/career" },
              { label: "Finance", href: "/finance" },
              { label: "Freelance", href: "/freelance" },
              { label: "AI", href: "/ai" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="group relative py-1">
                <span className="group-hover:text-blue-600 transition">{item.label}</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 rounded-lg hover:bg-slate-100 transition">
              Login
            </Link>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                Get Started →
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-sky-500 text-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto text-center px-6 pt-40 pb-36">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 text-sm font-semibold bg-white/20 px-5 py-1.5 rounded-full"
          >
            One Platform • One Journey • Unlimited Growth
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Learn. Build. Grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12"
          >
            Brilligo is a unified digital ecosystem designed to help you learn skills,
            build a career, manage finances, showcase your work, and grow independently —
            all from one secure account.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="#ecosystem"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow-xl hover:shadow-2xl transition"
            >
              Explore Ecosystem →
            </motion.a>

            <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/signup"
                className="px-8 py-4 rounded-xl border border-white/60 hover:bg-white/10 transition inline-block"
              >
                Create Account →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ECOSYSTEM (FIXED) ================= */}
      <section
        id="ecosystem"
        className="scroll-mt-28 bg-linear-to-b from-blue-100 via-indigo-100 to-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-8 py-28">

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-4"
          >
            The Brilligo Ecosystem
          </motion.h2>

          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-slate-700 max-w-2xl mx-auto mb-20"
          >
            Each product works independently — together they create a seamless journey.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ecosystemModules.map((item, i) => (
              <motion.div
                key={item.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link href={item.href} className="module-card group block">
                  <h3>{item.title}</h3>
                  <p className="mt-2">{item.desc}</p>
                  <span className="inline-block mt-6 text-sm font-medium text-blue-600">
                    Explore module →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FLOATING AI ================= */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Link href="/ai" className="group">
            <div className="w-14 h-14 rounded-full bg-linear-to-r from-indigo-600 to-blue-600 shadow-2xl flex items-center justify-center text-white font-bold">
              AI
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* ================= FOOTER ================= */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t bg-white py-10"
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Brilligo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-blue-600 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-600 transition">Terms</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </motion.footer>

    </main>
  );
}
