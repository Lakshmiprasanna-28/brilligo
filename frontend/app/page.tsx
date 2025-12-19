import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Brilligo Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-xl font-bold">Brilligo</h1>
        </div>

        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition">Learn</a>
          <a href="#" className="hover:text-blue-600 transition">Career</a>
          <a href="#" className="hover:text-blue-600 transition">Finance</a>
          <a href="#" className="hover:text-blue-600 transition">Freelance</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-32 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Learn • Build • Grow
        </h2>

        <p className="max-w-2xl text-gray-600 mb-8 text-lg">
          Brilligo is an all-in-one platform for learning skills, building careers,
          managing finances, and freelancing — all under one account.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Explore Modules
          </button>
        </div>
      </section>

      {/* Modules Section */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-24">
        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-bold text-lg mb-2">Careervexa</h3>
          <p className="text-sm text-gray-600">
            Skill-based learning, courses, certificates, and progress tracking.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-bold text-lg mb-2">JobPrepx</h3>
          <p className="text-sm text-gray-600">
            Resume builder, AI interview prep, and job opportunities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-bold text-lg mb-2">MomYield</h3>
          <p className="text-sm text-gray-600">
            Simple finance tracking for students and families.
          </p>
        </div>

      </section>

    </main>
  );
}
