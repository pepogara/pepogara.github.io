---
layout: page
title: ETH Zürich Classes
permalink: /eth/
description: A list of some of the cool courses I've taken at ETH.
nav: false
nav_order: 4
horizontal: false
---

<div class="projects">
  {% assign all_classes = site.classes %}

  {% assign eth_classes = all_classes | where: "school", "eth" %}

  {% assign sorted_classes = eth_classes | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_classes %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
