import ModuleLayout from "../components/layouts/ModuleLayout";

export default function FinancePage() {
  return (
    <ModuleLayout>
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        Fintrix
      </h1>
      <p className="text-slate-700 mb-10">
        Simple, secure finance tracking for students and families.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {["Expense Tracker", "Savings Planner", "Budget Insights"].map((item) => (
          <div key={item} className="module-card">
            <h3>{item}</h3>
            <p>Financial clarity made easy — launching soon.</p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
