// ============================================
// Konami Code Detector
// Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
// Easter Egg: CRB Theme with Anthem
// ============================================

(function() {
    'use strict';

    // Define the Konami Code sequence
    const KONAMI_CODE = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];

    let konamiIndex = 0;
    let isCRBMode = false;
    const crbAnthem = document.getElementById('crb-anthem');

    // Listen for key presses
    document.addEventListener('keydown', (event) => {
        const key = event.key;

        // Check if the pressed key matches the next key in the sequence
        if (key.toLowerCase() === KONAMI_CODE[konamiIndex].toLowerCase()) {
            konamiIndex++;

            // If the entire sequence is completed
            if (konamiIndex === KONAMI_CODE.length) {
                activateCRBTheme();
                konamiIndex = 0; // Reset for next time
            }
        } else {
            // Reset if wrong key is pressed
            konamiIndex = 0;
        }
    });

    function activateCRBTheme() {
        isCRBMode = !isCRBMode;
        const body = document.body;

        if (isCRBMode) {
            body.classList.add('crb-theme');
            showNotification('⚽ VAMO CRB! ALVIRRUBRO!');
            
            // Play CRB anthem
            if (crbAnthem) {
                crbAnthem.currentTime = 0;
                crbAnthem.volume = 0.8;
                crbAnthem.play().catch(error => {
                    console.error('Error playing CRB anthem:', error);
                });
            }
            
            console.log('⚽ Easter Egg Unlocked: CRB Theme!');
        } else {
            body.classList.remove('crb-theme');
            showNotification('🎯 TACTICAL MODE RESTORED!');
            
            // Stop CRB anthem
            if (crbAnthem) {
                crbAnthem.pause();
                crbAnthem.currentTime = 0;
            }
            
            console.log('🎯 Back to Tactical Mode');
        }
    }

    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove notification after animation
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // Expose function for testing
    window.toggleCRBTheme = activateCRBTheme;

    console.log('🕹️ Konami Code Ready! Try: ↑ ↑ ↓ ↓ ← → ← → B A');
})();
