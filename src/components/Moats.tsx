const moats = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Human-gated promotion',
    desc: 'The LLM drafts; only a human commits to canonical storage. Every promotion writes an immutable editorial audit trail.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    ),
    title: 'Institutional memory',
    desc: (
      <>
        A retrieval-time knowledge graph plus a{' '}
        <span style={{ color: 'var(--warning)' }}>⚠</span> firewall that stops the model re-proposing approaches your team already rejected.
      </>
    ),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4H10a2 2 0 0 1 2 2v13a1.5 1.5 0 0 0-1.5-1.5H4.5A2.5 2.5 0 0 1 2 15z" />
        <path d="M22 6.5A2.5 2.5 0 0 0 19.5 4H14a2 2 0 0 0-2 2v13a1.5 1.5 0 0 1 1.5-1.5h6a2.5 2.5 0 0 0 2.5-2.5z" />
        <path d="M17 8.5a3 3 0 0 1 0 4.5" />
      </svg>
    ),
    title: 'Self-compiling Auto-Wiki',
    desc: (
      <>
        A machine-built knowledge tier that maintains itself — quarantined behind a strict{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cyan-300)' }}>human › auto › raw</code> firewall.
      </>
    ),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.9 4.24A9.1 9.1 0 0 1 12 4c7 0 10 8 10 8a13.2 13.2 0 0 1-1.67 2.68" />
        <path d="M6.6 6.6A13.5 13.5 0 0 0 2 12s3 8 10 8a9 9 0 0 0 5.4-1.6" />
        <path d="m2 2 20 20" />
        <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      </svg>
    ),
    title: 'Field-level PII redaction',
    desc: 'GDPR-grade redaction at every persistence boundary — granular, default-off, and audited per field.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="8" rx="2" />
        <rect x="2" y="13" width="20" height="8" rx="2" />
        <path d="M6 7h.01M6 17h.01" />
      </svg>
    ),
    title: 'MIT · self-hostable · on-prem',
    desc: 'Runs entirely on your infrastructure. Zero vendor lock-in, EU-sovereign-feasible, no $500K/yr contract.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3h6M10 3v6.5L4.8 18.7A1.6 1.6 0 0 0 6.2 21h11.6a1.6 1.6 0 0 0 1.4-2.3L14 9.5V3" />
        <path d="M7.5 15h9" />
      </svg>
    ),
    title: 'Eval-harness CI gate',
    desc: 'A RAG regression gate on every PR, plus nightly LLM-as-judge runs and adversarial cohorts. Quality is enforced, not hoped for.',
  },
] as const;

export default function Moats() {
  return (
    <section
      id="moats"
      style={{ maxWidth: 1180, margin: '0 auto', padding: '34px 32px 30px' }}
      aria-labelledby="moats-heading"
    >
      <div className="reveal" style={{ maxWidth: 640, marginBottom: 36 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--violet-400)',
          }}
        >
          Six moats
        </span>
        <h2
          id="moats-heading"
          style={{
            margin: '14px 0 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: '-0.028em',
            color: 'var(--text-hi)',
            lineHeight: 1.08,
          }}
        >
          Built for teams that can't afford to be wrong.
        </h2>
        <p
          style={{
            margin: '14px 0 0',
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--text-mid)',
          }}
        >
          The retrieval layer is table stakes. These six are why AskMyDocs replaces Glean, Notion AI and ChatGPT Enterprise — not the other way around.
        </p>
      </div>

      <div
        className="amd-moats reveal"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
      >
        {moats.map((m, i) => (
          <article className="amd-card" key={i} style={{ padding: 24 }}>
            <div className="amd-icn" aria-hidden="true">{m.icon}</div>
            <h3
              style={{
                margin: '0 0 9px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 19,
                color: 'var(--text-hi)',
              }}
            >
              {m.title}
            </h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.62, color: 'var(--text-low)' }}>
              {m.desc}
            </p>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 980px) {
          .amd-moats { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .amd-moats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
