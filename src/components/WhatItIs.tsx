const strips = [
  {
    label: 'Retrieval',
    title: 'Hybrid RAG',
    desc: 'pgvector + full-text + a reranker, fused per query.',
  },
  {
    label: 'Structure',
    title: 'Typed graph',
    desc: 'A canonical knowledge graph walked at query time.',
  },
  {
    label: 'Curation',
    title: 'Auto-Wiki',
    desc: 'A self-compiling wiki tier that maintains itself.',
  },
  {
    label: 'Agency',
    title: 'MCP tools',
    desc: 'Your KB as agentic tools for Claude, Cursor & more.',
  },
] as const;

export default function WhatItIs() {
  return (
    <section
      style={{ maxWidth: 1180, margin: '0 auto', padding: '18px 32px 56px' }}
      aria-label="What it is"
    >
      <div
        className="reveal amd-strip"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}
      >
        {strips.map(s => (
          <div className="amd-card" key={s.title} style={{ padding: 20 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cyan-400)',
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 19,
                color: 'var(--text-hi)',
              }}
            >
              {s.title}
            </div>
            <p
              style={{
                margin: '6px 0 0',
                fontSize: 13,
                lineHeight: 1.55,
                color: 'var(--text-low)',
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 980px) {
          .amd-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .amd-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
