interface RedistributedTeamsVisualProps {
  className?: string;
}

const CENTER_X = 220;
const CENTER_Y = 220;

interface MemberNode {
  cx: number;
  cy: number;
  r: number;
  load: number;
  lines: string[];
  labelX: number;
  labelY: number;
}

const members: MemberNode[] = [
  { cx: 220, cy: 96, r: 20, load: 0.85, lines: ['Объединённые', 'функции'], labelX: 220, labelY: 46 },
  { cx: 348, cy: 170, r: 16, load: 0.5, lines: ['Новые зоны'], labelX: 348, labelY: 208 },
  { cx: 330, cy: 318, r: 22, load: 0.95, lines: ['Повышенная', 'нагрузка'], labelX: 330, labelY: 360 },
  { cx: 150, cy: 332, r: 14, load: 0.35, lines: ['Разные', 'ожидания'], labelX: 150, labelY: 362 },
  { cx: 96, cy: 188, r: 17, load: 0.6, lines: ['Смешанные', 'роли'], labelX: 96, labelY: 224 },
];

export function RedistributedTeamsVisual({ className }: RedistributedTeamsVisualProps) {
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
          aria-label="Перераспределённая команда: разные узлы восстанавливают управленческую координацию"
        >
          <circle cx={CENTER_X} cy={CENTER_Y} r="150" stroke="#1A1A1A" strokeOpacity="0.05" strokeWidth="0.5" />
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r="118"
            stroke="#C6AA74"
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeDasharray="5 9"
            className="races-track-dash"
          />

          {members.map((m) => (
            <line
              key={`link-${m.lines[0]}`}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={m.cx}
              y2={m.cy}
              stroke="#1A1A1A"
              strokeOpacity="0.12"
              strokeWidth="0.75"
            />
          ))}

          {members.map((m) => (
            <g key={`member-${m.lines[0]}`}>
              <circle cx={m.cx} cy={m.cy} r={m.r} fill="#C6AA74" fillOpacity={0.08 + m.load * 0.14} />
              <circle cx={m.cx} cy={m.cy} r={m.r} stroke="#C6AA74" strokeOpacity="0.55" strokeWidth="1" fill="none" />
              <circle cx={m.cx} cy={m.cy} r="3" fill="#4A1F24" fillOpacity="0.75" />
              <text
                x={m.labelX}
                y={m.labelY}
                textAnchor="middle"
                fill="#1A1A1A"
                fillOpacity="0.72"
                fontSize="12"
                fontFamily="IBM Plex Mono, monospace"
              >
                {m.lines.map((line, li) => (
                  <tspan key={li} x={m.labelX} dy={li === 0 ? 0 : 14}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          ))}

          <circle cx={CENTER_X} cy={CENTER_Y} r="48" fill="#1A1A1A" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="48" stroke="#C6AA74" strokeOpacity="0.5" strokeWidth="1" fill="none" />
          <text
            x={CENTER_X}
            y={CENTER_Y - 6}
            textAnchor="middle"
            fill="#F4F0E8"
            fontSize="11"
            fontFamily="IBM Plex Mono, monospace"
          >
            <tspan x={CENTER_X} dy="0">КООР-</tspan>
            <tspan x={CENTER_X} dy="14">ДИНАЦИЯ</tspan>
          </text>
        </svg>

        <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-7 font-mono text-[10px] uppercase tracking-[0.18em] text-champagne/70">
          <span>РАДАР EXECUTIVE</span>
          <span>04 / КОМАНДА</span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 px-7 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-graphite-deep/45">
          <p>Роли · коммуникация · нагрузка</p>
        </div>
      </div>
    </div>
  );
}
