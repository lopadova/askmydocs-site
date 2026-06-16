import { CheckIcon } from './icons.tsx';

type BoolOrPartial = boolean | 'partial';

interface CompRow {
  cap: string;
  values: [BoolOrPartial, BoolOrPartial, BoolOrPartial, BoolOrPartial];
}

// Data sourced from AskMyDocs README "How it compares" tables
const rows: CompRow[] = [
  { cap: 'Self-hostable / on-prem',      values: [true,    false,   false,   false] },
  { cap: 'MIT licensed',                 values: [true,    false,   false,   false] },
  { cap: 'No per-seat pricing',          values: [true,    false,   false,   false] },
  { cap: 'Typed canonical layer',        values: [true,    false,   false,   false] },
  { cap: 'Anti-repetition firewall',     values: [true,    false,   false,   false] },
  { cap: 'Hybrid RAG + reranker',        values: [true,    true,    false,   true] },
  { cap: 'Source-aware chunking',        values: [true,    'partial', false,  false] },
  { cap: 'Native Evernote connector',    values: [true,    false,   false,   false] },
  { cap: 'Plugin/package extensibility', values: [true,    false,   false,   false] },
];

function Cell({ val, accent }: { val: BoolOrPartial; accent?: boolean }) {
  if (val === true) {
    return <CheckIcon size={17} color={accent ? 'var(--cyan-400)' : 'var(--text-mid)'} />;
  }
  if (val === 'partial') {
    return <span style={{ color: 'var(--warning)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>~</span>;
  }
  return <span style={{ color: 'var(--text-faint)', fontSize: 15 }}>—</span>;
}

export default function OpenSource() {
  return (
    <section
      id="open-source"
      style={{ maxWidth: 1180, margin: '0 auto', padding: '70px 32px 40px' }}
      aria-labelledby="oss-heading"
    >
      <div
        className="amd-2col"
        style={{
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: 48,
          alignItems: 'start',
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
            Open source
          </span>
          <h2
            id="oss-heading"
            style={{
              margin: '14px 0 16px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 34,
              letterSpacing: '-0.025em',
              color: 'var(--text-hi)',
              lineHeight: 1.1,
            }}
          >
            Own the whole stack.
          </h2>
          <p
            style={{
              margin: '0 0 22px',
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--text-mid)',
            }}
          >
            MIT-licensed, self-hostable, EU-sovereign-feasible. No per-seat pricing. No $500K/yr enterprise contract. The open-source alternative to Glean, Notion AI and ChatGPT Enterprise.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--cyan-a08)',
                border: '1px solid var(--cyan-a40)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--cyan-300)',
              }}
            >
              <CheckIcon size={14} color="var(--cyan-300)" />
              MIT license
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-raised)',
                border: '1px solid var(--line-2)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--text-mid)',
              }}
            >
              no per-seat lock-in
            </span>
          </div>

          {/* EU compliance note */}
          <div
            style={{
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-raised)',
              border: '1px solid var(--line-1)',
              fontSize: 13,
              lineHeight: 1.6,
              color: 'var(--text-low)',
            }}
          >
            <span style={{ color: 'var(--text-hi)', fontWeight: 600 }}>EU AI Act ready.</span>{' '}
            Ships DSAR flows, bias monitoring, risk register, FRIA templates, consent middleware, and a full audit-evidence trail — all self-hosted, all on your infrastructure.
          </div>
        </div>

        {/* Right: comparison table */}
        <div
          className="reveal"
          style={{
            border: '1px solid var(--line-2)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 0.9fr 0.8fr 0.8fr 0.9fr',
              background: 'var(--bg-surface)',
              borderBottom: '1px solid var(--line-1)',
            }}
          >
            <div style={{ padding: '14px 16px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-low)' }}>
              Capability
            </div>
            {(['AskMyDocs', 'Glean', 'Notion AI', 'ChatGPT Ent.'] as const).map((col, i) => (
              <div
                key={col}
                style={{
                  padding: '14px 10px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: i === 0 ? 700 : 600,
                  fontSize: 13,
                  color: i === 0 ? 'var(--cyan-300)' : 'var(--text-mid)',
                  background: i === 0 ? 'var(--cyan-a08)' : undefined,
                  borderLeft: i === 0 ? '1px solid var(--cyan-a24)' : undefined,
                  borderRight: i === 0 ? '1px solid var(--cyan-a24)' : undefined,
                }}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Table rows */}
          {rows.map((r, i) => {
            const last = i === rows.length - 1;
            return (
              <div
                key={r.cap}
                className="amd-tablerow"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.6fr 0.9fr 0.8fr 0.8fr 0.9fr',
                  borderBottom: last ? 'none' : '1px solid var(--line-1)',
                }}
              >
                <div style={{ padding: '13px 16px', fontSize: 13.5, color: 'var(--text-mid)' }}>
                  {r.cap}
                </div>
                {r.values.map((v, vi) => (
                  <div
                    key={vi}
                    style={{
                      padding: '13px 10px',
                      display: 'grid',
                      placeItems: 'center',
                      background: vi === 0 ? 'var(--cyan-a08)' : undefined,
                      borderLeft: vi === 0 ? '1px solid var(--cyan-a24)' : undefined,
                      borderRight: vi === 0 ? '1px solid var(--cyan-a24)' : undefined,
                    }}
                  >
                    <Cell val={v} accent={vi === 0} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
