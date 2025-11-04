# My Blog

A simple, responsive blog built with static HTML, CSS, and JavaScript, deployed to GitHub Pages.

## 🚀 Features

- **Static Site**: No build process required - just plain HTML, CSS, and JavaScript
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Dark Mode Support**: Automatically adapts to user's color scheme preference
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Minimal JavaScript**: Lightweight enhancements without heavy frameworks
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## 📁 Project Structure

```
├── index.html              # Blog homepage with post listings
├── posts/
│   └── hello-world.html    # Sample blog post
├── assets/
│   ├── styles.css          # Responsive styling with dark mode support
│   └── script.js           # Minimal JavaScript enhancements
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment workflow
└── README.md               # This file
```

## 🛠️ Local Development

### Option 1: Simple File Opening
The easiest way to preview the site locally is to simply open the `index.html` file in your web browser:

```bash
# Navigate to the project directory
cd /path/to/project

# Open index.html in your default browser
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

### Option 2: Using a Static Server (Recommended)
For a more realistic development experience, use a simple static server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📝 Adding New Posts

To add a new blog post:

1. Create a new HTML file in the `posts/` directory (e.g., `posts/my-new-post.html`)
2. Follow the same structure as `posts/hello-world.html`
3. Update `index.html` to include your new post in the listings
4. Commit and push your changes to trigger automatic deployment

## 🚀 Deployment

This blog is automatically deployed to GitHub Pages when you push changes to the `main` branch. The deployment process:

1. **Trigger**: Push to `main` branch or manual workflow dispatch
2. **Build**: Upload static files as Pages artifact
3. **Deploy**: Deploy to GitHub Pages
4. **Live**: Site becomes available at the Pages URL

### Live URL
🌐 **[Live Blog URL](https://dction123.github.io/mvpp2/)**

*Note: The URL will be available after the first successful deployment from the main branch.*

## 🎨 Customization

### Changing Site Details
- **Site Title**: Edit the `<title>` tags and `.site-title` elements
- **Site Description**: Update the meta descriptions and `.site-subtitle`
- **Colors**: Modify the CSS variables in `assets/styles.css`

### Adding Styles
The CSS is organized with clear sections:
- Reset and base styles
- Header and navigation
- Main content and posts
- Footer
- Responsive design
- Dark mode support

### JavaScript Enhancements
The JavaScript file includes:
- Smooth scrolling for anchor links
- Active state indication
- Reading time estimation
- Copy-to-clipboard for code blocks

Feel free to add or modify these features as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **GitHub Repository**: https://github.com/dction123/mvpp2
- **Live Site**: https://dction123.github.io/mvpp2/
- **GitHub Pages Documentation**: https://docs.github.com/en/pages

---

Built with ❤️ using HTML, CSS, and JavaScript