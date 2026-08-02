const noise = `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="140" height="140" filter="url(#n)" opacity="0.42"/></svg>`;

export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-multiply dark:opacity-[0.07] dark:mix-blend-screen"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(noise)}")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
