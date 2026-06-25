interface PracticesEcosystemVisualProps {
  className?: string;
  centerLabel?: string;
}

interface NodeDef {
  cx: number;
  cy: number;
  num: string;
  lines: string[];
  anchor: 'start' | 'middle' | 'end';
  labelX: number;
  labelY: number;
}

const nodes: NodeDef[] = [
  { cx: 320, cy: 110, num: '01', lines: ['Бизнес-', 'моделирование'], anchor: 'middle', labelX: 320, labelY: 56 },
  { cx: 486, cy: 205, num: '02', lines: ['Образовательные', 'системы'], anchor: 'start', labelX: 506, labelY: 200 },
  { cx: 486, cy: 395, num: '03', lines: ['Управление', 'продуктом'], anchor: 'start', labelX: 506, labelY: 390 },
  { cx: 320, cy: 490, num: '04', lines: ['Оценка', 'эффективности'], anchor: 'middle', labelX: 320, labelY: 528 },
  { cx: 154, cy: 395, num: '05', lines: ['Маркетинг,', 'PR, GR'], anchor: 'end', labelX: 134, labelY: 390 },
  { cx: 154, cy: 205, num: '06', lines: ['Лидерская', 'устойчивость'], anchor: 'end', labelX: 134, labelY: 200 },
];

const CENTER_X = 320;
const CENTER_Y = 300;

export function PracticesEcosystemVisual({ className, centerLabel }: PracticesEcosystemVisualProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto aspect-square w-full max-w-[560px]">
        <div className="absolute inset-0 border border-graphite-deep/15 bg-gradient-to-br from-taupe/10 via-transparent to-champagne/10" />
        <div className="absolute left-0 top-0 h-7 w-7 border-l border-t border-champagne/60" />
        <div className="absolute right-0 top-0 h-7 w-7 border-r border-t border-champagne/60" />
        <div className="absolute bottom-0 left-0 h-7 w-7 border-b border-l border-champagne/60" />
        <div className="absolute bottom-0 right-0 h-7 w-7 border-b border-r border-champagne/60" />

        <svg
          viewBox="0 0 640 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full p-6"
          aria-hidden="true"
          role="img"
          aria-label="Экосистема экспертных практик РАДАР EXECUTIVE"
        >
          <circle cx={CENTER_X} cy={CENTER_Y} r="210" stroke="#1A1A1A" strokeOpacity="0.06" strokeWidth="0.5" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="155" stroke="#C6AA74" strokeOpacity="0.25" strokeWidth="0.5" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="95" stroke="#C6AA74" strokeOpacity="0.18" strokeWidth="0.5" />

          {nodes.map((node) => (
            <line
              key={`line-${node.num}`}
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
            <g key={`node-${node.num}`}>
              <circle cx={node.cx} cy={node.cy} r="22" fill="#F4F0E8" />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="22"
                stroke="#C6AA74"
                strokeOpacity="0.55"
                strokeWidth="1"
                fill="none"
              />
              <text
                x={node.cx}
                y={node.cy + 4}
                textAnchor="middle"
                fill="#4A1F24"
                fillOpacity="0.85"
                fontSize="13"
                fontFamily="IBM Plex Mono, monospace"
              >
                {node.num}
              </text>
              <text
                x={node.labelX}
                y={node.labelY}
                textAnchor={node.anchor}
                fill="#1A1A1A"
                fillOpacity="0.78"
                fontSize="13"
                fontFamily="IBM Plex Mono, monospace"
              >
                {node.lines.map((line, i) => (
                  <tspan key={i} x={node.labelX} dy={i === 0 ? 0 : 15}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          ))}

          <circle cx={CENTER_X} cy={CENTER_Y} r="62" fill="#1A1A1A" />
          <circle cx={CENTER_X} cy={CENTER_Y} r="62" stroke="#C6AA74" strokeOpacity="0.5" strokeWidth="1" fill="none" />
          {centerLabel && (
            <text
              x={CENTER_X}
              y={CENTER_Y - 14}
              textAnchor="middle"
              fill="#F4F0E8"
              fontSize="12"
              fontFamily="IBM Plex Mono, monospace"
            >
              {centerLabel.split(' ').map((word, i) => (
                <tspan key={i} x={CENTER_X} dy={i === 0 ? 0 : 15}>
                  {word}
                </tspan>
              ))}
            </text>
          )}
        </svg>

        <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-7 font-mono text-[10px] uppercase tracking-[0.18em] text-champagne/70">
          <span>РАДАР EXECUTIVE</span>
          <span>03 / ЭКОСИСТЕМА</span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 px-7 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-graphite-deep/45">
          <p>Сборка практик под конкретную бизнес-задачу</p>
        </div>
      </div>
    </div>
  );
}
