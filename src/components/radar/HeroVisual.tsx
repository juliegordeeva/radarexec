interface HeroVisualProps {
  className?: string;
}

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto aspect-square w-full max-w-[420px]">
        <div className="absolute inset-0 border border-champagne/25 bg-graphite-light/40" />
        <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-champagne/50" />
        <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-champagne/50" />
        <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-champagne/50" />
        <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-champagne/50" />

        <div className="absolute inset-6 border border-champagne/10 bg-gradient-to-br from-taupe/20 via-transparent to-burgundy/10" />

        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full p-8"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="hero-radar-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C6AA74" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#C6AA74" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="200" cy="200" r="168" fill="url(#hero-radar-glow)" />
          <circle cx="200" cy="200" r="155" stroke="#C6AA74" strokeOpacity="0.18" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="115" stroke="#C6AA74" strokeOpacity="0.14" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="75" stroke="#C6AA74" strokeOpacity="0.12" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="35" stroke="#C6AA74" strokeOpacity="0.1" strokeWidth="0.5" />

          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line
              key={angle}
              x1="200"
              y1="200"
              x2={200 + 155 * Math.cos((angle * Math.PI) / 180)}
              y2={200 + 155 * Math.sin((angle * Math.PI) / 180)}
              stroke="#C6AA74"
              strokeOpacity="0.07"
              strokeWidth="0.5"
            />
          ))}

          <line x1="200" y1="45" x2="200" y2="355" stroke="#C6AA74" strokeOpacity="0.1" strokeWidth="0.5" />
          <line x1="45" y1="200" x2="355" y2="200" stroke="#C6AA74" strokeOpacity="0.1" strokeWidth="0.5" />

          <circle cx="248" cy="142" r="2.5" fill="#C6AA74" fillOpacity="0.55" />
          <circle cx="128" cy="218" r="2" fill="#F4F0E8" fillOpacity="0.35" />
          <circle cx="286" cy="248" r="1.5" fill="#C6AA74" fillOpacity="0.4" />
          <circle cx="162" cy="118" r="1.5" fill="#C6AA74" fillOpacity="0.3" />

          <g className="hero-radar-sweep">
            <path d="M200 200 L200 45 A155 155 0 0 1 318 128 Z" fill="#C6AA74" fillOpacity="0.07" />
            <line x1="200" y1="200" x2="200" y2="45" stroke="#C6AA74" strokeOpacity="0.35" strokeWidth="0.75" />
          </g>

          <circle cx="200" cy="200" r="3" fill="#C6AA74" fillOpacity="0.6" />
        </svg>

        <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-between px-10 font-mono text-[10px] uppercase tracking-[0.2em] text-champagne/60">
          <span>RADAR EXECUTIVE</span>
          <span>01 / SIGNAL</span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-10 px-10 font-mono text-[10px] uppercase tracking-[0.16em] text-stone/80">
          <p>Advisory contour map</p>
          <p className="mt-1 text-champagne/50">Context → decision → execution</p>
        </div>

        <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 text-right font-mono text-[9px] leading-relaxed tracking-[0.14em] text-stone/50">
          <p>55.75° N</p>
          <p className="mt-1">37.62° E</p>
        </div>
      </div>
    </div>
  );
}
