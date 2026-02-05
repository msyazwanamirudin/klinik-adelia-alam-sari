# Project Structure Guide

## Organization

```
klinik-adelia-alam-sari/
│
├── 📁 public/                 # Public-facing files
│   └── index.html            # Main webpage (entry point)
│
├── 📁 src/                    # Source files (development)
│   ├── 📁 css/
│   │   ├── GitHub.css        # Primary stylesheet
│   │   └── Gemini.css        # Alternative stylesheet
│   └── 📁 js/
│       ├── GitHub.js         # Main application logic
│       └── Gemini.js         # Alternative functionality
│
├── 📁 assets/                 # Media and static content
│   ├── 📁 images/            # Image files
│   │   ├── logo.png          # Clinic logo
│   │   └── bg.webp           # Background images
│   └── 📁 videos/            # Video content
│       ├── G1.mp4            # Educational video 1
│       ├── G2.mp4            # Educational video 2
│       ├── G3.mp4            # Educational video 3
│       └── G4.mp4            # Educational video 4
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml        # GitHub Actions CI/CD
│
├── 📄 package.json           # Project metadata and dependencies
├── 📄 README.md              # Project documentation
├── 📄 LICENSE                # MIT License
├── 📄 .gitignore             # Git ignore rules
└── 📄 STRUCTURE.md           # This file
```

## File Descriptions

### Core Files
- **public/index.html** - Main landing page, entry point for visitors
- **src/css/GitHub.css** - Primary stylesheet (1000+ lines)
- **src/js/GitHub.js** - Main application (language, theme, forms, animations)
- **package.json** - NPM configuration and metadata
- **README.md** - Project documentation and setup guide

### Media Files
- **assets/images/** - Logo, backgrounds, and static images
- **assets/videos/** - Educational and promotional videos

### Configuration
- **.gitignore** - Files to exclude from Git
- **.github/workflows/deploy.yml** - Automated deployment script
- **LICENSE** - MIT License terms

## Development Workflow

### File Sizes & Lines of Code
- GitHub.css: ~1000 lines (complete styling with dark mode)
- GitHub.js: ~400 lines (app functionality)
- GitHub.html: ~750 lines (markup with i18n data attributes)

### CSS Organization
1. Global reset and variables
2. Navigation styling
3. Hero section
4. Buttons and components
5. Sections (About, Services, Gallery, etc.)
6. Forms and modals
7. Responsive design queries

### JavaScript Organization
1. Language toggle functionality
2. Theme toggle (dark/light mode)
3. Modal management
4. Form handling
5. Smooth scrolling
6. Animation observers
7. Event listeners

## Asset Management

### Images
- All images stored in `assets/images/`
- Formats: PNG, WebP
- Recommended: Use WebP for better compression

### Videos
- All videos stored in `assets/videos/`
- Format: MP4
- Used in gallery section and testimonials

## Build & Deployment

### Local Development
```bash
npm install
npm start
# Opens at http://localhost:8000
```

### GitHub Pages Deployment
- Automatically deploys from `public/` folder
- Triggered on push to `main` branch
- Configured in `.github/workflows/deploy.yml`

## Updating Content

### Logo & Images
1. Replace files in `assets/images/`
2. Update paths in HTML/CSS if needed
3. Commit and push changes

### Videos
1. Add new videos to `assets/videos/`
2. Create gallery items in HTML
3. Update paths in gallery section

### Styles
- Edit `src/css/GitHub.css`
- Dark mode classes use `.dark-mode` selector
- Update color variables in `:root` section

### Functionality
- Edit `src/js/GitHub.js`
- Add event listeners as needed
- Test in browser console

## Git Workflow

```bash
# Clone repository
git clone https://github.com/yourusername/klinik-adelia-alam-sari.git
cd klinik-adelia-alam-sari

# Create feature branch
git checkout -b feature/new-feature

# Make changes
# ... edit files ...

# Stage and commit
git add .
git commit -m "Add new feature description"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
```

## File Paths Reference

### In HTML (public/index.html)
```html
<!-- CSS -->
<link rel="stylesheet" href="../src/css/GitHub.css">

<!-- JS -->
<script src="../src/js/GitHub.js"></script>

<!-- Images -->
<img src="../assets/images/logo.png" alt="">

<!-- Videos -->
<video src="../assets/videos/G1.mp4"></video>
```

### After Deployment
```
https://yourusername.github.io/klinik-adelia-alam-sari/
```

## Adding New Sections

1. Create HTML structure in `public/index.html`
2. Add CSS styling in `src/css/GitHub.css`
3. Add JavaScript functionality in `src/js/GitHub.js` (if needed)
4. Use data attributes for i18n: `data-en=""` and `data-bm=""`

## Maintenance Checklist

- [ ] Update contact information when needed
- [ ] Add new services/features quarterly
- [ ] Update testimonials and ratings
- [ ] Check social media links validity
- [ ] Test responsive design on mobile
- [ ] Test dark mode functionality
- [ ] Test language toggle
- [ ] Update videos/media content
- [ ] Check all external links

## Troubleshooting

### Assets Not Loading
- Check file paths in HTML (should use `../` for relative paths)
- Verify files exist in `assets/` folder
- Check browser console for 404 errors

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in `<link>` tag
- Verify CSS selector specificity

### JavaScript Not Working
- Check browser console for errors
- Verify script path in `<script>` tag
- Check if DOM elements exist before DOM ready

---

For questions or issues, refer to README.md or contact the development team.
