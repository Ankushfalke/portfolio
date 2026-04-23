const express  = require('express')
const router   = express.Router()
const Message  = require('../models/Message')
const nodemailer = require('nodemailer')

// ─── Helper: send email notification (optional) ───────────────────────────────
async function sendEmailNotification(msg) {
  // Skip if env vars not configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,  // Gmail App Password
    },
  })

  await transporter.sendMail({
    from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📬 New message from ${msg.name} — Portfolio`,
    html: `
      <div style="font-family: monospace; background: #060b14; color: #b8cce0; padding: 24px; border-radius: 8px;">
        <h2 style="color: #38bdf8; margin-bottom: 16px;">New Portfolio Message</h2>
        <p><strong style="color:#f472b6;">Name:</strong>    ${msg.name}</p>
        <p><strong style="color:#f472b6;">Email:</strong>   <a href="mailto:${msg.email}" style="color:#38bdf8;">${msg.email}</a></p>
        <p><strong style="color:#f472b6;">Message:</strong></p>
        <blockquote style="border-left: 3px solid #38bdf8; padding-left: 16px; margin: 12px 0; color:#e2e8f0;">
          ${msg.message.replace(/\n/g, '<br>')}
        </blockquote>
        <p style="font-size:0.75rem; color:#2a4060;">Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </div>
    `,
  })
}

// ─── POST /api/contact ─────────────────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' })
    }

    if (message.length > 2000) {
      return res.status(400).json({ success: false, error: 'Message too long (max 2000 chars).' })
    }

    // Save to MongoDB
    const newMsg = await Message.create({
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      message: message.trim(),
      ip:      req.ip || '',
    })

    // Send email notification (non-blocking — don't fail request if email fails)
    sendEmailNotification(newMsg).catch(err =>
      console.warn('[Mailer] Email notification skipped:', err.message)
    )

    return res.status(201).json({
      success: true,
      message: 'Message received! Ankush will reply soon.',
      id: newMsg._id,
    })

  } catch (err) {
    console.error('[Contact Route]', err)

    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({ success: false, error: errors.join(', ') })
    }

    return res.status(500).json({ success: false, error: 'Server error. Please try again later.' })
  }
})

// ─── GET /api/contact  (admin view all messages) ──────────────────────────────
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).lean()
    res.json({ success: true, count: messages.length, data: messages })
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' })
  }
})

module.exports = router
