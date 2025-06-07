---
layout: about
title: About Me
permalink: /
subtitle: Reinforcement Learning | Nvidia Isaac Sim and Jetson Expert | VSLAM and Foundational models
nav_order: 1
nav: true

profile:
  align: center
  image: profile.jpg
  image_circular: false
  more_info: >
    <p>Karthigeyan Ganesh Shankar </p>
    <p>Lead Engineer - Autonomy @ Ati Motors </p>
    <p>Master's in Simulation Sciences</p>
    <p>RWTH Aachen, Germany</p>

news: false
selected_papers: false
social: true
---

<div class="terminal-container">
  <div class="terminal-header">
    <div class="terminal-buttons">
      <span class="terminal-button close"></span>
      <span class="terminal-button minimize"></span>
      <span class="terminal-button maximize"></span>
    </div>
    <div class="terminal-title">visitor@portfolio:~$</div>
  </div>
  <div class="terminal-content" id="terminal">
    <div class="terminal-line">Welcome! Here are the available commands:</div>
    <div class="terminal-line">
  about     - Learn more about me
  skills    - View my technical skills
  contact   - Get my contact information
  projects  - View my notable projects
  clear     - Clear the terminal
  help      - Show this help message</div>
    <div class="terminal-line">$ help</div>
    <div class="terminal-line">Available commands:
  about     - Learn more about me
  skills    - View my technical skills
  contact   - Get my contact information
  projects  - View my notable projects
  clear     - Clear the terminal
  help      - Show this help message</div>
    <div class="terminal-line">$ <span class="terminal-input" id="terminal-input"></span><span class="terminal-cursor">█</span></div>
  </div>
</div>

<style>
.profile {
  width: 100%;
  max-width: 300px;
  margin: 0 auto 3rem auto;
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
}

.profile .more-info {
  margin: 1rem 0;
  font-family: monospace;
}

.profile .more-info p {
  margin: 0.5rem 0;
  color: var(--global-text-color);
  font-size: 1.1rem;
}

.profile img {
  max-width: 250px;
  height: auto;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.content-wrapper {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.section {
  margin: 2.5rem 0;
  padding: 2rem;
  background: var(--global-bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid var(--global-divider-color);
}

.section-title {
  color: var(--global-theme-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-theme-color);
}

.section p {
  color: var(--global-text-color);
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 1rem 0;
}

.list-styled {
  list-style-type: none;
  padding-left: 0;
}

.list-styled li {
  margin: 1rem 0;
  position: relative;
  padding-left: 1.5rem;
  color: var(--global-text-color);
  line-height: 1.6;
}

.list-styled li:before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: var(--global-theme-color);
}

@media (max-width: 768px) {
  .profile {
    padding: 1rem;
  }
  
  .section {
    padding: 1.5rem;
  }
  
  .profile img {
    max-width: 200px;
  }
}

.terminal-container {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  background: #2d2d2d;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  overflow: hidden;
}

.terminal-header {
  background: #424242;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1a1a1a;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #27c93f; }

.terminal-title {
  color: #fff;
  margin-left: 1rem;
  font-family: monospace;
  font-size: 0.9rem;
}

.terminal-content {
  padding: 1rem;
  color: #fff;
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  min-height: 200px;
}

.terminal-line {
  margin: 0.5rem 0;
  white-space: pre-wrap;
}

.terminal-input {
  margin-left: 0.5rem;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.terminal-cursor {
  animation: blink 1s infinite;
  color: #fff;
}

.terminal-line.error {
  color: #ff5f56;
}

.terminal-line.success {
  color: #27c93f;
}

.terminal-line.info {
  color: #ffbd2e;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const terminal = document.getElementById('terminal');
  const input = document.getElementById('terminal-input');
  let commandHistory = ['help'];  // Initialize with 'help' command
  let historyIndex = commandHistory.length;
  let currentInput = '';

  const commands = {
    help: () => `Available commands:
  about     - Learn more about me
  skills    - View my technical skills
  contact   - Get my contact information
  projects  - View my notable projects
  clear     - Clear the terminal
  help      - Show this help message`,
    
    about: () => `Karthigeyan Ganesh Shankar
Lead Engineer - Autonomy @ Ati Motors
Specializing in Reinforcement Learning, Robotics, and Simulation`,
    
    skills: () => `Technical Skills:
• Reinforcement Learning
• Nvidia Isaac Sim & Jetson
• VSLAM
• Foundational Models
• Robotics & Automation`,
    
    contact: () => `Email: karthigeyan.gs@gmail.com
LinkedIn: linkedin.com/in/karthigeyan-ganesh-shankar
GitHub: github.com/karthigeyanrgs`,
    
    projects: () => `Notable Projects:
1. Autonomous Mobile Robot Development
2. Digital Twin Creation using Isaac Sim
3. RL-based Robot Control Systems
4. VSLAM Implementation for Navigation`,
    
    clear: () => {
      const welcomeLine = document.createElement('div');
      welcomeLine.className = 'terminal-line';
      welcomeLine.textContent = 'Welcome! Type \'help\' to see available commands.';
      
      const inputLine = terminal.lastElementChild;
      terminal.innerHTML = '';
      terminal.appendChild(welcomeLine);
      terminal.appendChild(inputLine);
      return '';
    }
  };

  function addLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    terminal.insertBefore(line, terminal.lastElementChild);
    terminal.scrollTop = terminal.scrollHeight;
  }

  function executeCommand(cmd) {
    const command = cmd.toLowerCase().trim();
    if (command === '') return;
    
    addLine(`$ ${command}`);
    
    if (commands[command]) {
      const output = commands[command]();
      if (output) addLine(output);
    } else {
      addLine(`Command not found: ${command}. Type 'help' for available commands.`, 'error');
    }
    
    if (!commandHistory.includes(command)) {
      commandHistory.push(command);
    }
    historyIndex = commandHistory.length;
    currentInput = '';
    input.textContent = '';
  }

  // Test command execution
  setTimeout(() => {
    const testCommand = 'about';
    input.textContent = testCommand;
    executeCommand(testCommand);
  }, 1000);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.textContent);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.textContent = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.textContent = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        input.textContent = currentInput;
      }
    } else if (e.key === 'Backspace') {
      input.textContent = input.textContent.slice(0, -1);
      currentInput = input.textContent;
    } else if (e.key.length === 1) {
      input.textContent += e.key;
      currentInput = input.textContent;
    }
  });
});
</script>

