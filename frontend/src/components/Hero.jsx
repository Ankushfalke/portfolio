import React, { useEffect, useState } from 'react'

const ROLES = [
  'Full Stack Developer',
  'React JS Enthusiast',
  'Quality Analyst',
  'AI App Builder',
  'Problem Solver',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const target = ROLES[roleIdx]
    let timer

    if (!deleting && charIdx < target.length) {
      timer = setTimeout(() => {
        setDisplayed(target.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 70)
    } else if (!deleting && charIdx === target.length) {
      timer = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => {
        setDisplayed(target.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, 40)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(r => (r + 1) % ROLES.length)
    }

    return () => clearTimeout(timer)
  }, [charIdx, deleting, roleIdx])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '60px',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left content */}
          <div>
            {/* Greeting */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '0.85rem',
              color: 'var(--sky)', marginBottom: '16px',
              opacity: 0, animation: 'fadeUp 0.6s ease 0.1s forwards',
            }}>
              <span style={{ color: 'var(--text-faint)' }}>// </span>
              Hello, World! I'm
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 700, letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '8px',
              opacity: 0, animation: 'fadeUp 0.6s ease 0.2s forwards',
            }}>
              Ankush
              <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--sky) 0%, var(--pink) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Falke
              </span>
            </h1>

            {/* Typewriter role */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'var(--text-muted)',
              marginBottom: '28px',
              height: '2em',
              opacity: 0, animation: 'fadeUp 0.6s ease 0.3s forwards',
            }}>
              <span style={{ color: 'var(--amber)' }}>{'> '}</span>
              <span style={{ color: 'var(--text-bright)' }}>{displayed}</span>
              <span style={{
                display: 'inline-block', width: '2px', height: '1.1em',
                background: 'var(--sky)', marginLeft: '2px',
                verticalAlign: 'text-bottom',
                animation: 'blink 1s step-end infinite',
              }} />
            </div>

            {/* Summary */}
            <p style={{
              fontSize: '1.05rem', lineHeight: 1.75,
              color: 'var(--text-muted)', maxWidth: '520px',
              marginBottom: '40px',
              opacity: 0, animation: 'fadeUp 0.6s ease 0.4s forwards',
            }}>
              Computer Engineering graduate (CGPA&nbsp;8.45) from Pune. I build
              AI-integrated web apps with <strong style={{ color: 'var(--text-main)' }}>React JS</strong>,{' '}
              <strong style={{ color: 'var(--text-main)' }}>Python Flask</strong>, and{' '}
              <strong style={{ color: 'var(--text-main)' }}>MongoDB</strong>.
              Currently a QA Intern at Mplussoft, targeting a Software Developer role.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap',
              opacity: 0, animation: 'fadeUp 0.6s ease 0.5s forwards',
            }}>
              <a href="#projects" className="btn btn-primary">
                View Projects →
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div style={{
              display: 'flex', gap: '20px', marginTop: '40px', alignItems: 'center',
              opacity: 0, animation: 'fadeUp 0.6s ease 0.6s forwards',
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem',
                color: 'var(--text-faint)', letterSpacing: '0.2em' }}>
                FIND ME ON
              </span>
              <a href="https://github.com/Ankushfalke" target="_blank" rel="noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '0.85rem',
                  fontFamily: 'var(--mono)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--sky)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                GitHub
              </a>
              <a href="https://linkedin.com/in/ankushfalke" target="_blank" rel="noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '0.85rem',
                  fontFamily: 'var(--mono)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--sky)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                LinkedIn
              </a>
              <a href="mailto:ankushfalke999@gmail.com"
                style={{ color: 'var(--text-muted)', fontSize: '0.85rem',
                  fontFamily: 'var(--mono)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--sky)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                Email
              </a>
            </div>
          </div>

          {/* Right — avatar/visual */}
          <div style={{
            opacity: 0, animation: 'fadeUp 0.6s ease 0.3s forwards',
          }} className="hero-avatar-wrap">
            <div style={{
              width: 280, height: 280,
              borderRadius: '50%',
              border: '2px solid var(--border)',
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--bg-card)',
              boxShadow: '0 0 60px rgba(56,189,248,0.12)',
            }}>
              {/* Orbit ring */}
              <div style={{
                position: 'absolute', inset: -16,
                borderRadius: '50%',
                border: '1px dashed rgba(56,189,248,0.2)',
                animation: 'spin 20s linear infinite',
              }} />
              {/* Inner initials */}
              <img
              src="/ankush.JPG.png"
              alt="Ankush Falke"
              style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '50%',
              transform: 'scale(0.9)',
              }}
              />
              {/* Status dot */}
              <div style={{
                position: 'absolute', bottom: 24, right: 24,
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 20, padding: '5px 10px',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--green)',
                  boxShadow: '0 0 8px var(--green)',
                  display: 'inline-block',
                  animation: 'blink 2s ease infinite',
                }} />
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem',
                  color: 'var(--green)',
                }}>
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          marginTop: '80px', display: 'flex', alignItems: 'center', gap: '12px',
          opacity: 0, animation: 'fadeUp 0.6s ease 0.8s forwards',
        }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--sky), transparent)' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem',
            color: 'var(--text-faint)', letterSpacing: '0.15em' }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          
        }
      `}</style>
    </section>
  )
}
