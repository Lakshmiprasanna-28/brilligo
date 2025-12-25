export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          At <strong>Brilligo</strong>, your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your
          information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Basic account details (name, email)</li>
          <li>Profile information you choose to provide</li>
          <li>Usage data to improve platform experience</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and improve our services</li>
          <li>To personalize your experience</li>
          <li>To communicate important updates</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Data Security</h2>
        <p>
          We use industry-standard security measures to protect your data.
          However, no system is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold">4. Your Rights</h2>
        <p>
          You can update or delete your personal data anytime from your profile
          settings.
        </p>

        <h2 className="text-2xl font-semibold">5. Contact</h2>
        <p>
          If you have questions about this policy, contact us at{" "}
          <span className="font-medium">support@brilligo.com</span>.
        </p>
      </section>
    </main>
  );
}
