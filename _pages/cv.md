---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 5
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
    <!-- The CV content will be automatically populated here -->
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
}
</style>
