import React, { useState } from 'react'

const PROJECTS = [
  {
    id: 1,
    title: 'SecureGrid-AI',
    tagline: 'Smart Grid Security System',
    description:
      'AI-powered cyber intrusion and energy fraud detection system for smart grids. Features real-time alerting dashboard with ML model integration via Python Flask and intelligent anomaly detection using Gemini AI API.',
    tech: ['React JS', 'Python Flask', 'Gemini AI', 'Pandas', 'MongoDB'],
    highlights: [
      'Real-time alerting dashboard',
      'ML-based anomaly detection',
      'Gemini AI API integration',
      'Operator-facing insights panel',
    ],
    github: 'https://github.com/Ankushfalke',
    demo: null,
    color: 'var(--sky)',
    badge: 'AI / Security',
    featured: true,
  },
  {
    id: 2,
    title: 'CampusTrack',
    tagline: 'AI-Driven Student Monitoring System',
    description:
      'Real-time attendance & truancy detection system with 5 functional modules: admission, attendance, canteen entry, monitoring & reporting. AI-based logic prevents proxy attendance. Accepted as IEEE conference paper.',
    tech: ['React JS', 'MongoDB', 'Python Flask', 'AI/ML'],
    highlights: [
      '5 integrated modules',
      'Proxy attendance prevention',
      'IEEE conference paper — April 2026',
      'Real-time reporting',
    ],
    github: 'https://github.com/Ankushfalke',
    demo: null,
    color: 'var(--pink)',
    badge: 'IEEE Paper',
    featured: true,
  },
  {
    id: 3,
    title: 'Maharashtra Tourism Portal',
    tagline: 'Live Deployed Tourism Website',
    description:
      'A fully deployed tourism website showcasing Maharashtra\'s top cities and destinations. Responsive UI with city-wise browsing, cultural highlights, and travel information.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
    highlights: [
      'Fully live deployed',
      'City-wise destination cards',
      'Responsive design',
    ],
    github: 'https://github.com/Ankushfalke',
    demo: 'https://itscroknight.github.io/ecities',
    color: 'var(--amber)',
    badge: 'Live',
    featured: false,
  },
  {
    id: 4,
    title: 'AR in Education',
    tagline: 'Android AR Learning App',
    description:
      'Augmented Reality-based educational app built with Kotlin and ARCore. Visualizes concepts in biology, zoology, space, and computer engineering through interactive 3D learning experiences.',
    tech: ['Kotlin', 'ARCore', 'Android Studio'],
    highlights: [
      'Multi-subject 3D AR content',
      'Interactive learning mode',
      'Replaces static diagrams',
    ],
    github: 'https://github.com/Ankushfalke',
    demo: null,
    color: 'var(--green)',
    badge: 'Android',
    featured: false,
  },
  {
    id: 5,
    title: 'Quiz Application',
    tagline: 'Interactive Web Quiz Platform',
    description:
      'A responsive quiz platform with multiple categories, score tracking, and real-time feedback. Clean UI with progress indicators and results summary.',
    tech: ['React JS', 'JavaScript', 'CSS3'],
    highlights: [
      'Multiple quiz categories',
      'Score tracking',
      'Real-time feedback',
    ],
    github: 'https://github.com/Ankushfalke',
    demo: null,
    color: 'var(--sky)',
    badge: 'Web App',
    featured: false,
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">03 / Projects</p>
        <h2 className="section-title">
          Things I've built
        </h2>
        <div className="section-divider" />

        {/* Featured projects */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '0.7rem',
            color: 'var(--text-faint)', letterSpacing: '0.2em',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            Featured
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {PROJECTS.filter(p => p.featured).map(p => (
              <div key={p.id} className="card" style={{
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: '1fr 340px',
                gap: '40px',
                alignItems: 'start',
                cursor: 'pointer',
              }} className="card featured-card">
                {/* Left */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '0.68rem',
                      padding: '3px 10px', borderRadius: '4px',
                      background: `rgba(56,189,248,0.08)`,
                      color: p.color,
                      border: `1px solid ${p.color}40`,
                    }}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--display)', fontSize: '1.7rem',
                    letterSpacing: '-0.02em', color: 'var(--text-bright)',
                    marginBottom: '4px',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--mono)', fontSize: '0.78rem',
                    color: p.color, marginBottom: '16px',
                  }}>
                    {p.tagline}
                  </p>
                  <p style={{
                    color: 'var(--text-muted)', fontSize: '0.95rem',
                    lineHeight: 1.75, marginBottom: '20px',
                  }}>
                    {p.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {p.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="btn btn-outline"
                      style={{ padding: '8px 18px', fontSize: '0.78rem' }}>
                      ↗ GitHub
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '8px 18px', fontSize: '0.78rem' }}>
                        ↗ Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: highlights */}
                <div style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '24px',
                }}>
                  <p style={{
                    fontFamily: 'var(--mono)', fontSize: '0.68rem',
                    color: 'var(--text-faint)', letterSpacing: '0.15em',
                    textTransform: 'uppercase', marginBottom: '16px',
                  }}>
                    Key Highlights
                  </p>
                  {p.highlights.map(h => (
                    <div key={h} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      marginBottom: '12px',
                    }}>
                      <span style={{ color: p.color, flexShrink: 0, marginTop: '2px' }}>▸</span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other projects */}
        <div>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '0.7rem',
            color: 'var(--text-faint)', letterSpacing: '0.2em',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            More Projects
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {PROJECTS.filter(p => !p.featured).map(p => (
              <div key={p.id} className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '0.65rem',
                    color: p.color,
                    border: `1px solid ${p.color}40`,
                    padding: '2px 8px', borderRadius: '4px',
                    background: `${p.color}10`,
                  }}>
                    {p.badge}
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-faint)' }}>
                      GitHub ↗
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer"
                        style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--sky)' }}>
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
                <h3 style={{
                  fontFamily: 'var(--display)', fontSize: '1.2rem',
                  letterSpacing: '-0.01em', color: 'var(--text-bright)',
                  marginBottom: '8px',
                }}>
                  {p.title}
                </h3>
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.875rem',
                  lineHeight: 1.7, marginBottom: '16px',
                }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.tech.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .featured-card {
          grid-template-columns: 1fr 340px;
        }
        @media (max-width: 900px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
