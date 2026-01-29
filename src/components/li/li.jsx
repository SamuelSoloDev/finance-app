


export function HistoryItem({id, amount, name, type, icon, date, handleDelete}) {



  return (
    <li key={id} className="flex items-center gap-4 p-3 rounded-2xl
     bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5">
      <div className="size-12 rounded-full bg-rose-500/10 dark:bg-plum-900/40 flex
      items-center justify-center text-rose-400">
        {icon}
      </div>
      <div className="flex-1">
<p className="text-slate-900 dark:text-white text-sm font-bold leading-none">{name}</p>
<p className="text-slate-500 dark:text-rose-300/40 text-[11px] mt-1">{date}</p>
</div>
      <p className="text-slate-900 dark:text-plum-200 text-sm font-bold">{amount}</p>
      <button onClick={() => handleDelete(type, id)}>Borrar</button>
    </li>
  )
}