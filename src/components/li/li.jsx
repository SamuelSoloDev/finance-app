


export function HistoryItem({id, amount, note, date, handleDelete}) {



  return (
    <li key={id} className="flex items-center gap-4 p-3 rounded-2xl
     bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5">
      <div class="flex-1">
<p class="text-slate-900 dark:text-white text-sm font-bold leading-none">{note}</p>
<p class="text-slate-500 dark:text-rose-300/40 text-[11px] mt-1">{date}</p>
</div>
      <p class="text-slate-900 dark:text-plum-200 text-sm font-bold">{amount}</p>
      <button onClick={() => handleDelete(id)}>Borrar</button>
    </li>
  )
}