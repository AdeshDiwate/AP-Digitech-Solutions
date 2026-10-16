"use client";

import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";

export default function MAARecipeApp() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
          UX Case Study
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">MAA Recipe App</h1>
        <p className="text-slate-500 text-lg max-w-md">
          Case study coming soon. Stay tuned!
        </p>
      </div>
      <Footer />
    </main>
  );
}
