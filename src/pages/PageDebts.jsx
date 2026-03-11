import { useDebt } from "../hooks/useDebt";
import { useNavigate } from "react-router-dom";
import { DebtHistoryList } from "../components/debtPageComponents/debtList";
import { TransactionModal } from "../components/debtPageComponents/debtsDetailsModal";
import {DetailsModal} from "../components/li/detailsModa"


export function DebtsPage() {
  const {debts, remove} = useDebt()
  const navigate = useNavigate()

  function deleteTransaction(id) {
    remove(id)
  }

  function backToHome() {
    navigate("/")
  }

  function goToDebtForm() {
    navigate("/debtForm")
  }
  return(
    <div className="bg-[#0f0d15] font-display text-white">
  <div className="max-w-107.5 mx-auto min-h-screen flex flex-col relative pb-32">

    <header className="flex items-center px-6 py-6 justify-between sticky top-0 z-20 backdrop-blur-xl bg-[#0f0d15]/80">
      <button onClick={backToHome} className="flex items-center justify-center size-10 rounded-full bg-[#1e1b26] hover:bg-[#2a2635] transition-colors">
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      <h2 className="text-lg font-semibold tracking-tight">Historial de deudas</h2>
      <div className="size-10"></div>
    </header>

    <div className="px-6 mb-6">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">search</span>
        <input
          className="w-full bg-[#1e1b26] border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-1 focus:ring-[#e11d48]/50 placeholder:text-slate-600"
          placeholder="Search history..."
          type="text"
        />
      </div>
    </div>

    <section className="px-6 flex-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Deudas Recientes</h3>
      </div>

      <div className="space-y-4">
        <DebtHistoryList list={debts}
        deleteTransaction={deleteTransaction}></DebtHistoryList>
      </div>
    </section>

    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-107.5 p-6 bg-linear-to-t from-[#0f0d15] via-[#0f0d15] to-transparent">
      <div className="flex justify-center items-center">
        <button
        onClick={goToDebtForm}
        className="px-8 h-14 rounded-2xl bg-linear-to-br from-[#e11d48] to-[#fb7e51] text-white font-bold text-sm shadow-xl shadow-[#e11d48]/30 active:scale-[0.98] transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">history</span>
          Añadir deuda
        </button>
      </div>

      <div className="h-6 mt-4 flex justify-center">
        <div className="w-32 h-1.5 bg-white/10 rounded-full"></div>
      </div>
    </footer>
  </div>
</div>

  )

}