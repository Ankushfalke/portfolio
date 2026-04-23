import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 24px',
        background: scrolled ? 'rgba(6,11,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(28,46,74,0.8)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: 'var(--mono)', fontWeight: 700,
          fontSize: '1rem', color: 'var(--sky)',
          letterSpacing: '0.02em', textDecoration: 'none',
        }}>
          <span style={{ color: 'var(--text-faint)' }}>{'<'}</span>
          AF
          <span style={{ color: 'var(--text-faint)' }}>{'/>'}</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
             className="nav-links">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: 'var(--mono)', fontSize: '0.8rem',
              color: 'var(--text-muted)', letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--sky)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
              {link.label}
            </a>
          ))}
          <a href="/AnkushFalke_Resume.pdf" download
            className="btn btn-outline"
            style={{ padding: '8px 18px', fontSize: '0.75rem' }}>
            ↓ Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          color: 'var(--sky)', cursor: 'pointer', fontSize: '1.5rem',
        }} className="hamburger">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'rgba(6,11,20,0.98)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--mono)', fontSize: '0.9rem',
                color: 'var(--text-muted)',
              }}>
              {link.label}
            </a>
          ))}
          <a href="/AnkushFalke_Resume.pdf" download className="btn btn-outline"
            style={{ width: 'fit-content', padding: '8px 18px', fontSize: '0.8rem' }}>
            ↓ Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}
