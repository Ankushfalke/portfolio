import React from 'react'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: '⬡',
    color: 'var(--sky)',
    skills: ['React JS', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Tailwind CSS', 'Bootstrap 5'],
  },
  {
    category: 'Backend',
    icon: '⬡',
    color: 'var(--pink)',
    skills: ['Python Flask', 'Java', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: '⬡',
    color: 'var(--amber)',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Testing / QA',
    icon: '⬡',
    color: 'var(--green)',
    skills: ['Manual Testing', 'Test Case Design', 'Bug Reporting', 'Regression Testing', 'Selenium'],
  },
  {
    category: 'AI / Data',
    icon: '⬡',
    color: 'var(--pink)',
    skills: ['Gemini AI API', 'Pandas', 'NumPy', 'ML Integration'],
  },
  {
    category: 'Tools',
    icon: '⬡',
    color: 'var(--sky)',
    skills: ['Git', 'GitHub', 'VS Code', 'Power BI'],
  },
]

const CERTIFICATIONS = [
  { name: 'Salesforce Full Stack Dev',   issuer: 'Salesforce',   color: 'var(--sky)'   },
  { name: 'Quality Analysis & Selenium', issuer: 'Internshala',  color: 'var(--green)' },
  { name: 'Data Analytics with Power BI',issuer: 'Microsoft',    color: 'var(--amber)' },
  { name: 'Java Certification',          issuer: 'Unstop',       color: 'var(--pink)'  },
  { name: 'Web Development Training',    issuer: 'Internshala',  color: 'var(--sky)'   },
  { name: 'Python Workshop',             issuer: 'Workshop',     color: 'var(--amber)' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'rgba(11,18,32,0.5)' }}>
      <div className="container">
        <p className="section-label">02 / Skills & Stack</p>
        <h2 className="section-title">
          What I work with
        </h2>
        <div className="section-divider" />

        {/* Skill groups */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          {SKILL_GROUPS.map(group => (
            <div key={group.category} className="card" style={{ padding: '24px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '16px',
              }}>
                <span style={{ color: group.color, fontSize: '1.1rem' }}>{group.icon}</span>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '0.75rem',
                  color: group.color, letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {group.category}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map(skill => (
                  <span key={skill} className="tag" style={{
                    background: `rgba(${group.color === 'var(--pink)' ? '244,114,182' : group.color === 'var(--amber)' ? '251,191,36' : group.color === 'var(--green)' ? '52,211,153' : '56,189,248'},0.07)`,
                    color: group.color,
                    borderColor: `rgba(${group.color === 'var(--pink)' ? '244,114,182' : group.color === 'var(--amber)' ? '251,191,36' : group.color === 'var(--green)' ? '52,211,153' : '56,189,248'},0.2)`,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            color: 'var(--text-faint)', letterSpacing: '0.2em',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Certifications
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '12px',
          }}>
            {CERTIFICATIONS.map(cert => (
              <div key={cert.name} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '14px 18px',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = cert.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: cert.color,
                  flexShrink: 0,
                  boxShadow: `0 0 8px ${cert.color}`,
                }} />
                <div>
                  <div style={{
                    fontSize: '0.88rem', color: 'var(--text-main)',
                    fontWeight: 500, lineHeight: 1.3,
                  }}>
                    {cert.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '0.68rem',
                    color: 'var(--text-faint)', marginTop: '2px',
                  }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
