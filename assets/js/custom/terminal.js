class Terminal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.setupTerminalStructure();
    this.setupMatrixBackground();
    this.loadCommandHistory();
    this.initializeAutoComplete();
    this.bindEventListeners();
    this.showWelcome();
  }

  setupTerminalStructure() {
    // Create background canvas for matrix effect
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    canvas.className = 'terminal-background';
    this.container.appendChild(canvas);

    // Create output div
    this.outputDiv = document.createElement('div');
    this.outputDiv.className = 'terminal-output';
    
    // Create input line
    this.inputLine = document.createElement('div');
    this.inputLine.className = 'terminal-input-line';
    
    // Create prompt
    this.prompt = document.createElement('span');
    this.prompt.className = 'terminal-prompt';
    this.prompt.textContent = 'visitor@karthig.dev:~$ ';
    
    // Create input
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.className = 'terminal-input';
    
    // Create suggestions div
    this.suggestionsDiv = document.createElement('div');
    this.suggestionsDiv.className = 'terminal-suggestions';

    // Assemble the structure
    this.inputLine.appendChild(this.prompt);
    this.inputLine.appendChild(this.input);
    this.container.appendChild(this.outputDiv);
    this.container.appendChild(this.suggestionsDiv);
    this.container.appendChild(this.inputLine);
  }

  setupMatrixBackground() {
    this.matrixRain = new MatrixRain('matrix-bg');
    this.matrixRain.start();
  }

  loadCommandHistory() {
    try {
      this.commandHistory = JSON.parse(localStorage.getItem('terminalHistory')) || [];
    } catch {
      this.commandHistory = [];
    }
    this.historyIndex = -1;
    this.maxHistorySize = 50;
  }

  saveCommandHistory() {
    try {
      localStorage.setItem('terminalHistory', JSON.stringify(this.commandHistory.slice(0, this.maxHistorySize)));
    } catch (e) {
      console.warn('Failed to save command history:', e);
    }
  }

  initializeAutoComplete() {
    this.commands = {
      help: () => this.showHelp(),
      clear: () => this.clear(),
      ls: () => this.listSections(),
      cat: (args) => this.showSection(args[0]),
      skills: () => this.showSkills(),
      principles: () => this.showPrinciples(),
      contact: () => this.showContact(),
      matrix: () => this.toggleMatrix(),
      theme: () => this.cycleTheme(),
      history: () => this.showHistory(),
      weather: (args) => this.showWeather(args[0]),
      time: () => this.showTime(),
      fortune: () => this.showFortune(),
      search: (args) => this.searchCommands(args.join(' '))
    };

    this.sections = {
      skills: 'skills.md',
      principles: 'principles.md',
      contact: 'contact.md'
    };

    this.fortunes = [
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "The best way to predict the future is to create it.",
      "Code is like humor. When you have to explain it, it's bad.",
      "The only way to do great work is to love what you do.",
      "Life is what happens when you're busy making other plans.",
      "Stay hungry, stay foolish."
    ];
  }

  bindEventListeners() {
    this.input.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'Enter':
          this.handleCommand(this.input.value);
          break;
        case 'ArrowUp':
          e.preventDefault();
          this.navigateHistory(-1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          this.navigateHistory(1);
          break;
        case 'Tab':
          e.preventDefault();
          this.handleTabCompletion();
          break;
      }
    });

    this.input.addEventListener('input', () => {
      this.showSuggestions();
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.container.contains(e.target)) {
        this.suggestionsDiv.classList.remove('active');
      }
    });
  }

  navigateHistory(direction) {
    if (this.commandHistory.length === 0) return;
    
    this.historyIndex = Math.max(
      -1,
      Math.min(
        this.commandHistory.length - 1,
        this.historyIndex + direction
      )
    );

    if (this.historyIndex === -1) {
      this.input.value = '';
    } else {
      this.input.value = this.commandHistory[this.historyIndex];
    }
  }

  handleTabCompletion() {
    const input = this.input.value.toLowerCase();
    const possibilities = Object.keys(this.commands)
      .filter(cmd => cmd.startsWith(input));

    if (possibilities.length === 1) {
      this.input.value = possibilities[0];
    } else if (possibilities.length > 1) {
      this.printOutput(possibilities.join('  '));
    }
  }

  showSuggestions() {
    const input = this.input.value.toLowerCase();
    if (!input) {
      this.suggestionsDiv.classList.remove('active');
      return;
    }

    const suggestions = Object.keys(this.commands)
      .filter(cmd => cmd.includes(input))
      .slice(0, 5);

    if (suggestions.length > 0) {
      this.suggestionsDiv.innerHTML = suggestions
        .map(s => `<div class="suggestion-item">${s}</div>`)
        .join('');
      this.suggestionsDiv.classList.add('active');

      // Add click handlers for suggestions
      this.suggestionsDiv.querySelectorAll('.suggestion-item')
        .forEach(item => {
          item.addEventListener('click', () => {
            this.input.value = item.textContent;
            this.input.focus();
            this.suggestionsDiv.classList.remove('active');
          });
        });
    } else {
      this.suggestionsDiv.classList.remove('active');
    }
  }

  handleCommand(cmd) {
    const cmdParts = cmd.trim().split(' ');
    const command = cmdParts[0].toLowerCase();
    const args = cmdParts.slice(1);

    // Add to history if not empty and different from last command
    if (cmd.trim() && (this.commandHistory.length === 0 || this.commandHistory[0] !== cmd)) {
      this.commandHistory.unshift(cmd);
      if (this.commandHistory.length > this.maxHistorySize) {
        this.commandHistory.pop();
      }
      this.historyIndex = -1;
      this.saveCommandHistory();
    }

    this.printOutput(`${this.prompt.textContent}${cmd}`);
    
    if (this.commands[command]) {
      this.commands[command](args);
    } else if (cmd.trim()) {
      const suggestions = this.fuzzySearch(command, Object.keys(this.commands));
      if (suggestions.length > 0) {
        this.printOutput(`Command not found: ${command}. Did you mean: ${suggestions.join(', ')}?`);
      } else {
        this.printOutput(`Command not found: ${command}. Type 'help' for available commands.`);
      }
    }

    this.input.value = '';
    this.suggestionsDiv.classList.remove('active');
  }

  fuzzySearch(query, items) {
    query = query.toLowerCase();
    return items
      .filter(item => {
        const score = this.calculateFuzzyScore(query, item.toLowerCase());
        return score > 0.3; // Threshold for matching
      })
      .sort((a, b) => 
        this.calculateFuzzyScore(query, b.toLowerCase()) - 
        this.calculateFuzzyScore(query, a.toLowerCase())
      )
      .slice(0, 3); // Return top 3 matches
  }

  calculateFuzzyScore(query, str) {
    let score = 0;
    let queryIndex = 0;
    let strIndex = 0;
    let lastMatchIndex = -1;

    while (queryIndex < query.length && strIndex < str.length) {
      if (query[queryIndex] === str[strIndex]) {
        score += 1;
        if (lastMatchIndex === -1 || lastMatchIndex === strIndex - 1) {
          score += 0.5; // Bonus for consecutive matches
        }
        lastMatchIndex = strIndex;
        queryIndex++;
      }
      strIndex++;
    }

    return queryIndex === query.length ? score / str.length : 0;
  }

  showHistory() {
    if (this.commandHistory.length === 0) {
      this.printOutput('No command history available.');
      return;
    }
    
    const history = this.commandHistory
      .map((cmd, i) => `${this.commandHistory.length - i}  ${cmd}`)
      .join('\n');
    this.printOutput('Command History:\n' + history);
  }

  showTime() {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    this.printOutput(now.toLocaleDateString('en-US', options));
  }

  showFortune() {
    const fortune = this.fortunes[Math.floor(Math.random() * this.fortunes.length)];
    this.printOutput(`🔮 ${fortune}`);
  }

  searchCommands(query) {
    if (!query) {
      this.printOutput('Usage: search <query>');
      return;
    }

    const results = Object.entries(this.commands)
      .filter(([name]) => name.includes(query.toLowerCase()))
      .map(([name]) => name);

    if (results.length === 0) {
      this.printOutput(`No commands found matching '${query}'`);
    } else {
      this.printOutput(`Commands matching '${query}':\n${results.join('\n')}`);
    }
  }

  showWelcome() {
    const welcome = `Welcome to Karthig's Terminal Portfolio! 🚀
Type 'help' to see available commands.
Hint: Try exploring with 'ls' to see available sections, or 'skills' to view my technical expertise.`;
    
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'terminal-line typing';
    this.outputDiv.appendChild(welcomeDiv);

    new TypingEffect(welcomeDiv, welcome).start();
  }

  printOutput(text) {
    const output = document.createElement('div');
    output.className = 'terminal-line';
    output.textContent = text;
    this.outputDiv.appendChild(output);
    this.container.scrollTop = this.container.scrollHeight;
  }

  showHelp() {
    const help = `
Available commands:
  help      : Show this help message
  clear     : Clear the terminal
  ls        : List available sections
  cat       : View a section (e.g., 'cat skills')
  skills    : Show skills section
  principles: Show principles section
  contact   : Show contact information
  matrix    : Toggle matrix background effect
  theme     : Cycle through terminal themes
  history   : Show command history
  time      : Show current date and time
  fortune   : Get a random fortune
  search    : Search available commands`;
    this.printOutput(help);
  }

  listSections() {
    const sections = Object.keys(this.sections)
      .map(s => `${s}.md`)
      .join('  ');
    this.printOutput(sections);
  }

  showSection(section) {
    if (this.sections[section]) {
      const baseUrl = window.location.origin;
      const path = this.sections[section].replace('.md', '');
      window.location.href = `${baseUrl}/${path}/`;
    } else {
      this.printOutput(`Section not found: ${section}`);
    }
  }

  showSkills() {
    const skills = `
Skills & Habits:
- Memory for numbers
- Positive social media presence
- Documentary enthusiast
- Avid reader
- In-person/text communication preference
Type 'cat skills' for my complete skill set.`;
    this.printOutput(skills);
  }

  showPrinciples() {
    const principles = `
Personal Principles:
- Vegetarian lifestyle
- No alcohol/smoking
- Professional communication
- Punctuality
- Thoughtful actions
Type 'cat principles' for my complete principles.`;
    this.printOutput(principles);
  }

  showContact() {
    const contact = `
Connect with me:
- LinkedIn: ${window.location.origin}/social/linkedin
- Twitter: ${window.location.origin}/social/twitter
- Email: ${window.location.origin}/contact
Type 'cat contact' for all contact methods.`;
    this.printOutput(contact);
  }

  clear() {
    this.outputDiv.innerHTML = '';
  }

  toggleMatrix() {
    const canvas = document.getElementById('matrix-bg');
    canvas.style.opacity = canvas.style.opacity === '0' ? '0.15' : '0';
    this.printOutput(`Matrix effect ${canvas.style.opacity === '0' ? 'disabled' : 'enabled'}`);
  }

  cycleTheme() {
    const themes = [
      { name: 'Dracula', bg: 'rgba(40, 42, 54, 0.95)', text: '#f8f8f2' },
      { name: 'Monokai', bg: 'rgba(39, 40, 34, 0.95)', text: '#f8f8f2' },
      { name: 'Solarized', bg: 'rgba(0, 43, 54, 0.95)', text: '#93a1a1' },
      { name: 'Nord', bg: 'rgba(46, 52, 64, 0.95)', text: '#d8dee9' }
    ];

    const currentBg = this.container.style.backgroundColor;
    let nextTheme = themes[0];
    
    for (let i = 0; i < themes.length; i++) {
      if (themes[i].bg === currentBg) {
        nextTheme = themes[(i + 1) % themes.length];
        break;
      }
    }

    this.container.style.backgroundColor = nextTheme.bg;
    this.container.style.color = nextTheme.text;
    this.printOutput(`Theme switched to ${nextTheme.name}`);
  }
}

// Initialize terminal when document is ready
document.addEventListener('DOMContentLoaded', () => {
  window.terminal = new Terminal('terminal');
}); 