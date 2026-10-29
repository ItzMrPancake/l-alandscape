# L&A Landscape LLC — Official Website

Official website for **L&A Landscape LLC** serving Eugene and Springfield, Oregon (`LCB #9925` · `CCB #241637`). Featuring an interactive project gallery with Before & After sliders, client testimonials (Linda K., Katelyn C., Dominick B.), a free estimate calculator & booking system, and local contact hub.

---

## 🚀 How to Deploy to GitHub Pages

This project is pre-configured for GitHub Pages deployment. You have two easy options:

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

A GitHub Actions workflow is already configured at `.github/workflows/deploy.yml`.

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for L&A Landscape website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

3. **That's it!** GitHub Actions will automatically build and deploy your site on every push. Your website will be live at:
   ```
   https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/
   ```

---

### Option 2: Deploy using the `gh-pages` CLI

If you prefer deploying directly from your terminal:

1. In `package.json`, the deploy scripts are already set up:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. Run:
   ```bash
   npm run deploy
   ```

3. In your GitHub repository settings under **Pages**, ensure the branch is set to `gh-pages` and folder to `/(root)`.

---

## 🌐 Setting up a Custom Domain (e.g. `landalandscapellc.com`)

Because `base: './'` is configured in `vite.config.ts`, your build works seamlessly on both GitHub Pages subpaths (`/<repo>/`) and root custom domains!

To connect `landalandscapellc.com`:
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Custom domain**, enter `landalandscapellc.com` (or `www.landalandscapellc.com`) and click **Save**.
3. In your domain registrar (GoDaddy, Namecheap, Google Domains / Squarespace), add DNS records pointing to GitHub:
   - **A Records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record**: `www` pointing to `<YOUR_USERNAME>.github.io`.
4. Check **Enforce HTTPS** in GitHub Pages settings.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4**
- **Lucide React** (icons)
- **TypeScript**
- **GitHub Actions** (CI/CD pipeline)
