# Recruiter-Ready Premium Portfolio Website

A modern, high-fidelity personal portfolio website designed for **Tulasi Priya G** showing technical competencies in Full Stack Web Engineering (MERN) and Java development. Built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, with dynamic client integration of the **GitHub REST API**.

---

## 🌟 Key Features

- **Dynamic GitHub Metrics Integration:** Fetches profile info, follower/following metrics, language splits, and separates repositories into "Top Repositories" (by popularity) and "Latest Repositories" (by update time) in real-time.
- **Client Caching Layer:** Includes a 1-hour `localStorage` caching envelope for GitHub REST requests to bypass API rate-limiting blocks.
- **Interactive Typing Roles:** Sleek animation cycling through roles with customized pauses and speed parameters.
- **Glassmorphism Backdrop & Particle Engine:** High-performance, low-overhead HTML5 Canvas-based floating particles backed by pulsing radial ambient glows.
- **Contact Form Validation:** Glassmorphic inquiry panel supporting field validation and simulated success statuses.
- **Fully Responsive & SEO-Ready:** Structured with semantic elements, page titles, and meta headers to rank organically.

---

## 📁 Folder Structure

```text
src/
├── assets/         # Project images, CV documents, or static media
├── components/     # High-fidelity visual widgets
│   ├── BackgroundGlows.jsx    # Pulsing blurred gradient overlays
│   ├── CanvasParticles.jsx    # Performance-oriented HTML5 canvas particle backdrop
│   ├── CertificateCard.jsx    # Glassmorphic credential showcase
│   ├── ContactForm.jsx        # Standardized glass contact portal with feedback state
│   ├── GithubDashboard.jsx    # API statistics and repository tabs
│   ├── LinkedInCard.jsx       # Custom premium LinkedIn identity card widget
│   ├── Navbar.jsx             # Sticky sticky navigation bar with active tracking
│   ├── ProjectCard.jsx        # Grid cards supporting highlights, tech, and placeholder modes
│   ├── SkillCard.jsx          # Color-coded tech stack node cards
│   ├── ScrollToTop.jsx        # Framer Motion scroll indicator
│   └── Typewriter.jsx         # Custom role typing simulation
├── hooks/          # React hooks
│   └── useGitHubData.js       # Dynamic API fetch coordinator
├── pages/          # Main sections and page wrapper
│   └── Home.jsx               # Modular section coordinator
├── utils/          # Standard JS utilities
│   └── github.js              # Fetch nodes, caching, and statistic aggregate scripts
├── App.jsx         # Entry orchestrator with page load animations
└── main.jsx        # Standard render point
```

---

## 🚀 1. Run the Project Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Steps
1. **Clone the Repository:**
   ```bash
   git clone <your-repository-url>
   cd tulasi_portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Launch the Development Server:**
   ```bash
   npm run dev
   ```
   *The console will print the local host URI (usually `http://localhost:5173`). Open this link in your browser.*

4. **Compile Production Bundle:**
   ```bash
   npm run build
   ```

---

## ☁️ 2. Deploy to Vercel

Vercel is the recommended host for React Vite applications:
1. Create a free account on [Vercel](https://vercel.com).
2. Install the Vercel CLI or link your GitHub account.
3. Import your project repository directly from GitHub.
4. **Build settings** are automatically configured for Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Vercel will output a live URL (e.g. `tulasi-portfolio.vercel.app`).
6. Custom rewrites are configured in our `vercel.json` file.

---

## ⚡ 3. Deploy to Netlify

1. Create a free account on [Netlify](https://netlify.com).
2. Connect your GitHub account and click **Import an existing project**.
3. Select your portfolio repository.
4. Configure Build settings:
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy Site**. Netlify will build and host the app.
6. Single page routing configurations are pre-defined in our `netlify.toml` file.

---

## 🐙 4. Deploy to GitHub Pages

1. **Install GitHub Pages Deploy Helper:**
   ```bash
   npm install -D gh-pages
   ```

2. **Configure `vite.config.js`:**
   Add a `base` property with your repository name.
   ```javascript
   export default defineConfig({
     base: '/<your-repository-name>/',
     plugins: [react()],
   })
   ```

3. **Configure Deploy Scripts in `package.json`:**
   Add these keys under `"scripts"`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. **Deploy the App:**
   ```bash
   npm run deploy
   ```
5. On GitHub, navigate to **Settings > Pages** in your repository and set the branch to `gh-pages` and save.

---

## 📝 5. Update GitHub Profile README & Pins

1. Copy the complete markdown code from **[README_profile.md](./README_profile.md)**.
2. In your GitHub account, create a new public repository named exactly like your username: `tulasip682-wq`.
3. Check the option **"Initialize this repository with a README"**.
4. Edit the `README.md` file in that repository and paste the copied contents.
5. Click **Commit changes**. It will render on your public profile!
6. Click **Edit Profile** on GitHub and add your deployed portfolio URL to the website field.
7. Go to your GitHub profile frontpage, click **Customize your pins**, select your portfolio repository, and click **Save pins** to pin it at the top of your profile.
