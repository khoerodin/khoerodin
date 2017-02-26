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
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>