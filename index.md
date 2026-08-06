---
layout: default
title: Home
---

# Daniels Pauls Savickis

Third-year Computer Systems student at RTU, Riga. Focused on systems and frontend/backend or fullstack software development.

[GitHub](https://github.com/danielspaulssavickis) · [LinkedIn](https://www.linkedin.com/in/daniels-savickis-55a20b32b/) · [mailto: danielssavickis(at)gmail(dot)com](mailto:danielssavickis0@gmail.com)

## Projects

<div class="project-list">
{% for project in site.projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>