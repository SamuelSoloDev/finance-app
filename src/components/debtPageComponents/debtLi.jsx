


export function DebtHistoryItem({id, amount, name, note, type, icon, date, handleDelete, showDetails}) {
  return (
    <div onClick={() => showDetails({
      name: name,
      type: type,
      date: date,
      amount: amount,
      note: note,
      id: id,
    })}
     className="bg-[#1e1b26] p-5 rounded-2xl border border-white/5 shadow-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#fb7e51]/10 rounded-lg">
                <span className="material-symbols-outlined text-[#fb7e51]">{icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-100">{name}</h4>
                <p className="text-xs text-slate-500">{date}</p>
              </div>
            </div>

            <div className="text-right flex flex-col items-end gap-2">
              <p className="text-lg font-bold text-[#e11d48]">$ {amount}</p>
              <span className="px-2.5 py-0.5 rounded-full bg-[#4a3b5c]/40 text-[10px] font-semibold text-[#8b5cf6] uppercase tracking-wider border border-[#8b5cf6]/20">
                vigente
              </span>
            </div>
          </div>
        </div>

  );
}
