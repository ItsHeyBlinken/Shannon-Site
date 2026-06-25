# Shannon's Collegiate Softball Recruiting Portfolio

A modern, responsive website designed to showcase Shannon's athletic abilities, academic achievements, and highlight videos to college softball coaches.

## Features

- **Hero Section**: Eye-catching introduction with key stats and call-to-action buttons
- **About Section**: Personal bio, achievements, and social media links
- **Athletics Section**: Team information, positions, and recent achievements
- **Academics Section**: GPA, test scores, honors, and intended major
- **Video Gallery**: Categorized highlight videos with custom player
- **Statistics Dashboard**: Interactive stats with visual progress bars and season comparison
- **Contact Section**: Direct email contact with mailto links

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **Tailwind CSS (v3)**: Utility-first styling, prebuilt into `dist/style.css` for production
- **Vanilla JavaScript**: Interactive functionality without runtime frameworks
- **Responsive Design**: Mobile-first approach for coaches on phones and tablets

## File Structure

```
/
├── index.html              # Main website page
├── dist/
│   └── style.css           # Prebuilt Tailwind output (committed; served in production)
├── src/
│   └── input.css           # Tailwind entry file
├── package.json            # Dev-only: CSS build scripts
├── tailwind.config.js      # Tailwind theme + content paths
├── js/
│   ├── main.js             # Core functionality
│   ├── stats.js            # Statistics dashboard
│   └── video-player.js     # Video gallery and player
├── assets/
│   ├── stills/             # Photos and icons (incl. favicon)
│   ├── videos/             # Highlight videos
│   └── recruiting-packet.pdf
└── Memory-Bank/            # Project documentation
```

## Local Development

1. Clone or download the repository.
2. Open `index.html` in a browser, or serve locally:
   ```bash
   python -m http.server 8123
   ```
3. **If you change Tailwind classes** in `index.html` or `js/*.js`, rebuild CSS before committing:
   ```bash
   npm install          # first time only
   npm run build:css    # writes minified dist/style.css
   npm run watch:css    # optional: rebuild on save while developing
   ```
4. Commit the updated `dist/style.css` along with your HTML/JS changes.

## Deployment (Coolify)

This site is a **static** portfolio — no server-side build or Node process in production. CSS is compiled locally and committed as `dist/style.css`.

### Coolify settings

| Setting | Value |
|---------|-------|
| **Build Pack** | Static |
| **Publish / Base Directory** | `/` (repo root — `index.html` lives here, not in `dist/`) |
| **Build Command** | *(leave empty)* |
| **Start Command** | *(leave empty)* |

### Why Static, not Nixpacks?

Coolify's Nixpacks build pack auto-detects `package.json` as a Node app and expects `build` / `start` scripts. This project only uses Node **locally** to compile Tailwind. The Static pack serves the committed files via nginx — simpler and correct for this site.

### Deploy workflow

1. Edit locally; run `npm run build:css` if you changed any Tailwind classes.
2. Commit and push to GitHub (include `dist/style.css` when CSS changed).
3. Coolify redeploys automatically — no build step on the server.

`node_modules/` is gitignored and not needed on the server. `package.json` is dev-only; the Static pack ignores it.

## Customization

### Content Updates
- **Personal Information**: Edit the HTML directly in `index.html`
- **Statistics**: Update data in `js/stats.js`
- **Videos**: Add video files to appropriate directories and update `js/video-player.js`
- **Images**: Replace placeholder images with actual photos

### Styling
- **Colors & fonts**: Edit `tailwind.config.js` (theme extend), then run `npm run build:css`
- **Layout & utilities**: Tailwind classes in `index.html` and `js/video-player.js`; rebuild CSS after changes

### Contact Information
- Update email address in contact section
- Modify phone number and location as needed
- Update social media links

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images and videos load only when needed
- **Optimized Images**: Compressed and properly sized
- **Minimal Dependencies**: No external libraries for faster loading
- **Progressive Enhancement**: Core functionality works without JavaScript

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Alt Text**: Descriptive alt text for all images

## Future Enhancements

- [ ] Blog/journal section for recruiting journey
- [ ] Analytics integration for tracking coach visits
- [ ] Multi-language support
- [ ] PWA features for app-like experience
- [ ] Advanced video player with playlists
- [ ] Contact form with backend processing

## License

This project is created for personal use. All rights reserved.

## Support

For questions or issues, please contact the site administrator.
