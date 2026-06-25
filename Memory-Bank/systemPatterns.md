# System Patterns: Shannon's Softball Portfolio

## System Architecture
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Hosting**: Static files served from VPS
- **Content Management**: Direct file editing and GitHub sync
- **Media Storage**: Videos and images stored in repository

## Key Technical Decisions
1. **Static Site Approach**: No backend needed, easy VPS deployment
2. **Mobile-First Design**: Responsive CSS with mobile-first approach
3. **Semantic HTML**: Proper HTML5 structure for accessibility and SEO
4. **Progressive Enhancement**: Core functionality works without JavaScript
5. **Performance Focus**: Optimized images, lazy loading, minimal dependencies

## Design Patterns in Use
- **Component-Based CSS**: Modular stylesheets for maintainability
- **BEM Methodology**: Block-Element-Modifier for CSS class naming
- **CSS Grid/Flexbox**: Modern layout techniques for responsive design
- **Progressive Web App**: Service worker for offline capability (future)

## Component Relationships
```
index.html (main page)
├── css/style.css (main styles)
├── css/responsive.css (mobile styles)
├── js/main.js (core functionality)
├── js/stats.js (statistics dashboard)
├── js/video-player.js (video gallery)
├── images/ (hero, action shots, icons)
└── videos/ (highlight videos with thumbnails)
```

## Data Flow
- **Statistics**: Hardcoded in JavaScript for now, easily updatable
- **Videos**: File-based with metadata in JavaScript
- **Contact**: Direct mailto links, no form processing needed
- **Content**: Static HTML with easy editing for updates

## Performance Patterns
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Videos load only when needed
- **Minimal Dependencies**: No external libraries for faster loading
- **CSS Optimization**: Critical CSS inlined, non-critical loaded asynchronously

## Accessibility Patterns
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color schemes
- **Alt Text**: Descriptive alt text for all images

## Future Scalability
- **Content Management**: Easy to add new videos, stats, or sections
- **Design Updates**: Modular CSS allows easy theme changes
- **Feature Additions**: JavaScript modules can be easily extended
- **Analytics**: Ready for Google Analytics integration
