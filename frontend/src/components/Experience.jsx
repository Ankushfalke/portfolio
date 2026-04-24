import React from 'react'

const EXPERIENCE = [
  {
    role: 'Quality Analyst Intern',
    company: 'Mplussoft Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    period: 'April 2025 – Present',
    color: 'var(--sky)',
    current: true,
    points: [
      'Performed functional, regression & UI testing across web modules for zealwise.com',
      'Documented 50+ structured test cases covering positive, negative & edge case scenarios',
      'Identified and reported critical UI/UX bugs using a structured bug tracking sheet (module, path, description, priority)',
      'Collaborated with the development team to ensure timely bug resolution and release quality',
    ],
    tags: ['Manual Testing', 'Regression', 'Bug Tracking', 'Test Case Design'],
  },
]

const EDUCATION = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'JSPM\'s BSIOTR — Savitribai Phule Pune University',
    period: '2021 – 2025',
    score: 'CGPA: 8.45',
    color: 'var(--pink)',
  },
  {
    degree: 'HSC — Science',
    institution: 'Mahatma Jyotiba Phule Jr. College, Buldhana',
    period: '2019 – 2021',
    score: '85.50%',
    color: 'var(--amber)',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'rgba(11,18,32,0.5)' }}>
      <div className="container">
        <p className="section-label">04 / Experience</p>
        <h2 className="section-title">
          Where I've worked<br />& studied
        </h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
        }} className="exp-grid">

          {/* Work Experience */}
          <div>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '0.7rem',
              color: 'var(--text-faint)', letterSpacing: '0.2em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Work Experience
            </p>

            {EXPERIENCE.map((exp, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '24px' }}>
                {/* Timeline line */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: 2,
                  background: `linear-gradient(to bottom, ${exp.color}, transparent)`,
                }} />
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -5, top: 6,
                  width: 12, height: 12, borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 10px ${exp.color}`,
                }} />

                <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--display)', fontSize: '1.15rem',
                        letterSpacing: '-0.01em', color: 'var(--text-bright)',
                      }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: exp.color, fontFamily: 'var(--mono)', fontSize: '0.8rem', marginTop: '2px' }}>
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: '0.65rem',
                        background: 'rgba(52,211,153,0.1)', color: 'var(--green)',
                        border: '1px solid rgba(52,211,153,0.3)',
                        padding: '3px 10px', borderRadius: '9999px',
                      }}>
                        ● Current
                      </span>
                    )}
                  </div>

                  <p style={{
                    fontFamily: 'var(--mono)', fontSize: '0.72rem',
                    color: 'var(--text-faint)', marginBottom: '16px',
                  }}>
                    {exp.period} · {exp.location}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: '4px', fontSize: '0.6rem' }}>◆</span>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.tags.map(t => (
                      <span key={t} className="tag" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '0.7rem',
              color: 'var(--text-faint)', letterSpacing: '0.2em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Education
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {EDUCATION.map((edu, i) => (
                <div key={i} className="card" style={{ padding: '24px' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    marginBottom: '8px',
                  }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: '50%',
                      background: edu.color,
                      boxShadow: `0 0 8px ${edu.color}`,
                      flexShrink: 0,
                    }} />
                    <h3 style={{
                      fontFamily: 'var(--display)', fontSize: '1.05rem',
                      color: 'var(--text-bright)', letterSpacing: '-0.01em',
                    }}>
                      {edu.degree}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '0.88rem', color: 'var(--text-muted)',
                    marginBottom: '8px', lineHeight: 1.5,
                  }}>
                    {edu.institution}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-faint)' }}>
                      {edu.period}
                    </span>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '0.78rem',
                      color: edu.color, fontWeight: 700,
                    }}>
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement note */}
            <div style={{
              marginTop: '24px',
              background: 'rgba(56,189,248,0.05)',
              border: '1px solid rgba(56,189,248,0.15)',
              borderRadius: 'var(--radius)',
              padding: '20px',
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '0.7rem',
                color: 'var(--sky)', letterSpacing: '0.1em',
                marginBottom: '10px',
              }}>
                ★ Achievement
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Shortlisted for <strong style={{ color: 'var(--text-main)' }}>Indian Navy SSB</strong> (SSC NAOO-M 01/2027)
                — Naval Armament Inspection Organisation Officer entry. Normalised percentage: 76.44.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
