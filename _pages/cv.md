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
  <!-- General Information -->
  <div class="general-info-section" data-aos="fade-up">
    <h2 class="section-title">General Information</h2>
    <div class="info-grid">
      <div class="info-item">
        <h3>Full Name</h3>
        <p>Karthigeyan Ganesh Shankar</p>
      </div>
      <div class="info-item">
        <h3>Email</h3>
        <p>karthigeyanrgs@gmail.com</p>
      </div>
      <div class="info-item">
        <h3>Languages</h3>
        <p>English (Fluent), French (Intermediate), German (Beginner), Hindi (Intermediate), Tamil (Native)</p>
      </div>
    </div>
  </div>

  <!-- Experience Section -->
  <div class="experience-section" data-aos="fade-up">
    <h2 class="section-title">Experience</h2>
    <div class="timeline-container">
      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>Lead Autonomy Engineer</h3>
            <span class="timeline-date">April 2025 - Present</span>
          </div>
          <h4>Ati Motors, Bengaluru, India</h4>
          <ul>
            <li>Led to widespread adoption of simulation-first development and testing</li>
            <li>Kick-started the map-free visual navigation models which are generalized and reliable</li>
            <li>Supported the evaluation of different novel, state-of-the-art VSLAM methods</li>
            <li>Technologies: Nvidia Isaac Sim, Nvidia Warp, Pytorch</li>
          </ul>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>Senior Autonomy Engineer</h3>
            <span class="timeline-date">April 2024 - Present</span>
          </div>
          <h4>Ati Motors, Bengaluru, India</h4>
          <ul>
            <li>Spearheading team developing one button press simulation workflow with Nvidia's Isaac Sim</li>
            <li>Evaluated different OTS carrier boards (Jetson) for bot control</li>
            <li>Built production ready architecture for bot and fleet manager application</li>
            <li>Technologies: Nvidia Isaac Sim, Kubernetes, Bazel, Python, Make, Unix, Embedded C</li>
          </ul>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>Autonomy Engineer</h3>
            <span class="timeline-date">Sept 2022 - March 2024</span>
          </div>
          <h4>Ati Motors, Bengaluru, India</h4>
          <ul>
            <li>Optimized software build systems improving efficiency by 40%</li>
            <li>Developed software-in-loop (CI/CD) frameworks to automate release process</li>
            <li>Increased team productivity by 30% through system improvements</li>
            <li>Technologies: Kubernetes, Bazel, Poetry, Docker, C++, Python, Make, Unix, Bash</li>
          </ul>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>Research Assistant</h3>
            <span class="timeline-date">Oct 2018 - Mar 2019</span>
          </div>
          <h4>Institute for Aerodynamics and Fluid Mechanics, RWTH Aachen</h4>
          <ul>
            <li>Developed parallel simulations for 1M cells through 24 cores</li>
            <li>Automated visualization pipeline through Python</li>
            <li>Technologies: C++, Python, ParaView, Unix, Bash, OpenMPI</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Education Section -->
  <div class="education-section" data-aos="fade-up">
    <h2 class="section-title">Education</h2>
    <div class="timeline-container">
      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>Master of Sciences in Simulation Sciences</h3>
            <span class="timeline-date">Oct 2017 - Mar 2020</span>
          </div>
          <h4>RWTH Aachen</h4>
          <p>Coursework: High Performance Computing, High dimensional Probability theory, Stochastic Numeric, Kinetic Description of Interacting Multi-agent Systems</p>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>Bachelor of Technology in Mechanical Engineering</h3>
            <span class="timeline-date">May 2013 - May 2017</span>
          </div>
          <h4>SRM University, Chennai, India</h4>
        </div>
      </div>
    </div>
  </div>

  <!-- Projects Section -->
  <div class="projects-section" data-aos="fade-up">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <div class="project-card" data-aos="flip-up">
        <div class="project-header">
          <i class="fas fa-project-diagram"></i>
          <h3>Master Thesis - Kinetic Model on Unemployment</h3>
          <span class="project-date">Sep 2019 - Mar 2021</span>
        </div>
        <ul>
          <li>Developed mesoscopic models to characterize unemployment</li>
          <li>Performed Monte-Carlo simulations for complex scenarios</li>
          <li>Advanced research in transport equations with limited prior literature</li>
        </ul>
      </div>

      <div class="project-card" data-aos="flip-up">
        <div class="project-header">
          <i class="fas fa-code"></i>
          <h3>Unstructured Finite Element Solver</h3>
          <span class="project-date">Sep 2020 - Nov 2020</span>
        </div>
        <ul>
          <li>Programmed solver using Python (FeNiCS) for unstructured meshes</li>
          <li>Implemented automatic differentiation using dolfin-adjoint</li>
          <li>Enhanced code through parallelization</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Skills Section -->
  <div class="skills-section" data-aos="fade-up">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <div class="skill-category" data-aos="zoom-in">
        <h3>Programming</h3>
        <div class="skill-tags">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">C++</span>
          <span class="skill-tag">MATLAB</span>
          <span class="skill-tag">Bash</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">Julia</span>
        </div>
        <div class="skill-tags">
          <span class="skill-tag">Dolfin</span>
          <span class="skill-tag">ScoreP</span>
          <span class="skill-tag">LaTeX</span>
          <span class="skill-tag">Gmsh</span>
          <span class="skill-tag">ParaView</span>
          <span class="skill-tag">NumPy</span>
          <span class="skill-tag">SciPy</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Poetry</span>
          <span class="skill-tag">Bazel</span>
          <span class="skill-tag">Makefile</span>
          <span class="skill-tag">Kubernetes</span>
        </div>
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
