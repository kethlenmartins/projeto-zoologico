// ============================================
// Dynamic Gallery Loader
// Auto-loads images and videos from folder
// ============================================

(function() {
    'use strict';

    // List of all media files from fotos_amigos folder
    const mediaFiles = [
        '0b6123af-4902-4d5c-b292-51c8bd5cb346.jpg',
        'DDCDCDFD-1C13-4C81-83E1-9DC0887F0F9E.mp4',
        'EBC0706E-DF59-4768-9C04-A22193644458.jpg',
        'IMG-20250820-WA0029.jpg',
        'IMG-20250906-WA0003.jpg',
        'IMG-20250907-WA0025.jpg',
        'IMG-20250918-WA0000.jpg',
        'IMG-20250918-WA0040.jpg',
        'IMG-20251002-WA0002.jpg',
        'IMG-20251002-WA0003.jpg',
        'IMG-20251002-WA0004.jpg',
        'IMG-20251002-WA0005.jpg',
        'IMG-20251002-WA0006.jpg',
        'IMG-20251010-WA0011.jpeg',
        'IMG-20251010-WA0042.jpg',
        'IMG-20251010-WA0043.jpg',
        'IMG-20251010-WA0044.jpg',
        'IMG-20251010-WA0046.jpg',
        'IMG-20251010-WA0047.jpg',
        'IMG-20251010-WA0048.jpg',
        'IMG-20251010-WA0054.jpg',
        'IMG-20251010-WA0055.jpg',
        'IMG-20251010-WA0057.jpg',
        'IMG-20251010-WA0058.jpg',
        'IMG-20251010-WA0059.jpg',
        'IMG-20251010-WA0060.jpg',
        'IMG-20251010-WA0062.jpg',
        'IMG-20251010-WA0063.jpg',
        'IMG-20251010-WA0064.jpg',
        'IMG-20251010-WA0065.jpg',
        'IMG-20251010-WA0067.jpg',
        'IMG-20251010-WA0068.jpg',
        'IMG-20251010-WA0070.jpg',
        'IMG-20251010-WA0071.jpg',
        'IMG-20251010-WA0074.jpg',
        'IMG-20251010-WA0077.jpg',
        'IMG-20251010-WA0083.jpg',
        'IMG-20251010-WA0100.jpeg',
        'IMG-20251013-WA0030.jpg',
        'IMG-20251013-WA0031.jpg',
        'IMG-20251013-WA0032.jpg',
        'IMG-20251013-WA0033.jpg',
        'IMG-20251013-WA0034.jpg',
        'IMG-20251013-WA0035.jpg',
        'IMG-20251014-WA0003.jpg',
        'IMG-20251014-WA0007.jpg',
        'IMG-20251014-WA0008.jpg',
        'IMG-20251014-WA0010.jpg',
        'IMG-20251014-WA0012.jpg',
        'IMG-20251014-WA0014.jpg',
        'IMG-20251014-WA0021.jpg',
        'IMG-20251024-WA0003.jpg',
        'IMG_0204.MP4',
        'IMG_0205.MP4',
        'IMG_0252.MP4',
        'IMG_0253.MP4',
        'IMG_0266.MP4',
        'IMG_0267.MP4',
        'IMG_0268.MP4',
        'IMG_0724.MOV',
        'IMG_0959.MP4',
        'IMG_1672.MP4',
        'IMG_1673.MP4',
        'IMG_1674.MP4',
        'IMG_1675.MP4',
        'IMG_1676.MP4',
        'IMG_1677.MP4',
        'IMG_20250823_184642.jpg',
        'IMG_20250907_132349.jpg',
        'IMG_20250907_132352.jpg',
        'IMG_20250907_132353.jpg',
        'IMG_20250907_132416.jpg',
        'IMG_20250907_132420.jpg',
        'IMG_20250907_132423.jpg',
        'IMG_20250907_132428.jpg',
        'PXL_20250209_111105818.jpg',
        'PXL_20250523_132648136.jpg',
        'PXL_20250523_132649388.jpg',
        'PXL_20251010_074302299.jpg',
        'PXL_20251010_082137372.jpg',
        'PXL_20251010_115649696.jpg',
        'Screenshot_2025-05-23-12-10-10-072_com.instagram.android.jpg',
        'Screenshot_2025-10-12-17-50-09-422_com.instagram.android-edit.jpg',
        'VID-20240202-WA0066.mp4',
        'VID-20240817-WA0007(1).mp4',
        'VID-20241004-WA0025(1).mp4',
        'VID-20241114-WA0020(1).mp4',
        'VID-20241114-WA0022(1).mp4',
        'VID_20250322_233856.mp4',
        'VID_20250812_060122.mp4',
        'a2cb6e8e-7719-4677-9611-830f9613a6f5.jpg',
        'e9b9e039-0403-4e4b-b13c-c0fde6ba7787.jpg'
    ];

    const basePath = 'assets/images/games/fotos_amigos/';
    const galleryContainer = document.getElementById('dynamic-gallery');

    // Size variations for masonry effect
    const sizeClasses = ['small', 'medium', 'large', 'wide', 'tall'];

    function init() {
        if (!galleryContainer) {
            console.error('Gallery container not found');
            return;
        }

        loadGallery();
        console.log(`🖼️ Gallery Loaded: ${mediaFiles.length} items`);
    }

    function isVideo(filename) {
        const videoExtensions = ['.mp4', '.mov', '.webm', '.ogg'];
        return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
    }

    function isImage(filename) {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
    }

    function getRandomSize() {
        // Distribute sizes: more small/medium, fewer large
        const weights = [0.3, 0.4, 0.15, 0.1, 0.05];
        const random = Math.random();
        let cumulative = 0;
        
        for (let i = 0; i < weights.length; i++) {
            cumulative += weights[i];
            if (random <= cumulative) {
                return sizeClasses[i];
            }
        }
        return sizeClasses[0];
    }

    function createImageItem(filename, index) {
        const item = document.createElement('div');
        const sizeClass = getRandomSize();
        item.className = `gallery-item ${sizeClass}`;
        item.style.animationDelay = `${index * 0.05}s`;

        const img = document.createElement('img');
        img.src = basePath + filename;
        img.alt = 'Memory';
        img.loading = 'lazy';
        
        // Error handling
        img.onerror = function() {
            item.style.display = 'none';
        };

        item.appendChild(img);
        return item;
    }

    function createVideoItem(filename, index) {
        const item = document.createElement('div');
        const sizeClass = getRandomSize();
        item.className = `gallery-item video-item ${sizeClass}`;
        item.style.animationDelay = `${index * 0.05}s`;

        // Video element
        const video = document.createElement('video');
        video.src = basePath + filename;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'metadata';
        
        // Error handling
        video.onerror = function() {
            item.style.display = 'none';
        };

        // Play icon overlay
        const playIcon = document.createElement('div');
        playIcon.className = 'video-play-icon';
        playIcon.innerHTML = '▶';

        // Hover to play
        item.addEventListener('mouseenter', () => {
            video.play().catch(err => console.log('Video play error:', err));
            playIcon.style.opacity = '0';
        });

        item.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            playIcon.style.opacity = '1';
        });

        // Click to play/pause
        item.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playIcon.style.opacity = '0';
            } else {
                video.pause();
                playIcon.style.opacity = '1';
            }
        });

        item.appendChild(video);
        item.appendChild(playIcon);
        return item;
    }

    function loadGallery() {
        // Shuffle for variety
        const shuffled = [...mediaFiles].sort(() => Math.random() - 0.5);

        shuffled.forEach((filename, index) => {
            let item;
            
            if (isVideo(filename)) {
                item = createVideoItem(filename, index);
            } else if (isImage(filename)) {
                item = createImageItem(filename, index);
            }

            if (item) {
                galleryContainer.appendChild(item);
            }
        });
    }

    // Lightbox functionality (optional - click to expand)
    function initLightbox() {
        galleryContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item:not(.video-item)');
            if (item && item.querySelector('img')) {
                const img = item.querySelector('img');
                openLightbox(img.src);
            }
        });
    }

    function openLightbox(src) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${src}" alt="Full size">
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        setTimeout(() => lightbox.classList.add('active'), 10);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.classList.remove('active');
                setTimeout(() => lightbox.remove(), 300);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            initLightbox();
        });
    } else {
        init();
        initLightbox();
    }

})();
