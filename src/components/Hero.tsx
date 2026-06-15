import { GitHubIcon, ArrowRightIcon } from './icons.tsx';
import ChatDemo from './ChatDemo.tsx';

export default function Hero() {
  return (
    <section
      id="top"
      style={{ position: 'relative', padding: '84px 0 70px', overflow: 'hidden' }}
      aria-label="Hero"
    >
      {/* Aurora background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--grad-aurora)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'var(--grid-line-bg)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          WebkitMaskImage: 'radial-gradient(92% 75% at 50% 0%, #000, transparent)',
          maskImage: 'radial-gradient(92% 75% at 50% 0%, #000, transparent)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Animated knowledge-graph backdrop */}
      <svg
        viewBox="0 0 1200 560"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          WebkitMaskImage: 'radial-gradient(80% 70% at 50% 30%, #000, transparent 78%)',
          maskImage: 'radial-gradient(80% 70% at 50% 30%, #000, transparent 78%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <g>
          <path className="amd-edge-live" d="M150 120 L340 220" />
          <path className="amd-edge-live" d="M340 220 L520 130" style={{ animationDelay: '-0.6s' }} />
          <path className="amd-edge-live" d="M340 220 L300 400" style={{ animationDelay: '-1.1s' }} />
          <path className="amd-edge-live" d="M520 130 L720 230" style={{ animationDelay: '-0.3s' }} />
          <path className="amd-edge" d="M300 400 L520 460" />
          <path className="amd-edge-live" d="M720 230 L900 150" style={{ animationDelay: '-1.4s' }} />
          <path className="amd-edge" d="M720 230 L820 420" />
          <path className="amd-edge-live" d="M900 150 L1060 270" style={{ animationDelay: '-0.9s' }} />
          <path className="amd-edge" d="M820 420 L1040 470" />
          <path className="amd-edge" d="M150 120 L300 400" />
          <circle className="amd-node-v" cx="150" cy="120" r="4" />
          <circle className="amd-node" cx="340" cy="220" r="5" />
          <circle className="amd-node" cx="520" cy="130" r="4" />
          <circle className="amd-node-v" cx="300" cy="400" r="4" />
          <circle className="amd-node" cx="720" cy="230" r="6" />
          <circle className="amd-node" cx="520" cy="460" r="3" />
          <circle className="amd-node-v" cx="900" cy="150" r="5" />
          <circle className="amd-node" cx="820" cy="420" r="4" />
          <circle className="amd-node" cx="1060" cy="270" r="4" />
          <circle className="amd-node-v" cx="1040" cy="470" r="3" />
        </g>
      </svg>

      {/* Content grid */}
      <div
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: '1.04fr 0.96fr',
          gap: 48,
          alignItems: 'center',
        }}
        className="amd-hero-grid"
      >
        {/* Left column */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--bg-raised)',
              border: '1px solid var(--line-2)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--cyan-300)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--cyan-500)',
                boxShadow: '0 0 8px var(--cyan-500)',
                animation: 'pds-pulse 1.6s infinite',
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            MIT-licensed · self-hostable
          </div>

          {/* H1 */}
          <h1
            className="amd-h1"
            style={{
              margin: '20px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 58,
              lineHeight: 1.03,
              letterSpacing: '-0.035em',
              color: 'var(--text-hi)',
            }}
          >
            Your enterprise<br />
            knowledge, with a{' '}
            <span className="amd-grad">memory.</span>
          </h1>

          {/* Subhero */}
          <p
            style={{
              margin: '22px 0 0',
              fontSize: 17.5,
              lineHeight: 1.62,
              color: 'var(--text-mid)',
              maxWidth: 486,
            }}
          >
            Hybrid RAG over a typed canonical knowledge graph — with an anti-hallucination firewall, agentic MCP tools, and a full admin cockpit. Self-hosted. No per-seat lock-in.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
            <a
              href="https://padosoft.mintlify.app"
              className="amd-btnp"
              target="_blank"
              rel="noreferrer"
            >
              Read the docs
              <ArrowRightIcon />
            </a>
            <a
              href="https://github.com/lopadova/AskMyDocs"
              className="amd-btnghost"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              Star on GitHub
            </a>
          </div>

          {/* Tech badges */}
          <div style={{ display: 'flex', gap: 10, marginTop: 32, flexWrap: 'wrap' }}>
            {['Laravel', 'PostgreSQL + pgvector', 'MCP', 'MIT'].map(label => (
              <span
                key={label}
                className="amd-chip"
                style={{ padding: '7px 13px', fontSize: 12 }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: chat demo visual */}
        <div className="amd-hero-visual" style={{ minWidth: 0 }}>
          <ChatDemo />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .amd-hero-grid { grid-template-columns: 1fr !important; }
          .amd-hero-visual { order: -1; }
        }
        @media (max-width: 600px) {
          .amd-h1 { font-size: 40px !important; }
        }
      `}</style>
    </section>
  );
}
