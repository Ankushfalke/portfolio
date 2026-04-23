import React, { useState } from 'react'
import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

const INPUT_STYLE = {
  width: '100%',
  background: 'var(--bg-surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  padding: '12px 16px',
  color: 'var(--text-bright)',
  fontFamily: 'var(--sans)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s',
}

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState(null)   // 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('empty')
      return
    }
    setStatus('sending')
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  const focusStyle = field => focused === field
    ? { ...INPUT_STYLE, borderColor: 'var(--sky)', boxShadow: 'var(--glow-sky)' }
    : INPUT_STYLE

  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>05 / Contact</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let's build something<br />
            <span style={{ color: 'var(--sky)' }}>together.</span>
          </h2>
          <div className="section-divider" style={{ margin: '16px auto 0' }} />
          <p style={{
            color: 'var(--text-muted)', fontSize: '1rem',
            maxWidth: '480px', margin: '24px auto 0', lineHeight: 1.75,
          }}>
            I'm actively looking for Software Developer / Frontend Developer opportunities in Pune and remote.
            Drop me a message — I usually respond within 24 hours.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 480px',
          gap: '60px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Left — info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '✉', label: 'Email', value: 'ankushfalke999@gmail.com', href: 'mailto:ankushfalke999@gmail.com', color: 'var(--sky)' },
                { icon: '📱', label: 'Phone', value: '+91 9921676764', href: 'tel:9921676764', color: 'var(--pink)' },
                { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/ankushfalke', href: 'https://linkedin.com/in/ankushfalke', color: 'var(--amber)' },
                { icon: '⌥', label: 'GitHub', value: 'github.com/Ankushfalke', href: 'https://github.com/Ankushfalke', color: 'var(--green)' },
                { icon: '📍', label: 'Location', value: 'Pune, Maharashtra, India', href: null, color: 'var(--sky)' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  transition: 'border-color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = item.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: '0.65rem',
                      color: 'var(--text-faint)', letterSpacing: '0.1em',
                      textTransform: 'uppercase', marginBottom: '2px',
                    }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{
                        fontSize: '0.9rem', color: item.color,
                        fontFamily: 'var(--mono)',
                      }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontFamily: 'var(--mono)' }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div style={{
              marginTop: '24px',
              background: 'rgba(52,211,153,0.05)',
              border: '1px solid rgba(52,211,153,0.2)',
              borderRadius: 'var(--radius)',
              padding: '20px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span style={{
                width: 10, height: 10, borderRadius: '50%',
                background: 'var(--green)',
                boxShadow: '0 0 10px var(--green)',
                flexShrink: 0,
                display: 'inline-block',
                animation: 'blink 2s ease infinite',
              }} />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Available for <strong style={{ color: 'var(--green)' }}>full-time opportunities</strong> — Pune & Remote
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div className="card" style={{ padding: '32px' }}>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '0.72rem',
              color: 'var(--sky)', letterSpacing: '0.15em',
              marginBottom: '24px',
            }}>
              {'// Send a message'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{
                  fontFamily: 'var(--mono)', fontSize: '0.7rem',
                  color: 'var(--text-faint)', letterSpacing: '0.1em',
                  display: 'block', marginBottom: '6px',
                }}>
                  NAME
                </label>
                <input
                  type="text" name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  style={focusStyle('name')}
                />
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--mono)', fontSize: '0.7rem',
                  color: 'var(--text-faint)', letterSpacing: '0.1em',
                  display: 'block', marginBottom: '6px',
                }}>
                  EMAIL
                </label>
                <input
                  type="email" name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={focusStyle('email')}
                />
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--mono)', fontSize: '0.7rem',
                  color: 'var(--text-faint)', letterSpacing: '0.1em',
                  display: 'block', marginBottom: '6px',
                }}>
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  style={{ ...focusStyle('message'), resize: 'vertical' }}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div style={{
                  padding: '12px 16px', borderRadius: 'var(--radius)',
                  background: 'rgba(52,211,153,0.08)',
                  border: '1px solid rgba(52,211,153,0.3)',
                  color: 'var(--green)', fontFamily: 'var(--mono)', fontSize: '0.82rem',
                }}>
                  ✓ Message sent! I'll reply soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  padding: '12px 16px', borderRadius: 'var(--radius)',
                  background: 'rgba(244,114,182,0.08)',
                  border: '1px solid rgba(244,114,182,0.3)',
                  color: 'var(--pink)', fontFamily: 'var(--mono)', fontSize: '0.82rem',
                }}>
                  ✗ Something went wrong. Email me directly.
                </div>
              )}
              {status === 'empty' && (
                <div style={{
                  padding: '12px 16px', borderRadius: 'var(--radius)',
                  background: 'rgba(251,191,36,0.08)',
                  border: '1px solid rgba(251,191,36,0.3)',
                  color: 'var(--amber)', fontFamily: 'var(--mono)', fontSize: '0.82rem',
                }}>
                  ⚠ Please fill all fields.
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                {status === 'sending' ? '⟳ Sending...' : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-faint);
        }
      `}</style>
    </section>
  )
}
