---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 2
cv_pdf: Karthigeyan_Resume_2025_May.pdf
description: A showcase of my professional journey, skills, and achievements in technology and innovation.
---

<div class="cv-container">
  <!-- Sidebar Navigation -->
  <div class="cv-sidebar">
    <div class="sidebar-nav">
      <h4>Quick Navigation</h4>
      <ul>
        <li><a href="#general-information">General Information</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a>
          <ul>
            <li><a href="#current-roles">Current Roles</a></li>
            <li><a href="#previous-roles">Previous Roles</a></li>
            <li><a href="#early-career">Early Career</a></li>
          </ul>
        </li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
  </div>

  <!-- Main Content -->
  <div class="cv-content">
    <!-- General Information -->
    <section id="general-information" class="cv-section">
      <h2>General Information</h2>
      {% for item in site.data.cv.general_info %}
      <div class="info-item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.value }}</p>
      </div>
      {% endfor %}
    </section>

    <!-- Education -->
    <section id="education" class="cv-section">
      <h2>Education</h2>
      {% for edu in site.data.cv.education %}
      <div class="education-item">
        <h3>{{ edu.institution }}</h3>
        <p class="degree">{{ edu.degree }}</p>
        <p class="period">{{ edu.period }}</p>
        {% if edu.description %}
        <p class="description">{{ edu.description }}</p>
        {% endif %}
      </div>
      {% endfor %}
    </section>

    <!-- Experience -->
    <section id="experience" class="cv-section">
      <h2>Experience</h2>
      
      <!-- Current Roles -->
      <div id="current-roles">
        <h3>Current Roles</h3>
        {% for role in site.data.cv.experience.current %}
        <div class="experience-item">
          <h4>{{ role.position }}</h4>
          <p class="company">{{ role.company }}</p>
          <p class="period">{{ role.period }}</p>
          <ul class="responsibilities">
            {% for item in role.responsibilities %}
            <li>{{ item }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endfor %}
      </div>

      <!-- Previous Roles -->
      <div id="previous-roles">
        <h3>Previous Roles</h3>
        {% for role in site.data.cv.experience.previous %}
        <div class="experience-item">
          <h4>{{ role.position }}</h4>
          <p class="company">{{ role.company }}</p>
          <p class="period">{{ role.period }}</p>
          <ul class="responsibilities">
            {% for item in role.responsibilities %}
            <li>{{ item }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endfor %}
      </div>

      <!-- Early Career -->
      <div id="early-career">
        <h3>Early Career</h3>
        {% for role in site.data.cv.experience.early %}
        <div class="experience-item">
          <h4>{{ role.position }}</h4>
          <p class="company">{{ role.company }}</p>
          <p class="period">{{ role.period }}</p>
          <ul class="responsibilities">
            {% for item in role.responsibilities %}
            <li>{{ item }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endfor %}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="cv-section">
      <h2>Projects</h2>
      {% for project in site.data.cv.projects %}
      <div class="project-item">
        <h3>{{ project.name }}</h3>
        <p class="period">{{ project.period }}</p>
        <p class="description">{{ project.description }}</p>
        {% if project.technologies %}
        <p class="technologies">Technologies: {{ project.technologies | join: ", " }}</p>
        {% endif %}
      </div>
      {% endfor %}
    </section>

    <!-- Skills -->
    <section id="skills" class="cv-section">
      <h2>Skills</h2>
      {% for category in site.data.cv.skills %}
      <div class="skill-category">
        <h3>{{ category.category }}</h3>
        <ul class="skill-list">
          {% for skill in category.items %}
          <li>{{ skill }}</li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </section>
  </div>
</div>

<style>
.cv-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.cv-sidebar {
  flex: 0 0 250px;
  position: sticky;
  top: 2rem;
  align-self: flex-start;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding-right: 1rem;
}

.sidebar-nav {
  background: var(--global-bg-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid var(--global-divider-color);
}

.sidebar-nav h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--global-theme-color);
  font-weight: 600;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav ul ul {
  padding-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.sidebar-nav li {
  margin-bottom: 0.5rem;
}

.sidebar-nav a {
  color: var(--global-text-color);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
}

.sidebar-nav a:hover {
  color: var(--global-theme-color);
}

.cv-content {
  flex: 1;
  max-width: 800px;
}

/* CV Section Styles */
.cv-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--global-bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid var(--global-divider-color);
}

.cv-section h2 {
  color: var(--global-theme-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-theme-color);
}

.cv-section h3 {
  color: var(--global-text-color);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.cv-section h4 {
  color: var(--global-theme-color);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.info-item, .education-item, .experience-item, .project-item {
  margin-bottom: 1.5rem;
}

#current-roles, #previous-roles, #early-career {
  margin-bottom: 2.5rem;
}

.experience-item {
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 1.5rem;
  margin-bottom: 2.5rem;
}

.experience-item:last-child {
  border-bottom: none;
}

.period {
  color: var(--global-theme-color);
  font-style: italic;
  margin: 0.5rem 0;
}

.company {
  font-weight: 500;
  margin: 0.25rem 0;
}

.responsibilities {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.skill-category {
  margin-bottom: 1.5rem;
}

.skill-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-list li {
  background: var(--global-code-bg-color);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .cv-container {
    flex-direction: column;
  }
  
  .cv-sidebar {
    position: relative;
    top: 0;
    flex: 0 0 auto;
    max-height: none;
    margin-bottom: 2rem;
  }

  .cv-section {
    padding: 1.5rem;
  }

  .skill-list {
    flex-direction: column;
  }
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Active Section Highlight */
.sidebar-nav a.active {
  color: var(--global-theme-color);
  font-weight: 600;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Get all sections
  const sections = document.querySelectorAll('.cv-section');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  // Highlight active section in sidebar
  function highlightActiveSection() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }

  // Add scroll event listener
  window.addEventListener('scroll', highlightActiveSection);

  // Smooth scroll to section when clicking sidebar links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
</script>
