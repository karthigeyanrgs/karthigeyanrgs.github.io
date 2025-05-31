---
layout: page
permalink: /repositories/
title: repositories
description: A collection of my work and contributions in various domains - from scientific computing to robotics simulations.
nav: true
nav_order: 3
---

<!-- Repository page style -->
<style>
.repo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.repo-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(45deg, var(--global-theme-color), var(--global-hover-color));
  border-radius: 15px;
  color: white;
  position: relative;
  overflow: hidden;
}

.repo-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1));
  transform: translateX(-100%);
  animation: shine 3s infinite;
}

@keyframes shine {
  100% { transform: translateX(100%); }
}

.repo-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-button:hover,
.category-button.active {
  background: var(--global-theme-color);
  color: white;
  transform: translateY(-2px);
}

.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.repo-card {
  background: var(--global-bg-color);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.repo-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--global-theme-color), var(--global-hover-color));
}

.repo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.repo-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--global-theme-color);
}

.repo-description {
  font-size: 0.9rem;
  color: var(--global-text-color);
  margin-bottom: 1rem;
}

.repo-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--global-text-color-light);
}

.repo-meta i {
  color: var(--global-theme-color);
}

.repo-language {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.language-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.language-dot.python { background: #3572A5; }
.language-dot.jupyter { background: #DA5B0B; }
.language-dot.html { background: #e34c26; }

@media (max-width: 768px) {
  .repo-container {
    padding: 1rem;
  }
  
  .repo-grid {
    grid-template-columns: 1fr;
  }
  
  .repo-categories {
    justify-content: center;
  }
}

/* Dark mode enhancements */
@media (prefers-color-scheme: dark) {
  .repo-card {
    background: var(--global-bg-color);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .category-button {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>

<div class="repo-container">
  <div class="repo-header">
    <h1>GitHub Repositories</h1>
    <p>Exploring the intersection of scientific computing, robotics, and machine learning</p>
  </div>

  <div class="repo-categories">
    <button class="category-button active" data-category="all">All</button>
    <button class="category-button" data-category="scientific">Scientific Computing</button>
    <button class="category-button" data-category="ml">Machine Learning</button>
    <button class="category-button" data-category="robotics">Robotics</button>
  </div>

  <div class="repo-grid">
    <!-- CFDPython -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/CFDPython" target="_blank">CFDPython</a>
      </h3>
      <p class="repo-description">A sequence of Jupyter notebooks featuring the "12 Steps to Navier-Stokes". Comprehensive guide to computational fluid dynamics.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot jupyter"></span>
          Jupyter Notebook
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- gpubootcamp -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/gpubootcamp" target="_blank">gpubootcamp</a>
      </h3>
      <p class="repo-description">GPU bootcamp material for HPC and AI applications. Comprehensive tutorials and examples for GPU computing.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot jupyter"></span>
          Jupyter Notebook
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- IntroToJulia -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/IntroToJulia" target="_blank">IntroToJulia</a>
      </h3>
      <p class="repo-description">A Deep Introduction to Julia for Data Science and Scientific Computing. Comprehensive guide to Julia programming.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot html"></span>
          HTML
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- ML-From-Scratch -->
    <div class="repo-card" data-category="ml">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/ML-From-Scratch" target="_blank">ML-From-Scratch</a>
      </h3>
      <p class="repo-description">Machine Learning From Scratch. Bare bones NumPy implementations of machine learning models and algorithms with a focus on accessibility.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- nano-pgo -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/nano-pgo" target="_blank">nano-pgo</a>
      </h3>
      <p class="repo-description">Single-file, python-only pose-graph optimization implementation for educational purposes. Essential for robotics and computer vision.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- ThinkStats2 -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/ThinkStats2" target="_blank">ThinkStats2</a>
      </h3>
      <p class="repo-description">Text and supporting code for Think Stats, 2nd Edition. Statistical analysis and probability in Python.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot jupyter"></span>
          Jupyter Notebook
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-button');
  const repoCards = document.querySelectorAll('.repo-card');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter repositories
      const category = button.dataset.category;
      repoCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Add animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.5s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  repoCards.forEach(card => observer.observe(card));
});
</script>
