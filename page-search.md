---
layout: default
title: Search
permalink: /search/
---
<article class="post">

  <header class="post-header">
    <form action="/search" method="get">
      <section class="search-area">      
        <input type="text" name="q" class="search-box page-search-box" placeholder="APA YANG AKAN DIPELAJARI?" id="search-box">
      </section>
    </form>
  </header>

  <div class="post-content" id="search-results"></div>

</article>

<script>
  {% assign oop_php = site.object-oriented-php  %}
  {% assign series = site.pages | where: "layout", "series" %}
  {% assign episodes = site.pages | where: "layout", "episode" %}
  {% assign skills = site.pages | where: "layout", "skill" %}
  {% assign posts = oop_php | concat: series | concat: episodes | concat: skills %}
  window.store = {
    {% for post in posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | markdownify | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="/assets/js/search.min.js"></script>