interface RedistributionGraphicProps {
  className?: string;
}

export function RedistributionGraphic({ className }: RedistributionGraphicProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="Схема перераспределения ролей в команде"
    >
      {[40, 100, 160, 220, 280].map((x, i) => (
        <g key={x}>
          <rect
            x={x - 20}
            y={60 + (i % 3) * 20}
            width="40"
            height="24"
            stroke="#C6AA74"
            strokeOpacity="0.35"
            strokeWidth="0.75"
            fill="none"
          />
          <line
            x1={x}
            y1={84 + (i % 3) * 20}
            x2={x + (i % 2 === 0 ? 30 : -30)}
            y2={120}
            stroke="#C6AA74"
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
        </g>
      ))}
      <line x1="20" y1="150" x2="300" y2="150" stroke="#C6AA74" strokeOpacity="0.25" strokeWidth="0.75" />
    </svg>
  );
}
