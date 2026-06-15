import { useState } from 'react';
import { ArrowRightIcon, GitHubIcon, CopyIcon } from './icons.tsx';

export default function FinalCta() {
  const [copied, setCopied] = useState(false);
  const cloneCmd = 'git clone https://github.com/lopadova/AskMyDocs.git';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cloneCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available (e.g. non-HTTPS)
    }
  };

  return (
    <section
      style={{ maxWidth: 1180, margin: '34px auto 76px', padding: '0 32px' }}
      aria-labelledby="cta-heading"
    >
      <div
        className="reveal"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--cyan-a40)',
          background: 'var(--bg-raised)',
          padding: '60px 40px',
          textAlign: 'center',
          boxShadow: 'var(--glow-lg)',
        }}
      >
        {/* Aurora bg */}
        <div
          style={{ position: 'absolute', inset: 0, background: 'var(--grad-aurora)' }}
          aria-hidden="true"
        />

        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'var(--grid-dot)',
            backgroundSize: '22px 22px',
            opacity: 0.5,
            WebkitMaskImage: 'radial-gradient(60% 100% at 50% 50%, #000, transparent)',
            maskImage: 'radial-gradient(60% 100% at 50% 50%, #000, transparent)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        <div style={{ position: 'relative' }}>
          <h2
            id="cta-heading"
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 42,
              letterSpacing: '-0.03em',
              color: 'var(--text-hi)',
            }}
          >
            Own your knowledge stack.
          </h2>
          <p
            style={{
              margin: '16px auto 0',
              maxWidth: 460,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--text-mid)',
            }}
          >
            Ground every answer in your own data — and never lose a decision again.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
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

          {/* Clone one-liner */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              marginTop: 26,
              padding: '11px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-inset)',
              border: '1px solid var(--line-2)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-mid)' }}>
              <span style={{ color: 'var(--cyan-400)' }}>$</span> {cloneCmd}
            </span>
            <button
              onClick={handleCopy}
              aria-label={copied ? 'Copied!' : 'Copy clone command'}
              style={{
                background: 'none',
                border: 'none',
                padding: 4,
                cursor: 'pointer',
                color: copied ? 'var(--cyan-400)' : undefined,
                transition: 'color 0.15s',
                flexShrink: 0,
              }}
            >
              {copied ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                <CopyIcon />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
