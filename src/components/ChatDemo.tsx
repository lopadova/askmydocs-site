// Animated cited-answer chat demo (hero right panel)
export default function ChatDemo() {
  const messages = [
    {
      role: 'user',
      text: 'Why did we reject the gRPC approach for ingest?',
    },
    {
      role: 'assistant',
      text: 'The gRPC approach was ruled out in dec-204 because it introduced a schema versioning burden without meaningfully improving throughput over the existing HTTP fan-in. The decision is marked rejected and blocked from re-proposal.',
      citations: ['dec-204', 'ADR-0003'],
      rejected: true,
    },
  ] as const;

  return (
    <div
      style={{
        background: 'var(--bg-inset)',
        border: '1px solid var(--line-2)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
      }}
      role="img"
      aria-label="AskMyDocs chat demo showing a grounded answer with citations and anti-repetition firewall"
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 14px',
          borderBottom: '1px solid var(--line-1)',
          background: 'var(--bg-surface)',
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5c7a' }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffcf5c' }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--success)' }} />
        <span
          style={{
            marginLeft: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--text-low)',
          }}
        >
          AskMyDocs Chat · project: engineering
        </span>
      </div>

      <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
              gap: 10,
              alignItems: 'flex-start',
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: msg.role === 'user' ? 'var(--bg-elevated)' : 'var(--grad-agent)',
                border: '1px solid var(--line-2)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
                color: msg.role === 'user' ? 'var(--text-low)' : '#06070d',
                fontWeight: 700,
              }}
              aria-hidden="true"
            >
              {msg.role === 'user' ? 'U' : 'A'}
            </div>

            {/* Bubble */}
            <div style={{ maxWidth: '80%' }}>
              <div
                style={{
                  padding: '10px 13px',
                  borderRadius: msg.role === 'user' ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
                  background: msg.role === 'user' ? 'var(--bg-elevated)' : 'var(--bg-raised)',
                  border: '1px solid var(--line-1)',
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'var(--text-mid)',
                }}
              >
                {msg.text}
              </div>

              {/* Citations + rejected badge */}
              {'citations' in msg && (
                <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                  {msg.citations.map(c => (
                    <span
                      key={c}
                      style={{
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'var(--cyan-a08)',
                        border: '1px solid var(--cyan-a24)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: 'var(--cyan-300)',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                  {msg.rejected && (
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'rgba(255,92,122,0.1)',
                        border: '1px solid rgba(255,92,122,0.35)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: 'var(--danger)',
                      }}
                    >
                      ⚠ rejected · blocked
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing / cursor indicator */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'var(--grad-agent)',
              display: 'grid',
              placeItems: 'center',
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              color: '#06070d',
              fontWeight: 700,
            }}
            aria-hidden="true"
          >
            A
          </div>
          <div
            style={{
              padding: '10px 14px',
              borderRadius: '4px 12px 12px 12px',
              background: 'var(--bg-raised)',
              border: '1px solid var(--line-1)',
              display: 'flex',
              gap: 4,
              alignItems: 'center',
            }}
            aria-hidden="true"
          >
            {[0, 0.2, 0.4].map(d => (
              <span
                key={d}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--cyan-500)',
                  animation: 'pds-pulse 1.4s infinite',
                  animationDelay: `${d}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Input row */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 4,
            padding: '10px 12px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--line-2)',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              flex: 1,
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--text-faint)',
            }}
          >
            Ask your docs…
          </span>
          <span
            style={{
              display: 'inline-block',
              width: 7,
              height: 14,
              background: 'var(--cyan-400)',
              animation: 'pds-caret 1s step-end infinite',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
