import { useEffect, useState } from "react";

const STORAGE_KEY = "mk_coupon_deadline_v1";
const DAYS = 7;

function getDeadline() {
  if (typeof window === "undefined") return Date.now() + DAYS * 86400000;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const v = parseInt(saved, 10);
    if (!Number.isNaN(v) && v > Date.now()) return v;
  }
  const next = Date.now() + DAYS * 86400000;
  window.localStorage.setItem(STORAGE_KEY, String(next));
  return next;
}

export function CouponCountdown() {
  const [deadline, setDeadline] = useState<number>(() => Date.now() + DAYS * 86400000);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    setDeadline(getDeadline());
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  const diff = Math.max(0, deadline - now);
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
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {cells.map(([label, val], idx) => (
        <div key={label} className="flex items-center">
          <div className="glass-strong rounded-2xl px-4 py-3 sm:px-5 sm:py-4 min-w-[72px] sm:min-w-[88px] text-center">
            <div className="font-serif text-2xl sm:text-4xl font-semibold text-gradient-gold tabular-nums leading-none">
              {String(val).padStart(2, "0")}
            </div>
            <div className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </div>
          </div>
          {idx < cells.length - 1 && (
            <span className="mx-1 sm:mx-2 text-gold/60 font-serif text-2xl">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
