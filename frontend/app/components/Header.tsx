"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useUser } from "../context/UserContext";

/* ================= NAV ITEMS ================= */
const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Learn", href: "/learn" },
  { label: "Career", href: "/career" },
  { label: "Finance", href: "/finance" },
  { label: "Documents", href: "/documents" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Freelance", href: "/freelance" },
  { label: "AI", href: "/ai" },
];

/* ================= ANIMATIONS ================= */
const headerAnim = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const drawerAnim = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const dropdownAnim = {
  hidden: { opacity: 0, scale: 0.96, y: -8 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -8 },
};

export default function Header() {
  const { user } = useUser();
  const pathname = usePathname();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        variants={headerAnim}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/dashboard" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="logo" width={42} height={42} className="rounded-xl" />
            <span className="font-bold text-xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Brilligo
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} className="relative">
                  <span className={active ? "text-blue-600 font-semibold" : ""}>
                    {item.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* MOBILE NAV */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl border flex items-center justify-center"
            >
              ☰
            </button>

            {/* PROFILE ICON (DESKTOP + MOBILE) */}
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold"
              >
                {user?.name?.charAt(0) || "U"}
              </motion.button>

              {/* PROFILE DROPDOWN */}
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border z-60"
                  >
                    <div className="px-4 py-3 border-b">
                      <p className="font-semibold">{user?.name}</p>
                      <p className="text-sm text-slate-500">{user?.email}</p>
                    </div>
                    <div className="text-sm">
                      <Link href="/profile" className="block px-4 py-3 hover:bg-slate-100">
                        👤 Profile
                      </Link>
                      <Link href="/settings" className="block px-4 py-3 hover:bg-slate-100">
                        ⚙️ Settings
                      </Link>
                      <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50">
                        🚪 Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE NAV DRAWER ================= */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileNavOpen(false)}
            />
            <motion.aside
              variants={drawerAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 h-full w-72 bg-white z-50 p-6"
            >
              <div className="flex justify-between mb-6">
                <span className="font-bold">Menu</span>
                <button onClick={() => setMobileNavOpen(false)}>✕</button>
              </div>

              <nav className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileNavOpen(false)}
                    className={`block px-4 py-3 rounded-xl ${
                      pathname.startsWith(item.href)
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
