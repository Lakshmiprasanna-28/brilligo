"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

/* ================= USER ================= */
const user = { name: "Lakshmi" };

/* ================= DATA ================= */
const dashboardModules = [
  { title: "Careervexa", desc: "Learning & skill growth.", href: "/learn", progress: 75 },
  { title: "JobPrepx", desc: "Interviews & resumes.", href: "/career", progress: 50 },
  { title: "Fintrix", desc: "Finance tracking.", href: "/finance", progress: 60 },
  { title: "Portfolio Builder", desc: "Showcase work.", href: "/portfolio", progress: 100 },
  { title: "AI Assistant", desc: "Smart help everywhere.", href: "/ai", progress: 100 },
  { title: "Document Tools", desc: "Manage files & documents.", href: "/documents", progress: 40 },
  { title: "Freelance", desc: "Work on freelance projects.", href: "/freelance", progress: 20 },
];

const certificates = [
  { title: "React Basics", progress: 100 },
  { title: "Advanced JS", progress: 70 },
];

const learningData = [
  { month: "Jan", completed: 2 },
  { month: "Feb", completed: 4 },
  { month: "Mar", completed: 6 },
  { month: "Apr", completed: 8 },
  { month: "May", completed: 7 },
];

const pieColors = ["#6366f1", "#22c55e", "#facc15", "#fb7185", "#f97316", "#8b5cf6", "#0ea5e9"];

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const achievementAnim = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: easeOut } },
};

const floatAnim = {
  animate: {
    y: [0, -15, 0],
    x: [0, 10, -10, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut" as const,
    },
  },
};

/* ================= PAGE ================= */
export default function DashboardPage() {
  const [showAchievement, setShowAchievement] = useState(false);
  const [streak] = useState(7);

  useEffect(() => {
    if (dashboardModules.some((m) => m.progress === 100)) {
      const t1 = setTimeout(() => setShowAchievement(true), 0);
      const t2 = setTimeout(() => setShowAchievement(false), 4000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, []);

  const performanceScore = useMemo(() => {
    const moduleScore =
      dashboardModules.reduce((a, m) => a + m.progress, 0) / dashboardModules.length;

    const certScore =
      (certificates.filter((c) => c.progress === 100).length / certificates.length) * 100;

    return Math.round(moduleScore * 0.6 + certScore * 0.3 + streak * 2);
  }, [streak]);

  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-sky-50 to-white text-slate-900 relative z-0">

      {/* ================= ACHIEVEMENT ================= */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            variants={achievementAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-24 right-6 z-60 bg-white rounded-xl px-6 py-4 shadow-xl border-l-4 border-green-500"
          >
            🎉 <strong>Achievement unlocked</strong>
            <p className="text-sm text-slate-500">Module completed</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-sky-500 text-white rounded-b-3xl">
        {/* Gradient blur behind SVGs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-400 rounded-full filter blur-3xl opacity-20" />
          <div className="absolute top-[10%] right-[-15%] w-[50%] h-[50%] bg-pink-400 rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] bg-yellow-400 rounded-full filter blur-3xl opacity-15" />
        </div>

        {/* Floating abstract SVGs */}
        <motion.svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[120%] h-[120%] opacity-20"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...floatAnim}
        >
          <circle cx="200" cy="300" r="200" fill="#ffffff" />
          <circle cx="600" cy="200" r="150" fill="#ffffff" />
          <circle cx="400" cy="500" r="250" fill="#ffffff" />
        </motion.svg>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4"
          >
            Welcome back, {user.name} 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, ease: easeOut }}
            className="text-blue-100 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10"
          >
            Your personalized dashboard for learning, career growth, and achievements.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <KPI title="Performance" value={`${performanceScore}%`} />
            <KPI title="Streak" value={`🔥 ${streak} days`} />
            <KPI title="Certificates" value={certificates.length} />
            <KPI title="Modules" value={dashboardModules.length} />
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 space-y-20">

        {/* AI INSIGHTS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-xl z-50 relative"
        >
          <h3 className="text-xl font-semibold mb-2">🤖 AI Insights</h3>
          <p className="text-slate-600">
            You’re most active on Tuesdays. Morning sessions improve completion by 32%.
          </p>
        </motion.div>

        {/* MODULES */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10 sm:mb-12"
          >
            Your Modules
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dashboardModules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: easeOut }}
              >
                <Link
                  href={mod.href}
                  className="block rounded-2xl bg-white p-5 sm:p-6 shadow-lg hover:shadow-2xl transition group relative z-40"
                >
                  <h3 className="text-lg sm:text-xl font-semibold">{mod.title}</h3>
                  <p className="text-slate-600 mt-1 sm:mt-2">{mod.desc}</p>

                  <div className="mt-3 sm:mt-4">
                    <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${mod.progress}%` }}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {mod.progress}% completed
                    </p>
                  </div>

                  <span className="inline-block mt-4 sm:mt-5 text-sm font-medium text-blue-600 group-hover:underline">
                    Open module →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ANALYTICS */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <GlassCard title="Learning Progress">
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={learningData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>

          <GlassCard title="Completion Overview">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={dashboardModules} dataKey="progress" nameKey="title" outerRadius={80}>
                  {dashboardModules.map((_, i) => (
                    <Cell key={i} fill={pieColors[i % pieColors.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */
function KPI({ title, value }: { title: string; value: string | number }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg text-slate-900 relative z-40 transition-transform"
    >
      <p className="text-xs sm:text-sm text-slate-500">{title}</p>
      <p className="text-xl sm:text-2xl font-bold">{value}</p>
    </motion.div>
  );
}

function GlassCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl relative z-40"
    >
      <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}

