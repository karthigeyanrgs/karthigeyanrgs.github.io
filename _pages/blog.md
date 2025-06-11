---
layout: page
title: Blog
permalink: /blog/
description: A collection of my thoughts, experiences, and adventures
nav: true
nav_order: 4
display_categories: [Technical, Non-technical]
horizontal: false
---

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

/* Improve card grid layout */
.row {
  margin-left: -1rem;
  margin-right: -1rem;
}

.col {
  padding: 1rem;
}

/* Ensure cards take up more space */
.card {
  height: 100%;
  margin: 0;
}

/* Category styling */
.category {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-theme-color);
  color: var(--global-theme-color);
  font-weight: 700;
  font-size: 1.8rem;
  text-shadow: 0.5px 0.5px 1px rgba(var(--global-theme-color-rgb), 0.2);
  opacity: 0.95;
  transition: all 0.2s ease;
}

.category:hover {
  opacity: 1;
  color: var(--global-theme-color);
  text-decoration: none;
  text-shadow: 0.5px 0.5px 1px rgba(var(--global-theme-color-rgb), 0.3);
}

@media (prefers-color-scheme: dark) {
  .category {
    text-shadow: 0.5px 0.5px 1px rgba(var(--global-theme-color-rgb), 0.4);
  }
  
  .category:hover {
    text-shadow: 0.5px 0.5px 1px rgba(var(--global-theme-color-rgb), 0.5);
  }
}
</style>

<hr class="mb-5">

<!-- All Posts by Category -->
<div class="projects">
{%- if page.display_categories %}
  <!-- Display categorized posts -->
  {%- for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {%- if category == "Technical" %}
    {%- assign categorized_posts = site.posts | where: "categories", "technical" %}
  {%- elsif category == "Non-technical" %}
    {%- assign categorized_posts = site.posts | where: "categories", "life" %}
  {%- endif %}
  {%- assign sorted_posts = categorized_posts | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {%- for post in sorted_posts %}
    <div class="col mb-4">
      <div class="card h-100 rounded-3 shadow-sm hoverable">
        {%- if post.coverImage %}
        <img src="{{ '/assets/img/posts/' | append: post.coverImage | relative_url }}" class="card-img-top rounded-top" alt="post cover image" style="height: 200px; object-fit: cover;">
        {%- endif %}
        <div class="card-body">
          <h3 class="card-title">{{ post.title }}</h3>
          <p class="card-text">{{ post.description }}</p>
          <div class="row ml-1 mr-1 p-0">
            <div class="post-meta">
              <i class="fas fa-calendar fa-sm"></i> {{ post.date | date: '%B %d, %Y' }}
            </div>
          </div>
          <div class="row ml-1 mr-1 p-0">
            <div class="btn-group">
              <a href="{{ post.url | relative_url }}" class="btn btn-sm z-depth-0 rounded-pill" role="button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {%- endfor %}
  </div>
  {%- endfor %}
{%- endif %}
</div>
