---
layout: single
title:
permalink: /research/
author_profile: false
---

<div class="research-intro">
  <p>
    My research develops data-driven and physics-informed methods for modeling, understanding,
    and controlling complex fluid flows. I am especially interested in reduced-order models that
    remain reliable over long times, preserve important physical structure, and can be used for
    prediction, interpretation, and control.
  </p>

  <p>
    A recurring theme in my work is the connection between data, dynamics, and control: how can we
    learn compact models from high-dimensional fluid data, understand the nonlinear mechanisms they
    reveal, and use those models to identify effective actuation strategies?
  </p>
</div>

<div class="research-map">

{% for theme in site.data.research.themes %}
  {% include research-theme.html theme=theme %}
{% endfor %}

</div>
