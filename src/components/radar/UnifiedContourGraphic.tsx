interface UnifiedContourGraphicProps {
  className?: string;
}

export function UnifiedContourGraphic({ className }: UnifiedContourGraphicProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="Трансформация разрозненных сигналов в единый управленческий контур"
    >
      <circle cx="50" cy="60" r="6" fill="#C6AA74" fillOpacity="0.4" />
      <circle cx="90" cy="140" r="6" fill="#C6AA74" fillOpacity="0.4" />
      <circle cx="130" cy="50" r="6" fill="#C6AA74" fillOpacity="0.4" />
      <circle cx="70" cy="100" r="6" fill="#C6AA74" fillOpacity="0.3" />
      <path
        d="M180 100 L260 100"
        stroke="#C6AA74"
        strokeOpacity="0.3"
        strokeWidth="0.75"
        strokeDasharray="4 4"
      />
      <rect
        x="270"
        y="70"
        width="40"
        height="60"
        rx="1"
        stroke="#C6AA74"
        strokeOpacity="0.5"
        strokeWidth="0.75"
        fill="none"
      />
      <line x1="280" y1="100" x2="300" y2="100" stroke="#C6AA74" strokeOpacity="0.6" strokeWidth="1" />
      <circle cx="290" cy="85" r="3" fill="#C6AA74" fillOpacity="0.5" />
      <circle cx="290" cy="115" r="3" fill="#C6AA74" fillOpacity="0.5" />
    </svg>
  );
}
