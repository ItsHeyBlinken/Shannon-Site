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

## Deployment Process (Coolify — Static build pack)
1. Develop locally; run `npm run build:css` after any Tailwind class changes in `index.html` or `js/*.js`.
2. Commit and push to GitHub (include updated `dist/style.css` when CSS changed).
3. Coolify (Static pack) serves repo root via nginx — no build or start command on the server.
4. Site updates on redeploy.

**Coolify configuration:**
| Setting | Value |
|---------|-------|
| Build Pack | Static |
| Publish / Base Directory | `/` (repo root) |
| Build Command | *(empty)* |
| Start Command | *(empty)* |

**Do not use Nixpacks** unless you add `build` + `start` scripts and want server-side CSS compilation. Current setup commits prebuilt `dist/style.css` instead.

## File Structure
```
/
├── index.html                 # Main page
├── dist/
│   └── style.css              # Prebuilt Tailwind output (committed; served in production)
├── src/
│   └── input.css              # Tailwind entry file
├── package.json               # Dev-only: npm run build:css
├── tailwind.config.js         # Tailwind theme + content paths
├── js/
│   ├── main.js
│   ├── stats.js
│   └── video-player.js
├── assets/
│   ├── stills/                # Photos + icons (incl. favicon)
│   ├── videos/                # Highlight videos (1920x1080 + 1080x1920)
│   └── recruiting-packet.pdf
└── Memory-Bank/
```
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
2. Run `npm run build:css` if Tailwind classes changed; commit `dist/style.css`
3. Test across browsers and devices
4. Commit and push to GitHub
5. Coolify (Static build pack) redeploys from repo root — no server build step

## Performance Considerations
- **Service Worker**: Offline functionality
- **PWA Features**: App-like experience
- **Analytics**: Google Analytics integration
- **CDN**: Content delivery network for global performance
- **Automated Testing**: Unit tests for JavaScript functionality
