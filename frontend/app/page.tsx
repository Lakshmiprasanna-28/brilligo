import Image from "next/image";
import Link from "next/link";

const ecosystemModules = [
  { title: "Careervexa", desc: "Learning & skill development", href: "/learn" },
  { title: "JobPrepx", desc: "Career & interview preparation", href: "/career" },
  { title: "Fintrix", desc: "Family finance & expense tracking", href: "/finance" },
  { title: "Document Tools", desc: "PDF tools & file utilities", href: "/documents" },
  { title: "Portfolio Builder", desc: "Personal branding & portfolios", href: "/portfolio" },
  { title: "Freelance Marketplace", desc: "Gigs, projects & income", href: "/freelance" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Brilligo Logo"
              width={44}
              height={44}
              priority
              className="rounded-xl"
            />
            <span className="text-xl font-bold bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Brilligo
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
            {/* 🔥 FIXED */}
            <a href="#ecosystem" className="hover:text-blue-600 transition">
              Modules
            </a>
            <Link href="/learn" className="hover:text-blue-600 transition">
              Learn
            </Link>
            <Link href="/career" className="hover:text-blue-600 transition">
              Career
            </Link>
            <Link href="/finance" className="hover:text-blue-600 transition">
              Finance
            </Link>
            <Link href="/freelance" className="hover:text-blue-600 transition">
              Freelance
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 rounded-lg hover:bg-slate-100">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg"
            >
              Get Started
            </Link>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-sky-500 text-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6 pt-40 pb-36">

          <span className="inline-block mb-6 text-sm font-semibold bg-white/20 px-5 py-1.5 rounded-full">
            One Platform • All Growth
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Learn. Build. Grow.
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Brilligo unifies learning, career preparation, finance, documents,
            portfolios, freelancing, and AI — under one secure login.
          </p>

          <div className="flex justify-center gap-6">
            {/* 🔥 FIXED */}
            <a
              href="#ecosystem"
              className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow-xl hover:bg-blue-50 transition"
            >
              Explore Ecosystem
            </a>
            <Link
              href="/signup"
              className="px-8 py-4 rounded-xl border border-white/60 hover:bg-white/10 transition"
            >
              Create Free Account
            </Link>
          </div>

        </div>
      </section>

      {/* ================= ECOSYSTEM ================= */}
      <section
        id="ecosystem"
        className="scroll-mt-28 bg-linear-to-b from-blue-100 via-indigo-100 to-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-8 py-28">

          <h2 className="text-3xl font-bold text-center mb-4">
            Brilligo Ecosystem
          </h2>

          <p className="text-center text-slate-700 max-w-2xl mx-auto mb-20">
            Independent products that work beautifully together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ecosystemModules.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-3xl p-8 border border-indigo-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <span className="text-sm font-medium text-blue-600">
                  Open module →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FLOATING AI ================= */}
      <Link href="/ai" className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 rounded-full bg-linear-to-r from-indigo-600 to-blue-600 shadow-2xl flex items-center justify-center text-white font-bold hover:scale-110 transition">
          AI
        </div>
      </Link>

      {/* ================= FOOTER ================= */}
      <footer className="border-t py-14 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Brilligo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
