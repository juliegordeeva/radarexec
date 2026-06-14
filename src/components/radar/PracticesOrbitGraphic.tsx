interface PracticesOrbitGraphicProps {
  className?: string;
  centerLabel?: string;
}

export function PracticesOrbitGraphic({ className, centerLabel }: PracticesOrbitGraphicProps) {
  const positions = [
    { cx: 200, cy: 50 },
    { cx: 330, cy: 125 },
    { cx: 290, cy: 275 },
    { cx: 110, cy: 275 },
    { cx: 70, cy: 125 },
    { cx: 200, cy: 330 },
  ];

  return (
    <svg
      viewBox="0 0 400 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="Архитектура senior-практик RADAR EXEC"
    >
      <circle cx="200" cy="190" r="120" stroke="#C6AA74" strokeOpacity="0.15" strokeWidth="0.5" />
      <circle cx="200" cy="190" r="80" stroke="#C6AA74" strokeOpacity="0.1" strokeWidth="0.5" />
      <rect
        x="155"
        y="165"
        width="90"
        height="50"
        stroke="#C6AA74"
        strokeOpacity="0.4"
        strokeWidth="0.75"
        fill="none"
      />
      {centerLabel && (
        <text
          x="200"
          y="195"
          textAnchor="middle"
          fill="#C6AA74"
          fillOpacity="0.7"
          fontSize="8"
          fontFamily="IBM Plex Mono, monospace"
        >
          {centerLabel.split(' ').map((word, i) => (
            <tspan key={i} x="200" dy={i === 0 ? 0 : 10}>
              {word}
            </tspan>
          ))}
        </text>
      )}
      {positions.map(({ cx, cy }, i) => (
        <g key={i}>
          <line x1="200" y1="190" x2={cx} y2={cy} stroke="#C6AA74" strokeOpacity="0.12" strokeWidth="0.5" />
          <circle cx={cx} cy={cy} r="8" stroke="#C6AA74" strokeOpacity="0.35" strokeWidth="0.75" fill="none" />
        </g>
      ))}
    </svg>
  );
}
