class Terminal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.outputDiv = document.createElement('div');
    this.outputDiv.className = 'terminal-output';
    this.inputLine = document.createElement('div');
    this.inputLine.className = 'terminal-input-line';
    this.prompt = document.createElement('span');
    this.prompt.className = 'terminal-prompt';
    this.prompt.textContent = 'visitor@karthig.dev:~$ ';
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.className = 'terminal-input';
    
    this.inputLine.appendChild(this.prompt);
    this.inputLine.appendChild(this.input);
    this.container.appendChild(this.outputDiv);
    this.container.appendChild(this.inputLine);
    
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleCommand(this.input.value);
      }
    });

    this.commands = {
      help: () => this.showHelp(),
      clear: () => this.clear(),
      ls: () => this.listSections(),
      cat: (args) => this.showSection(args[0]),
      about: () => this.showAbout(),
      skills: () => this.showSkills(),
      principles: () => this.showPrinciples(),
      contact: () => this.showContact()
    };

    this.sections = {
      about: 'about.md',
      skills: 'skills.md',
      principles: 'principles.md',
      contact: 'contact.md'
    };

    this.showWelcome();
  }

  showWelcome() {
    const welcome = `
    Welcome to Karthig's Terminal Portfolio! 🚀
    Type 'help' to see available commands.
    `;
    this.printOutput(welcome);
  }

  handleCommand(cmd) {
    const cmdParts = cmd.trim().split(' ');
    const command = cmdParts[0].toLowerCase();
    const args = cmdParts.slice(1);

    this.printOutput(`${this.prompt.textContent}${cmd}`);
    
    if (this.commands[command]) {
      this.commands[command](args);
    } else if (cmd.trim()) {
      this.printOutput(`Command not found: ${command}. Type 'help' for available commands.`);
    }

    this.input.value = '';
  }

  showHelp() {
    const help = `
    Available commands:
    - help     : Show this help message
    - clear    : Clear the terminal
    - ls       : List available sections
    - cat      : View a section (e.g., 'cat about')
    - about    : Show about section
    - skills   : Show skills section
    - principles: Show principles section
    - contact  : Show contact information
    `;
    this.printOutput(help);
  }

  listSections() {
    const sections = Object.keys(this.sections).join('  ');
    this.printOutput(sections);
  }

  showSection(section) {
    if (this.sections[section]) {
      window.location.href = '/' + this.sections[section];
    } else {
      this.printOutput(`Section not found: ${section}`);
    }
  }

  showAbout() {
    const about = `
    Vanakkam 🙏 (Greetings in Tamil),
    I am a 27 years old graduate of RWTH Aachen, Germany.
    Master's in Simulation Sciences.
    `;
    this.printOutput(about);
  }

  showSkills() {
    const skills = `
    Skills & Habits:
    - Memory for numbers
    - Positive social media presence
    - Documentary enthusiast
    - Avid reader
    - In-person/text communication preference
    `;
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
    `;
    this.printOutput(principles);
  }

  showContact() {
    const contact = `
    Connect with me:
    - LinkedIn: [Your LinkedIn]
    - Twitter: [Your Twitter]
    - Email: [Your Email]
    `;
    this.printOutput(contact);
  }

  clear() {
    this.outputDiv.innerHTML = '';
  }

  printOutput(text) {
    const output = document.createElement('div');
    output.className = 'terminal-line';
    output.textContent = text;
    this.outputDiv.appendChild(output);
    this.container.scrollTop = this.container.scrollHeight;
  }
}

// Initialize terminal when document is ready
document.addEventListener('DOMContentLoaded', () => {
  window.terminal = new Terminal('terminal');
}); 