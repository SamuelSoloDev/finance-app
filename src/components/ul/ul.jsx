import { HistoryItem } from "../li/li";

export function HistoryList({list, handleDelete}) {


return (
  <div className="px-4 mt-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-slate-900 dark:text-white text-md font-bold">Recent Activity</h3>
      <button className="text-rose-400 text-xs font-semibold">View All</button>
    </div>

    <ul className="space-y-3">
    {list.map(i => (
      <HistoryItem
      key={i.id}
      id={i.id}
      amount={i.amount}
      name={i.name}
      note={i.note}
      type={i.type}
      date={i.date}
      handleDelete={handleDelete}
      >
      </HistoryItem>
    ))}
  </ul>
  </div>
)
}