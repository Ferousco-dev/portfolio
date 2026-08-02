type SplitTextProps = {
  text: string;
  delay?: number;
  step?: number;
  className?: string;
};

export default function SplitText({
  text,
  delay = 0,
  step = 34,
  className,
}: SplitTextProps) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="char inline-block"
            style={{ animationDelay: `${delay + i * step}ms` }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </span>
  );
}
