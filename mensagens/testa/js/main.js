// ============================================
// Main JavaScript
// Card Interactions, Scroll Animations, etc.
// ============================================

(function() {
    'use strict';

    // Initialize all interactive components
    function init() {
        initGameCards();
        initScrollAnimations();
        initGlitchEffect();
        logWelcomeMessage();
    }

    // ============================================
    // Game Cards - Click to Expand
    // ============================================
    function initGameCards() {
        const gameCards = document.querySelectorAll('.game-card');

        gameCards.forEach(card => {
            card.addEventListener('click', function() {
                // Toggle expanded state
                this.classList.toggle('expanded');

                // Close other cards
                gameCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('expanded');
                    }
                });
            });
        });
    }

    // ============================================
    // Scroll Animations with Intersection Observer
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections for scroll animations
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });
    }

    // ============================================
    // Glitch Effect for Gallery Images
    // ============================================
    function initGlitchEffect() {
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            // Add glitch effect randomly
            if (Math.random() > 0.5) {
                item.classList.add('glitch-effect');
            }
        });
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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
    }

    // ============================================
    // Dynamic Content Updates
    // ============================================
    function updateDynamicContent() {
        // You can update these values dynamically
        const playerName = document.getElementById('player-name');
        const playerAge = document.getElementById('player-age');

        // Example: Read from URL parameters or localStorage
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        const age = urlParams.get('age');

        if (name && playerName) {
            playerName.textContent = name;
        }

        if (age && playerAge) {
            playerAge.textContent = age;
        }
    }

    // ============================================
    // Profile Image Fallback
    // ============================================
    function handleImageErrors() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('error', function() {
                // Create placeholder if image fails to load
                this.style.backgroundColor = 'var(--medium-gray)';
                this.style.display = 'flex';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'center';
                this.alt = '📷 Image not found';
                
                // Add text overlay
                const parent = this.parentElement;
                if (parent && !parent.querySelector('.image-placeholder-text')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder-text';
                    placeholder.style.cssText = `
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: var(--text-secondary);
                        font-size: 2rem;
                    `;
                    placeholder.textContent = '📷';
                    parent.style.position = 'relative';
                    parent.appendChild(placeholder);
                }
            });
        });
    }

    // ============================================
    // Particle Effect for Hero Section (Optional)
    // ============================================
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--crb-red);
                opacity: 0.5;
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
            `;
            hero.appendChild(particle);
        }

        // Add float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); }
                25% { transform: translateY(-20px) translateX(10px); }
                50% { transform: translateY(-40px) translateX(-10px); }
                75% { transform: translateY(-20px) translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // Console Welcome Message
    // ============================================
    function logWelcomeMessage() {
        console.log('%c🎮 BIRTHDAY WEBSITE LOADED', 'color: #E30613; font-size: 20px; font-weight: bold;');
        console.log('%c⚽ CRB ALVIRRUBRO', 'color: #E30613; font-size: 16px; font-weight: bold;');
        console.log('%c🎸 Rock Mode: Active', 'color: #FFFFFF; font-size: 14px;');
        console.log('%c\n💡 Easter Eggs:', 'color: #FFD700; font-size: 14px; font-weight: bold;');
        console.log('%c   - Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #CCCCCC; font-size: 12px;');
        console.log('%c   - Type "python3 celebrate.py" in the terminal', 'color: #CCCCCC; font-size: 12px;');
        console.log('%c   - Click on football photos for a surprise!', 'color: #CCCCCC; font-size: 12px;');
        console.log('%c   - Press SPACE to play/pause music', 'color: #CCCCCC; font-size: 12px;');
        console.log('%c\n🎯 Version: 1.0.0', 'color: #CCCCCC; font-size: 12px;');
    }

    // ============================================
    // Performance Monitoring (Optional)
    // ============================================
    function monitorPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
            });
        }
    }

    // ============================================
    // Initialize Everything
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            updateDynamicContent();
            handleImageErrors();
            monitorPerformance();
            // Uncomment if you want particles:
            // createParticles();
        });
    } else {
        init();
        updateDynamicContent();
        handleImageErrors();
        monitorPerformance();
        // createParticles();
    }

    // Expose utility functions
    window.birthdayApp = {
        version: '1.0.0',
        updateName: (name) => {
            const el = document.getElementById('player-name');
            if (el) el.textContent = name;
        },
        updateAge: (age) => {
            const el = document.getElementById('player-age');
            if (el) el.textContent = age;
        }
    };

})();
