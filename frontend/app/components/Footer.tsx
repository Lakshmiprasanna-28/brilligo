"use client";

import Link from "next/link";
import { motion, Variants, easeOut } from "framer-motion";

// Define animation variants with TypeScript-safe easing
const footerAnim: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut, // ✅ Correct usage
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="border-t bg-white"
      initial="hidden"
      animate="visible"
      variants={footerAnim}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Brilligo. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-blue-600 transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-blue-600 transition">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
