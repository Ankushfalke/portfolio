import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--border)',
      padding: '36px 24px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--text-faint)' }}>
            <span style={{ color: 'var(--text-faint)' }}>{'<'}</span>
            <span style={{ color: 'var(--sky)' }}>AF</span>
            <span style={{ color: 'var(--text-faint)' }}>{'/>'}</span>
            {' '}© {year} Ankush Falke
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Ankushfalke' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/ankushfalke' },
              { label: 'Email', href: 'mailto:ankushfalke999@gmail.com' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                style={{
                  fontFamily: 'var(--mono)', fontSize: '0.75rem',
                  color: 'var(--text-faint)', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--sky)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-faint)'}>
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-faint)' }}>
            Built with React + Vite
          </div>
        </div>
      </div>
    </footer>
  )
}
