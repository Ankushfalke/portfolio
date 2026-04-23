# 🚀 Ankush Falke Portfolio — Complete Setup & Deployment Guide

---

## 📁 Folder Structure

```
ankush-portfolio/
├── frontend/
│   ├── public/
│   │   └── AnkushFalke_Resume.pdf     ← PUT YOUR RESUME PDF HERE
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── vercel.json
│   ├── .env                           ← Create from .env.example
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── Message.js
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── .env.example                   ← Copy to .env and fill values
│   └── package.json
│
├── .gitignore
└── SETUP.md
```

---

## 🛠️ Step 1 — Local Setup

### 1a. Install frontend dependencies
```bash
cd ankush-portfolio/frontend
npm install
```

### 1b. Install backend dependencies
```bash
cd ../backend
npm install
```

### 1c. Create backend .env file
```bash
cp .env.example .env
# Then open .env and fill in your MongoDB URI
```

---

## 🌐 Step 2 — MongoDB Atlas (Free Cloud DB)

1. Go to https://www.mongodb.com/atlas
2. Create a **free account** → Create a **Free M0 Cluster**
3. In **Database Access** → Add a new user (username + password)
4. In **Network Access** → Click "Add IP Address" → Allow access from anywhere `0.0.0.0/0`
5. Click **Connect** → **Drivers** → Copy the connection string:
   ```
   mongodb+srv://yourUser:yourPassword@cluster0.xxxxx.mongodb.net/
   ```
6. Paste into your `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://yourUser:yourPassword@cluster0.xxxxx.mongodb.net/portfolio
   ```

---

## ▶️ Step 3 — Run Locally

### Start backend (Terminal 1):
```bash
cd backend
npm run dev
# → Server running on http://localhost:5000
# → MongoDB connected
```

### Start frontend (Terminal 2):
```bash
cd frontend
npm run dev
# → http://localhost:5173
```

Open http://localhost:5173 — your portfolio is running! 🎉

---

## 📧 Step 4 — Enable Email Notifications (Optional)

So you get an email every time someone submits the contact form:

1. Go to your Google Account → Security → **2-Step Verification** → enable it
2. Then go to: https://myaccount.google.com/apppasswords
3. Generate an App Password for "Mail"
4. Add to `backend/.env`:
   ```
   EMAIL_USER=ankushfalke999@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx    ← 16-character app password
   ```

---

## 🌍 Step 5 — Deploy to Production

### 5a. Push code to GitHub
```bash
# From the root ankush-portfolio/ folder
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Ankushfalke/portfolio.git
git push -u origin main
```

---

### 5b. Deploy Backend → Render (Free)

1. Go to https://render.com → Sign up with GitHub
2. Click **New → Web Service**
3. Connect your GitHub repo → Select the **backend** folder as root directory
4. Settings:
   - **Name**: `ankush-portfolio-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Region**: Singapore (closest to India)
5. Under **Environment Variables**, add:
   ```
   MONGODB_URI = your_atlas_uri
   PORT        = 5000
   FRONTEND_URL= https://ankush-falke.vercel.app   ← (your Vercel URL, add after step 5c)
   EMAIL_USER  = ankushfalke999@gmail.com           ← optional
   EMAIL_PASS  = your_app_password                  ← optional
   ```
6. Click **Deploy** → Wait ~3 min
7. Copy your backend URL: `https://ankush-portfolio-api.onrender.com`

---

### 5c. Deploy Frontend → Vercel (Free)

1. Go to https://vercel.com → Sign up with GitHub
2. Click **Add New Project** → Import your GitHub repo
3. Set **Root Directory** to `frontend`
4. Under **Environment Variables**, add:
   ```
   VITE_BACKEND_URL = https://ankush-portfolio-api.onrender.com
   ```
5. Click **Deploy** → Wait ~2 min
6. Your live URL: `https://ankush-falke.vercel.app` ✅

---

### 5d. Update Backend CORS (after both are deployed)

Go back to Render → your backend service → Environment Variables:
```
FRONTEND_URL = https://ankush-falke.vercel.app
```
Then click **Save Changes** → it redeploys automatically.

---

## 📄 Step 6 — Add Your Resume

Copy your resume PDF to:
```
frontend/public/AnkushFalke_Resume.pdf
```

The "Download Resume" button will automatically link to it.

---

## ✅ Post-Deployment Checklist

- [ ] Portfolio loads at Vercel URL
- [ ] All 6 sections visible: Hero, About, Skills, Projects, Experience, Contact
- [ ] Typewriter effect working in Hero
- [ ] Contact form submits successfully (check MongoDB Atlas → Browse Collections → messages)
- [ ] Email notification received (if configured)
- [ ] "Download Resume" button downloads PDF
- [ ] GitHub/LinkedIn links open correctly
- [ ] Mobile responsive (test on phone)
- [ ] Health check: `https://ankush-portfolio-api.onrender.com/health`

---

## 🔧 Common Issues & Fixes

| Problem | Fix |
|---------|-----|
| Contact form fails | Check backend is running, CORS origin matches frontend URL |
| MongoDB error | Check IP whitelist in Atlas (allow 0.0.0.0/0), verify URI |
| Vercel build fails | Ensure `VITE_BACKEND_URL` env var is set in Vercel dashboard |
| Render spins down | Free Render apps sleep after inactivity — first request takes ~30s |
| Resume 404 | Make sure PDF is in `frontend/public/` folder |

---

## 🌐 Your Live Links (after deployment)

- **Portfolio**: https://ankush-falke.vercel.app
- **API Health**: https://ankush-portfolio-api.onrender.com/health
- **Messages DB**: MongoDB Atlas → Collections → messages

---

## 💡 Customization Tips

- **Add profile photo**: Replace the "AF" avatar in `Hero.jsx` with an `<img>` tag
- **Add new project**: Add entry to the `PROJECTS` array in `Projects.jsx`
- **Change colors**: Edit CSS variables in `index.css` (`:root` block)
- **Add blog/articles**: Create a new `Blog.jsx` section and link from Navbar
- **Analytics**: Add Vercel Analytics (free) for visitor tracking
