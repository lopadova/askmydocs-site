interface LogoMarkProps {
  size?: number;
}

export function LogoMark({ size = 30 }: LogoMarkProps) {
  const iconSize = Math.round(size * 0.567);
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.3),
        background: 'var(--grad-agent)',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 0 0 1px var(--cyan-a40), 0 0 16px -5px rgba(123,108,255,0.7)',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#06070d"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 19 12 4l7 15" />
        <path d="M8.2 13.5h7.6" />
      </svg>
    </span>
  );
}
