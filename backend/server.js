const express    = require('express')
const mongoose   = require('mongoose')
const cors       = require('cors')
const dotenv     = require('dotenv')
const rateLimit  = require('express-rate-limit')

dotenv.config()

const app  = express()
const PORT = process.env.PORT || 5000

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:5173',
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}))

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// ─── Rate limiting (prevent spam on contact form) ────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,                     // max 5 requests per window per IP
  message: {
    success: false,
    error: 'Too many messages sent. Please wait 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// ─── Routes ──────────────────────────────────────────────────────────────────
const contactRoute = require('./routes/contact')
app.use('/api/contact', contactLimiter, contactRoute)

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    uptime: process.uptime().toFixed(2) + 's',
  })
})

// Root
app.get('/', (req, res) => {
  res.json({ message: 'Ankush Falke Portfolio API is running.' })
})

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found.' })
})

// ─── Connect to MongoDB then start server ────────────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: 'portfolio',
  })
  .then(() => {
    console.log('✅  MongoDB connected')
    app.listen(PORT, () => {
      console.log(`🚀  Server running on http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.error('❌  MongoDB connection failed:', err.message)
    process.exit(1)
  })
