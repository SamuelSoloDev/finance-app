import { HistoryItem } from "../li/li";
import {useTimeline} from "../../hooks/useTimeline"
import {IncomeIcon} from "../li/incomeIcon"
import { ExpenseIcon } from "../li/expenseIcon";

export function HistoryList({list, handleDelete}) {

  const timeline = useTimeline(list)


return (
  <div className="px-4 mt-6 h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-slate-900 dark:text-white text-md font-bold">Recent Activity</h3>

    </div>

    <ul className="space-y-3 overflow-y-auto h-full min-h-80">
    {timeline.map(item => (
      <div key={item.id}>
       {item.showTitle && <h3 className="text-slate-500 dark:text-rose-300/40 text-xs font-bold uppercase tracking-widest mb-4 ml-1">{item.label}</h3>}
        <HistoryItem
      key={item.id}
      id={item.id}
      amount={item.amount}
      name={item.name}
      note={item.note}
      type={item.type}
      date={item.date}
      icon={
        item.type === "income"
          ? <IncomeIcon className="w-5 h-5" />
          : <ExpenseIcon className="w-5 h-5" />
      }
      handleDelete={handleDelete}
      >
      <ExpenseIcon></ExpenseIcon>
      </HistoryItem>
      </div>))}

  </ul>
  </div>
)
}