import { useMemo } from "react";

export function useTimeline(history = []) {

  function parseLocalDate(date) {
    const [y, m, d] = date.split("-");
    return new Date(y, m - 1, d);
  }

  function getDateLabel(date) {
    const today = new Date();
    const itemDate = parseLocalDate(date);

    today.setHours(0,0,0,0);
    itemDate.setHours(0,0,0,0);

    const diff = (today - itemDate) / (1000 * 60 * 60 * 24);

    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";

    return itemDate.toLocaleDateString();
  }

  const timeline = useMemo(() => {
    let lastDate = null;

    return [...history]
      .sort((a, b) => parseLocalDate(b.date) - parseLocalDate(a.date))
      .map(item => {
        const showTitle = item.date !== lastDate;
        lastDate = item.date;

        return {
          ...item,
          showTitle,
          label: showTitle ? getDateLabel(item.date) : null,
        };
      });
  }, [history]);

  return timeline;
}
