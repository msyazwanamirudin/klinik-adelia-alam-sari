# Klinik Adelia Alam Sari - Healthcare Clinic Website

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

A modern, responsive healthcare clinic website for **Klinik Adelia Alam Sari** located in Kajang, Selangor, Malaysia. The site features multi-language support (English/Malay), dark mode, appointment booking, and comprehensive medical service information.

## Features

✨ **Core Features:**
- 🌐 Bilingual Support (English & Malay)
- 🌓 Dark Mode / Light Mode Toggle
- 📱 Fully Responsive Design (Mobile, Tablet, Desktop)
- 📝 Online Appointment Booking System
- 💬 WhatsApp Integration for Quick Contact
- 📹 Health Awareness Videos Gallery
- 🏥 Comprehensive Service Listing
- 🗺️ Google Maps Integration
- 📊 Health Symptom Checker
- 🔗 Social Media Integration

## Project Structure

```
klinik-adelia-alam-sari/
├── public/                  # Static files
│   └── index.html          # Main HTML file
├── src/                    # Source files
│   ├── css/               # Stylesheets
│   │   ├── GitHub.css     # Main styles
│   │   └── Gemini.css     # Alternative styles
│   └── js/                # JavaScript files
│       ├── GitHub.js      # Main functionality
│       └── Gemini.js      # Alternative functionality
├── assets/                # Media files
│   ├── images/           # Logo, backgrounds
│   └── videos/           # Medical education videos
├── package.json          # Project metadata
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Git installed on your system
- Node.js and npm (for development server)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/klinik-adelia-alam-sari.git
cd klinik-adelia-alam-sari
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm start
```

The site will be available at `http://localhost:8000`

## Usage

### Main Files

- **public/index.html** - Main landing page (use GitHub.html as main)
- **src/css/GitHub.css** - Primary stylesheet with dark mode support
- **src/js/GitHub.js** - Application logic (language toggle, theme, forms)

### Language Support

The site automatically detects and supports:
- **English (EN)** - Default
- **Bahasa Melayu (BM)** - Full translation

Click the language toggle in the navbar to switch between languages.

### Dark Mode

- Click the moon icon in the navbar to enable dark mode
- Preference is saved to localStorage
- All components support dark mode styling

### Appointment Booking

Users can:
1. Click "Book Appointment" button
2. Fill in their details (name, email, phone, date, service)
3. Submit to send booking request via WhatsApp

### Symptom Checker

Interactive health screening tool:
- Check for dengue fever symptoms
- Get recommendations based on symptoms
- Direct link to book rapid tests

## Available Sections

1. **Hero Section** - Compelling headline and CTA buttons
2. **Quick Stats** - Ratings, operating hours, location
3. **About Us** - Clinic information and core values
4. **Services** - Comprehensive medical service offerings
5. **Gallery** - Video testimonials and service demonstrations
6. **Insurance Panels** - Accepted insurance companies
7. **Contact** - Multiple contact methods and location map
8. **Social Media** - Links to social platforms

## Technical Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** Bootstrap 5.3.0
- **Icons:** Font Awesome 6.4.0
- **Maps:** Google Maps Embed API
- **Languages:** HTML, CSS, JavaScript
- **Browser Support:** Chrome, Firefox, Safari, Edge (latest versions)

## Customization

### Update Contact Information
Edit these in `index.html`:
- Phone number: `013-525 3503`
- WhatsApp: `017-4820090`
- Email: `adeliamedic@gmail.com`
- Address: `7-1, Jalan Sari Niaga, 43000 Kajang, Selangor`

### Change Colors
Edit CSS variables in `src/css/GitHub.css`:
```css
:root {
    --primary-color: #003DA5;
    --secondary-color: #D4AF37;
    --light-bg: #f8f9fa;
    --dark-bg: #1a1a1a;
}
```

### Add/Remove Services
Edit the Services Grid section in `index.html` to add new service cards.

## Media Files

### Images
- `logo.png` - Clinic logo
- `bg.webp` - Background image

### Videos
- `G1.mp4` - Educational video 1
- `G2.mp4` - Educational video 2
- `G3.mp4` - Educational video 3
- `G4.mp4` - Educational video 4

Store these in `assets/videos/` and update src paths accordingly.

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE 11   | ❌ Not Supported |

## Performance

- Optimized images (WebP format)
- Minimal CSS/JS bundling
- Lazy loading for videos
- Responsive images
- CDN-hosted libraries

## Deployment

### Option 1: GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
Enable GitHub Pages in repository settings.

### Option 2: Static Hosting
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## API Integrations

- **Google Maps API** - For location embed
- **WhatsApp Business API** - For appointment booking
- **Font Awesome CDN** - For icons
- **Bootstrap CDN** - For styling

## Security

- No sensitive data stored in frontend
- WhatsApp API for secure messaging
- HTTPS recommended for deployment
- Form validation on client-side

## Future Enhancements

- [ ] Online doctor consultation feature
- [ ] Patient management system
- [ ] Medical records integration
- [ ] Payment gateway integration
- [ ] Appointment confirmation emails
- [ ] SMS reminders
- [ ] Mobile app version

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**Klinik Adelia Alam Sari**
- 📍 Address: 7-1, Jalan Sari Niaga, 43000 Kajang, Selangor
- 📞 Phone: 013-525 3503
- 📱 WhatsApp: 017-4820090
- 📧 Email: adeliamedic@gmail.com
- 🌐 Website: [Your deployed website URL]

### Social Media
- 📷 [Instagram](https://www.instagram.com/klinik_adelia_alamsari/)
- 👍 [Facebook](https://www.facebook.com/p/Klinik-Adelia-Alamsari-61576965091114/)
- 🎵 [TikTok](https://www.tiktok.com/@klinik.adelia.ala)
- 🧵 [Threads](https://www.threads.com/@klinik_adelia_alamsari)

## Changelog

### Version 1.0.0 (2026-02-05)
- Initial public release
- Multi-language support (EN/BM)
- Dark mode functionality
- Appointment booking system
- Responsive design
- Service listings and gallery
- Social media integration

## Support

For issues, feature requests, or questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Contact clinic directly for urgent matters

---

Made with ❤️ for better healthcare access in Kajang, Selangor.
