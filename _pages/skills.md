---
layout: page
permalink: /skills/
title: Skills
description: A comprehensive overview of my technical and professional skills.
nav: true
nav_order: 5
---

{% include common_styles.liquid %}

{% include skills_dependencies.liquid %}

<div class="skills-container" data-aos="fade-up">
  <div class="skills-intro" data-aos="fade-in">
    <h1 class="typing-text">Skills & Expertise</h1>
    <p class="subtitle">A journey through my technical capabilities</p>
  </div>



  {% for category in site.data.skills %}
    <div class="skill-section" data-aos="fade-up">
      <h2><i class="fas fa-code"></i> {{ category.name }}</h2>
      <div class="skills-grid">
        {% for skill in category.items %}
          <div class="skill-card" data-aos="zoom-in" data-aos-delay="{{ forloop.index0 | times: 100 }}">
            <h3>{{ skill.name }}</h3>
            <div class="skill-bar">
              <div class="skill-level" style="width: {{ skill.level }}%">
                <span class="skill-percent">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}



  <div class="skill-section scientific-computing" data-aos="fade-right">
    <h2><i class="fas fa-brain"></i> Scientific Computing</h2>
    <div class="sci-comp-grid">
      <div class="sci-comp-card" data-aos="fade-up">
        <div class="card-header">
          <i class="fas fa-square-root-alt"></i>
          <h3>NumPy</h3>
        </div>
        <div class="circular-progress" data-value="95">
          <div class="progress-value">95%</div>
        </div>
      </div>
      <div class="sci-comp-card" data-aos="fade-up" data-aos-delay="100">
        <div class="card-header">
          <i class="fas fa-chart-line"></i>
          <h3>SciPy</h3>
        </div>
        <div class="circular-progress" data-value="90">
          <div class="progress-value">90%</div>
        </div>
      </div>
      <div class="sci-comp-card" data-aos="fade-up" data-aos-delay="200">
        <div class="card-header">
          <i class="fas fa-cube"></i>
          <h3>ParaView</h3>
        </div>
        <div class="circular-progress" data-value="85">
          <div class="progress-value">85%</div>
        </div>
      </div>
      <div class="sci-comp-card" data-aos="fade-up" data-aos-delay="300">
        <div class="card-header">
          <i class="fas fa-project-diagram"></i>
          <h3>Dolfin</h3>
        </div>
        <div class="circular-progress" data-value="80">
          <div class="progress-value">80%</div>
        </div>
      </div>
      <div class="sci-comp-card" data-aos="fade-up" data-aos-delay="400">
        <div class="card-header">
          <i class="fas fa-border-all"></i>
          <h3>Gmsh</h3>
        </div>
        <div class="circular-progress" data-value="75">
          <div class="progress-value">75%</div>
        </div>
      </div>
    </div>
  </div>

  <div class="skill-section languages" data-aos="fade-left">
    <h2><i class="fas fa-language"></i> Language Proficiency</h2>
    <div class="language-grid">
      {% assign languages = site.data.skills | where: "name", "Languages" | first %}
      {% for lang in languages.items %}
        {% assign level = lang.level | plus: 0 %}
        {% if level >= 90 %}
          {% assign proficiency = "Native" %}
          {% assign flag = "🇬🇧" %}
        {% elsif level >= 70 %}
          {% assign proficiency = "Professional" %}
          {% assign flag = "🇫🇷" %}
        {% elsif level >= 50 %}
          {% assign proficiency = "Intermediate" %}
          {% assign flag = "🇮🇳" %}
        {% else %}
          {% assign proficiency = "Basic" %}
          {% assign flag = "🇩🇪" %}
        {% endif %}
        <div class="language-card {{ proficiency | downcase }}" data-aos="zoom-in" data-aos-delay="{{ forloop.index0 | times: 100 }}">
          <div class="lang-icon">{{ flag }}</div>
          <h3>{{ lang.name }}</h3>
          <span class="lang-level">{{ proficiency }}</span>
          <div class="lang-bar" style="width: {{ lang.level }}%"></div>
        </div>
      {% endfor %}
    </div>
  </div>

  <div class="skill-section expertise-areas" data-aos="fade-up">
    <h2><i class="fas fa-laptop-code"></i> Technical Expertise Areas</h2>
    <div class="expertise-grid">
      <div class="expertise-card" data-aos="flip-left">
        <i class="fas fa-microchip"></i>
        <h3>High Performance Computing</h3>
        <ul>
          <li>OpenMPI</li>
          <li>Parallel Programming</li>
          <li>CUDA</li>
        </ul>
      </div>
      <div class="expertise-card" data-aos="flip-left" data-aos-delay="100">
        <i class="fas fa-chart-bar"></i>
        <h3>Simulation & Modeling</h3>
        <ul>
          <li>FEniCS</li>
          <li>ParaView</li>
          <li>Gmsh</li>
          <li>MATLAB</li>
        </ul>
      </div>
      <div class="expertise-card" data-aos="flip-left" data-aos-delay="200">
        <i class="fas fa-server"></i>
        <h3>DevOps & Build Systems</h3>
        <ul>
          <li>CI/CD Pipelines</li>
          <li>Infrastructure as Code</li>
          <li>Container Orchestration</li>
          <li>Automated Deployments</li>
        </ul>
      </div>
      <div class="expertise-card" data-aos="flip-left" data-aos-delay="300">
        <i class="fas fa-calculator"></i>
        <h3>Scientific Computing</h3>
        <ul>
          <li>NumPy</li>
          <li>SciPy</li>
          <li>Pandas</li>
          <li>Scikit-learn</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="skill-section learning-journey" data-aos="fade-up">
    <h2><i class="fas fa-road"></i> Learning Journey</h2>
    <div class="journey-timeline">
      <div class="timeline-item" data-aos="fade-right">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2024-Present</h3>
          <p>Simulations, VSLAM and 3D reconstruction techniques</p>
        </div>
      </div>
      <div class="timeline-item" data-aos="fade-left">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2022-2024</h3>
          <p>DevOps & Build System Optimization</p>
        </div>
      </div>
      <div class="timeline-item" data-aos="fade-right">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2019-2021</h3>
          <p>Scientific Computing & HPC</p>
        </div>
      </div>
      <div class="timeline-item" data-aos="fade-left">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2017-2019</h3>
          <p>Computational Fluid Dynamics & Numerical Methods</p>
        </div>
      </div>
    </div>
  </div>

  <div class="skill-section competencies" data-aos="fade-up">
    <h2><i class="fas fa-check-circle"></i> Professional Competencies</h2>
    <div class="competencies-grid">
      <div class="competency-card" data-aos="zoom-in">
        <i class="fas fa-brain"></i>
        <h3>Analytical Thinking</h3>
        <p>Strong problem-solving abilities with a systematic approach</p>
      </div>
      <div class="competency-card" data-aos="zoom-in" data-aos-delay="100">
        <i class="fas fa-users"></i>
        <h3>Team Leadership</h3>
        <p>Experience in leading technical teams and projects</p>
      </div>
      <div class="competency-card" data-aos="zoom-in" data-aos-delay="200">
        <i class="fas fa-file-alt"></i>
        <h3>Technical Writing</h3>
        <p>Excellent documentation and communication skills</p>
      </div>
      <div class="competency-card" data-aos="zoom-in" data-aos-delay="300">
        <i class="fas fa-chart-line"></i>
        <h3>Optimization</h3>
        <p>Proven track record in optimizing development workflows</p>
      </div>
      <div class="competency-card" data-aos="zoom-in" data-aos-delay="400">
        <i class="fas fa-graduation-cap"></i>
        <h3>Continuous Learning</h3>
        <p>Commitment to improvement and staying current</p>
      </div>
    </div>
  </div>
