import { useState } from 'react';
import { LogoMark } from './LogoMark.tsx';
import { GitHubIcon } from './icons.tsx';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(5,7,12,0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--line-1)',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 32px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: wordmark + nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
            <LogoMark size={30} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--text-hi)' }}>
              Ask<span className="amd-grad">MyDocs</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <nav
            className="amd-navlinks"
            aria-label="Primary navigation"
            style={{ display: 'flex', gap: 24 }}
          >
            <a href="#moats" className="amd-link">Why it wins</a>
            <a href="#memory" className="amd-link">Memory</a>
            <a href="#architecture" className="amd-link">Architecture</a>
            <a href="#open-source" className="amd-link">Open source</a>
          </nav>
        </div>

        {/* Right: GitHub + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a
            href="https://github.com/lopadova/AskMyDocs"
            className="amd-link"
            aria-label="GitHub repository"
            style={{ display: 'flex', alignItems: 'center', gap: 7 }}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href="https://padosoft.mintlify.app"
            className="amd-btnp"
            style={{ height: 34, fontSize: '13.5px', padding: '0 15px' }}
            target="_blank"
            rel="noreferrer"
          >
            Get started
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--line-2)',
              borderRadius: 8,
              color: 'var(--text-mid)',
              padding: '6px 8px',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          style={{
            borderTop: '1px solid var(--line-1)',
            background: 'rgba(5,7,12,0.95)',
            padding: '16px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {(['Why it wins', 'Memory', 'Architecture', 'Open source'] as const).map((label, i) => {
            const hrefs = ['#moats', '#memory', '#architecture', '#open-source'];
            return (
              <a key={i} href={hrefs[i]} className="amd-link" onClick={() => setOpen(false)} style={{ fontSize: 16 }}>
                {label}
              </a>
            );
          })}
          <a href="https://padosoft.mintlify.app" className="amd-btnp" style={{ width: 'fit-content', marginTop: 8 }} target="_blank" rel="noreferrer">
            Get started
          </a>
        </nav>
      )}

      <style>{`
        @media (max-width: 980px) {
          .amd-navlinks { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
