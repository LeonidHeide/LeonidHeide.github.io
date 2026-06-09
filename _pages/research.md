---
layout: single
title:
permalink: /research/
author_profile: false
---

<div class="research-intro">
  <p>
    My research develops data-driven and physics-informed methods for modeling, understanding,
    and controlling dynamical systems. I am especially interested in reduced-order models that
    remain reliable over long times, preserve important physical structure, and can be used for
    prediction, interpretation, and control.
  </p>
</div>

<div class="research-map">

{% for theme in site.data.research.themes %}
  {% include research-theme.html theme=theme last=forloop.last %}
{% endfor %}

</div>
