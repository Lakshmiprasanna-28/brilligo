import ModuleLayout from "../components/layouts/ModuleLayout";

export default function FreelancePage() {
  return (
    <ModuleLayout>
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        Freelance Marketplace
      </h1>
      <p className="text-slate-700 mb-10">
        Discover projects, showcase skills, and grow income.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {["Find Projects", "Bid Smartly", "Secure Payments"].map((item) => (
          <div key={item} className="module-card">
            <h3>{item}</h3>
            <p>Freelancing made simple and transparent.</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
