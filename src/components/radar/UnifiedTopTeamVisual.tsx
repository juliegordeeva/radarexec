interface UnifiedTopTeamVisualProps {
  className?: string;
}

interface NodeDef {
  cx: number;
  cy: number;
  label: string;
  anchor: 'start' | 'middle' | 'end';
  labelX: number;
  labelY: number;
}

const CENTER_X = 220;
const CENTER_Y = 225;

const nodes: NodeDef[] = [
  { cx: 220, cy: 95, label: 'Стратегия', anchor: 'middle', labelX: 220, labelY: 64 },
  { cx: 344, cy: 185, label: 'Финансы', anchor: 'start', labelX: 364, labelY: 182 },
  { cx: 296, cy: 330, label: 'Операции', anchor: 'start', labelX: 316, labelY: 334 },
  { cx: 144, cy: 330, label: 'Продукт', anchor: 'end', labelX: 124, labelY: 334 },
  { cx: 96, cy: 185, label: 'Люди', anchor: 'end', labelX: 76, labelY: 182 },
];

const polygonPoints = nodes.map((n) => `${n.cx},${n.cy}`).join(' ');

export function UnifiedTopTeamVisual({ className }: UnifiedTopTeamVisualProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto aspect-square w-full max-w-[440px]">
        <div className="absolute inset-0 border border-graphite-deep/15 bg-gradient-to-br from-taupe/10 via-transparent to-champagne/10" />
        <div className="absolute left-0 top-0 h-7 w-7 border-l border-t border-champagne/60" />
        <div className="absolute right-0 top-0 h-7 w-7 border-r border-t border-champagne/60" />
        <div className="absolute bottom-0 left-0 h-7 w-7 border-b border-l border-champagne/60" />
        <div className="absolute bottom-0 right-0 h-7 w-7 border-b border-r border-champagne/60" />

        <svg
          viewBox="0 0 440 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full p-6"
          aria-hidden="true"
          role="img"
          aria-label="Разрозненные функции собираются в единый управленческий контур"
        >
          <circle cx={CENTER_X} cy={CENTER_Y} r="155" stroke="#1A1A1A" strokeOpacity="0.05" strokeWidth="0.5" />

          <polygon
            points={polygonPoints}
            fill="#C6AA74"
            fillOpacity="0.05"
            stroke="#C6AA74"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <polygon
            points={polygonPoints}
            fill="none"
            stroke="#C6AA74"
            strokeOpacity="0.55"
            strokeWidth="1"
            strokeDasharray="5 9"
            className="races-track-dash"
          />

          {nodes.map((node) => (
            <line
              key={`spoke-${node.label}`}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={node.cx}
              y2={node.cy}
              stroke="#1A1A1A"
              strokeOpacity="0.12"
              strokeWidth="0.75"
            />
          ))}

          {nodes.map((node) => (
            <g key={`node-${node.label}`}>
              <circle cx={node.cx} cy={node.cy} r="16" fill="#F4F0E8" />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="16"
                stroke="#C6AA74"
                strokeOpacity="0.6"
                strokeWidth="1"
                fill="none"
              />
              <circle cx={node.cx} cy={node.cy} r="3.5" fill="#4A1F24" fillOpacity="0.8" />
              <text
                x={node.labelX}
                y={node.labelY}
                textAnchor={node.anchor}
                fill="#1A1A1A"
                fillOpacity="0.78"
                fontSize="13"
                fontFamily="IBM Plex Mono, monospace"
              >
                {node.label}
              </text>
            </g>
          ))}

          <circle cx={CENTER_X} cy={CENTER_Y} r="50" fill="#1A1A1A" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="50" stroke="#C6AA74" strokeOpacity="0.5" strokeWidth="1" fill="none" />
          <text
            x={CENTER_X}
            y={CENTER_Y - 6}
            textAnchor="middle"
            fill="#F4F0E8"
            fontSize="12"
            fontFamily="IBM Plex Mono, monospace"
          >
            <tspan x={CENTER_X} dy="0">ЕДИНЫЙ</tspan>
            <tspan x={CENTER_X} dy="15">КОНТУР</tspan>
          </text>
        </svg>

        <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-7 font-mono text-[10px] uppercase tracking-[0.18em] text-champagne/70">
          <span>РАДАР EXECUTIVE</span>
          <span>01 / КОНТУР</span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 px-7 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-graphite-deep/45">
          <p>Повестка · роли · решения · исполнение</p>
        </div>
      </div>
    </div>
  );
}
