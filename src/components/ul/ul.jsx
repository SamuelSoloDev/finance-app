import { HistoryItem } from "../li/li";

export function HistoryList({list, handleDelete}) {


return (
  <div className="px-4 mt-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-slate-900 dark:text-white text-md font-bold">Recent Activity</h3>
      <button class="text-rose-400 text-xs font-semibold">View All</button>
    </div>

    <ul className="space-y-3">
    {list.map(i => (
      <HistoryItem
      key={i.id}
      id={i.id}
      amount={i.amount}
      note={i.note}
      date={i.date}
      handleDelete={handleDelete}
      >
      </HistoryItem>
    ))}
  </ul>
  </div>
)
}