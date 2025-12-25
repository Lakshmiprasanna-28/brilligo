import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 pt-28 px-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
