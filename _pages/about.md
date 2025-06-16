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
    <b>Karthigeyan Ganesh Shankar</b><br>
    <b><i>Lead Engineer - Autonomy @ Ati Motors</i></b><br>
    <i>Master's in Simulation Sciences</i><br>
    RWTH Aachen, Germany<br>

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
    <div class="terminal-title">Friend@Shire:~$</div>
  </div>
  <div class="terminal-content" id="terminal">
    <!-- JS will populate terminal lines here -->
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
  color: #e0e0e0;
  font-family: monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  min-height: 200px;
  background: #2d2d2d;
}

.terminal-line {
  margin: 0.1rem 0;
  white-space: pre-wrap;
  color: #e0e0e0;
  display: flex;
  align-items: center;
  gap: 0;
}

.prompt {
  margin-right: 0;
  color: #e0e0e0;
}

.terminal-input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  min-width: 2ch;
  width: auto;
}
.terminal-input {
  background: transparent;
  border: none;
  color: #fff;
  font-family: monospace;
  font-size: 0.95rem;
  outline: none;
  min-width: 2ch;
  caret-color: transparent;
  position: relative;
  left: 0;
  top: 0;
  width: auto;
  z-index: 2;
  margin-left: 0;
  padding-left: 0;
}
.terminal-fake-text {
  visibility: hidden;
  white-space: pre;
  font-family: monospace;
  font-size: 0.95rem;
  display: inline-block;
}
.terminal-cursor {
  animation: blink 1s infinite;
  color: #fff;
  position: relative;
  left: 0;
  top: 0;
  z-index: 3;
  pointer-events: none;
}
.terminal-cursor.inactive {
  animation: none;
  opacity: 0.3;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
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

/* Dark mode specific styles */
@media (prefers-color-scheme: dark) {
  .terminal-container {
    background: #1a1a1a;
  }
  
  .terminal-header {
    background: #2d2d2d;
  }
  
  .terminal-content {
    background: #1a1a1a;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const terminal = document.getElementById('terminal');
  let commandHistory = ['help'];
  let historyIndex = commandHistory.length;
  let currentInput = '';
  let initialLoad = true;

  const commands = {
    help: () => `Available commands:
  about     - Learn more about me in short
  skills    - View my technical skills
  contact   - Get my contact information
  projects  - View my notable projects
  clear     - Clear the terminal
  help      - Show this help message`,

    about: () => `Karthigeyan Ganesh Shankar\nLead Engineer - Autonomy @ Ati Motors\nSpecializing in Reinforcement Learning, Robotics, and Simulation`,

    skills: () => `Technical Skills:\n• Simulations\n• Nvidia Isaac Sim\n• Operating systems\n• Computer vision models\n• Docker and Kubernetes`,

    contact: () => `Email: karthigeyan.gs@gmail.com\nLinkedIn: linkedin.com/in/karthigeyan-ganesh-shankar\nGitHub: github.com/karthigeyanrgs`,

    projects: () => `Notable Projects:\n1. 3D reconstruction methods - VGGT, Mast3R, Fast3R, Nerf models\n2. Isaac Sim highly fidel representations\n3. Migration from Monolithic to Microservices\n4. VSLAM Implementation for Lidar free navigation\n5. Upgrading the operating system with custom dts`,

    clear: () => {
      terminal.innerHTML = '';
      addLine("Welcome! Type 'help' to see available commands.");
      createInputLine(false);
      return '';
    }
  };

  function addLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    // Insert before the input line if it exists, else at the end
    const inputWrapper = terminal.querySelector('.terminal-input-wrapper')?.parentElement;
    if (inputWrapper) {
      terminal.insertBefore(line, inputWrapper);
    } else {
      terminal.appendChild(line);
    }
    terminal.scrollTop = terminal.scrollHeight;
  }

  function attachInputListeners() {
    const input = document.getElementById('terminal-input');
    const cursor = document.getElementById('terminal-cursor');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(input.value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          input.value = commandHistory[historyIndex];
          updateCursorPosition();
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          input.value = commandHistory[historyIndex];
          updateCursorPosition();
        } else {
          historyIndex = commandHistory.length;
          input.value = currentInput;
          updateCursorPosition();
        }
      }
    });
    input.addEventListener('input', () => {
      currentInput = input.value;
      updateCursorPosition();
    });
    // Initial position
    updateCursorPosition();

    // Cursor blinking only when focused
    input.addEventListener('focus', () => {
      if (cursor) cursor.classList.remove('inactive');
    });
    input.addEventListener('blur', () => {
      if (cursor) cursor.classList.add('inactive');
    });
    // Set initial state
    if (document.activeElement !== input && cursor) {
      cursor.classList.add('inactive');
    }
  }

  function createInputLine(autofocus = true) {
    // Remove any existing input line (prompt + input + cursor)
    const oldInputLine = terminal.querySelector('.terminal-line .terminal-input-wrapper')?.parentElement;
    if (oldInputLine) {
      oldInputLine.remove();
    }
    // Create new input line with proper spacing and cursor
    const inputLine = document.createElement('div');
    inputLine.className = 'terminal-line';
    inputLine.innerHTML = `
      <span class="prompt">$ </span>
      <span class="terminal-input-wrapper">
        <span class="terminal-fake-text" id="terminal-fake-text"></span>
        <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" spellcheck="false">
        <span class="terminal-cursor" id="terminal-cursor">█</span>
      </span>
    `;
    terminal.appendChild(inputLine);
    attachInputListeners();
    updateCursorPosition();
    if (autofocus) {
      document.getElementById('terminal-input').focus();
    }
  }

  function updateCursorPosition() {
    const input = document.getElementById('terminal-input');
    const fakeText = document.getElementById('terminal-fake-text');
    const cursor = document.getElementById('terminal-cursor');
    if (!input || !fakeText || !cursor) return;
    fakeText.textContent = input.value;
    // Position the cursor after the text
    cursor.style.left = fakeText.offsetWidth + 'px';
  }

  function executeCommand(cmd) {
    const command = cmd.toLowerCase().trim();
    if (command === '') {
      // If empty, just re-focus the input (no new static prompt line)
      createInputLine(true);
      return;
    }
    // Convert the previous input line to a static command line
    const oldInputLine = terminal.querySelector('.terminal-line .terminal-input-wrapper')?.parentElement;
    if (oldInputLine) {
      const prompt = oldInputLine.querySelector('.prompt')?.textContent || '$ ';
      const inputValue = oldInputLine.querySelector('.terminal-input')?.value || '';
      oldInputLine.innerHTML = `<span class="prompt">${prompt}</span>${inputValue}`;
    }
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
    // Always re-create the input line after command execution, autofocus it
    createInputLine(true);
  }

  // On initial load, ensure only one input line exists and show welcome/help
  terminal.innerHTML = '';
  addLine("Welcome! Type 'help' to see available commands.");
  createInputLine(false);

  // Focus input when clicking anywhere in terminal
  terminal.addEventListener('click', () => {
    const input = document.getElementById('terminal-input');
    if (input) input.focus();
  });
});
</script>

