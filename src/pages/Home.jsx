import { useState, useEffect } from 'react'
import { calcAmount } from "../utils/calcAmount";
import { HistoryList } from "../components/ul/ul";
import { useDebt } from "../hooks/useDebt";
import { useExpense } from "../hooks/useExpense";
import { useIncome } from "../hooks/useIconme";
import { Summary } from "../components/homeComponents/summary";
import { LinkButtons } from "../components/homeComponents/linkButtons";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const {expenses, remove: removeExpense} = useExpense();
  const {incomes, remove: removeIcome} = useIncome();
  const {debts, remove: removeDebt} = useDebt();
  const navigate = useNavigate();
  const globalHIstory = [...expenses, ...incomes, ...debts]


  const REMOVE_FUNCTIONS = {
    expense: removeExpense,
    income: removeIcome,
    debt: removeDebt
  }

  function navigateTo(page) {
    navigate(`/${page}`)
  }

 async function handleDelete(type, id) {
   await REMOVE_FUNCTIONS[type](id);
  }
  return (
    <div className='relative flex flex-col
    bg-[#fdf2f8] dark:bg-[#0f0714] h-full min-h-screen
    overflow-x-hidden max-w-md mx-auto shadow-2xl'>
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 pt-8">
<div className="flex size-12 shrink-0 items-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-rose-accent/30" data-alt="User profile avatar">
</div>
</div>
<div className="flex-1 px-3">
<p className="text-slate-500 dark:text-rose-300/60 text-xs font-medium uppercase tracking-wider">Good Morning</p>
<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Alex Rivera</h2>
</div>
<div className="flex w-12 items-center justify-end">
<button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-rose-500/10 text-slate-900 dark:text-rose-400">
<span className="material-symbols-outlined" >notifications</span>
</button>
</div>
</div>
      <Summary
      income={calcAmount(incomes)}
      expense={calcAmount(expenses)}>
      </Summary>

      <LinkButtons navigateTo={navigateTo}></LinkButtons>

      <HistoryList
      handleDelete={handleDelete}
      list={globalHIstory}
      ></HistoryList>

      <div className="fixed bottom-24 right-6 z-50">
        <button className="flex size-14 items-center justify-center rounded-full
        bg-linear-to-tr from-rose-600 to-[#d946ef] text-white shadow-[0_8px_30px_rgb(225,29,72,0.3)]
        hover:scale-105 active:scale-95
        transition-transform">
<span className="material-symbols-outlined" >add</span>
</button>
</div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto h-20
       bg-white/80 dark:bg-[#0f0714]/80
      ios-blur flex items-center justify-center px-6 border-t border-slate-200 dark:border-white/10
      z-40">
<button onClick={() => navigateTo("history")}
className="flex flex-col items-center justify-center gap-0.5 px-8 py-2 rounded-2xl
group transition-all">
<span className="material-symbols-outlined text-rose-500 group-hover:text-magenta-accent
transition-colors">history</span>
<span className="text-[11px] font-semibold text-rose-500 tracking-wide
uppercase group-hover:text-magenta-accent transition-colors">History</span>
</button>
</div>
    </div>
  )
}
