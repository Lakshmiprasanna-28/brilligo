import ModuleLayout from "../components/layouts/ModuleLayout";

export default function SettingsPage() {
  return (
    <ModuleLayout>
      <div className="max-w-3xl mx-auto py-16">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <p className="text-slate-700 mb-6">Adjust your account preferences and application settings.</p>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div>
            <label className="block font-medium mb-1">Email Notifications</label>
            <input type="checkbox" className="h-4 w-4" />
          </div>
          <div>
            <label className="block font-medium mb-1">Dark Mode</label>
            <input type="checkbox" className="h-4 w-4" />
          </div>
          <div>
            <label className="block font-medium mb-1">Language</label>
            <select className="border border-slate-300 rounded p-1">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
