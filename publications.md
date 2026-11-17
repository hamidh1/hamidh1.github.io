---
layout: default
title: Publications
permalink: /publications/
---

<div class="page-heading"><p class="eyebrow">Hamid Hussain</p><h1>Publications</h1><p>Papers & research outputs</p></div>

{% assign publications = site.data.publications | sort: 'year' | reverse %}
{% for publication in publications %}
{% include publication.html publication=publication %}
{% else %}
<div class="empty-state"><p class="eyebrow">Research outputs</p><h2>Research in progress.</h2><p>Publication details will be added here when available.</p></div>
{% endfor %}

For questions about my research, [contact me](mailto:engrhamid110@gmail.com).
