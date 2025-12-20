---
layout: page
title: UBC Vancouver Classes
permalink: /ubc/
description: A list of some of the cool courses I've taken at UBC.
nav: false
nav_order: 3
display_categories: [physics, math, engineering]
horizontal: false
---

<div class="projects">
{% assign all_classes = site.classes %}

{% assign ubc_classes = all_classes | where: "school", "ubc" %}

{% if page.display_categories %}
  {% for category in page.display_categories %}
  
    {% assign categorized_classes = ubc_classes | where: "category", category %}
    {% assign sorted_classes = categorized_classes | sort: "importance" %}

    {% if sorted_classes.size > 0 %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>
      
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_classes %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}

  {% endfor %}

{% else %}
  {% assign sorted_classes = ubc_classes | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_classes %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
