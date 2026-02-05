# GitHub Setup & Deployment Guide

## Step-by-Step: Create Repository & Push Code

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Log in to your account (create one if needed)
3. Click **"New"** button (top left, or go to https://github.com/new)
4. Fill in repository details:
   - **Repository name:** `klinik-adelia-alam-sari`
   - **Description:** Professional healthcare clinic website with multi-language support
   - **Visibility:** Public (or Private if preferred)
   - **Initialize:** Leave unchecked (we'll push existing code)
5. Click **"Create repository"**

### Step 2: Setup Git Locally

Open PowerShell/Terminal in your project directory:

```powershell
# Navigate to project directory
cd "c:\Users\60172\Documents\Raotech\Freelance\KlinikAdeliaAlamSari"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Organize project structure and add configuration files"

# Configure git (if not done before)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Connect Local Repository to GitHub

```powershell
# Replace YOUR_USERNAME with your actual GitHub username
# This adds the remote repository
git remote add origin https://github.com/YOUR_USERNAME/klinik-adelia-alam-sari.git

# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top right)
3. Scroll to **"Pages"** section (left sidebar)
4. Under **"Source"**:
   - Branch: Select `main`
   - Folder: Select `/public`
5. Click **"Save"**

Your site will be live at:
```
https://YOUR_USERNAME.github.io/klinik-adelia-alam-sari/
```

### Step 5: Update package.json Repository URL

Edit `package.json` and update:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/YOUR_USERNAME/klinik-adelia-alam-sari.git"
}
```

Then push this change:

```powershell
git add package.json
git commit -m "Update repository URL in package.json"
git push origin main
```

## Troubleshooting

### Issue: Authentication Failed
**Solution:** Use Personal Access Token instead of password:
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate new token with `repo` scope
3. Use token instead of password when prompted

### Issue: Git Not Installed
**Solution:** Install Git from [git-scm.com](https://git-scm.com)

### Issue: GitHub Pages Not Showing
**Solution:**
1. Wait 5 minutes after deployment
2. Clear browser cache
3. Check settings → Pages for errors
4. Verify `/public` folder has `index.html`

### Issue: 404 Error on GitHub Pages
**Solution:**
1. Check file paths use `../` for relative paths
2. Verify CSS/JS files exist in `/src` folder
3. Check `.gitignore` isn't excluding needed files

## Daily Workflow

After you've set everything up:

```powershell
# Make your changes to files

# Check what changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update: Add new feature description"

# Push to GitHub
git push origin main
```

## Useful Git Commands

```powershell
# Check status
git status

# View commit history
git log

# See changes before committing
git diff

# Revert last commit (if needed)
git reset --soft HEAD~1

# Create new branch for feature
git checkout -b feature/feature-name

# Switch branches
git checkout main

# Delete branch
git branch -d branch-name
```

## Deploy Alternative Services

### Netlify
1. Go to [netlify.com](https://www.netlify.com)
2. Click "New site from Git"
3. Connect GitHub account
4. Select repository
5. Set build settings (leave default)
6. Deploy

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Paste GitHub URL
4. Click "Import"
5. Deploy automatically

### Traditional Hosting
Use FTP to upload files from `/public` folder to your hosting provider.

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code locally
3. ✅ Enable GitHub Pages
4. ✅ Test live website
5. ✅ Share repository URL
6. 🔄 Continue development and push updates

## Support

- GitHub Help: https://docs.github.com
- GitHub Pages Docs: https://pages.github.com
- Git Documentation: https://git-scm.com/doc

---

**Your repository will be available at:**
```
https://github.com/YOUR_USERNAME/klinik-adelia-alam-sari
https://YOUR_USERNAME.github.io/klinik-adelia-alam-sari/
```
