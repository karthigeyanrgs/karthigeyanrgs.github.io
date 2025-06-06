class TerminalAutocomplete {
    constructor() {
        this.commands = [
            'about',
            'skills',
            'projects',
            'experience',
            'education',
            'contact',
            'blog',
            'gallery',
            'clear',
            'latest',
            'help'
        ];
        
        this.banner = `
                 _nnnn_
                dGGGGMMb
               @p~qp~~qMb
               M|@||@) M|
               @,----.JM|
              JS^\\__/  qKL
             dZP        qKRb
            dZP          qKKb
           fZP            SMMb
           HZM            MMMM
           FqM            MMMM
         __| ".        |\\dS"qML
         |    \`.       | \`' \\Zq
        _)      \\.___.,|     .'
        \\____   )MMMMMP|   .'
             \`-'       \`--'
`;

        this.welcomeMessage = `
Welcome to Terminal v1.0.0 (2024)
Type 'help' for a list of available commands.

Last login: ${new Date().toLocaleString()}
`;
        
        this.currentInput = '';
        this.suggestions = [];
        this.selectedSuggestionIndex = -1;
        
        this.initializeTerminal();
    }

    initializeTerminal() {
        const terminalContent = document.querySelector('.terminal-content');
        
        // Add banner and welcome message
        const bannerDiv = document.createElement('div');
        bannerDiv.className = 'terminal-banner';
        bannerDiv.style.color = '#00ff00';
        bannerDiv.style.fontFamily = 'monospace';
        bannerDiv.style.whiteSpace = 'pre';
        bannerDiv.textContent = this.banner;
        
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'terminal-welcome';
        welcomeDiv.style.color = '#ffffff';
        welcomeDiv.style.marginBottom = '1rem';
        welcomeDiv.textContent = this.welcomeMessage;
        
        terminalContent.insertBefore(welcomeDiv, terminalContent.firstChild);
        terminalContent.insertBefore(bannerDiv, terminalContent.firstChild);
        
        const existingPrompt = document.querySelector('.terminal-line:last-child');
        
        // Create input element
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.className = 'terminal-input';
        inputElement.autocomplete = 'off';
        inputElement.spellcheck = false;
        
        // Create suggestions container
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'terminal-suggestions';
        
        // Replace blinking cursor with input
        if (existingPrompt) {
            const commandSpan = existingPrompt.querySelector('.terminal-command');
            if (commandSpan) {
                commandSpan.replaceWith(inputElement);
            }
        }
        
        terminalContent.appendChild(suggestionsContainer);
        
        // Add event listeners
        inputElement.addEventListener('input', (e) => this.handleInput(e));
        inputElement.addEventListener('keydown', (e) => this.handleKeydown(e));
        document.addEventListener('click', () => {
            inputElement.focus();
            this.hideSuggestions();
        });
    }

    handleInput(event) {
        this.currentInput = event.target.value.toLowerCase();
        this.updateSuggestions();
    }

    handleKeydown(event) {
        const suggestionsContainer = document.querySelector('.terminal-suggestions');
        
        switch(event.key) {
            case 'Tab':
                event.preventDefault();
                if (this.suggestions.length > 0) {
                    if (this.selectedSuggestionIndex === -1) {
                        this.selectSuggestion(0);
                    } else {
                        this.selectSuggestion((this.selectedSuggestionIndex + 1) % this.suggestions.length);
                    }
                }
                break;
                
            case 'Enter':
                if (this.selectedSuggestionIndex !== -1) {
                    event.target.value = this.suggestions[this.selectedSuggestionIndex];
                }
                this.executeCommand(event.target.value);
                event.target.value = '';
                this.hideSuggestions();
                break;
                
            case 'Escape':
                this.hideSuggestions();
                break;
                
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                if (this.suggestions.length > 0) {
                    const delta = event.key === 'ArrowUp' ? -1 : 1;
                    const newIndex = (this.selectedSuggestionIndex + delta + this.suggestions.length) % this.suggestions.length;
                    this.selectSuggestion(newIndex);
                }
                break;
        }
    }

    updateSuggestions() {
        if (!this.currentInput) {
            this.hideSuggestions();
            return;
        }

        this.suggestions = this.commands.filter(cmd => 
            cmd.toLowerCase().startsWith(this.currentInput)
        );

        const suggestionsContainer = document.querySelector('.terminal-suggestions');
        suggestionsContainer.innerHTML = '';
        
        if (this.suggestions.length > 0) {
            this.suggestions.forEach((suggestion, index) => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = suggestion;
                div.addEventListener('click', () => {
                    document.querySelector('.terminal-input').value = suggestion;
                    this.hideSuggestions();
                });
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            this.hideSuggestions();
        }
        
        this.selectedSuggestionIndex = -1;
    }

    selectSuggestion(index) {
        this.selectedSuggestionIndex = index;
        const items = document.querySelectorAll('.suggestion-item');
        items.forEach((item, i) => {
            item.classList.toggle('selected', i === index);
        });
        if (index !== -1) {
            document.querySelector('.terminal-input').value = this.suggestions[index];
        }
    }

    hideSuggestions() {
        const suggestionsContainer = document.querySelector('.terminal-suggestions');
        suggestionsContainer.style.display = 'none';
        this.selectedSuggestionIndex = -1;
    }

    executeCommand(command) {
        // Add command execution logic here
        const terminalContent = document.querySelector('.terminal-content');
        const newLine = document.createElement('div');
        newLine.className = 'terminal-line';
        newLine.innerHTML = `<span class="terminal-prompt">$ </span><span class="terminal-command">${command}</span>`;
        terminalContent.insertBefore(newLine, document.querySelector('.terminal-line:last-child'));
    }
}

// Initialize when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    new TerminalAutocomplete();
}); 