---
layout: page
title: submenus
nav: false
nav_order: 8
dropdown: false
children:
  - title: publications
    permalink: /publications/
    icon: fas fa-book
  - title: divider
  - title: projects
    permalink: /projects/
    icon: fas fa-code-branch
  - title: divider
  - title: blog
    permalink: /blog/
    icon: fas fa-pen-fancy
---

{% include dropdown_dependencies.liquid %}

<div class="dropdown-container">
  <button class="dropdown-trigger">
    Menu
    <span class="dropdown-icon"></span>
  </button>
  
  <div class="dropdown-menu">
    {% for item in page.children %}
      {% if item.title == "divider" %}
        <div class="dropdown-divider"></div>
      {% else %}
        <a href="{{ item.permalink | relative_url }}" class="dropdown-item">
          <i class="{{ item.icon }}"></i>
          {{ item.title | capitalize }}
        </a>
      {% endif %}
    {% endfor %}
  </div>
</div>
