---
layout: page
title: Tags
permalink: /tag/
---

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}


  <div style="border-bottom:1px solid #e8e8e8;margin-bottom:20px;">
    {% for item in (0..site.tags.size) %}{% unless forloop.last %}
      {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
        <a href="#{{ this_word | cgi_escape }}">#{{ this_word }}</a>
    {% endunless %}{% endfor %}
  </div>
  
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
  <h2 class="tag-title" id="{{ this_word | cgi_escape }}">#{{ this_word }}</h2>

  <ul> 
    {% for post in site.tags[this_word] %}{% if post.title != null %} 
    <li>
      <a class="" href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endif %}{% endfor %}
  </ul>
  {% endunless %}{% endfor %}