document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');

            // Toggle body scroll
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Dynamic Content Rendering ---

    // Check if data is available (from news_data.js)
    if (typeof newsData !== 'undefined') {

        // 1. Render News List on Index Page
        const newsContainer = document.getElementById('news-container');
        if (newsContainer) {
            // Take the first 3 items
            const newsItems = newsData.slice(0, 3);

            newsItems.forEach(item => {
                const article = document.createElement('article');
                article.className = 'news-row';

                // Build Tags HTML
                let tagsHtml = '';
                if (item.tags && item.tags.length > 0) {
                    item.tags.forEach(tag => {
                        tagsHtml += `<span class="news-tag highlight">${tag}</span>`;
                    });
                }

                // Image Handler
                let imageHtml = `<div class="placeholder-box">No Image</div>`;
                if (item.image && item.image.trim() !== "") {
                    imageHtml = `<img src="${item.image}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;">`;
                }

                article.innerHTML = `
                    <div class="news-thumb">
                        ${imageHtml}
                    </div>
                    <div class="news-info">
                        <div class="news-meta">
                            ${tagsHtml}
                            <span class="news-date">${item.date}</span>
                        </div>
                        <h3 class="news-headline">${item.title}</h3>
                        <p class="news-excerpt">${truncateText(item.description, 60)}</p>
                    </div>
                `;
                newsContainer.appendChild(article);
            });
        }

        // 2. Render News Grid on News Page (formerly achievements)
        // We will target #news-page-container
        const newsPageContainer = document.getElementById('news-page-container');
        if (newsPageContainer) {
            newsData.forEach(item => {
                const article = document.createElement('article');
                article.className = 'achievement-card';

                let tagsHtml = '';
                if (item.tags && item.tags.length > 0) {
                    item.tags.forEach(tag => {
                        tagsHtml += `<span class="tag">${tag}</span>`;
                    });
                }

                // Image Handler
                let imageHtml = `<div class="placeholder-img" style="background-color: #f0f0f0; width: 100%; height: 480px; display: flex; align-items: center; justify-content: center; color: #aaa; font-weight:bold;">No Image</div>`;
                if (item.image && item.image.trim() !== "") {
                    imageHtml = `<img src="${item.image}" alt="${item.title}" loading="lazy">`;
                }

                // Link Handling
                // If there's a link, we can wrap the whole content or use an overlay link. 
                // Let's use an overlay link approach or wrap the inner content.
                // Best for accessibility: The whole card is clickable. 
                // We'll add a 'card-link-overlay' anchor if a link exists.

                let linkHtml = '';
                if (item.link && item.link !== "#") {
                    linkHtml = `<a href="${item.link}" class="card-link-overlay" target="_blank" rel="noopener noreferrer">View more</a>`;
                } else if (item.link === "#") {
                    // If purely purely decorative link or internal, maybe just '#'
                    linkHtml = `<a href="#" class="card-link-overlay">View more</a>`;
                }

                article.innerHTML = `
                    ${linkHtml}
                    <div class="card-image">
                        ${imageHtml}
                    </div>
                    <div class="card-content">
                        <div class="card-tags">
                            <div style="display:flex; gap:8px; flex-wrap:wrap;">${tagsHtml}</div>
                            <time datetime="${item.date}">${item.date}</time>
                        </div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-description">${item.description}</p>
                    </div>
                `;
                newsPageContainer.appendChild(article);
            });

            // Note: Grid styles are now handled in CSS via .achievements-grid
            newsPageContainer.style.display = '';
            newsPageContainer.style.gridTemplateColumns = '';
            newsPageContainer.style.gap = '';
        }
    }
});

// Helper for shortening text
function truncateText(text, limit) {
    if (!text) return '';
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
}
