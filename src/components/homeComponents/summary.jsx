import { useState } from "react";


export function Summary({income, expense}) {

  const totality = income - expense
  return (
    <div className="p-4">
      <div className="flex flex-col items-stretch justify-start
    rounded-2xl overflow-hidden shadow-2xl
     bg-linear-to-br from-[#4c1d95] to-[#0f0714]
     border border-white/10 relative
">
      <div className=" flex w-full min-w-72 grow flex-col
      items-stretch justify-center
      gap-1 py-8 px-6 relative
      z-10 text-white p-4">
        <h1 className="text-rose-200/80 text-sm font-medium leading-normal">Totalidad</h1>
        <p className="text-white text-4xl font-extrabold leading-tight tracking-[-0.03em]">{totality}</p>
      </div>


      <div className="grid grid-cols-2 bg-white/5 border-t border-white/5 backdrop-blur-sm">

        <div className="flex flex-col gap-1 py-4 px-6 border-r border-white/5">
          <h1 className="text-rose-300/60 text-xs font-medium uppercase tracking-wide">Gastos</h1>
          <p className="text-rose-400 text-lg font-bold">{expense}</p>
        </div>

        <div className="flex flex-col gap-1 py-4 px-6">
          <h1 className="text-rose-300/60 text-xs
           font-medium uppercase tracking-wide"
           >Ingresos</h1>
          <p className="text-plum-300 text-lg font-bold"
          >{income}</p>
        </div>

      </div>
    </div>
    </div>
  )
}