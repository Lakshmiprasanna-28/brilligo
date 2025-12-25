import ModuleLayout from "../components/layouts/ModuleLayout";

export default function DocumentsPage() {
  return (
    <ModuleLayout>
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        Document Tools
      </h1>
      <p className="text-slate-700 mb-10">
        Everyday PDF and document utilities — fast and reliable.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {["PDF Converter", "Merge Documents", "Secure Downloads"].map((item) => (
          <div key={item} className="module-card">
            <h3>{item}</h3>
            <p>Smart document tools coming soon.</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
