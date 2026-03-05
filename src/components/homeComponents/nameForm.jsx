import { useName } from "../../hooks/useName";
import { useState } from "react";

export function NameForm({onClickEvent}) {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    await onClickEvent(name)
    setName("");
  }

  return (
    <div className="bg-[#0f0714] text-white min-h-screen font-display">
      <div className="relative flex min-h-screen w-full flex-col bg-[#0f0714]
      max-w-md mx-auto shadow-2xl overflow-hidden px-6 pt-20 pb-10">

        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Welcome to your space
          </h1>
          <p className="text-rose-300/60 text-sm">
            Let's personalize your experience.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-10">

          <section className="space-y-4">
            <label className="block text-rose-200/80 text-sm font-medium px-1">
              What should we call you?
            </label>

            <input
              className="w-full bg-white/5 border border-[#4c1d95]/50 rounded-2xl py-4 px-5
              text-white placeholder-rose-300/20 focus:ring-2
              focus:ring-rose-accent/50 focus:border-[#fb7185] outline-none transition-all"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </section>

          <footer className="mt-auto pt-10">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-linear-to-r from-[#e11d48]
              to-[#d946ef] text-white font-bold text-lg shadow-xl shadow-[#e11d48]/20
              active:scale-[0.98] transition-all disabled:opacity-40"
              disabled={!name.trim()}
            >
              Get Started
            </button>

            <p className="text-center text-rose-300/30 text-[10px] mt-6 uppercase tracking-widest font-medium">
              Step 1 of 3 • Profile Setup
            </p>
          </footer>

        </form>
      </div>
    </div>
  );
}
