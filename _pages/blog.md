---
layout: page
title: Blog
permalink: /blog/
description: A collection of my thoughts, experiences, and adventures
nav: true
nav_order: 2
display_categories: [Technical, Non-technical]
horizontal: false
---

<!-- Latest Posts Preview Section -->
<div class="latest-posts mb-5">
  <h2>Latest Posts</h2>
  <div class="row row-cols-1 row-cols-md-3">
    {%- assign latest_posts = site.posts | sort: "date" | reverse | limit: 3 %}
    {%- for post in latest_posts %}
    <div class="col">
      <div class="card hoverable h-100">
        {%- if post.thumbnail %}
        <img src="{{ post.thumbnail | relative_url }}" class="card-img-top" alt="post thumbnail">
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
              <a href="{{ post.url | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {%- endfor %}
  </div>
</div>

<hr class="mb-5">

<!-- All Posts by Category -->
<div class="projects">
{%- if page.display_categories %}
  <!-- Display categorized posts -->
  {%- for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {%- if category == "Non-technical" %}
    {%- assign categorized_posts = site.posts | where_exp: "post", "post.category == 'life' or post.category == 'research'" %}
  {%- else %}
    {%- assign categorized_posts = site.posts | where: "category", "tech" %}
  {%- endif %}
  {%- assign sorted_posts = categorized_posts | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-md-3">
    {%- for post in sorted_posts %}
    <div class="col">
      <div class="card hoverable">
        {%- if post.thumbnail %}
        <img src="{{ post.thumbnail | relative_url }}" class="card-img-top" alt="post thumbnail">
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
              <a href="{{ post.url | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read More</a>
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
