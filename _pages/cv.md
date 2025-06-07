---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 5
cv_pdf: Karthigeyan_Resume_2025_May.pdf
description: A showcase of my professional journey, skills, and achievements in technology and innovation.
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

.cv-section {
  margin-bottom: 3rem;
}

.cv-section-title {
  color: var(--global-theme-color);
  margin-bottom: 1rem;
}

.cv-year {
  color: var(--global-text-color-light);
}

.table-cv {
  width: 100%;
  margin-bottom: 1rem;
}

.td-left {
  width: 200px;
  vertical-align: top;
  padding-right: 1rem;
}

.td-right {
  vertical-align: top;
}

.cv-subsection-title {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

ul.items {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0.5rem;
}

ul.items li {
  margin-bottom: 0.25rem;
  position: relative;
  padding-left: 1.5rem;
}

ul.items li:before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: var(--global-theme-color);
}

.institution {
  color: var(--global-text-color);
  font-weight: 500;
}

.location {
  color: var(--global-text-color-light);
  font-style: italic;
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
    {% for section in site.data.cv %}
      <div class="cv-section">
        <h2 class="cv-section-title">{{ section.title }}</h2>
        {% if section.type == "map" %}
          <table class="table table-cv table-borderless">
            {% for content in section.contents %}
              <tr>
                <td class="td-left"><b>{{ content.name }}</b></td>
                <td class="td-right">{{ content.value }}</td>
              </tr>
            {% endfor %}
          </table>
        {% elsif section.type == "time_table" %}
          <table class="table table-cv table-borderless">
            {% assign positions = section.contents | reverse %}
            {% for content in positions %}
              <tr>
                <td class="td-left" style="width: 160px">
                  {% if content.year %}
                    <span class="cv-year">{{ content.year }}</span>
                  {% endif %}
                </td>
                <td class="td-right">
                  {% if content.title %}
                    <b>{{ content.title }}</b>
                  {% endif %}
                  {% if content.institution %}
                    <div class="institution">{{ content.institution }}</div>
                  {% endif %}
                  {% if content.location %}
                    <div class="location">{{ content.location }}</div>
                  {% endif %}
                  {% if content.description %}
                    <ul class="items">
                      {% for item in content.description %}
                        <li>{{ item }}</li>
                      {% endfor %}
                    </ul>
                  {% endif %}
                </td>
              </tr>
            {% endfor %}
          </table>
        {% elsif section.type == "nested_list" %}
          {% for content in section.contents %}
            <div class="cv-subsection">
              <h3 class="cv-subsection-title">{{ content.title }}</h3>
              <ul class="items">
                {% for item in content.items %}
                  <li>{{ item }}</li>
                {% endfor %}
              </ul>
            </div>
          {% endfor %}
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
