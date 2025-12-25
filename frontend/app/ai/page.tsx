import ModuleLayout from "../components/layouts/ModuleLayout";

export default function AIPage() {
  return (
    <ModuleLayout>
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        Brilligo AI
      </h1>
      <p className="text-slate-700 mb-10">
        Your intelligent assistant across all Brilligo modules.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {["Learning Assistant", "Career Advisor", "Finance Helper"].map((item) => (
          <div key={item} className="module-card">
            <h3>{item}</h3>
            <p>AI-powered guidance coming soon.</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
