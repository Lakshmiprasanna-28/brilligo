import ModuleLayout from "../components/layouts/ModuleLayout";

export default function CareerPage() {
  return (
    <ModuleLayout>
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        JobPrepx
      </h1>
      <p className="text-slate-700 mb-10">
        Smart resumes, interview prep, and job-ready confidence.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {["Resume Builder", "Interview Prep", "Job Tracker"].map((item) => (
          <div key={item} className="module-card">
            <h3>{item}</h3>
            <p>Professional career tools under development.</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
