---
layout: page
title: Projects
permalink: /projects/
description: A showcase of my research and development projects in simulation, modeling, and engineering.
nav: true
nav_order: 4
display_categories: [research, engineering]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category" id="{{ category }}">{{ category }}</h2>
  <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
    {%- if category == "research" %}
    <!-- Research Projects -->
    <div class="col">
      <div class="card h-100 rounded-3 shadow-sm hoverable">
        <div class="card-body">
          <div class="project-header d-flex align-items-center mb-3">
            <i class="fas fa-chart-line fa-2x text-primary me-3"></i>
            <h3 class="card-title mb-0">Kinetic Model on Unemployment</h3>
          </div>
          <p class="card-text">Developed mesoscopic models to characterize unemployment patterns, performed Monte-Carlo simulations, and advanced transport equations research with minimal prior literature.</p>
          <div class="project-links">
            <a href="https://github.com/karthigeyanrgs/kinetic-unemployment-model" class="btn btn-sm btn-outline-primary" target="_blank">
              <i class="fab fa-github me-2"></i>View Code
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 rounded-3 shadow-sm hoverable">
        <div class="card-body">
          <div class="project-header d-flex align-items-center mb-3">
            <i class="fas fa-fire fa-2x text-primary me-3"></i>
            <h3 class="card-title mb-0">Convection Coupled Simulation</h3>
          </div>
          <p class="card-text">Developed an enthalpy method for convection-coupled phase change simulation, reducing complexity and validating against the Stefan problem benchmark.</p>
          <div class="project-links">
            <a href="https://github.com/karthigeyanrgs/convection-simulation" class="btn btn-sm btn-outline-primary" target="_blank">
              <i class="fab fa-github me-2"></i>View Code
            </a>
          </div>
        </div>
      </div>
    </div>
    {%- else %}
    <!-- Engineering Projects -->
    <div class="col">
      <div class="card h-100 rounded-3 shadow-sm hoverable">
        <div class="card-body">
          <div class="project-header d-flex align-items-center mb-3">
            <i class="fas fa-code fa-2x text-primary me-3"></i>
            <h3 class="card-title mb-0">Unstructured Finite Element Solver</h3>
          </div>
          <p class="card-text">Created a Python-based solver for unstructured meshes using FeNiCS, with mesh generation via Gmsh and visualization through ParaView. Implemented automatic differentiation and parallelization.</p>
          <div class="project-links">
            <a href="https://github.com/karthigeyanrgs/finite-element-solver" class="btn btn-sm btn-outline-primary" target="_blank">
              <i class="fab fa-github me-2"></i>View Code
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 rounded-3 shadow-sm hoverable">
        <div class="card-body">
          <div class="project-header d-flex align-items-center mb-3">
            <i class="fas fa-cogs fa-2x text-primary me-3"></i>
            <h3 class="card-title mb-0">Fatigue Characteristics of FGM</h3>
          </div>
          <p class="card-text">Researched and manufactured Aluminium-based functionally graded materials with various fillers, conducting experimental analysis using tri-axial accelerometer for fatigue characteristics.</p>
          <div class="project-links">
            <a href="https://github.com/karthigeyanrgs/fgm-fatigue-analysis" class="btn btn-sm btn-outline-primary" target="_blank">
              <i class="fab fa-github me-2"></i>View Code
            </a>
          </div>
        </div>
      </div>
    </div>
    {%- endif %}
  </div>
  {%- endfor %}
{%- endif %}
</div>

<!-- Add custom styling -->
<style>
/* Reduce white space on sides */
.post-content {
  max-width: 95%;
  margin: 0 auto;
}

@media (min-width: 1400px) {
  .post-content {
    max-width: 90%;
  }
}

.container-fluid {
  padding-left: 2rem;
  padding-right: 2rem;
}

/* Improve project grid layout */
.row {
  margin-left: -1rem;
  margin-right: -1rem;
}

.col {
  padding: 1rem;
}

/* Project card styling */
.card {
  transition: transform 0.3s ease-in-out;
  height: 100%;
  margin: 0;
}

.card:hover {
  transform: translateY(-5px);
}

.project-header i {
  opacity: 0.8;
}

.btn-outline-primary {
  border-radius: 20px;
  padding: 0.375rem 1rem;
}

.btn-outline-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Category headers */
.category {
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-theme-color);
}
</style>
