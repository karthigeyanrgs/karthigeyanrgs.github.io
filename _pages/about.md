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
    <div class="terminal-line">Welcome to the Terminal! Here are the available commands:</div>
    <div class="terminal-line">$ help</div>
    <div class="terminal-line">Available commands:
  about     - Learn more about me in short
  skills    - View my technical skills
  contact   - Get my contact information
  projects  - View my notable projects
  clear     - Clear the terminal
  help      - Show this help message</div>
    <div class="terminal-line">$ <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" spellcheck="false"><span class="terminal-cursor">█</span></div>
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
  margin: 0.5rem 0;
  white-space: pre-wrap;
  color: #e0e0e0;
}

.terminal-input {
  margin-left: 0.5rem;
  color: #fff;
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
  const input = document.getElementById('terminal-input');
  let commandHistory = ['help'];  // Initialize with 'help' command
  let historyIndex = commandHistory.length;
  let currentInput = '';
  let lastTabPress = 0;  // For double-tab detection

  const commands = {
    help: () => `Available commands:
  about     - Learn more about me in short
  skills    - View my technical skills
  contact   - Get my contact information
  projects  - View my notable projects
  clear     - Clear the terminal
  help      - Show this help message`,
    
    about: () => `Karthigeyan Ganesh Shankar
Lead Engineer - Autonomy @ Ati Motors
Specializing in Reinforcement Learning, Robotics, and Simulation`,
    
    skills: () => `Technical Skills:
• Simulations
• Nvidia Isaac Sim
• Operating systems
• Computer vision models
• Docker and Kubernetes`,
    
    contact: () => `Email: karthigeyan.gs@gmail.com
LinkedIn: linkedin.com/in/karthigeyan-ganesh-shankar
GitHub: github.com/karthigeyanrgs`,
    
    projects: () => `Notable Projects:
1. 3D reconstruction methods - VGGT, Mast3R, Fast3R, Nerf models
2. Isaac Sim highly fidel representations
3. Migration from Monolithic to Microservices
4. VSLAM Implementation for Lidar free navigation
5. Upgrading the operating system with custom dts`,
    
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
    input.value = '';
  }

  function getAutocompleteSuggestions(partial) {
    return Object.keys(commands).filter(cmd => 
      cmd.toLowerCase().startsWith(partial.toLowerCase())
    );
  }

  function handleTabCompletion() {
    const currentTime = new Date().getTime();
    const partial = input.value.toLowerCase();
    const suggestions = getAutocompleteSuggestions(partial);
    
    if (suggestions.length === 0) {
      return;
    }
    
    if (suggestions.length === 1) {
      // Single match - complete it
      input.value = suggestions[0];
    } else if (currentTime - lastTabPress < 500) {
      // Double tab - show all suggestions
      addLine('Available completions:', 'info');
      suggestions.forEach(suggestion => {
        addLine(`  ${suggestion}`, 'info');
      });
    }
    
    lastTabPress = currentTime;
  }

  // Test command execution
  setTimeout(() => {
    const testCommand = 'about';
    input.value = testCommand;
    executeCommand(testCommand);
  }, 1000);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        input.value = currentInput;
      }
    }
  });

  input.addEventListener('input', () => {
    currentInput = input.value;
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
    <p>I am currently working on bridging the gap between robotics simulations and reality. Using Nvidia Isaac Sim, we are creating highly accurate digital twins of our robots and their operational environments, translating real-world scenarios into precise simulation frameworks.</p>

    <p>Parallely, I have been involved in concentrated research efforts to create millimeter accuracy reconstructions of warehouse environments and integrate SOTA visual SLAM algorithms.</p>
  </div>

  <!-- Personal Traits Section -->
  <div class="section">
    <h2 class="section-title">Personal Traits</h2>
    <ul class="list-styled">
      <li><b>I find peace in solitude</b> – <i>one's mind is one's greatest company</i></li>
      <li><b>Active listener</b> who values thoughtful communication</li>
      <li><b>Writing</b> is my preferred medium of expression</li>
      <li><b>Healthy boundaries</b> and respect for others' privacy</li>
      <li><b>Curiosity</b> driven more by <i>internal reflection</i> than external validation</li>
      <li><b>Cherish memories</b> above material possessions</li>
      <li><b>Approach challenges with humor</b> while staying neutral on political and religious matters</li>
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

