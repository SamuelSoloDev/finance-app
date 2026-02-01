import { useState } from "react";

export default function FinanceForm({ eventSubmit, transactionType }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    note: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function cleanForm() {
    setForm({
      name: "",
      amount: "",
      note: "",
      date: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    eventSubmit(form);
    cleanForm();
  }

  return (
    <div className="dark bg-[#0f0714] text-white min-h-screen font-['Inter',sans-serif]">
      <div className="relative flex h-full min-h-screen w-full flex-col bg-[#0f0714] overflow-x-hidden max-w-md mx-auto">

        {/* Header */}
        <div className="flex items-center p-4 justify-between sticky top-0 z-10 pt-12 pb-6 bg-[#0f0714]/80 backdrop-blur">
          <button className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[24px]">
              arrow_back_ios_new
            </span>
          </button>

          <h1 className="text-white text-lg font-semibold tracking-tight">
            Añadir {transactionType}
          </h1>

          <div className="w-10"></div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pt-4 pb-12">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Amount */}
            <div className="text-center space-y-2">
              <label className="text-rose-300/60 text-xs font-medium uppercase tracking-widest">
                Monto
              </label>

              <div className="relative">
                <div className="absolute inset-0 bg-[#d946ef]/10 blur-2xl rounded-full scale-75 opacity-50"></div>

                <div className="relative flex items-center justify-center shadow-[0_0_30px_-5px_rgba(217,70,239,0.25)] bg-[#1a1021]/40 py-4 rounded-2xl border border-[#4c1d95]/30">
                  <span className="text-[#d946ef] text-3xl font-light mr-1">$</span>

                  <input
                    type="number"
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    placeholder="0.00"
                    required
                    className="bg-transparent border-none text-white text-5xl font-bold focus:ring-0 placeholder:text-white/20 w-48 text-center"
                  />
                </div>
              </div>
            </div>

            {/* Fields */}
            <div className="space-y-5">

              <div className="space-y-2">
                <label className="text-rose-200/40 text-xs font-medium ml-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="¿Para que es esto?"
                  className="w-full h-14 bg-[#1a1021] border border-[#4c1d95]/30 rounded-2xl px-5 text-white focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/10 transition-all placeholder:text-[#7e509c]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-rose-200/40 text-xs font-medium ml-1">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full h-14 bg-[#1a1021] border border-[#4c1d95]/30 rounded-2xl px-5 text-white focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-rose-200/40 text-xs font-medium ml-1">
                  Note
                </label>

                <textarea
                  rows="3"
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  placeholder="Agrega detalles adicionales..."
                  className="w-full bg-[#1a1021] border border-[#4c1d95]/30 rounded-2xl px-5 py-4 text-white focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/10 transition-all placeholder:text-[#7e509c] resize-none"
                />
              </div>

            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 space-y-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full h-16 bg-linear-to-r from-rose-500 to-purple-700 rounded-2xl text-white font-bold text-lg shadow-lg shadow-rose-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Guardar Transacción</span>
          </button>

          <button
            type="button"
            className="w-full py-2 text-rose-300/40 text-sm font-medium hover:text-rose-300 transition-colors"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
