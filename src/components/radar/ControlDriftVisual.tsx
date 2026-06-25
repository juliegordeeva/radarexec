interface ControlDriftVisualProps {
  className?: string;
}

const CENTER_X = 210;
const CENTER_Y = 200;

const driftNodes = [
  { cx: 96, cy: 96, r: 4, op: 0.5 },
  { cx: 330, cy: 84, r: 5, op: 0.45 },
  { cx: 360, cy: 250, r: 4, op: 0.4 },
  { cx: 120, cy: 300, r: 5, op: 0.5 },
  { cx: 60, cy: 200, r: 3, op: 0.35 },
  { cx: 300, cy: 320, r: 3, op: 0.3 },
];

export function ControlDriftVisual({ className }: ControlDriftVisualProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto aspect-square w-full max-w-[400px]">
        <div className="absolute inset-0 border border-graphite-deep/15 bg-gradient-to-br from-taupe/10 via-transparent to-burgundy/5" />
        <div className="absolute left-0 top-0 h-7 w-7 border-l border-t border-champagne/60" />
        <div className="absolute right-0 top-0 h-7 w-7 border-r border-t border-champagne/60" />
        <div className="absolute bottom-0 left-0 h-7 w-7 border-b border-l border-champagne/60" />
        <div className="absolute bottom-0 right-0 h-7 w-7 border-b border-r border-champagne/60" />

        <svg
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full p-6"
          aria-hidden="true"
          role="img"
          aria-label="Управленческая система теряет контроль: сигналы расходятся от центра"
        >
          <circle cx={CENTER_X} cy={CENTER_Y} r="150" stroke="#1A1A1A" strokeOpacity="0.06" strokeWidth="0.5" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="105" stroke="#C6AA74" strokeOpacity="0.16" strokeWidth="0.5" strokeDasharray="3 7" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="60" stroke="#C6AA74" strokeOpacity="0.12" strokeWidth="0.5" strokeDasharray="3 7" />

          {driftNodes.map((node, i) => (
            <line
              key={`drift-${i}`}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={node.cx}
              y2={node.cy}
              stroke="#4A1F24"
              strokeOpacity="0.18"
              strokeWidth="0.75"
              strokeDasharray="2 6"
            />
          ))}

          {driftNodes.map((node, i) => (
            <circle
              key={`node-${i}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#4A1F24"
              fillOpacity={node.op}
            />
          ))}

          <g className="control-drift-broken">
            <path
              d="M120 200 A90 90 0 1 1 210 290"
              stroke="#C6AA74"
              strokeOpacity="0.5"
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          <circle cx={CENTER_X} cy={CENTER_Y} r="44" fill="#F4F0E8" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="44" stroke="#4A1F24" strokeOpacity="0.4" strokeWidth="1" fill="none" />
          <text
            x={CENTER_X}
            y={CENTER_Y - 4}
            textAnchor="middle"
            fill="#1A1A1A"
            fillOpacity="0.7"
            fontSize="11"
            fontFamily="IBM Plex Mono, monospace"
          >
            <tspan x={CENTER_X} dy="0">КОНТУР</tspan>
            <tspan x={CENTER_X} dy="14">РАЗМЫТ</tspan>
          </text>
        </svg>

        <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-7 font-mono text-[10px] uppercase tracking-[0.18em] text-champagne/70">
          <span>РАДАР EXECUTIVE</span>
          <span>01 / КОНТЕКСТ</span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 px-7 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-graphite-deep/45">
          <p>Сигналы теряют согласованность</p>
        </div>
      </div>
    </div>
  );
}
