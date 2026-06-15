export default function Mcp() {
  return (
    <section
      className="amd-2col"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '46px 32px',
        display: 'grid',
        gridTemplateColumns: '0.94fr 1.06fr',
        gap: 48,
        alignItems: 'center',
      }}
      aria-labelledby="mcp-heading"
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
          Agentic by design
        </span>
        <h2
          id="mcp-heading"
          style={{
            margin: '14px 0 14px',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: '-0.022em',
            color: 'var(--text-hi)',
            lineHeight: 1.12,
          }}
        >
          Your knowledge, as agentic tools.
        </h2>
        <p style={{ margin: '0 0 18px', fontSize: 15.5, lineHeight: 1.68, color: 'var(--text-mid)' }}>
          AskMyDocs exposes its retrieval and graph as{' '}
          <b style={{ color: 'var(--text-hi)', fontWeight: 600 }}>MCP tools</b> for Claude Desktop, Cursor and Claude Code — and ships{' '}
          <b style={{ color: 'var(--text-hi)', fontWeight: 600 }}>KITT</b>, a one-
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--cyan-300)' }}>&lt;script&gt;</code>{' '}
          page-aware agent you can embed anywhere.
        </p>
        <p style={{ margin: '0 0 18px', fontSize: 14, lineHeight: 1.6, color: 'var(--text-low)' }}>
          25 MCP tools across 5 retrieval + 5 canonical + 5 graph + 5 insights + 5 governance surfaces. Every tool is also a Laravel Artisan command and an HTTP API endpoint.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['claude-desktop', 'cursor', 'claude-code'].map(label => (
            <span className="amd-chip" key={label} style={{ fontSize: 12 }}>{label}</span>
          ))}
        </div>
      </div>

      {/* Right: code snippets */}
      <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* MCP config */}
        <div
          style={{
            background: 'var(--bg-inset)',
            border: '1px solid var(--line-2)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
          }}
        >
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
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5c7a' }} aria-hidden="true" />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffcf5c' }} aria-hidden="true" />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--success)' }} aria-hidden="true" />
            <span style={{ marginLeft: 6, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-low)' }}>
              ~/.config/claude/mcp.json
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '15px 16px',
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              lineHeight: 1.7,
              color: 'var(--text-mid)',
              overflowX: 'auto',
            }}
            aria-label="MCP configuration example"
          >
            <span style={{ color: 'var(--text-faint)' }}>{'{'}</span>{'\n'}
            {'  '}<span style={{ color: 'var(--cyan-300)' }}>"mcpServers"</span>: {'{'}{'\n'}
            {'    '}<span style={{ color: 'var(--cyan-300)' }}>"askmydocs"</span>: {'{'}{'\n'}
            {'      '}<span style={{ color: 'var(--violet-400)' }}>"url"</span>: <span style={{ color: 'var(--success)' }}>"https://kb.acme.com/mcp"</span>,{'\n'}
            {'      '}<span style={{ color: 'var(--violet-400)' }}>"headers"</span>: {'{ '}<span style={{ color: 'var(--violet-400)' }}>"Authorization"</span>: <span style={{ color: 'var(--success)' }}>"Bearer {'${TOKEN}'}"</span>{' }'}{'\n'}
            {'    }'}{'\n'}
            {'  }'}{'\n'}
            <span style={{ color: 'var(--text-faint)' }}>{'}'}</span>
          </pre>
        </div>

        {/* KITT embed */}
        <div
          style={{
            background: 'var(--bg-inset)',
            border: '1px solid var(--line-2)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
          }}
        >
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan-300)' }}>
              KITT · embed
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '15px 16px',
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              lineHeight: 1.7,
              color: 'var(--text-mid)',
              overflowX: 'auto',
            }}
            aria-label="KITT embed script example"
          >
            <span style={{ color: 'var(--text-faint)' }}>&lt;script</span>{' '}
            <span style={{ color: 'var(--violet-400)' }}>src</span>=
            <span style={{ color: 'var(--success)' }}>"https://kb.acme.com/kitt.js"</span>{'\n'}
            {'        '}
            <span style={{ color: 'var(--violet-400)' }}>data-kitt-key</span>=
            <span style={{ color: 'var(--success)' }}>"pk_live_…"</span>
            <span style={{ color: 'var(--text-faint)' }}>&gt;&lt;/script&gt;</span>
            <span
              style={{
                display: 'inline-block',
                width: 7,
                height: 14,
                background: 'var(--cyan-400)',
                verticalAlign: '-2px',
                marginLeft: 3,
                animation: 'pds-caret 1s step-end infinite',
              }}
              aria-hidden="true"
            />
          </pre>
        </div>
      </div>
    </section>
  );
}
