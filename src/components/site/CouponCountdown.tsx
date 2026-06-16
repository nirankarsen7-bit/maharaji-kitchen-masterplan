import { useEffect, useState } from "react";

const STORAGE_KEY = "mk_coupon_deadline_v1";
const DAYS = 7;

function getDeadline() {
  if (typeof window === "undefined") return null;

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const value = Number.parseInt(saved, 10);
    if (!Number.isNaN(value) && value > Date.now()) {
      return value;
    }
  }

  const next = Date.now() + DAYS * 86400000;
  window.localStorage.setItem(STORAGE_KEY, String(next));
  return next;
}

export function CouponCountdown() {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const nextDeadline = getDeadline();
    setDeadline(nextDeadline);
    setNow(Date.now());

    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const diff = deadline && now ? Math.max(0, deadline - now) : DAYS * 86400000;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const cells: Array<[string, number]> = [
    ["Days", d],
    ["Hours", h],
    ["Minutes", m],
    ["Seconds", s],
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
      {cells.map(([label, val], idx) => (
        <div key={label} className="flex items-center justify-center">
          <div className="glass-strong min-w-[120px] rounded-2xl px-4 py-3 text-center sm:min-w-[88px] sm:px-5 sm:py-4">
            <div className="font-serif text-2xl font-semibold leading-none tabular-nums text-gradient-gold sm:text-4xl">
              {String(val).padStart(2, "0")}
            </div>
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
              {label}
            </div>
          </div>
          {idx < cells.length - 1 && (
            <span className="mx-1 hidden font-serif text-2xl text-gold/60 sm:mx-2 sm:inline">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
