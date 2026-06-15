import { LogoMark } from './LogoMark.tsx';

const cols = [
  {
    label: 'Product',
    links: [
      { text: 'Docs', href: 'https://doc.askmydocs.padosoft.com' },
      { text: 'Architecture', href: '#architecture' },
      { text: 'Features', href: '#moats' },
      { text: 'Connectors', href: '#connectors' },
    ],
  },
  {
    label: 'Open source',
    links: [
      { text: 'GitHub', href: 'https://github.com/lopadova/AskMyDocs' },
      { text: 'Sister packages', href: 'https://github.com/padosoft' },
      { text: 'MIT license', href: 'https://github.com/lopadova/AskMyDocs/blob/main/LICENSE' },
      { text: 'Changelog', href: 'https://github.com/lopadova/AskMyDocs/blob/main/README.md#changelog' },
    ],
  },
  {
    label: 'Company',
    links: [
      { text: 'Padosoft', href: 'https://www.padosoft.com' },
      { text: 'Support', href: 'https://doc.askmydocs.padosoft.com' },
      { text: 'GitHub org', href: 'https://github.com/padosoft' },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line-1)',
        background: 'var(--bg-surface)',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '46px 32px 30px',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 32,
        }}
        className="footer-grid"
      >
        {/* Brand col */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LogoMark size={28} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-hi)' }}>
              Ask<span className="amd-grad">MyDocs</span>
            </span>
          </div>
          <p style={{ margin: '14px 0 0', fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-low)', maxWidth: 300 }}>
            A self-hostable AI hub for enterprise knowledge. Built by{' '}
            <a
              href="https://www.padosoft.com"
              className="amd-link"
              style={{ color: 'var(--cyan-300)' }}
              target="_blank"
              rel="noreferrer"
            >
              Padosoft
            </a>{' '}
            in Florence, Italy.
          </p>
        </div>

        {/* Nav cols */}
        {cols.map(col => (
          <div key={col.label}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
                marginBottom: 14,
              }}
            >
              {col.label}
            </div>
            <nav aria-label={col.label}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(link => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="amd-link"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '18px 32px 26px',
          borderTop: '1px solid var(--line-1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>
          © 2026 Padosoft · MIT licensed
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)' }}>
          Florence, Italy · askmydocs.padosoft.com
        </span>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
