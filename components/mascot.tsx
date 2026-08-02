type MascotProps = {
  className?: string;
  pose?: "wave" | "peek";
};

const ink = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export default function Mascot({ className, pose = "wave" }: MascotProps) {
  if (pose === "peek") {
    return (
      <svg viewBox="0 0 72 40" aria-hidden="true" className={className}>
        <g className="mascot">
          <circle {...ink} cx="36" cy="26" r="14" />
          <g className="mascot-eyes">
            <circle cx="31" cy="23" r="1.9" fill="currentColor" />
            <circle cx="41" cy="23" r="1.9" fill="currentColor" />
          </g>
          <path {...ink} strokeWidth="1.8" d="M31 30q5 4 10 0" />
          <path {...ink} d="M20 40q3-9 10-11M52 40q-3-9-10-11" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 76 96" aria-hidden="true" className={className}>
      <g className="mascot">
        <circle {...ink} cx="34" cy="22" r="14" />
        <g className="mascot-eyes">
          <circle cx="29" cy="19" r="1.9" fill="currentColor" />
          <circle cx="39" cy="19" r="1.9" fill="currentColor" />
        </g>
        <path {...ink} strokeWidth="1.8" d="M29 26q5 4.5 10 0" />

        <path {...ink} d="M34 36v24" />
        <path {...ink} d="M34 44 22 53" />
        <path {...ink} d="M34 60 25 84M34 60l9 24" />

        <g className="mascot-arm">
          <path {...ink} d="M34 44 50 34" />
          <path {...ink} strokeWidth="1.6" d="M50 34l-2-4M50 34l4-1M50 34l1 4" />
        </g>
      </g>
    </svg>
  );
}
