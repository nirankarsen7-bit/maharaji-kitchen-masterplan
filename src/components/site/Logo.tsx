import logoAsset from "@/assets/maharaji-logo.png.asset.json";

export function Logo({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <span
        aria-hidden
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.79 0.14 85 / 0.25), transparent 65%)" }}
      />
      <span
        aria-hidden
        className="absolute inset-[-6px] rounded-full border border-gold/30 animate-spin-slow"
        style={{ borderStyle: "dashed" }}
      />
      <img
        src={logoAsset.url}
        alt="Maharaji Kitchen logo"
        width={size}
        height={size}
        className="relative z-10 rounded-full object-cover"
        style={{ filter: "drop-shadow(0 6px 14px oklch(0.79 0.14 85 / 0.35))" }}
      />
    </div>
  );
}
