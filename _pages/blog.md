---
layout: page
title: Blog
permalink: /blog/
description: A collection of my thoughts, experiences, and adventures
nav: true
nav_order: 2
---

<div class="blog-container">
  <div class="header-bar">
    <h1>{{ site.blog_name | default: "Blog" }}</h1>
    <h2>{{ site.blog_description | default: page.description }}</h2>
  </div>

  <div class="posts">
    {% for post in site.posts %}
      <article class="post-card">
        <div class="card-body">
          <h3 class="card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <div class="post-meta">
            <span><i class="fas fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}</span>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
