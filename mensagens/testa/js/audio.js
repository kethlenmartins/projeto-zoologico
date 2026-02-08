// ============================================
// Audio Controller
// Background Music & Sound Effects
// ============================================

(function() {
    'use strict';

    const playButton = document.getElementById('play-btn');
    const backgroundMusic = document.getElementById('background-music');
    const golacoSound = document.getElementById('golaco-sound');
    const buumSound = document.getElementById('buum-sound');
    const footballPhotos = document.querySelectorAll('.football-photo');

    let isMusicPlaying = false;

    // Initialize audio controls
    function init() {
        // Play button click handler
        if (playButton && backgroundMusic) {
            playButton.addEventListener('click', toggleBackgroundMusic);
        }

        // Football photo click handlers
        footballPhotos.forEach(photo => {
            photo.addEventListener('click', playGolacoSound);
        });

        // Set initial volume
        if (backgroundMusic) {
            backgroundMusic.volume = 0.5;
        }
        if (golacoSound) {
            golacoSound.volume = 0.7;
        }
        if (buumSound) {
            buumSound.volume = 0.8;
        }
    }

    function toggleBackgroundMusic() {
        if (!backgroundMusic || !buumSound) return;

        if (isMusicPlaying) {
            backgroundMusic.pause();
            playButton.innerHTML = '<span class="play-icon">▶</span> PLAY';
            isMusicPlaying = false;
        } else {
            // Play buum sound first
            buumSound.currentTime = 0;
            buumSound.play().catch(error => {
                console.error('Error playing buum sound:', error);
            });
            
            // Then play background music
            backgroundMusic.play().then(() => {
                playButton.innerHTML = '<span class="play-icon">⏸</span> PAUSE';
                isMusicPlaying = true;
            }).catch(error => {
                console.error('Error playing music:', error);
                showAudioError();
            });
        }
    }

    function playGolacoSound(event) {
        event.stopPropagation();
        
        if (!golacoSound) {
            console.warn('Golaco sound not found');
            return;
        }

        // Reset and play
        golacoSound.currentTime = 0;
        golacoSound.play().catch(error => {
            console.error('Error playing sound:', error);
        });

        // Visual feedback
        const photoElement = event.currentTarget;
        photoElement.classList.add('playing-audio');
        
        setTimeout(() => {
            photoElement.classList.remove('playing-audio');
        }, 1000);
    }

    function showAudioError() {
        // Create temporary error message
        const errorMsg = document.createElement('div');
        errorMsg.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--crb-red);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0;
            z-index: 9999;
            font-weight: bold;
        `;
        errorMsg.textContent = 'Audio file not found. Please add background-music.mp3';
        document.body.appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove();
        }, 3000);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Space bar to play/pause (when not focused on input)
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            toggleBackgroundMusic();
        }
        
        // M key to mute/unmute
        if (e.key === 'm' || e.key === 'M') {
            if (backgroundMusic) {
                backgroundMusic.muted = !backgroundMusic.muted;
                console.log(`Music ${backgroundMusic.muted ? 'muted' : 'unmuted'}`);
            }
        }
    });

    // Auto-pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isMusicPlaying) {
            backgroundMusic.pause();
        } else if (!document.hidden && isMusicPlaying) {
            backgroundMusic.play().catch(error => {
                console.error('Error resuming music:', error);
            });
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose functions for testing
    window.audioController = {
        play: toggleBackgroundMusic,
        playGolaco: () => {
            if (golacoSound) {
                golacoSound.currentTime = 0;
                golacoSound.play();
            }
        }
    };

    console.log('🎵 Audio Controller Ready!');
    console.log('🎵 Keyboard shortcuts: SPACE (play/pause), M (mute)');
})();
