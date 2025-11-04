// Simple enhancements for the blog
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state indication for current page
    const currentPath = window.location.pathname;
    const homeLink = document.querySelector('.site-title a');
    const backHomeLink = document.querySelector('.back-home');
    
    if (homeLink) {
        if (currentPath === '/' || currentPath.endsWith('index.html')) {
            homeLink.style.color = '#3498db';
        }
    }
    
    if (backHomeLink) {
        backHomeLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-2px)';
        });
        
        backHomeLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    }

    // Add reading time estimation for blog posts
    const postContent = document.querySelector('.post-content');
    if (postContent) {
        const text = postContent.textContent;
        const wordsPerMinute = 200;
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / wordsPerMinute);
        
        const readingTimeElement = document.createElement('p');
        readingTimeElement.style.cssText = 'color: #666; font-size: 0.9rem; margin-bottom: 1rem;';
        readingTimeElement.textContent = `Estimated reading time: ${readingTime} minute${readingTime !== 1 ? 's' : ''}`;
        
        const postDate = document.querySelector('.post .post-date');
        if (postDate) {
            postDate.insertAdjacentElement('afterend', readingTimeElement);
        }
    }

    // Add copy-to-clipboard functionality for code blocks (if any are added later)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: #3498db;
            color: white;
            border: none;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        pre.addEventListener('mouseenter', () => button.style.opacity = '1');
        pre.addEventListener('mouseleave', () => button.style.opacity = '0');
        
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });
});