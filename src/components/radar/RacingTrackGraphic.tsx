interface RacingTrackGraphicProps {
  className?: string;
}

export function RacingTrackGraphic({ className }: RacingTrackGraphicProps) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="RADAR Races strategic leadership format"
    >
      <path
        d="M20 80 Q100 20 200 60 T380 40"
        stroke="#C6AA74"
        strokeOpacity="0.35"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M20 90 Q100 30 200 70 T380 50"
        stroke="#4A1F24"
        strokeOpacity="0.4"
        strokeWidth="0.5"
        fill="none"
      />
      <line x1="280" y1="45" x2="340" y2="42" stroke="#C6AA74" strokeOpacity="0.6" strokeWidth="1.5" />
      <circle cx="340" cy="42" r="3" fill="#C6AA74" fillOpacity="0.7" />
    </svg>
  );
}
