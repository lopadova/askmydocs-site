export default function Architecture() {
  return (
    <section
      id="architecture"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--line-1)',
        background: 'var(--bg-surface)',
        overflow: 'hidden',
      }}
      aria-labelledby="arch-heading"
    >
      {/* Grid bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'var(--grid-line-bg)',
          backgroundSize: '38px 38px',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '64px 32px' }}>
        {/* Heading */}
        <div
          className="reveal"
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--cyan-400)',
            }}
          >
            Architecture
          </span>
          <h2
            id="arch-heading"
            style={{
              margin: '14px 0 12px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 32,
              letterSpacing: '-0.022em',
              color: 'var(--text-hi)',
              lineHeight: 1.12,
            }}
          >
            Two ingestion entry points. One execution path.
          </h2>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-mid)' }}>
            The database is a projection of canonical markdown — never the source of truth.
          </p>
        </div>

        {/* Architecture diagram */}
        <div
          className="reveal"
          style={{
            background: 'var(--bg-inset)',
            border: '1px solid var(--line-2)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-lg)',
            padding: '30px 26px',
            overflowX: 'auto',
          }}
          aria-label="Architecture diagram showing two ingestion entry points converging into a single retrieval and AI pipeline"
        >
          <svg
            viewBox="0 0 1080 340"
            style={{ width: '100%', height: 'auto', display: 'block', minWidth: 640 }}
            aria-hidden="true"
          >
            <defs>
              <marker id="ar" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
                <path d="M0 1.5 L6.5 4.5 L0 7.5" fill="none" stroke="var(--cyan-500)" strokeWidth="1.5" />
              </marker>
              <linearGradient id="boxg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(255,255,255,0.04)" />
                <stop offset="0.5" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>

            {/* Ingestion fan-in (left) */}
            <g fontSize="11" fill="var(--text-low)">
              <rect x="20" y="40" width="150" height="34" rx="8" fill="var(--bg-raised)" stroke="var(--line-2)" />
              <text x="95" y="61" textAnchor="middle">connectors</text>
              <rect x="20" y="92" width="150" height="34" rx="8" fill="var(--bg-raised)" stroke="var(--line-2)" />
              <text x="95" y="113" textAnchor="middle">canonical markdown</text>
            </g>
            <path className="amd-edge-live" d="M170 57 C 220 57, 220 150, 270 150" markerEnd="url(#ar)" />
            <path className="amd-edge-live" d="M170 109 C 220 109, 220 150, 270 150" style={{ animationDelay: '-0.7s' }} markerEnd="url(#ar)" />

            {/* Pipeline boxes */}
            <g>
              <rect x="272" y="126" width="148" height="48" rx="10" fill="var(--bg-raised)" stroke="var(--cyan-a40)" />
              <rect x="272" y="126" width="148" height="48" rx="10" fill="url(#boxg)" />
              <text x="346" y="148" textAnchor="middle" fontSize="12" fill="var(--text-hi)">Ingestion</text>
              <text x="346" y="164" textAnchor="middle" fontSize="10" fill="var(--text-low)">chunk · enrich · PII</text>
            </g>
            <path className="amd-edge-live" d="M420 150 H 470" style={{ animationDelay: '-0.3s' }} markerEnd="url(#ar)" />
            <g>
              <rect x="472" y="126" width="156" height="48" rx="10" fill="var(--bg-raised)" stroke="var(--cyan-a40)" />
              <rect x="472" y="126" width="156" height="48" rx="10" fill="url(#boxg)" />
              <text x="550" y="148" textAnchor="middle" fontSize="12" fill="var(--text-hi)">Hybrid retrieval</text>
              <text x="550" y="164" textAnchor="middle" fontSize="10" fill="var(--text-low)">pgvector · FTS · rerank</text>
            </g>
            <path className="amd-edge-live" d="M628 150 H 678" style={{ animationDelay: '-1s' }} markerEnd="url(#ar)" />
            <g>
              <rect x="680" y="126" width="148" height="48" rx="10" fill="var(--violet-a14)" stroke="var(--violet-500)" />
              <text x="754" y="148" textAnchor="middle" fontSize="12" fill="var(--violet-400)">Knowledge graph</text>
              <text x="754" y="164" textAnchor="middle" fontSize="10" fill="var(--text-low)">walk · firewall</text>
            </g>
            <path className="amd-edge-live" d="M828 150 H 878" style={{ animationDelay: '-0.5s' }} markerEnd="url(#ar)" />
            <g>
              <rect x="880" y="126" width="170" height="48" rx="10" fill="var(--bg-raised)" stroke="var(--cyan-a40)" />
              <rect x="880" y="126" width="170" height="48" rx="10" fill="url(#boxg)" />
              <text x="965" y="148" textAnchor="middle" fontSize="12" fill="var(--text-hi)">AI provider</text>
              <text x="965" y="164" textAnchor="middle" fontSize="10" fill="var(--text-low)">grounded · cited</text>
            </g>

            {/* Client row */}
            <g fontSize="11">
              <rect x="430" y="252" width="220" height="40" rx="10" fill="var(--bg-raised)" stroke="var(--line-2)" />
              <text x="540" y="277" textAnchor="middle" fill="var(--text-mid)">client · chat · MCP · KITT</text>
            </g>
            <path className="amd-edge-live" d="M540 252 V 178" style={{ animationDelay: '-0.2s' }} markerEnd="url(#ar)" />
            <path d="M965 178 V 220 C 965 250, 660 272, 650 272" stroke="var(--line-2)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
            <text x="690" y="312" fontSize="10" fill="var(--text-faint)">grounded answer + citations →</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
