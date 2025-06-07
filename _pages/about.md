---
layout: about
title: Homepage
permalink: /
subtitle: Reinforcement Learning | Nvidia Isaac Sim and Jetson Expert | VSLAM and Foundational models
nav_order: 1
nav: true

profile:
  align: right
  image: profile.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Karthigeyan Ganesh Shankar </p>
    <p>Lead Engineer - Autonomy @ Ati Motors </p>
    <p>Master's in Simulation Sciences</p>
    <p>RWTH Aachen, Germany</p>

news: false
selected_papers: false
social: true
---

<style>
.profile {
  width: 100%;
  margin-bottom: 3rem;
}

.profile .more-info {
  margin-bottom: 5px;
  margin-top: 5px;
  font-family: monospace;
}

.profile .more-info p {
  display: inline-block;
  margin: 0;
}

.profile.float-right {
  margin-left: 1rem;
}

.profile.float-left {
  margin-right: 1rem;
}

@media (min-width: 576px) {
  .profile {
    width: 30%;
  }
  .profile .address p {
    display: block;
  }
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.section:first-of-type {
  margin-top: 2rem;
}

.content {
  clear: both;
}

.section {
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: var(--global-bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section-title {
  color: var(--global-theme-color);
  margin-bottom: 1.5rem;
}

.list-styled {
  list-style-type: none;
  padding-left: 0;
}

.list-styled li {
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
}

.list-styled li:before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: var(--global-theme-color);
}

.terminal-container {
  background: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.terminal-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.terminal-close { background: #ff5f56; }
.terminal-minimize { background: #ffbd2e; }
.terminal-maximize { background: #27c93f; }

.terminal-title {
  color: #fff;
  margin-left: 10px;
  font-size: 14px;
  opacity: 0.8;
}

.terminal-content {
  font-size: 14px;
  line-height: 1.6;
}

.terminal-prompt {
  color: #00ff00;
}

.terminal-input {
  background: transparent;
  border: none;
  color: #fff;
  font-family: inherit;
  font-size: inherit;
  width: 80%;
  outline: none;
}
</style>

<div class="row">
  <div class="col-12 col-lg-8">
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

    <!-- Terminal Interface -->
    <div class="terminal-container">
      <div class="terminal-header">
        <div class="terminal-button terminal-close"></div>
        <div class="terminal-button terminal-minimize"></div>
        <div class="terminal-button terminal-maximize"></div>
        <span class="terminal-title">kgs@portfolio ~ </span>
      </div>
      <div class="terminal-content">
        <div class="terminal-line">
          <span class="terminal-prompt">$ </span>
          <input type="text" class="terminal-input" autofocus placeholder="Type a command..." />
        </div>
      </div>
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
</div>

{% include common_styles.liquid %}

<script>
document.addEventListener('DOMContentLoaded', function() {
  const terminal = document.querySelector('.terminal-container');
  const input = terminal.querySelector('.terminal-input');
  const history = terminal.querySelector('.terminal-history');
  
  const commands = {
    help: function() {
      return `Available commands:
- about: Display information about my background and current role
- skills: List my technical skills and expertise
- projects: Show my featured projects and contributions
- experience: View my professional experience and achievements
- education: Display my educational background
- contact: Show ways to get in touch with me
- clear: Clear the terminal screen`;
    },
    about: function() {
      return "I'm Karthigeyan, a Lead Engineer in Autonomy at Ati Motors. I specialize in Reinforcement Learning, Nvidia Isaac Sim, and VSLAM technologies.";
    },
    skills: function() {
      return "Technical Skills:\n- Reinforcement Learning\n- Nvidia Isaac Sim\n- Jetson Platform\n- VSLAM\n- Foundational Models\n- Robotics Simulation";
    },
    projects: function() {
      return "Featured Projects:\n- Digital Twin Development using Nvidia Isaac Sim\n- Reinforcement Learning for Robot Navigation\n- VSLAM Implementation for Autonomous Systems";
    },
    experience: function() {
      return "Professional Experience:\n- Lead Engineer - Autonomy @ Ati Motors\n- Head of Growth\n- Customer Success Engineer\n- Community and Growth Manager";
    },
    education: function() {
      return "Education:\n- Master's in Simulation Sciences, RWTH Aachen, Germany\n- Specialization in Fluid Simulations and Transport Equations";
    },
    contact: function() {
      return "Get in touch:\n- Email: karthigeyanrgs@gmail.com\n- LinkedIn: [Profile link]\n- GitHub: [Username]";
    },
    clear: function() {
      history.innerHTML = '';
      return '';
    }
  };
  
  function addToHistory(command, output) {
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span class="terminal-prompt">$ </span><span class="terminal-command">${command}</span>`;
    
    const outputLine = document.createElement('div');
    outputLine.className = 'terminal-output visible';
    outputLine.style.whiteSpace = 'pre-line';
    outputLine.textContent = output;
    
    history.appendChild(commandLine);
    if (output) {
      history.appendChild(outputLine);
    }
    
    // Scroll to bottom
    terminal.scrollTop = terminal.scrollHeight;
  }

  // Show help by default when terminal loads
  addToHistory('help', commands.help());

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const command = input.value.trim().toLowerCase();
      input.value = '';
      
      if (command) {
        let output = '';
        if (commands[command]) {
          output = commands[command]();
        } else {
          output = `Command not found: ${command}\nType 'help' to see available commands.`;
        }
        addToHistory(command, output);
      }
    }
  });

  // Focus input when clicking anywhere in the terminal
  terminal.addEventListener('click', function() {
    input.focus();
  });
});
</script>

