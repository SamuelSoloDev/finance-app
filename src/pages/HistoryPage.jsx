import { useIncome } from "../hooks/useIconme";
import { useExpense } from "../hooks/useExpense";
import { useDebt } from "../hooks/useDebt";
import { useNavigate } from "react-router-dom";
import { HistoryList } from "../components/ul/ul";
import { prepareObject } from "../utils/prepareObject";


export function HistoryPage() {
  const {incomes, add, remove} = useIncome()
  const {debts} = useDebt()
  const {expenses} = useExpense()
  const navigate = useNavigate()
  const globalHIstory = [...expenses, ...incomes, ...debts]


  const INCOME_TYPE = "income"

  function deleteIncome(type, id) {
    // la función pide un type, no lo usa, pero por alguna razón, si se lo quito deja de funcionar.
    remove(id)
  }

  async function eventOnSubmit(object){
    const formateObject = prepareObject(object, INCOME_TYPE)
    await add(formateObject)
  }

  function backToHome() {
    navigate("/")
  }
  return(
  <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light
  dark:bg-background-dark group/design-root overflow-x-hidden max-w-md mx-auto shadow-2xl">
    <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-10 pb-4">
     <div className="flex items-center justify-between mb-4">
      <button onClick={backToHome}
      className="flex size-10 items-center justify-center
      rounded-full bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-rose-400">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <h1 className="text-lg font-bold tracking-tight">History</h1>
      <div className="size-10"></div>
      </div>
      <div class="flex gap-3">
<div class="relative flex-1">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-rose-300/40">search</span>
<input class="w-full bg-slate-100 dark:bg-white/5
border-none rounded-2xl py-3 pl-10 pr-4
text-sm focus:ring-2
focus:ring-rose-500/50 placeholder:text-slate-400
dark:placeholder:text-rose-300/20 text-slate-900 dark:text-white"
placeholder="Search transactions..." type="text"/>
</div>
<button class="flex size-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-rose-400">
<span class="material-symbols-outlined">tune</span>
</button>
</div>

    </div>
    <HistoryList list={globalHIstory}></HistoryList>
  </div>
  )

}