<div class="content-wrapper">
  <!-- Introduction Section -->
  <div class="section">
    <h2 class="section-title">Introduction</h2>
    <p><strong>Vanakkam</strong> 🙏 (<em>Greetings in Tamil</em>),</p>
    
    <p>I started my professional journey with <strong>core mechanical disciplines</strong>, finding my foot in <em>fluid simulations</em> with sufficient mathematical training. Delving deeper, I took up an interesting challenge of designing <strong>kinetic equations</strong> (<em>mesoscopic</em>) for unemployment using transport equations as my master's thesis.</p>
    
    <p>My journey took an unexpected turn as I explored <em>non-technical roles</em> - from <strong>Community and Growth Manager</strong> to <strong>Customer Success Engineer</strong>, eventually becoming the <strong>Head of Growth</strong>. After a year of valuable experience, I found my true calling at <strong>Ati Motors</strong>, where I pursue my passion for advancing technology to benefit humanity. I have worked on different technical verticals at Ati: </p>

    <ul class="list-styled">
      <li>Create a <strong>clean simulation-first</strong> software validation and regression framework.</li>
      
      <li>Develop an <strong>end-to-end operating system</strong> upgradation framework for our custom ARM machines based off <em>Nvidia Jetson SoM</em>.</li>
      
      <li>Integrate several <em>auxillary devices and peripherals</em> (<strong>CAN, HMI, Load Cell</strong>) with the robot all the way to a <strong>decentralised decision-making</strong> fleet management system.</li>
      
      <li>Mature the <strong>Isaac Sim pipeline</strong> to cleanly integrate with Ati's stack and help accelerate the software development and validation cycles.</li>
      
      <li>Kickstart the thread on <strong>General navigation models</strong> which are foundational and pave the way to <em>VSLAM methods</em>.</li>
    </ul>

  </div>

  <!-- Current Work Section -->
  <div class="section">
    <h2 class="section-title">Current Focus</h2>
    <ul class="list-styled">
      <li>Working on bridging the gap between <strong>robotics simulations</strong> and <strong>reality</strong>. Using <strong>Nvidia Isaac Sim</strong>, we are creating <em>highly accurate digital twins</em> of our robots and their operational environments, translating real-world scenarios into precise simulation frameworks.</li>
      <li>Leading concentrated research efforts to create <strong>millimeter accuracy reconstructions</strong> of warehouse environments and integrate <em>state-of-the-art Visual SLAM algorithms</em> for robust navigation.</li>
    </ul>
  </div>

  <!-- Personal Traits Section -->
  <div class="section">
    <h2 class="section-title">Personal Traits</h2>
    <ul class="list-styled">
      <li><b>I find peace in solitude during my time off work</b> – after all <i>one's mind is one's greatest company</i></li>
      <li><b>Active listener</b> who values thoughtful communication</li>
      <li><b>Writing</b> is my preferred medium of expression</li>
      <li><b>Healthy boundaries</b> and respect for others' privacy</li>
      <li><b>Curiosity</b> driven more by <i>internal reflection</i> than external validation</li>
      <li><b>Cherish memories</b> above material possessions</li>
      <li><b>Approach challenges with humor</b> and thrive when I am most challenged. All my past work is a testament for that.</li>
    </ul>
  </div>
  
  <!-- Principles Section -->
  <div class="section">
    <h2 class="section-title">Core Principles</h2>
    <ul class="list-styled">
      <li><b>Vegetarian lifestyle</b></li>
      <li><b>Value punctuality</b> and others' time</li>
      <li><b>Practice mindful communication</b> both online and offline</li>
      <li><b>Reflect deeply</b> on the consequences of my actions</li>
      <li><b>Share only positive and constructive content</b> on social media</li>
    </ul>
  </div>
</div>

{% include common_styles.liquid %}

