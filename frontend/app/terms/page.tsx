export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          By accessing or using <strong>Brilligo</strong>, you agree to be bound
          by these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold">1. Use of Platform</h2>
        <p>
          You agree to use Brilligo only for lawful purposes and in a way that
          does not infringe the rights of others.
        </p>

        <h2 className="text-2xl font-semibold">2. Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and password.
        </p>

        <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
        <p>
          All content, branding, and features belong to Brilligo unless stated
          otherwise.
        </p>

        <h2 className="text-2xl font-semibold">4. Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these terms.
        </p>

        <h2 className="text-2xl font-semibold">5. Changes to Terms</h2>
        <p>
          These terms may be updated from time to time. Continued use means
          acceptance of changes.
        </p>
      </section>
    </main>
  );
}
