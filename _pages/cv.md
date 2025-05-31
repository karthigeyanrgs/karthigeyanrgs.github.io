---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 5
cv_pdf: example_pdf.pdf
description: This is a description of the page. You can modify it in '_pages/cv.md'. You can also change or remove the top pdf download button.
toc:
  sidebar: left
---

<div class="cv-intro" data-aos="fade-in">
  <div class="intro-text">
    <h1 class="typing-text">Discover my journey,<br>a story of passion and innovation,<br>crafted through code and creativity</h1>
    <button class="start-experience" onclick="startCVExperience()">
      Start the Experience
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
  
  <div class="parallax-elements">
    <div class="code-element" data-depth="0.2">
      <pre><code>while(true) { 
  learn();
  create();
  innovate();
}</code></pre>
    </div>
    <div class="tech-stack" data-depth="0.4">
      <i class="fab fa-python"></i>
      <i class="fab fa-js-square"></i>
      <i class="fab fa-react"></i>
      <i class="fab fa-node"></i>
    </div>
    <div class="design-elements" data-depth="0.6">
      <svg class="circuit-paths"></svg>
    </div>
  </div>
</div>

<div class="cv-content" style="display: none;">
  <div class="timeline-container" data-aos="fade-up">
    <div class="experience-section">
      <h2 class="section-title">Experience</h2>
      {% for job in site.data.experience %}
      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>{{ job.title }}</h3>
            <span class="timeline-date">{{ job.period }}</span>
          </div>
          <h4>{{ job.company }}</h4>
          <p>{{ job.description }}</p>
          <div class="skills-container">
            {% for skill in job.skills %}
            <span class="skill-tag">{{ skill }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>

    <div class="education-section" data-aos="fade-up">
      <h2 class="section-title">Education</h2>
      {% for edu in site.data.education %}
      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>{{ edu.degree }}</h3>
            <span class="timeline-date">{{ edu.period }}</span>
          </div>
          <h4>{{ edu.institution }}</h4>
          <p>{{ edu.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>

    <div class="skills-section" data-aos="fade-up">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        {% for category in site.data.skills %}
        <div class="skill-category" data-aos="zoom-in">
          <h3>{{ category.name }}</h3>
          <div class="skill-bars">
            {% for skill in category.items %}
            <div class="skill-bar">
              <div class="skill-info">
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="progress-line">
                <span data-width="{{ skill.level }}%"></span>
              </div>
            </div>
            {% endfor %}
          </div>
        </div>
        {% endfor %}
      </div>
    </div>

    <div class="projects-section" data-aos="fade-up">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        {% for project in site.data.projects %}
        <div class="project-card" data-aos="flip-up">
          <div class="project-header">
            <i class="fas {{ project.icon }}"></i>
            <h3>{{ project.name }}</h3>
          </div>
          <p>{{ project.description }}</p>
          <div class="project-links">
            {% if project.github %}
            <a href="{{ project.github }}" target="_blank">
              <i class="fab fa-github"></i> View Source
            </a>
            {% endif %}
            {% if project.demo %}
            <a href="{{ project.demo }}" target="_blank">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            {% endif %}
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>

  <div class="cv-footer" data-aos="fade-up">
    <a href="{{ page.cv_pdf | prepend: '/assets/pdf/' | relative_url }}" class="download-cv">
      <i class="fas fa-download"></i>
      Download PDF Version
    </a>
  </div>
</div>

<script>
function startCVExperience() {
  // Animate intro out
  document.querySelector('.cv-intro').style.transform = 'translateY(-100vh)';
  document.querySelector('.cv-intro').style.opacity = '0';
  
  // Show CV content
  setTimeout(() => {
    document.querySelector('.cv-intro').style.display = 'none';
    document.querySelector('.cv-content').style.display = 'block';
    // Initialize AOS
    AOS.refresh();
  }, 1000);
}

// Initialize parallax
document.addEventListener('DOMContentLoaded', function() {
  // Create circuit path animation
  const svg = document.querySelector('.circuit-paths');
  createCircuitPaths(svg);
  
  // Initialize parallax effect
  const scene = document.querySelector('.parallax-elements');
  const parallax = new Parallax(scene);
  
  // Initialize typing animation
  const text = document.querySelector('.typing-text');
  new TypeIt(text, {
    speed: 50,
    waitUntilVisible: true
  }).go();
});

function createCircuitPaths(svg) {
  // Create random circuit-like paths
  const paths = [
    'M10,10 L50,10 L50,50 L90,50',
    'M10,90 L50,90 L50,50 L90,50',
    'M50,10 L50,90',
    'M10,50 L90,50'
  ];
  
  paths.forEach(d => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.classList.add('circuit-path');
    svg.appendChild(path);
  });
}
</script>
