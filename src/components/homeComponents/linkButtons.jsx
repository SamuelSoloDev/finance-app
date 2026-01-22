import { useNavigate } from "react-router-dom";


export function LinkButtons() {
  const navigate = useNavigate();


  return(
    <div className="px-4 py-2">
      <div className="flex justify-between gap-3">
        <button className="flex flex-col flex-1 items-center justify-center
        rounded-2xl border border-slate-200 dark:border-white/5 transition-all
         py-4 bg-slate-100 dark:bg-white/5">
          <span className="material-symbols-outlined text-rose-400
          group-hover:scale-110 transition-transform"
          >history</span>
          <span class="text-slate-700 dark:text-white text-xs font-bold tracking-tight">History</span>
         </button>

        <button className="flex flex-col flex-1 items-center justify-center
        rounded-2xl border border-slate-200 dark:border-white/5 transition-all
         py-4 bg-slate-100 dark:bg-white/5">
          <span class="material-symbols-outlined text-rose-400 group-hover:scale-110 transition-transform">
            account_balance_wallet
            </span>
          <span class="text-slate-700 dark:text-white text-xs font-bold tracking-tight">
            Gastos
          </span>
         </button>
        <button className="flex flex-col flex-1 items-center justify-center
        rounded-2xl border border-slate-200 dark:border-white/5 transition-all
         py-4 bg-slate-100 dark:bg-white/5">
          <span class="material-symbols-outlined text-rose-400
          group-hover:scale-110 transition-transform">receipt_long</span>
          <span class="text-slate-700 dark:text-white
          text-xs font-bold tracking-tight">Expenses</span>
         </button>
      </div>
    </div>
  )
}