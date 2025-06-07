---
layout: page
permalink: /gallery/
title: Gallery
description: A collection of memories from my travels around the world
nav: true
nav_order: 7
---

<!-- A grid of travel photos -->
<div class="projects grid">
  {%- assign sorted_photos = site.data.photos | sort: "year" | reverse -%}
  {% for photo in sorted_photos %}
    <div class="grid-item">
      {% if photo.image %}
        <a href="{{ photo.image | prepend: '/assets/img/gallery/' | relative_url }}">
          <img src="{{ photo.image | prepend: '/assets/img/gallery/' | relative_url }}" alt="{{ photo.caption }}">
        </a>
      {% endif %}
      <div class="caption">
        {{ photo.caption }}
        <div class="location">📍 {{ photo.location }}</div>
        <div class="year">📅 {{ photo.year }}</div>
      </div>
    </div>
  {% endfor %}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    margin: 20px 0;
  }
  
  .grid-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .grid-item:hover {
    transform: translateY(-5px);
  }
  
  .grid-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .caption {
    padding: 10px;
    background: white;
  }
  
  .location, .year {
    font-size: 0.9em;
    color: #666;
    margin-top: 5px;
  }
</style> 