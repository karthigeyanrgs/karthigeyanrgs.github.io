---
layout: page
permalink: /repositories/
title: Repositories
description: A collection of my open source contributions and personal projects.
nav: true
nav_order: 6
---

{% include common_styles.liquid %}

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
.language-dot.cpp { background: #f34b7d; }
.language-dot.javascript { background: #f1e05a; }
.language-dot.go { background: #00ADD8; }
.language-dot.rust { background: #dea584; }
.language-dot.tex { background: #3D6117; }
.language-dot.scss { background: #cf649a; }
.language-dot.ruby { background: #701516; }
.language-dot.typescript { background: #2b7489; }
.language-dot.vue { background: #41b883; }
.language-dot.julia { background: #a270ba; }
.language-dot.java { background: #b07219; }
.language-dot.matlab { background: #e16737; }
.language-dot.css { background: #563d7c; }

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
    <p>Exploring the intersection of robotics, computer vision, and machine learning</p>
  </div>

  <div class="repo-categories">
    <button class="category-button active" data-category="all">All</button>
    <button class="category-button" data-category="robotics">Robotics & SLAM</button>
    <button class="category-button" data-category="vision">Computer Vision</button>
    <button class="category-button" data-category="ml">Machine Learning</button>
    <button class="category-button" data-category="scientific">Scientific Computing</button>
  </div>

  <div class="repo-grid">
    <!-- rtabmap -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/rtabmap" target="_blank">rtabmap</a>
      </h3>
      <p class="repo-description">RTAB-Map library and standalone application for real-time appearance-based mapping and localization.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot cpp"></span>
          C++
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- VGGT-SLAM -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/VGGT-SLAM" target="_blank">VGGT-SLAM</a>
      </h3>
      <p class="repo-description">VGGT-SLAM: Dense RGB SLAM Optimized on the SL(4) Manifold. Advanced SLAM implementation with geometric optimization.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- vggt -->
    <div class="repo-card" data-category="vision">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/vggt" target="_blank">vggt</a>
      </h3>
      <p class="repo-description">VGGT: Visual Geometry Grounded Transformer - CVPR 2025 Best Paper Award winner for 3D geometry understanding.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- IsaacSim -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/IsaacSim" target="_blank">IsaacSim</a>
      </h3>
      <p class="repo-description">NVIDIA Isaac Sim™ for developing, simulating, and testing AI-driven robots in realistic virtual environments.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- mast3r -->
    <div class="repo-card" data-category="vision">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/mast3r" target="_blank">mast3r</a>
      </h3>
      <p class="repo-description">Grounding Image Matching in 3D with MASt3R. Advanced 3D-aware image matching and reconstruction.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- LightGlue -->
    <div class="repo-card" data-category="vision">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/LightGlue" target="_blank">LightGlue</a>
      </h3>
      <p class="repo-description">LightGlue: Local Feature Matching at Light Speed (ICCV 2023). High-performance feature matching for computer vision.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- IsaacSimZMQ -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/IsaacSimZMQ" target="_blank">IsaacSimZMQ</a>
      </h3>
      <p class="repo-description">Isaac SIM extension for communication with external applications via ZMQ. Enables real-time simulation integration.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- DROID-SLAM -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/DROID-SLAM" target="_blank">DROID-SLAM</a>
      </h3>
      <p class="repo-description">DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras. State-of-the-art SLAM implementation.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- MASt3R-SLAM -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/MASt3R-SLAM" target="_blank">MASt3R-SLAM</a>
      </h3>
      <p class="repo-description">MASt3R-SLAM: Real-Time Dense SLAM with 3D Reconstruction Priors (CVPR 2025). Advanced dense SLAM system.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- rsl_rl -->
    <div class="repo-card" data-category="ml">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/rsl_rl" target="_blank">rsl_rl</a>
      </h3>
      <p class="repo-description">Fast and simple implementation of RL algorithms, designed to run fully on GPU. Optimized for robotics applications.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- rl_games -->
    <div class="repo-card" data-category="ml">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/rl_games" target="_blank">rl_games</a>
      </h3>
      <p class="repo-description">Reinforcement learning implementations and algorithms. Comprehensive RL framework with various algorithms.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot jupyter"></span>
          Jupyter Notebook
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

    <!-- jetbot -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/jetbot" target="_blank">jetbot</a>
      </h3>
      <p class="repo-description">An educational AI robot based on NVIDIA Jetson Nano. Complete robotics platform for learning AI and robotics.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot jupyter"></span>
          Jupyter Notebook
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- droid_metric -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/droid_metric" target="_blank">droid_metric</a>
      </h3>
      <p class="repo-description">Run DROID-SLAM with Metric3D to improve monocular performance. Enhanced SLAM with metric depth estimation.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- Autonomous-Aerial-Robotics-course -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/Autonomous-Aerial-Robotics-course" target="_blank">Autonomous-Aerial-Robotics-course</a>
      </h3>
      <p class="repo-description">Class notes from the Lectures on "Autonomous Aerial Robots". Comprehensive course materials on drone robotics.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot markdown"></span>
          Markdown
        </div>
        <span><i class="fas fa-star"></i> Original</span>
      </div>
    </div>

    <!-- AutonomousDrivingCookbook -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/AutonomousDrivingCookbook" target="_blank">AutonomousDrivingCookbook</a>
      </h3>
      <p class="repo-description">Scenarios, tutorials and demos for Autonomous Driving. Comprehensive guide to self-driving car development.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot jupyter"></span>
          Jupyter Notebook
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- PathPlanning -->
    <div class="repo-card" data-category="robotics">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/PathPlanning" target="_blank">PathPlanning</a>
      </h3>
      <p class="repo-description">Common used path planning algorithms with animations. Visual demonstrations of various pathfinding algorithms.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- Scientific Computing Projects -->
    <!-- computer-science -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/computer-science" target="_blank">computer-science</a>
      </h3>
      <p class="repo-description">Path to a free self-taught education in Computer Science. Comprehensive curriculum covering fundamental CS concepts and algorithms.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot html"></span>
          HTML
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- practical-python -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/practical-python" target="_blank">practical-python</a>
      </h3>
      <p class="repo-description">Practical Python Programming course by @dabeaz. Hands-on Python programming with real-world applications and examples.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- mcmc-python -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/mcmc-python" target="_blank">mcmc-python</a>
      </h3>
      <p class="repo-description">Create Your Own Metropolis-Hastings Markov Chain Monte Carlo Algorithm for Bayesian Inference. Statistical computing and probabilistic programming.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- lbm -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/lbm" target="_blank">lbm</a>
      </h3>
      <p class="repo-description">A simple full-python 2D lattice-Boltzmann code. Computational fluid dynamics simulation using the lattice Boltzmann method.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot python"></span>
          Python
        </div>
        <span><i class="fas fa-code-branch"></i> Forked</span>
      </div>
    </div>

    <!-- Our_love_for_math -->
    <div class="repo-card" data-category="scientific">
      <h3 class="repo-title">
        <a href="https://github.com/karthigeyanrgs/Our_love_for_math" target="_blank">Our_love_for_math</a>
      </h3>
      <p class="repo-description">Gitbook for sharing math notes. Mathematical concepts, proofs, and educational materials for advanced mathematics.</p>
      <div class="repo-meta">
        <div class="repo-language">
          <span class="language-dot markdown"></span>
          Markdown
        </div>
        <span><i class="fas fa-star"></i> Original</span>
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
