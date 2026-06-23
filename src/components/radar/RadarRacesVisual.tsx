interface RadarRacesVisualProps {
  className?: string;
}

export function RadarRacesVisual({ className }: RadarRacesVisualProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto aspect-[21/9] w-full max-w-3xl">
        <div className="absolute inset-0 border border-champagne/25 bg-graphite-light/30" />
        <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-champagne/50 md:h-8 md:w-8" />
        <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-champagne/50 md:h-8 md:w-8" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-champagne/50 md:h-8 md:w-8" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-champagne/50 md:h-8 md:w-8" />

        <div className="absolute inset-4 border border-champagne/10 bg-gradient-to-r from-burgundy/15 via-transparent to-taupe/10 md:inset-5" />

        <svg
          viewBox="0 0 840 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full p-5 md:p-7"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="races-track-glow" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#4A1F24" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#C6AA74" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#4A1F24" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          <rect x="24" y="24" width="792" height="312" stroke="#C6AA74" strokeOpacity="0.08" strokeWidth="0.5" />

          <path
            d="M120 270
               C120 180, 200 120, 300 120
               C420 120, 480 80, 560 100
               C660 125, 720 170, 720 230
               C720 290, 640 310, 520 300
               C400 290, 320 320, 220 300
               C160 288, 120 320, 120 270 Z"
            stroke="url(#races-track-glow)"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M120 270
               C120 180, 200 120, 300 120
               C420 120, 480 80, 560 100
               C660 125, 720 170, 720 230
               C720 290, 640 310, 520 300
               C400 290, 320 320, 220 300
               C160 288, 120 320, 120 270 Z"
            stroke="#C6AA74"
            strokeOpacity="0.22"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="6 10"
            className="races-track-dash"
          />
          <path
            id="races-track-path"
            d="M120 270
               C120 180, 200 120, 300 120
               C420 120, 480 80, 560 100
               C660 125, 720 170, 720 230
               C720 290, 640 310, 520 300
               C400 290, 320 320, 220 300
               C160 288, 120 320, 120 270 Z"
            stroke="transparent"
            strokeWidth="1"
            fill="none"
          />

          <line x1="300" y1="120" x2="300" y2="88" stroke="#C6AA74" strokeOpacity="0.35" strokeWidth="0.75" />
          <line x1="560" y1="100" x2="560" y2="68" stroke="#C6AA74" strokeOpacity="0.35" strokeWidth="0.75" />
          <line x1="720" y1="230" x2="752" y2="230" stroke="#C6AA74" strokeOpacity="0.35" strokeWidth="0.75" />
          <line x1="220" y1="300" x2="220" y2="332" stroke="#C6AA74" strokeOpacity="0.35" strokeWidth="0.75" />
          <line x1="120" y1="270" x2="88" y2="270" stroke="#C6AA74" strokeOpacity="0.35" strokeWidth="0.75" />

          <circle cx="300" cy="120" r="3" fill="#C6AA74" fillOpacity="0.7" />
          <circle cx="560" cy="100" r="3" fill="#F4F0E8" fillOpacity="0.45" />
          <circle cx="720" cy="230" r="3" fill="#C6AA74" fillOpacity="0.55" />
          <circle cx="220" cy="300" r="3" fill="#C6AA74" fillOpacity="0.5" />
          <circle cx="120" cy="270" r="3" fill="#4A1F24" stroke="#C6AA74" strokeOpacity="0.6" strokeWidth="0.75" />

          <g className="races-track-runner">
            <circle r="5" fill="#C6AA74" fillOpacity="0.85">
              <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
                <mpath href="#races-track-path" />
              </animateMotion>
            </circle>
            <circle r="10" fill="#C6AA74" fillOpacity="0.12">
              <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
                <mpath href="#races-track-path" />
              </animateMotion>
            </circle>
          </g>

          <text x="300" y="78" textAnchor="middle" fill="#C6AA74" fillOpacity="0.55" fontSize="9" fontFamily="monospace">
            T1 / БРИФ
          </text>
          <text x="560" y="58" textAnchor="middle" fill="#C6AA74" fillOpacity="0.5" fontSize="9" fontFamily="monospace">
            T2 / ЗОНА
          </text>
          <text x="768" y="234" textAnchor="start" fill="#C6AA74" fillOpacity="0.5" fontSize="9" fontFamily="monospace">
            T3 / ФИКС
          </text>
          <text x="220" y="348" textAnchor="middle" fill="#C6AA74" fillOpacity="0.5" fontSize="9" fontFamily="monospace">
            T4 / ДЕБРИФ
          </text>
          <text x="72" y="274" textAnchor="end" fill="#C6AA74" fillOpacity="0.5" fontSize="9" fontFamily="monospace">
            T5 / БИЗНЕС
          </text>
        </svg>

        <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-between px-6 font-mono text-[9px] uppercase tracking-[0.18em] text-champagne/60 md:top-5 md:px-8 md:text-[10px]">
          <span>РАДАР ГОНКИ</span>
          <span>06 / FORMAT</span>
        </div>

        <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 font-mono text-[9px] leading-relaxed tracking-[0.12em] text-stone/45 md:block md:px-2 md:text-[10px]">
          <p>Давление</p>
          <p className="mt-1 text-champagne/40">Роли</p>
          <p className="mt-1">Решения</p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-end justify-between px-6 font-mono text-[9px] uppercase tracking-[0.14em] text-stone/70 md:bottom-5 md:px-8 md:text-[10px]">
          <div>
            <p className="text-champagne/55">Leadership lab under pressure</p>
            <p className="mt-1 text-stone/50">Наблюдение → распаковка → перенос</p>
          </div>
          <div className="text-right text-champagne/45">
            <p>Δt решения</p>
            <p className="mt-1 tabular-nums">0.42s — 2.8s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