<div class="content-wrapper">
  <!-- Introduction Section -->
  <div class="section">
    <h2 class="section-title">Introduction</h2>
    <p>Vanakkam 🙏 (Greetings in Tamil),</p>
    
    <p>I started with core mechanical disciplines, finding my foot in fluid simulations with sufficient mathematical training. Delving deeper, I took up an interesting challenge of designing kinetic equations (mesoscopic) for unemployment using transport equations.</p>
    
    <p>My journey took an unexpected turn as I explored non-technical roles - from Community and Growth Manager to Customer Success Engineer, eventually becoming the Head of Growth. After a year of valuable experience, I found my true calling at Ati Motors, where I pursue my passion for advancing technology to benefit humanity.</p>
  </div>

  <!-- Current Work Section -->
  <div class="section">
    <h2 class="section-title">Current Focus</h2>
    <p>I am currently working on bridging the gap between robotics simulations and reality. Using Nvidia Isaac Sim, we are creating highly accurate digital twins of our robots and their operational environments, translating real-world scenarios into precise simulation frameworks.</p>
  </div>

  <!-- Personal Traits Section -->
  <div class="section">
    <h2 class="section-title">Personal Traits</h2>
    <ul class="list-styled">
      <li>I find peace in solitude - one's mind is one's greatest company</li>
      <li>I'm an active listener who values thoughtful communication</li>
      <li>Writing is my preferred medium of expression</li>
      <li>I maintain healthy boundaries and respect others' privacy</li>
      <li>My curiosity is driven more by internal reflection than external validation</li>
      <li>Nature brings out my most calm and composed self</li>
      <li>I cherish memories above material possessions</li>
      <li>I approach challenges with humor while staying neutral on political and religious matters</li>
    </ul>
  </div>

  <!-- Principles Section -->
  <div class="section">
    <h2 class="section-title">Core Principles</h2>
    <ul class="list-styled">
      <li>Vegetarian lifestyle</li>
      <li>Value punctuality and others' time</li>
      <li>Practice mindful communication both online and offline</li>
      <li>Reflect deeply on the consequences of my actions</li>
      <li>Share only positive and constructive content on social media</li>
    </ul>
  </div>
</div>

{% include common_styles.liquid %}