</div>

<style>
html, body {
  overflow-x: hidden;
}

/* Hide scrollbar for all devices */
.skills-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.skills-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--global-text-color);
  width: 100%;
  box-sizing: border-box;
}

.skills-grid,
.tools-grid,
.sci-comp-grid,
.language-grid,
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.skill-category {
  background: var(--global-bg-color);
  border: 1px solid var(--global-border-color);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

.skill-category h3 {
  color: var(--global-theme-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-list li {
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
}

.skill-list li::before {
  content: "•";
  color: var(--global-theme-color);
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .skills-container {
    padding: 1rem;
  }
  
  .skills-grid,
  .tools-grid,
  .sci-comp-grid,
  .language-grid,
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-category {
    padding: 1rem;
  }
}

.skills-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-intro h1 {
  color: var(--global-theme-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.skills-intro .subtitle {
  color: var(--global-text-color);
  font-size: 1.2rem;
  opacity: 0.9;
}

.skill-section {
  background: var(--global-bg-color);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--global-divider-color);
}

.skill-section h2 {
  color: var(--global-theme-color);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--global-theme-color);
  padding-bottom: 0.5rem;
}

.skill-section h2 i {
  margin-right: 0.5rem;
}

/* Programming Languages */
.skill-card {
  background: var(--global-code-bg-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--global-divider-color);
}

.skill-card h3 {
  color: var(--global-text-color);
  font-size: 1.2rem;
  margin: 1rem 0;
}

.skill-bar {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  height: 10px;
  overflow: hidden;
}

.skill-level {
  background: var(--global-theme-color);
  height: 100%;
  border-radius: 20px;
  position: relative;
}

.skill-percent {
  position: absolute;
  right: 0;
  top: -25px;
  color: var(--global-text-color);
  font-weight: bold;
}

/* Development Tools */
.tool-item {
  background: var(--global-code-bg-color);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  border: 1px solid var(--global-divider-color);
}

.tool-item i {
  font-size: 2rem;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}

.tool-item span {
  display: block;
  color: var(--global-text-color);
  font-weight: bold;
  margin: 0.5rem 0;
}

.tool-level {
  color: var(--global-text-color);
  font-weight: bold;
}

/* Scientific Computing */
.sci-comp-card {
  background: var(--global-code-bg-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid var(--global-divider-color);
}

.card-header h3 {
  color: var(--global-text-color);
  margin: 0.5rem 0;
}

.card-header i {
  font-size: 2rem;
  color: var(--global-theme-color);
}

.progress-value {
  color: var(--global-text-color);
  font-weight: bold;
  font-size: 1.2rem;
}

/* Language Proficiency */
.language-card {
  background: var(--global-code-bg-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid var(--global-divider-color);
}

.language-card h3 {
  color: var(--global-text-color);
  margin: 0.5rem 0;
}

.lang-level {
  color: var(--global-text-color);
  display: block;
  margin: 0.5rem 0;
  font-weight: bold;
}

.lang-bar {
  height: 6px;
  background: var(--global-theme-color);
  border-radius: 3px;
  margin-top: 0.5rem;
}

/* Expertise Areas */
.expertise-card {
  background: var(--global-code-bg-color);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid var(--global-divider-color);
}

.expertise-card h3 {
  color: var(--global-text-color);
  margin: 1rem 0;
}

.expertise-card i {
  font-size: 2rem;
  color: var(--global-theme-color);
}

.expertise-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
}

.expertise-card ul li {
  color: var(--global-text-color);
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.expertise-card ul li:before {
  content: "•";
  color: var(--global-theme-color);
  position: absolute;
  left: 0.5rem;
}

/* Professional Competencies */
.competencies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.competency-card {
  background: var(--global-code-bg-color);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid var(--global-divider-color);
  text-align: center;
}

.competency-card i {
  font-size: 2.5rem;
  color: var(--global-theme-color);
  margin-bottom: 1rem;
}

.competency-card h3 {
  color: var(--global-text-color);
  margin: 1rem 0;
  font-size: 1.3rem;
}

.competency-card p {
  color: var(--global-text-color);
  margin: 0;
  line-height: 1.6;
  opacity: 0.9;
}

/* Learning Journey */
.journey-timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
  padding-left: 2rem;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: var(--global-theme-color);
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 8px;
}

.timeline-content h3 {
  color: var(--global-theme-color);
  margin: 0 0 0.5rem 0;
}

.timeline-content p {
  color: var(--global-text-color);
  margin: 0;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.skill-section {
  animation: fadeIn 0.5s ease-out;
}

.skill-card,
.tool-item,
.language-card,
.competency-card {
  animation: slideIn 0.5s ease-out;
}
</style>

<script>
// Mobile-optimized initialization
(function() {
  // Check if device is mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Performance optimization for mobile
  const perfOptions = {
    passive: true,
    capture: false
  };

  // Initialize skills with mobile considerations
  function initializeSkills() {
    // Mobile-optimized AOS settings
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: isMobile ? 500 : 1000, // Faster animations on mobile
        once: true,
        offset: isMobile ? 50 : 100, // Smaller offset on mobile
        delay: isMobile ? 0 : 100, // No delay on mobile
        disable: window.innerWidth < 768 && 'phone' // Disable on small mobile devices
      });
    }

    // Mobile-optimized typing effect
    try {
      if (typeof TypeIt !== 'undefined') {
        new TypeIt(".typing-text", {
          speed: isMobile ? 70 : 50, // Slightly slower on mobile for better readability
          waitUntilVisible: true,
          cursor: true,
          html: true,
          lifeLike: true,
          breakLines: true,
          startDelay: isMobile ? 100 : 250,
          afterComplete: function(instance) {
            instance.destroy(); // Clean up after completion
          }
        }).go();
      }
    } catch (e) {
      console.warn('TypeIt initialization failed:', e);
      document.querySelector('.typing-text').style.opacity = 1;
    }

    // Mobile-optimized intersection observer
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smooth animations
          requestAnimationFrame(() => {
            entry.target.style.width = entry.target.dataset.width;
            // Unobserve after animation
            observer.unobserve(entry.target);
          });
        }
      });
    };

    // Adjust threshold based on device
    const observerOptions = {
      threshold: isMobile ? 0.2 : 0.5,
      rootMargin: isMobile ? '30px' : '50px'
    };

    // Initialize observer with fallback
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      document.querySelectorAll('.skill-level').forEach(bar => {
        observer.observe(bar);
      });
    } else {
      // Fallback for older devices
      document.querySelectorAll('.skill-level').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }

    // Mobile-optimized circular progress
    document.querySelectorAll('.circular-progress').forEach(progress => {
      const value = progress.dataset.value;
      if (CSS.supports('background: conic-gradient(#000, #000)')) {
        requestAnimationFrame(() => {
          progress.style.background = `conic-gradient(
            var(--global-theme-color) ${value * 3.6}deg,
            #eee ${value * 3.6}deg
          )`;
        });
      } else {
        // Fallback for older mobile browsers
        progress.style.background = `linear-gradient(
          90deg,
          var(--global-theme-color) ${value}%,
          #eee ${value}%
        )`;
      }
    });

    // Touch interaction handling
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      const interactiveElements = document.querySelectorAll(
        '.skill-card, .tool-item, .language-card, .competency-card'
      );

      // Add touch feedback
      interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
          // Prevent double-tap zoom on iOS
          e.preventDefault();
          this.style.transform = 'scale(0.98)';
        }, perfOptions);

        element.addEventListener('touchend', function() {
          this.style.transform = 'scale(1)';
        }, perfOptions);

        // Handle touch move cancellation
        element.addEventListener('touchmove', function() {
          this.style.transform = 'scale(1)';
        }, perfOptions);
      });

      // Add smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, perfOptions);
      });
    }

    // Handle orientation changes
    if (isMobile) {
      window.addEventListener('orientationchange', function() {
        // Wait for orientation change to complete
        setTimeout(() => {
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
          // Recalculate any viewport-dependent values
          document.querySelectorAll('.skill-level').forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = bar.dataset.width;
            // Force reflow
            bar.offsetHeight;
            bar.style.transition = '';
          });
        }, 200);
      }, perfOptions);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSkills, perfOptions);
  } else {
    initializeSkills();
  }

  // Handle dynamic content changes
  document.addEventListener('turbolinks:load', initializeSkills, perfOptions);

  // Efficient resize handling
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, isMobile ? 100 : 150);
  }, perfOptions);

  // Clean up on page unload
  window.addEventListener('unload', function() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, perfOptions);
})();
</script> 