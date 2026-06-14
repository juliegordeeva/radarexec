interface RadarHeroGraphicProps {
  className?: string;
}

export function RadarHeroGraphic({ className }: RadarHeroGraphicProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="RADAR EXEC leadership advisory"
    >
      <circle cx="200" cy="200" r="160" stroke="#C6AA74" strokeOpacity="0.15" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="120" stroke="#C6AA74" strokeOpacity="0.12" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="80" stroke="#C6AA74" strokeOpacity="0.1" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="40" stroke="#C6AA74" strokeOpacity="0.08" strokeWidth="0.5" />
      <line x1="200" y1="40" x2="200" y2="360" stroke="#C6AA74" strokeOpacity="0.1" strokeWidth="0.5" />
      <line x1="40" y1="200" x2="360" y2="200" stroke="#C6AA74" strokeOpacity="0.1" strokeWidth="0.5" />
      <line x1="87" y1="87" x2="313" y2="313" stroke="#C6AA74" strokeOpacity="0.06" strokeWidth="0.5" />
      <line x1="313" y1="87" x2="87" y2="313" stroke="#C6AA74" strokeOpacity="0.06" strokeWidth="0.5" />
      <path
        d="M200 200 L200 40 A160 160 0 0 1 340 140 Z"
        fill="#C6AA74"
        fillOpacity="0.04"
      />
      <line
        x1="200"
        y1="200"
        x2="320"
        y2="120"
        stroke="#C6AA74"
        strokeOpacity="0.25"
        strokeWidth="0.75"
      />
    </svg>
  );
}
