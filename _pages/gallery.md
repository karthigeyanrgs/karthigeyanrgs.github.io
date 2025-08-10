---
layout: page
permalink: /gallery/
title: Gallery
description: A collection of memories from my travels around Germany - from the vibrant streets of Berlin to the breathtaking landscapes of the German countryside
nav: true
nav_order: 7
---

<!-- Gallery Header -->
<div class="gallery-header text-center mb-5">
  <h1 class="display-4 fw-bold text-primary mb-3">
    <i class="fas fa-camera me-3"></i>Travel Gallery
  </h1>
  <p class="lead text-muted">Exploring Germany's rich history, vibrant culture, and stunning natural landscapes</p>
</div>

<!-- Filter Buttons -->
<div class="filter-container text-center mb-4">
  <div class="btn-group" role="group" aria-label="Gallery filters">
    <button type="button" class="btn btn-outline-primary active" data-filter="all">
      <i class="fas fa-images me-2"></i>All Photos
    </button>
    <button type="button" class="btn btn-outline-primary" data-filter="berlin">
      <i class="fas fa-city me-2"></i>Berlin
    </button>
    <button type="button" class="btn btn-outline-primary" data-filter="treks">
      <i class="fas fa-mountain me-2"></i>German Treks
    </button>
  </div>
</div>

<!-- Photo Grid -->
<div class="projects grid" id="photo-grid">
  {%- assign sorted_photos = site.data.photos | sort: "year" | reverse -%}
  {% for photo in sorted_photos %}
    {% assign category = "other" %}
    {% if photo.image contains "Berlin/" %}
      {% assign category = "berlin" %}
    {% elsif photo.image contains "Treks in Germany/" %}
      {% assign category = "treks" %}
    {% endif %}
    
    <div class="grid-item" data-category="{{ category }}">
      {% if photo.image %}
        <a href="{{ photo.image | prepend: '/assets/img/gallery/' | relative_url }}" class="photo-link" data-lightbox="gallery">
          <img src="{{ photo.image | prepend: '/assets/img/gallery/' | relative_url }}" alt="{{ photo.caption }}" loading="lazy">
          <div class="photo-overlay">
            <i class="fas fa-search-plus"></i>
          </div>
        </a>
      {% endif %}
      <div class="caption">
        <h5 class="caption-title">{{ photo.caption }}</h5>
        <div class="caption-meta">
          <div class="location">
            <i class="fas fa-map-marker-alt me-1"></i>{{ photo.location }}
          </div>
          <div class="year">
            <i class="fas fa-calendar me-1"></i>{{ photo.year }}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<!-- Gallery Stats -->
<div class="gallery-stats text-center mt-5">
  <div class="row">
    <div class="col-md-4">
      <div class="stat-item">
        <i class="fas fa-city fa-2x text-primary mb-2"></i>
        <h4 class="stat-number">{{ site.data.photos | where_exp: "photo", "photo.image contains 'Berlin/'" | size }}</h4>
        <p class="stat-label">Berlin Photos</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="stat-item">
        <i class="fas fa-mountain fa-2x text-success mb-2"></i>
        <h4 class="stat-number">{{ site.data.photos | where_exp: "photo", "photo.image contains 'Treks in Germany/'" | size }}</h4>
        <p class="stat-label">Trek Photos</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="stat-item">
        <i class="fas fa-camera fa-2x text-info mb-2"></i>
        <h4 class="stat-number">{{ site.data.photos | size }}</h4>
        <p class="stat-label">Total Photos</p>
      </div>
    </div>
  </div>
</div>

<style>
/* Gallery Header */
.gallery-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
}

/* Filter Buttons */
.filter-container {
  margin-bottom: 2rem;
}

.btn-group .btn {
  border-radius: 25px;
  margin: 0 0.25rem;
  transition: all 0.3s ease;
}

.btn-group .btn:hover,
.btn-group .btn.active {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Photo Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
  margin: 20px 0;
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  background: white;
}

.grid-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.grid-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover img {
  transform: scale(1.05);
}

/* Photo Overlay */
.photo-link {
  position: relative;
  display: block;
  overflow: hidden;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-overlay i {
  color: white;
  font-size: 2rem;
}

.grid-item:hover .photo-overlay {
  opacity: 1;
}

/* Caption Styling */
.caption {
  padding: 15px;
  background: white;
}

.caption-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--global-text-color);
  line-height: 1.3;
}

.caption-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #666;
}

.location, .year {
  display: flex;
  align-items: center;
}

.location i, .year i {
  color: var(--global-theme-color);
  margin-right: 4px;
}

/* Gallery Stats */
.gallery-stats {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 3rem;
}

.stat-item {
  padding: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--global-theme-color);
  margin: 0.5rem 0;
}

.stat-label {
  color: #666;
  font-weight: 500;
  margin: 0;
}

/* Filter Animation */
.grid-item {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.grid-item.show {
  opacity: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
  }
  
  .btn-group {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .btn-group .btn {
    margin: 0;
  }
  
  .caption-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .gallery-stats .row {
    gap: 1rem;
  }
}

/* Loading Animation */
.grid-item.loading {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const gridItems = document.querySelectorAll('.grid-item');
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter items
      gridItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.classList.add('show');
          }, 50);
        } else {
          item.classList.remove('show');
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Initialize all items as visible
  gridItems.forEach(item => {
    item.classList.add('show');
  });
  
  // Lazy loading for images
  const images = document.querySelectorAll('.grid-item img');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // Trigger load
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});
</script> 