// "KB with a memory" showcase section — animated decision graph + firewall
export default function Showcase() {
  return (
    <section
      id="memory"
      className="amd-sweep"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--line-1)',
        borderBottom: '1px solid var(--line-1)',
        background: 'var(--bg-surface)',
        marginTop: 30,
        overflow: 'hidden',
      }}
      aria-labelledby="memory-heading"
    >
      {/* Scanline overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--scanline)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div
        className="amd-2col"
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
          padding: '72px 32px',
          display: 'grid',
          gridTemplateColumns: '0.92fr 1.08fr',
          gap: 52,
          alignItems: 'center',
        }}
      >
        {/* Left copy */}
        <div className="reveal">
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--violet-400)',
            }}
          >
            The differentiator
          </span>
          <h2
            id="memory-heading"
            style={{
              margin: '14px 0 16px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 36,
              letterSpacing: '-0.025em',
              color: 'var(--text-hi)',
              lineHeight: 1.1,
            }}
          >
            A knowledge base that{' '}
            <span className="amd-grad">remembers</span>.
          </h2>
          <p
            style={{
              margin: '0 0 22px',
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--text-mid)',
            }}
          >
            AskMyDocs records the decisions your team makes — and the ones it rejects. At query time it walks the graph, and an anti-repetition firewall refuses to re-suggest what you already ruled out.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              {
                step: '1',
                bold: 'Ingest → enrich → graph.',
                rest: ' Sources are chunked, typed and linked into a canonical concept graph.',
                highlight: 'cyan',
              },
              {
                step: '2',
                bold: 'Concept synthesis.',
                rest: ' Daily maintenance compiles decisions, rationales and rejections into memory.',
                highlight: 'cyan',
              },
              {
                step: '⚠',
                bold: 'Anti-repetition firewall.',
                rest: ' Rejected approaches are blocked from re-entering an answer until a human reopens them.',
                highlight: 'warning',
              },
            ].map(row => (
              <div key={row.step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 7,
                    background: row.highlight === 'warning' ? 'rgba(255,207,92,0.14)' : 'var(--cyan-a14)',
                    border: `1px solid ${row.highlight === 'warning' ? 'rgba(255,207,92,0.4)' : 'var(--cyan-a40)'}`,
                    display: 'grid',
                    placeItems: 'center',
                    color: row.highlight === 'warning' ? 'var(--warning)' : 'var(--cyan-300)',
                    flexShrink: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                  }}
                  aria-hidden="true"
                >
                  {row.step}
                </span>
                <span style={{ fontSize: 14.5, color: 'var(--text-mid)', lineHeight: 1.55 }}>
                  <b style={{ color: 'var(--text-hi)', fontWeight: 600 }}>{row.bold}</b>
                  {row.rest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: animated memory graph */}
        <div
          className="reveal"
          style={{
            position: 'relative',
            background: 'var(--bg-inset)',
            border: '1px solid var(--line-2)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-lg)',
            padding: 22,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-low)',
              }}
            >
              decision-graph · live
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                color: 'var(--cyan-300)',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--cyan-500)',
                  boxShadow: '0 0 7px var(--cyan-500)',
                  animation: 'pds-pulse 1.5s infinite',
                }}
              />
              walking
            </span>
          </div>

          {/* Graph SVG */}
          <svg viewBox="0 0 480 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <defs>
              <marker id="amd-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 1 L6 4 L0 7" fill="none" stroke="var(--cyan-400)" strokeWidth="1.4" />
              </marker>
            </defs>
            {/* Edges */}
            <path className="amd-edge-live" d="M70 150 L190 90" markerEnd="url(#amd-arrow)" />
            <path className="amd-edge-live" d="M70 150 L190 210" style={{ animationDelay: '-0.5s' }} markerEnd="url(#amd-arrow)" />
            <path className="amd-edge-live" d="M210 90 L330 70" style={{ animationDelay: '-0.9s' }} markerEnd="url(#amd-arrow)" />
            <path d="M210 210 L320 230" stroke="rgba(255,92,122,0.5)" strokeWidth="1" fill="none" strokeDasharray="4 6" />

            {/* Query node */}
            <circle cx="60" cy="150" r="14" fill="var(--cyan-a14)" stroke="var(--cyan-500)" strokeWidth="1.5" />
            <text x="60" y="154" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--cyan-300)">?</text>

            {/* Concept nodes */}
            <circle cx="200" cy="90" r="11" fill="var(--violet-a14)" stroke="var(--violet-500)" strokeWidth="1.5" />
            <circle className="amd-node" cx="200" cy="210" r="9" opacity="0.9" />
            <circle cx="340" cy="70" r="11" fill="var(--cyan-a14)" stroke="var(--cyan-500)" strokeWidth="1.4" />

            {/* Labels */}
            <text x="200" y="76" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-low)">RFC</text>
            <text x="340" y="48" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-low)">canonical</text>
          </svg>

          {/* Blocked / rejected card */}
          <div
            style={{
              position: 'absolute',
              right: 18,
              bottom: 64,
              width: 178,
            }}
          >
            <div
              className="amd-blocked"
              style={{
                background: 'var(--danger-dim)',
                border: '1px solid rgba(255,92,122,0.4)',
                borderRadius: 10,
                padding: '10px 12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--danger)',
                }}
              >
                <span>⚠</span> rejected · dec-204
              </div>
              <div style={{ marginTop: 5, fontSize: 12, color: 'var(--text-mid)', lineHeight: 1.4 }}>
                "switch ingest to gRPC"
              </div>
              <div style={{ marginTop: 6, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)' }}>
                blocked from re-proposal
              </div>
            </div>
          </div>

          {/* Firewall barrier */}
          <div
            className="amd-firewall"
            style={{
              position: 'absolute',
              right: 206,
              bottom: 48,
              width: 2,
              height: 96,
              background: 'linear-gradient(180deg, transparent, var(--warning), transparent)',
              boxShadow: '0 0 14px var(--warning)',
            }}
          />

          {/* Legend */}
          <div
            style={{
              marginTop: 4,
              paddingTop: 14,
              borderTop: '1px solid var(--line-1)',
              display: 'flex',
              gap: 18,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-low)',
            }}
          >
            {[
              { color: 'var(--violet-500)', label: 'concept' },
              { color: 'var(--cyan-500)', label: 'canonical' },
              { color: 'var(--danger)', label: 'rejected' },
            ].map(d => (
              <span key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .amd-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
