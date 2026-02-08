// ============================================
// Terminal Component
// Command: python3 celebrate.py
// ============================================

(function() {
    'use strict';

    const terminal = document.getElementById('terminal');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const modal = document.getElementById('celebration-modal');
    const closeModal = document.getElementById('close-modal');
    const celebrationMusic = document.getElementById('celebration-music');
    const confettiGif = document.getElementById('confetti-gif');
    const terminalToggle = document.getElementById('terminal-toggle');
    const minimizeBtn = document.getElementById('minimize-btn');
    const maximizeBtn = document.getElementById('maximize-btn');
    const closeBtn = document.getElementById('close-btn');

    // Command history
    let commandHistory = [];
    let historyIndex = -1;

    // Initialize terminal
    function init() {
        // Terminal toggle button
        if (terminalToggle) {
            terminalToggle.addEventListener('click', toggleTerminal);
        }

        // Control buttons
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                minimizeTerminal();
            });
        }

        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMaximize();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeTerminal();
            });
        }

        // Focus on terminal input when clicking anywhere in terminal
        terminal.addEventListener('click', () => {
            if (!terminal.classList.contains('minimized')) {
                terminalInput.focus();
            }
        });

        // Handle command input
        terminalInput.addEventListener('keydown', handleKeyPress);

        // Close modal
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            
            // Stop celebration music
            if (celebrationMusic) {
                celebrationMusic.pause();
                celebrationMusic.currentTime = 0;
            }
            
            // Hide confetti gif
            if (confettiGif) {
                confettiGif.style.display = 'none';
            }
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                
                // Stop celebration music
                if (celebrationMusic) {
                    celebrationMusic.pause();
                    celebrationMusic.currentTime = 0;
                }
                
                // Hide confetti gif
                if (confettiGif) {
                    confettiGif.style.display = 'none';
                }
            }
        });
    }

    function toggleTerminal() {
        if (terminal.classList.contains('closed')) {
            openTerminal();
        } else if (terminal.classList.contains('minimized')) {
            restoreTerminal();
        } else {
            minimizeTerminal();
        }
    }

    function minimizeTerminal() {
        terminal.classList.add('minimized');
        terminal.classList.remove('maximized');
        updateToggleButton();
    }

    function restoreTerminal() {
        terminal.classList.remove('minimized');
        terminal.classList.remove('maximized');
        terminal.classList.remove('closed');
        terminalInput.focus();
        updateToggleButton();
    }

    function closeTerminal() {
        terminal.classList.add('closed');
        terminal.classList.add('minimized');
        updateToggleButton();
    }

    function openTerminal() {
        terminal.classList.remove('closed');
        terminal.classList.remove('minimized');
        terminalInput.focus();
        updateToggleButton();
    }

    function toggleMaximize() {
        terminal.classList.toggle('maximized');
        terminal.classList.remove('minimized');
        if (!terminal.classList.contains('maximized')) {
            restoreTerminal();
        }
        updateToggleButton();
    }

    function updateToggleButton() {
        if (!terminalToggle) return;

        const icon = terminalToggle.querySelector('.terminal-icon');
        if (terminal.classList.contains('closed') || terminal.classList.contains('minimized')) {
            icon.textContent = '▶';
            terminalToggle.classList.add('closed');
        } else {
            icon.textContent = '▼';
            terminalToggle.classList.remove('closed');
        }
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = terminalInput.value.trim();
            
            if (command) {
                executeCommand(command);
                commandHistory.push(command);
                historyIndex = commandHistory.length;
            }
            
            terminalInput.value = '';
        } else if (e.key === 'ArrowUp') {
            // Navigate command history up
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            // Navigate command history down
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
        }
    }

    function executeCommand(command) {
        // Display the command
        addTerminalLine(`$ ${command}`, 'command');

        // Check for specific commands
        if (command === 'python3 celebrate.py') {
            runCelebrationScript();
        } else if (command === 'help') {
            showHelp();
        } else if (command === 'clear') {
            clearTerminal();
        } else if (command === 'ls') {
            addTerminalLine('celebrate.py', 'success');
        } else if (command.startsWith('echo ')) {
            const text = command.substring(5);
            addTerminalLine(text, 'success');
        } else {
            addTerminalLine(`Command not found: ${command}`, 'error');
            addTerminalLine(`Type 'help' for available commands`, 'info');
        }

        // Auto-scroll to bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function runCelebrationScript() {
        addTerminalLine('Initializing birthday celebration system...', 'success');
        
        setTimeout(() => {
            addTerminalLine('Loading memories...', 'loading');
        }, 500);

        setTimeout(() => {
            addTerminalLine('[####------] 40%', 'progress');
        }, 1000);

        setTimeout(() => {
            addTerminalLine('[########--] 80%', 'progress');
        }, 1500);

        setTimeout(() => {
            addTerminalLine('[##########] 100%', 'progress');
            addTerminalLine('✓ Memories loaded successfully!', 'success');
        }, 2000);

        setTimeout(() => {
            addTerminalLine('✓ Valorant highlights: LOADED', 'success');
            addTerminalLine('✓ League of Legends moments: LOADED', 'success');
            addTerminalLine('✓ Football victories: LOADED', 'success');
            addTerminalLine('✓ Rock concerts: LOADED', 'success');
        }, 2500);

        setTimeout(() => {
            addTerminalLine('', '');
            addTerminalLine('🎉 CELEBRATION READY!', 'success');
            addTerminalLine('Opening birthday message...', 'success');
        }, 3500);

        setTimeout(() => {
            // Show the modal
            modal.classList.add('active');
            
            // Play celebration music
            if (celebrationMusic) {
                celebrationMusic.currentTime = 0;
                celebrationMusic.volume = 0.7;
                celebrationMusic.play().catch(error => {
                    console.error('Error playing celebration music:', error);
                });
            }
            
            // Show confetti gif
            if (confettiGif) {
                confettiGif.style.display = 'block';
            }
        }, 4000);
    }

    function showHelp() {
        addTerminalLine('Available commands:', 'info');
        addTerminalLine('  python3 celebrate.py - Start the birthday celebration', 'info');
        addTerminalLine('  help                 - Show this help message', 'info');
        addTerminalLine('  clear                - Clear the terminal', 'info');
        addTerminalLine('  ls                   - List files', 'info');
        addTerminalLine('  echo <text>          - Print text', 'info');
    }

    function clearTerminal() {
        terminalOutput.innerHTML = `
            <p class="terminal-line">Birthday System v1.0.0</p>
            <p class="terminal-line">Type 'python3 celebrate.py' to start the celebration...</p>
        `;
    }

    function addTerminalLine(text, type = '') {
        const line = document.createElement('p');
        line.className = `terminal-line ${type}`;
        line.textContent = text;
        terminalOutput.appendChild(line);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    console.log('💻 Terminal Ready! Type: python3 celebrate.py');
})();
