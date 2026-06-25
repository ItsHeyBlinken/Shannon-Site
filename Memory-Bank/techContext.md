# Technical Context: Shannon's Softball Portfolio

## Technologies Used
- **HTML5**: Semantic markup with modern features
- **CSS3**: Flexbox, Grid, custom properties, animations
- **Vanilla JavaScript**: No frameworks, pure JS for performance
- **GitHub**: Version control and content hosting
- **VPS**: Static file hosting and deployment

## Development Setup
- **Local Development**: Any text editor or IDE
- **Testing**: Browser developer tools for responsive testing
- **Deployment**: Git push to GitHub, VPS pulls from repo
- **Version Control**: Git with feature branches for updates

## Technical Constraints
- **No Backend**: Must be purely static files
- **VPS Limitations**: Standard web server capabilities only
- **Browser Support**: Modern browsers (ES6+ features)
- **Mobile Performance**: Must work well on slower mobile connections

## Dependencies
- **Tailwind CSS (v3, dev dependency)**: Compiled at build time into `dist/style.css` via the Tailwind CLI. Not loaded from CDN. Build with `npm run build:css` (watch: `npm run watch:css`). `node_modules/` is gitignored; `dist/style.css` IS committed because the VPS serves static files with no build step.
- **Google Fonts**: For typography (loaded from CDN)
- **Runtime JS**: Pure vanilla JS, no frameworks.

## Build / Tooling
- `package.json` — npm scripts for the CSS build
- `tailwind.config.js` — theme (fonts + custom colors); `content` scans `index.html` and `js/**/*.js` (the video gallery generates classes inside JS template strings, so JS MUST be in `content` or those classes get purged)
- `src/input.css` — Tailwind entry (`@tailwind base/components/utilities`)
- `dist/style.css` — generated, minified, committed output
- After editing any Tailwind classes in HTML or JS, re-run `npm run build:css` and commit the new `dist/style.css`.

## File Structure
```
/
├── index.html                 # Main page
├── css/
│   ├── style.css             # Main stylesheet
│   └── responsive.css         # Mobile-specific styles
├── js/
│   ├── main.js               # Core functionality
│   ├── stats.js              # Statistics dashboard
│   └── video-player.js       # Video gallery
├── images/                   # Static images
│   ├── hero-photo.jpg
│   ├── action-shots/
│   └── icons/
├── videos/                   # Video files
│   ├── batting/
│   ├── fielding/
│   ├── game-highlights/
│   └── thumbnails/
├── assets/                   # PDFs and other files
└── Memory-Bank/             # Project documentation
```

## Performance Considerations
- **Image Optimization**: Compressed images, appropriate formats
- **Video Optimization**: Compressed videos, multiple quality options
- **CSS Optimization**: Minified in production
- **JavaScript Optimization**: Minified and concatenated
- **Caching**: Proper cache headers for static assets

## Security Considerations
- **No User Input**: Static site, no form processing
- **HTTPS**: SSL certificate for secure connections
- **Content Security Policy**: Prevent XSS attacks
- **No Sensitive Data**: No personal information in code

## Deployment Process
1. Develop locally
2. Test across browsers and devices
3. Commit changes to Git
4. Push to GitHub repository
5. VPS pulls latest changes
6. Site updates automatically

## Future Technical Enhancements
- **Service Worker**: Offline functionality
- **PWA Features**: App-like experience
- **Analytics**: Google Analytics integration
- **CDN**: Content delivery network for global performance
- **Automated Testing**: Unit tests for JavaScript functionality
