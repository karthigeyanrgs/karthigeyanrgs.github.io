---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 5
cv_pdf: Karthigeyan_Resume_2025_May.pdf
description: A showcase of my professional journey, skills, and achievements in technology and innovation.
toc:
  sidebar: left
---

{% include common_styles.liquid %}

<style>
/* Custom sidebar styling */
.col-md-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-xl-2 {
  flex: 0 0 20%;
  max-width: 20%;
}

.sidebar {
  width: 100%;
  padding: 2rem 1rem;
  background-color: var(--global-bg-color);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
  font-size: 1.1rem;
  padding-left: 0;
}

.sidebar ul li {
  list-style: none;
  padding: 0.5rem 0;
}

.sidebar ul li a {
  color: var(--global-text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.sidebar ul li a:hover {
  color: var(--global-theme-color);
}

.sidebar .nav-link.active {
  color: var(--global-theme-color);
  font-weight: bold;
}

@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 30%;
    max-width: 30%;
  }
}

@media (min-width: 1200px) {
  .col-xl-2 {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
</style>

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
      <i class="fab fa-cpp"></i>
      <i class="fab fa-linux"></i>
      <i class="fab fa-docker"></i>
    </div>
    <div class="design-elements" data-depth="0.6">
      <svg class="circuit-paths"></svg>
    </div>
  </div>
</div>

<div class="cv-content" style="display: none;">
  <div class="cv">
    {% for entry in site.data.cv %}
      <div class="cv-section">
        <h2 class="cv-section-title">{{ entry.title }}</h2>
        {% if entry.type == "map" %}
          <table class="cv-map">
            {% for item in entry.contents %}
              <tr>
                <td class="cv-field">{{ item.name }}</td>
                <td class="cv-value">{{ item.value }}</td>
              </tr>
            {% endfor %}
          </table>
        {% elsif entry.type == "nested_list" %}
          {% for item in entry.contents %}
            <h3 class="cv-subsection-title">{{ item.title }}</h3>
            <ul class="cv-list">
            {% for point in item.items %}
              <li>{{ point }}</li>
            {% endfor %}
            </ul>
          {% endfor %}
        {% elsif entry.type == "time_table" %}
          <div class="cv-timeline">
            {% for item in entry.contents %}
              <div class="cv-item">
                <div class="cv-item-header">
                  <h3>{{ item.title }}</h3>
                  {% if item.institution %}
                    <h4>{{ item.institution }}</h4>
                  {% endif %}
                </div>
                <div class="cv-item-meta">
                  <span class="cv-item-year">{{ item.year }}</span>
                  {% if item.location %}
                    <span class="cv-item-location">{{ item.location }}</span>
                  {% endif %}
                </div>
                {% if item.description %}
                  <ul class="cv-description">
                    {% for desc in item.description %}
                      <li>{{ desc }}</li>
                    {% endfor %}
                  </ul>
                {% endif %}
              </div>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    {% endfor %}

    <div class="cv-footer">
      <a href="{{ page.cv_pdf | prepend: '/assets/pdf/' | relative_url }}" class="download-cv">
        <i class="fas fa-download"></i>
        Download PDF Version
      </a>
    </div>
  </div>
</div>

<script>
function startCVExperience() {
  document.querySelector('.cv-intro').style.transform = 'translateY(-100vh)';
  document.querySelector('.cv-intro').style.opacity = '0';
  
  setTimeout(() => {
    document.querySelector('.cv-intro').style.display = 'none';
    document.querySelector('.cv-content').style.display = 'block';
    AOS.refresh();
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
  const svg = document.querySelector('.circuit-paths');
  createCircuitPaths(svg);
  
  const scene = document.querySelector('.parallax-elements');
  const parallax = new Parallax(scene);
  
  const text = document.querySelector('.typing-text');
  new TypeIt(text, {
    speed: 50,
    waitUntilVisible: true
  }).go();
});

function createCircuitPaths(svg) {
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
