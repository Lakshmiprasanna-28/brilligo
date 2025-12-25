import ModuleLayout from "../components/layouts/ModuleLayout";

export default function PortfolioPage() {
  return (
    <ModuleLayout>
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        Portfolio Builder
      </h1>
      <p className="text-slate-700 mb-10">
        Build a professional digital identity that speaks for you.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {["Profile Builder", "Projects Showcase", "Public Share Link"].map((item) => (
          <div key={item} className="module-card">
            <h3>{item}</h3>
            <p>Create and share stunning portfolios effortlessly.</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
