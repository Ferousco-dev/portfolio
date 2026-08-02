type DoodleProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ArrowDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 104 56" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth="2.2" d="M6 8C32 11 60 23 94 47" />
      <path {...stroke} strokeWidth="2.2" d="M81 45.6 94 47 88.2 35.4" />
    </svg>
  );
}

export function UnderlineDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path
        {...stroke}
        strokeWidth="2.5"
        d="M3 9c28-4 62-6 96-5 32 1 66 3 98 1"
      />
    </svg>
  );
}

export function SparkDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth="2" d="M16 3v9M16 20v9M3 16h9M20 16h9" />
    </svg>
  );
}

export function LaptopDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 96 72" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth="2" d="M20 12h56c2 0 3 1 3 3v33H17V15c0-2 1-3 3-3Z" />
      <path {...stroke} strokeWidth="2" d="M6 48h84c0 6-3 10-8 10H14c-5 0-8-4-8-10Z" />
      <path {...stroke} strokeWidth="1.6" d="M27 24h26M27 32h34M27 40h18" />
    </svg>
  );
}

export function PhoneDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 52 88" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth="2" d="M12 4h28c4 0 7 3 7 7v66c0 4-3 7-7 7H12c-4 0-7-3-7-7V11c0-4 3-7 7-7Z" />
      <path {...stroke} strokeWidth="1.6" d="M21 12h10" />
      <path {...stroke} strokeWidth="1.6" d="M15 30h22M15 40h16M15 50h20" />
      <circle {...stroke} strokeWidth="1.6" cx="26" cy="70" r="5" />
    </svg>
  );
}

export function StackDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 88 72" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth="2" d="M44 6 82 22 44 38 6 22 44 6Z" />
      <path {...stroke} strokeWidth="2" d="M6 36l38 16 38-16" />
      <path {...stroke} strokeWidth="2" d="M6 50l38 16 38-16" />
    </svg>
  );
}

export function StrikeDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path
        {...stroke}
        strokeWidth="3"
        pathLength={1}
        className="draw-line"
        d="M3 8C34 4 70 3 104 4c30 1 62 3 93 2"
      />
    </svg>
  );
}

export function CaretDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth="2" d="M3 14 12 3l9 11" />
    </svg>
  );
}

export function CircleDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 220 80" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path
        {...stroke}
        strokeWidth="2"
        d="M112 6C58 4 12 18 8 40c-4 21 40 35 100 34 56-1 106-15 104-36-2-19-42-31-96-32-8 0-16 0-24 1"
      />
    </svg>
  );
}
