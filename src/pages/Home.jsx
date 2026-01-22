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
  const {expenses} = useExpense();
  const {incomes} = useIncome();
  const {debts} = useDebt();
  const navigate = useNavigate();

  return (
    <div className='relative flex flex-col
    bg-[#fdf2f8] dark:bg-[#0f0714] h-auto min-h-screen
    overflow-x-hidden max-w-md mx-auto shadow-2xl'>
      <div class="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 pt-8">
<div class="flex size-12 shrink-0 items-center">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-rose-accent/30" data-alt="User profile avatar">
</div>
</div>
<div class="flex-1 px-3">
<p class="text-slate-500 dark:text-rose-300/60 text-xs font-medium uppercase tracking-wider">Good Morning</p>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Alex Rivera</h2>
</div>
<div class="flex w-12 items-center justify-end">
<button class="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-rose-500/10 text-slate-900 dark:text-rose-400">
<span class="material-symbols-outlined" >notifications</span>
</button>
</div>
</div>
      <Summary
      debt={calcAmount(debts)}
      income={calcAmount(incomes)}
      expense={calcAmount(expenses)}>
      </Summary>

      <LinkButtons></LinkButtons>

      <HistoryList list={expenses}></HistoryList>
    </div>
  )
}
