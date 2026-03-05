import React from "react";

export  function TransactionModal({
  amount = "$1,850.00",
  name = "Home Mortgage Payment",
  date = "May 12, 2024",
  note = "Final payment for the quarterly cycle",
  id,
  onClose,
  onDelete,
}) {
  return (
    <div className="fixed inset-0 z-40 bg-[#0f0d15]/80 backdrop-blur-sm flex items-end justify-center">

      <div className="w-full max-w-107.5 bg-[#1e1b26] rounded-t-4xl shadow-2xl overflow-hidden relative border-t border-white/10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 size-8 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full text-white/80 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">
            close
          </span>
        </button>

        {/* Header Gradient */}
        <div
          className="pt-16 pb-12 px-8 flex flex-col items-center justify-center text-center"
          style={{
            background: "linear-gradient(135deg, #e11d48 0%, #fb7e51 100%)",
          }}
        >
          <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Total Amount Paid
          </span>

          <h1 className="text-5xl font-serif text-white tracking-tight">
            {amount}
          </h1>
        </div>

        {/* Body */}
        <div className="px-8 pt-8 pb-12 space-y-8">

          {/* Transaction Name */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              Transaction Name
            </span>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e11d48] text-xl">
                home
              </span>

              <span className="text-lg font-medium text-slate-100">
                {name}
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              Payment Date
            </span>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e11d48] text-xl">
                calendar_today
              </span>

              <span className="text-lg font-medium text-slate-100">
                {date}
              </span>
            </div>
          </div>

          {/* Note */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              Note
            </span>

            <div className="bg-[#2d2438]/50 border border-[#4a3b5c]/30 rounded-2xl p-4">
              <p className="text-sm text-slate-300 leading-relaxed italic">
                "{note}"
              </p>
            </div>
          </div>

          {/* Delete */}
          <div className="pt-4 flex flex-col items-center gap-6">
            <button
              onClick={() => onDelete(id)}
              className="text-[#fb7e51]/60 hover:text-[#fb7e51] text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">
                delete
              </span>
              Delete Transaction
            </button>
          </div>
        </div>

        {/* Bottom Handle */}
        <div className="h-1.5 w-32 bg-white/10 rounded-full mx-auto mb-2"></div>
      </div>
    </div>
  );
}