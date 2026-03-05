


export function DebtIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Card */}
      <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
      <line x1="2" y1="9" x2="22" y2="9" />

      {/* Coin */}
      <circle cx="16" cy="14" r="2.2" />

      {/* Arrow down */}
      <path d="M8 12v5" />
      <path d="M6.5 15.5L8 17l1.5-1.5" />
    </svg>
  );
}
