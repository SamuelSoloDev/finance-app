


export function DetailsModal({
  onClose,
  name,
  amount,
  date,
  note,
  type = "expense"}){

  const isExpense = type === "expense";

  return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#141414]/80 backdrop-blur-md p-6">
      <div className="relative w-full max-w-sm flex flex-col bg-[#221016] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 flex size-10 items-center justify-center rounded-full bg-black/20 text-white/70 hover:text-white"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Header */}
        <div className={`relative h-44 flex flex-col items-center justify-center p-6
          ${isExpense
            ? "bg-linear-to-br from-[#ee2b6c] via-[#d0245b] to-[#8d193f]"
            : "bg-linear-to-br from-[#22c55e] via-[#16a34a] to-[#065f46]"
          }`}
        >
          <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-2">
            Total Amount
          </p>
          <h1 className="text-white text-5xl font-bold leading-none">
            {isExpense ? "-" : "+"}${amount}
          </h1>
        </div>

        {/* Handle */}
        <div className="flex h-5 w-full items-center justify-center">
          <div className="h-1.5 w-12 rounded-full bg-[#48232f]" />
        </div>

        {/* Content */}
        <div className="flex-1 px-2 pb-8">

          {/* Name */}
          <div className="flex items-center gap-4 px-4 min-h-18 py-2">
            <div className="text-[#ee2b6c] flex items-center justify-center rounded-2xl bg-[#3d1b27] size-12">
              <span className="material-symbols-outlined">paid</span>
            </div>
            <div>
              <p className="text-white text-base font-semibold">{name}</p>
              <p className="text-[#c992a4] text-xs uppercase tracking-wider">
                Transaction
              </p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-4 px-4 min-h-18 py-2">
            <div className="text-[#ee2b6c] flex items-center justify-center rounded-2xl bg-[#3d1b27] size-12">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
            <div>
              <p className="text-white text-base font-semibold">{date}</p>
              <p className="text-[#c992a4] text-xs uppercase tracking-wider">
                Date
              </p>
            </div>
          </div>

          {/* Note */}
          {note && (
            <div className="mt-4 px-4">
              <div className="bg-[#2d171f] p-4 rounded-2xl border border-white/5">
                <p className="text-[#c992a4] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Note
                </p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {note}
                </p>
              </div>
            </div>
          )}

          {/* Edit
          <div className="mt-8 px-4">
            <button className="w-full h-14 bg-[#ee2b6c] text-white font-bold rounded-full flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(238,43,108,0.5)] active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-[20px]">edit</span>
              Edit Transaction
            </button>
          </div>
          */}


        </div>
      </div>
    </div>
  )
}