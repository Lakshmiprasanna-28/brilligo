import ModuleLayout from "../components/layouts/ModuleLayout";

export default function LearnPage() {
  return (
    <ModuleLayout>
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        Careervexa
      </h1>
      <p className="text-slate-700 mb-10">
        Structured learning paths, skill tracking, and real-world growth guidance.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {["Learning Paths", "Skill Tracker", "Certifications"].map((item) => (
          <div key={item} className="module-card">
            <h3>{item}</h3>
            <p>Coming soon — powerful tools to enhance your learning journey.</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
