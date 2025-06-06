---
layout: about
title: Homepage
permalink: /
subtitle: Reinforcement Learning | Nvidia Isaac Sim and Jetson Expert | VSLAM and Foundational models
nav_order: 1
nav: true

profile:
  align: centre
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

{% include common_styles.liquid %}

<style>
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
  position: relative;
}

.terminal-banner {
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in;
}

.terminal-welcome {
  margin-bottom: 1.5rem;
  animation: slideIn 1s ease-out;
}

.terminal-prompt {
  color: #00ff00;
}

.terminal-command {
  color: #fff;
}

.terminal-output {
  color: #888;
  margin: 10px 0;
}

.command-list {
  color: #fff;
  margin: 15px 0;
  padding-left: 20px;
}

.command-list dt {
  color: #00ff00;
  margin-top: 12px;
  font-weight: bold;
}

.command-list dd {
  color: #888;
  margin-left: 20px;
  margin-bottom: 8px;
}

.section {
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.quote {
  border-left: 4px solid #3498db;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background: #f1f8ff;
  border-radius: 0 8px 8px 0;
}

.quote-author {
  color: #666;
  font-style: italic;
  margin-top: 0.5rem;
  text-align: right;
}

.list-styled {
  list-style-type: none;
  padding-left: 0;
}

.list-styled li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.list-styled li:before {
  content: "•";
  color: #3498db;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.terminal-input {
  background: transparent;
  border: none;
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  outline: none;
  width: calc(100% - 20px);
  caret-color: #00ff00;
}

.terminal-suggestions {
  display: none;
  position: absolute;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  max-height: 150px;
  overflow-y: auto;
  width: calc(100% - 40px);
  margin-top: 5px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.suggestion-item {
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.suggestion-item:hover {
  background-color: #3a3a3a;
}

.suggestion-item.selected {
  background-color: #444;
  color: #00ff00;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

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
      <span class="terminal-command">help</span>
    </div>
    <div class="terminal-output">
      Welcome to Terminal! Here are the available commands:
    </div>
    <dl class="command-list">
      <dt>about</dt>
      <dd>Display information about my background and current role</dd>
      
      <dt>skills</dt>
      <dd>List my technical skills and expertise</dd>
      
      <dt>projects</dt>
      <dd>Show my featured projects and contributions</dd>
      
      <dt>experience</dt>
      <dd>View my professional experience and achievements</dd>
      
      <dt>education</dt>
      <dd>Display my educational background</dd>
      
      <dt>contact</dt>
      <dd>Show ways to get in touch with me</dd>
      
      <dt>blog</dt>
      <dd>Read my latest technical posts on Reinforcement Learning and more</dd>
      
      <dt>gallery</dt>
      <dd>View my travel memories, including experiences from Berlin</dd>
      
      <dt>clear</dt>
      <dd>Clear the terminal screen</dd>
      
      <dt>latest</dt>
      <dd>Show my most recent updates:
          - New blog post: Foundations of Reinforcement Learning
          - Added Berlin travel gallery
          - Updated professional experience</dd>
    </dl>
    <div class="terminal-line">
      <span class="terminal-prompt">$ </span>
      <span class="terminal-command blink">_</span>
    </div>
  </div>
</div>

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

<!-- Testimonials Section -->
<div class="section">
  <h2 class="section-title">What Others Say</h2>
  
  <div class="quote">
    <p>"Someone who is reliable, generous, kind, intellectually honest, welcoming and accepting, curious about new things, and simply someone who <strong>cares</strong>. That last bit is so rare these days -- not just in caring about the people you work with, but caring about the details of what you do and how you do it. You're emotionally intelligent and empathetic. Two of the finest virtues. 🙂"</p>
    <p class="quote-author">- Rishabh</p>
  </div>

  <div class="quote">
    <p>"Karthig, you are such a pure human being. Of the time that I've had the pleasure of knowing you, I've seen nothing but goodness and curiosity and kindness in you (and little bit of nervousness too haha!). You amaze me every week as we work together with your work ethic, proactiveness and ability to learn fast."</p>
    <p class="quote-author">- Soundarya</p>
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
    <li>Committed vegetarian lifestyle</li>
    <li>Value punctuality and others' time</li>
    <li>Practice mindful communication both online and offline</li>
    <li>Reflect deeply on the consequences of my actions</li>
    <li>Share only positive and constructive content on social media</li>
  </ul>
</div>

<!-- Scripts -->
<script src="{{ '/assets/js/custom/typing-effect.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/custom/matrix-rain.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/custom/terminal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/custom/terminal-autocomplete.js' | relative_url }}" defer></script>

