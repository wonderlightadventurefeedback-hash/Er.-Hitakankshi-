# Pabitra Lenka - Portfolio Clone

A complete, high-fidelity clone of [pabitralenka.in](https://pabitralenka.in/) configured for instant deployment on [Vercel](https://vercel.com/).

## 📁 Project Structure

```text
├── index.html                   # Homepage
├── favicon.ico, icon-*.png      # Icons & manifest assets
├── og.jpg                       # OpenGraph preview
├── resume.pdf                   # Resume document
├── hero_color.webp              # Interactive portrait hover layer
├── robots.txt & sitemap.xml     # SEO configuration
├── vercel.json                  # Vercel routing & caching configuration
├── package.json                 # Project configuration & Vercel CLI dependency
├── .vercelignore                # Files ignored by Vercel deployments
├── .gitignore                   # Files ignored by Git
│
├── fonts/                       # Fonts (onest-latin, onest-latin-ext)
├── vendor/                      # External libraries (Lenis smooth scroll)
├── components/                  # Shared interactive components (Matter.js, LogoLoop, etc.)
├── web-developer/               # Web Developer route & media assets
├── ai-ml-engineer/              # AI/ML Engineer route & video demos
├── python-developer/            # Python Developer route & video demos
├── data-scientist/              # Data Scientist route & case study graphics
└── photographer/                # Photography route, metadata & image gallery
```

## 🚀 Deployment to Vercel

### Method 1: Deploy using Vercel CLI (Recommended)

1. **Login to Vercel (first time only):**
   ```bash
   npx vercel login
   ```

2. **Deploy to Preview:**
   ```bash
   npm run deploy
   ```

3. **Deploy to Production:**
   ```bash
   npm run deploy:prod
   ```

---

### Method 2: Deploy via GitHub / GitLab

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Pabitra Lenka Portfolio"
   ```
2. Push to your GitHub repository.
3. In the [Vercel Dashboard](https://vercel.com/new), click **"Add New Project"** and import your GitHub repository.
4. Leave all settings default (Framework: **Other** / Static).
5. Click **Deploy**.

---

## 💻 Local Development

Run a local development server:
```bash
npm run dev
# or
npm run serve
# or
python -m http.server 8080
```
