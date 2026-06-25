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
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Interactive functionality without external dependencies
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

## File Structure

```
/
├── index.html              # Main website page
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Mobile-responsive styles
├── js/
│   ├── main.js            # Core functionality
│   ├── stats.js           # Statistics dashboard
│   └── video-player.js    # Video gallery and player
├── images/                # Image assets
│   ├── action-shots/      # Action photos
│   └── icons/             # Icon files
├── videos/                # Video content
│   ├── batting/           # Batting highlights
│   ├── fielding/          # Fielding highlights
│   ├── game-highlights/   # Complete game highlights
│   ├── skills-showcase/   # Skills demonstrations
│   └── thumbnails/        # Video thumbnails
├── assets/                # Downloadable files
└── Memory-Bank/           # Project documentation
```

## Setup and Deployment

1. **Local Development**:
   - Clone or download the repository
   - Open `index.html` in a web browser
   - No build process required - pure static files

2. **VPS Deployment**:
   - Upload all files to your VPS web directory
   - Ensure proper file permissions
   - Configure web server to serve static files

3. **GitHub Integration**:
   - Push changes to GitHub repository
   - VPS can pull updates automatically
   - Videos and images stored in repository

## Customization

### Content Updates
- **Personal Information**: Edit the HTML directly in `index.html`
- **Statistics**: Update data in `js/stats.js`
- **Videos**: Add video files to appropriate directories and update `js/video-player.js`
- **Images**: Replace placeholder images with actual photos

### Styling
- **Colors**: Modify CSS custom properties in `css/style.css`
- **Typography**: Update font imports and font-family declarations
- **Layout**: Adjust grid and flexbox properties as needed

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
