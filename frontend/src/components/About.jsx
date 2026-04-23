import React from 'react'

const STATS = [
  { value: '8.45',  label: 'CGPA',             color: 'var(--sky)'   },
  { value: '5+',    label: 'Projects Built',    color: 'var(--pink)'  },
  { value: '50+',   label: 'Test Cases Written',color: 'var(--amber)' },
  { value: '6+',    label: 'Certifications',    color: 'var(--green)' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="about-grid">

          {/* Left: Text */}
          <div>
            <p className="section-label">01 / About Me</p>
            <h2 className="section-title">
              Building things that<br />
              <span style={{ color: 'var(--sky)' }}>actually work.</span>
            </h2>
            <div className="section-divider" />

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px', fontSize: '1.02rem' }}>
              I'm a Computer Engineering graduate from{' '}
              <strong style={{ color: 'var(--text-bright)' }}>JSPM's BSCOER, Pune</strong> (SPPU)
              with a passion for building full-stack applications that solve real problems.
              My journey spans frontend development with React, backend with Python Flask,
              and quality assurance — giving me a unique end-to-end perspective.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px', fontSize: '1.02rem' }}>
              Currently working as a <strong style={{ color: 'var(--text-bright)' }}>Quality Analyst Intern</strong> at
              Mplussoft Pvt. Ltd., Pune, where I design test strategies,
              document structured test cases, and catch critical bugs before they reach production.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              Outside of tech, I explore painting and paper crafts — and I have a long-term goal
              of engineering at a top company like{' '}
              <strong style={{ color: 'var(--text-bright)' }}>Microsoft, Google, or Amazon</strong>.
            </p>

            <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">Let's Talk →</a>
              <a href="/AnkushFalke_Resume.pdf" download className="btn btn-outline">↓ Download Resume</a>
            </div>
          </div>

          {/* Right: Stats + terminal card */}
          <div>
            {/* Terminal-style card */}
            <div className="card" style={{ marginBottom: '24px', overflow: 'hidden' }}>
              {/* Terminal top bar */}
              <div style={{
                background: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border)',
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
                <span style={{
                  marginLeft: '8px', fontFamily: 'var(--mono)',
                  fontSize: '0.72rem', color: 'var(--text-faint)',
                }}>
                  ankush@portfolio ~ about.json
                </span>
              </div>
              {/* Terminal body */}
              <div style={{ padding: '20px', fontFamily: 'var(--mono)', fontSize: '0.82rem', lineHeight: 2 }}>
                <div><span style={{ color: 'var(--text-faint)' }}>{'{'}</span></div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--pink)' }}>"name"</span>
                  <span style={{ color: 'var(--text-faint)' }}>: </span>
                  <span style={{ color: 'var(--amber)' }}>"Ankush Falke"</span><span style={{ color: 'var(--text-faint)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--pink)' }}>"location"</span>
                  <span style={{ color: 'var(--text-faint)' }}>: </span>
                  <span style={{ color: 'var(--amber)' }}>"Pune, Maharashtra 🇮🇳"</span><span style={{ color: 'var(--text-faint)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--pink)' }}>"role"</span>
                  <span style={{ color: 'var(--text-faint)' }}>: </span>
                  <span style={{ color: 'var(--amber)' }}>"QA Intern @ Mplussoft"</span><span style={{ color: 'var(--text-faint)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--pink)' }}>"education"</span>
                  <span style={{ color: 'var(--text-faint)' }}>: </span>
                  <span style={{ color: 'var(--amber)' }}>"B.E. CE — JSPM BSCOER"</span><span style={{ color: 'var(--text-faint)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--pink)' }}>"seeking"</span>
                  <span style={{ color: 'var(--text-faint)' }}>: </span>
                  <span style={{ color: 'var(--sky)' }}>"SDE / Frontend / Full Stack"</span><span style={{ color: 'var(--text-faint)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--pink)' }}>"openToWork"</span>
                  <span style={{ color: 'var(--text-faint)' }}>: </span>
                  <span style={{ color: 'var(--green)' }}>true</span>
                </div>
                <div><span style={{ color: 'var(--text-faint)' }}>{'}'}</span></div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
            }}>
              {STATS.map(s => (
                <div key={s.label} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: '2.4rem',
                    fontWeight: 700, color: s.color, lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.68rem',
                    color: 'var(--text-muted)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginTop: '6px',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
