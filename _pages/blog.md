---
layout: page
title: Blog
permalink: /blog/
description: A collection of my thoughts, experiences, and adventures
nav: true
nav_order: 2
display_categories: ["trekking-series", "life", "tech", "travel"]
horizontal: false
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

{% include blog_enhancements.liquid %}

<!-- Reading progress indicator -->
<div class="reading-progress">
  <div class="reading-progress-bar"></div>
</div>

<div class="blog-container">
  <!-- Enhanced header -->
  <div class="header-bar">
    <h1>{{ site.blog_name | default: "Blog" }}</h1>
    <h2>{{ site.blog_description | default: page.description }}</h2>
  </div>

  <!-- Enhanced tag and category list -->
  {% if site.display_tags.size > 0 or site.display_categories.size > 0 %}
  <div class="tag-category-list">
    <ul>
      {% for tag in site.display_tags %}
        <li>
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
            <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
          </a>
        </li>
      {% endfor %}
      
      {% for category in site.display_categories %}
        <li>
          <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
            <i class="fa-solid fa-folder fa-sm"></i> {{ category }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  {% endif %}

  <!-- Featured posts with enhanced cards -->
  {% assign featured_posts = site.posts | where: "featured", "true" %}
  {% if featured_posts.size > 0 %}
  <div class="featured-posts">
    <h2><i class="fas fa-star"></i> Featured Posts</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      {% for post in featured_posts %}
      <div class="col">
        <article class="featured-post-card">
          {% if post.thumbnail %}
          <img data-src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="card-img-top">
          {% endif %}
          <div class="card-body">
            <h3 class="card-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <p class="card-text">{{ post.description }}</p>
            <div class="post-meta">
              <span><i class="fas fa-clock"></i> {{ post.content | number_of_words | divided_by: 180 | plus: 1 }} min read</span>
              <span><i class="fas fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}</span>
            </div>
          </div>
        </article>
      </div>
      {% endfor %}
    </div>
  </div>
  <hr>
  {% endif %}

  <!-- Enhanced post list -->
  <div class="posts">
    {% if site.enable_project_categories and page.display_categories %}
      {% for category in page.display_categories %}
      <section class="category-section">
        <h2 class="category">
          <i class="fas fa-folder"></i> {{ category }}
        </h2>
        {% assign categorized_posts = site.posts | where: "categories", category %}
        {% assign sorted_posts = categorized_posts | sort: "date" | reverse %}
        
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {% for post in sorted_posts %}
          <div class="col">
            <article class="post-card">
              {% if post.thumbnail %}
              <img data-src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="card-img-top">
              {% endif %}
              <div class="card-body">
                <h3 class="card-title">
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </h3>
                <p class="card-text">{{ post.description }}</p>
                <div class="post-meta">
                  <span><i class="fas fa-clock"></i> {{ post.content | number_of_words | divided_by: 180 | plus: 1 }} min read</span>
                  <span><i class="fas fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}</span>
                  {% if post.tags.size > 0 %}
                  <span>
                    <i class="fas fa-tags"></i>
                    {% for tag in post.tags %}
                    <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="tag">{{ tag }}</a>
                    {% endfor %}
                  </span>
                  {% endif %}
                </div>
              </div>
            </article>
          </div>
          {% endfor %}
        </div>
      </section>
      {% endfor %}
    {% else %}
      {% assign sorted_posts = site.posts | sort: "date" | reverse %}
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {% for post in sorted_posts %}
        <div class="col">
          <article class="post-card">
            {% if post.thumbnail %}
            <img data-src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="card-img-top">
            {% endif %}
            <div class="card-body">
              <h3 class="card-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </h3>
              <p class="card-text">{{ post.description }}</p>
              <div class="post-meta">
                <span><i class="fas fa-clock"></i> {{ post.content | number_of_words | divided_by: 180 | plus: 1 }} min read</span>
                <span><i class="fas fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}</span>
                {% if post.tags.size > 0 %}
                <span>
                  <i class="fas fa-tags"></i>
                  {% for tag in post.tags %}
                  <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="tag">{{ tag }}</a>
                  {% endfor %}
                </span>
                {% endif %}
              </div>
            </div>
          </article>
        </div>
        {% endfor %}
      </div>
    {% endif %}
  </div>

  <!-- Enhanced pagination -->
  {% if paginator.total_pages > 1 %}
  <nav aria-label="Blog pagination" class="pagination-container">
    <ul class="pagination">
      {% if paginator.previous_page %}
      <li class="page-item">
        <a href="{{ paginator.previous_page_path | relative_url }}" class="page-link">
          <i class="fas fa-chevron-left"></i> Previous
        </a>
      </li>
      {% endif %}

      {% for trail in paginator.page_trail %}
      <li class="page-item {% if page.url == trail.path %}active{% endif %}">
        <a href="{{ trail.path | relative_url }}" class="page-link">{{ trail.num }}</a>
      </li>
      {% endfor %}

      {% if paginator.next_page %}
      <li class="page-item">
        <a href="{{ paginator.next_page_path | relative_url }}" class="page-link">
          Next <i class="fas fa-chevron-right"></i>
        </a>
      </li>
      {% endif %}
    </ul>
  </nav>
  {% endif %}

  <!-- Scroll to top button -->
  <button class="scroll-top" aria-label="Scroll to top">
    <i class="fas fa-arrow-up"></i>
  </button>
</div>
