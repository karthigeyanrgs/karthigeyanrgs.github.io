---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 5
cv_pdf: Karthigeyan_Resume_2025_May.pdf
description: A showcase of my professional journey, skills, and achievements in technology and innovation.
---

<style>
.cv-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.cv-header {
  text-align: center;
  margin-bottom: 3rem;
}

.cv-header h1 {
  color: var(--global-theme-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cv-header p {
  color: var(--global-text-color);
  font-size: 1.2rem;
}

.cv-section {
  margin-bottom: 3rem;
  background: var(--global-bg-color);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--global-divider-color);
}

.cv-section-title {
  color: var(--global-theme-color);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-theme-color);
}

.table-cv {
  width: 100%;
  margin-bottom: 1rem;
}

.td-left {
  width: 200px;
  vertical-align: top;
  padding-right: 1rem;
  color: var(--global-text-color);
}

.td-right {
  vertical-align: top;
  color: var(--global-text-color);
}

.cv-year {
  color: var(--global-text-color-light);
  font-weight: 500;
}

.institution {
  color: var(--global-text-color);
  font-weight: 500;
  margin: 0.5rem 0;
}

.location {
  color: var(--global-text-color-light);
  font-style: italic;
}

.items {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.items li {
  color: var(--global-text-color);
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.items li:before {
  content: "•";
  color: var(--global-theme-color);
  position: absolute;
  left: 0.5rem;
}

.cv-footer {
  text-align: center;
  margin-top: 3rem;
}

.download-cv {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--global-theme-color);
  color: var(--global-bg-color);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.download-cv:hover {
  background-color: var(--global-hover-color);
  text-decoration: none;
}

.cv-subsection {
  margin-top: 2rem;
}

.cv-subsection-title {
  color: var(--global-text-color);
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
</style>

<div class="cv-container">
  <div class="cv-header">
    <h1>Curriculum Vitae</h1>
    <p>{{ page.description }}</p>
  </div>

  <div class="cv">
    {% for section in site.data.cv %}
      <div class="cv-section">
        <h2 class="cv-section-title">{{ section.title }}</h2>
        {% if section.type == "map" %}
          <table class="table table-cv table-borderless">
            {% for content in section.contents %}
              <tr>
                <td class="td-left"><b>{{ content.name }}</b></td>
                <td class="td-right">{{ content.value }}</td>
              </tr>
            {% endfor %}
          </table>
        {% elsif section.type == "time_table" %}
          <table class="table table-cv table-borderless">
            {% assign positions = section.contents | reverse %}
            {% for content in positions %}
              <tr>
                <td class="td-left">
                  {% if content.year %}
                    <span class="cv-year">{{ content.year }}</span>
                  {% endif %}
                </td>
                <td class="td-right">
                  {% if content.title %}
                    <b>{{ content.title }}</b>
                  {% endif %}
                  {% if content.institution %}
                    <div class="institution">{{ content.institution }}</div>
                  {% endif %}
                  {% if content.location %}
                    <div class="location">{{ content.location }}</div>
                  {% endif %}
                  {% if content.description %}
                    <ul class="items">
                      {% for item in content.description %}
                        <li>{{ item }}</li>
                      {% endfor %}
                    </ul>
                  {% endif %}
                </td>
              </tr>
            {% endfor %}
          </table>
        {% elsif section.type == "nested_list" %}
          {% for content in section.contents %}
            <div class="cv-subsection">
              <h3 class="cv-subsection-title">{{ content.title }}</h3>
              <ul class="items">
                {% for item in content.items %}
                  <li>{{ item }}</li>
                {% endfor %}
              </ul>
            </div>
          {% endfor %}
        {% endif %}
      </div>
    {% endfor %}

    <div class="cv-footer">
      <a href="{{ page.cv_pdf | prepend: '/assets/pdf/' | relative_url }}" class="download-cv">
        <i class="fas fa-download"></i>
        Download PDF Version
      </a>
    </div>
  </div>
</div>
