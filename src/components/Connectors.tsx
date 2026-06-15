const connectors = [
  {
    label: 'Google Drive',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 2 19h7l3-5" />
        <path d="m12 2 10 17h-7" />
        <path d="M9 19h6" />
      </svg>
    ),
  },
  {
    label: 'Notion',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 8v8l6-8v8" />
      </svg>
    ),
  },
  {
    label: 'OneDrive',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 16a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.4A4 4 0 0 1 18 16z" />
      </svg>
    ),
  },
  {
    label: 'Evernote',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M12 7v6l2-1.5L16 13V7" />
      </svg>
    ),
  },
  {
    label: 'Confluence',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 4 7.5v9L12 21l8-4.5v-9z" />
        <path d="m8 9 4 2 4-2" />
      </svg>
    ),
  },
  {
    label: 'Jira',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v9l-5 3" />
        <path d="M12 11l5 3" />
        <circle cx="12" cy="18" r="3" />
      </svg>
    ),
  },
  {
    label: 'Microsoft Fabric',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m3 8 9-5 9 5-9 5z" />
        <path d="m3 8v8l9 5 9-5V8" />
      </svg>
    ),
  },
] as const;

export default function Connectors() {
  return (
    <section
      style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 32px 40px', textAlign: 'center' }}
      aria-labelledby="connectors-heading"
    >
      <div className="reveal">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--cyan-400)',
          }}
        >
          Plug into your stack
        </span>
        <h2
          id="connectors-heading"
          style={{
            margin: '14px 0 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: '-0.02em',
            color: 'var(--text-hi)',
          }}
        >
          Every source, chunked and cited in its native shape.
        </h2>
        <p
          style={{
            margin: '12px auto 0',
            maxWidth: 540,
            fontSize: 15.5,
            lineHeight: 1.6,
            color: 'var(--text-mid)',
          }}
        >
          Seven native connectors — OAuth in one click, per-source chunkers, rich frontmatter, and delta-sync. Every document lands with its provenance, native IDs, and status preserved.
        </p>
      </div>

      <div
        className="reveal"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        {connectors.map(c => (
          <span className="amd-chip" key={c.label}>
            {c.icon}
            {c.label}
          </span>
        ))}
      </div>
    </section>
  );
}
