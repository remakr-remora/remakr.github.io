---
layout: default
title: 블로그
permalink: /blog/
---

<div class="blog-page">
  <header class="blog-header">
    <h1 class="page-title">{{ page.title }}</h1>
    <p class="blog-description">수영에 관한 유용한 팁과 정보를 공유합니다</p>
  </header>

  <div class="blog-content">
    {% if site.posts.size > 0 %}
      <div class="post-list">
        {% for post in site.posts %}
        <article class="post-card">
          <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
          </h2>
          <div class="post-meta">
            <span class="post-date">{{ post.date | date: "%Y년 %m월 %d일" }}</span>
            {% if post.author %}
              <span class="post-author">작성자: {{ post.author }}</span>
            {% endif %}
            {% if post.categories.size > 0 %}
              <span class="post-categories">
                카테고리:
                {% for category in post.categories %}
                  <span class="post-category">{{ category }}</span>
                {% endfor %}
              </span>
            {% endif %}
          </div>
          <div class="post-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 50 }}
          </div>
          <a href="{{ post.url | relative_url }}" class="read-more">더 읽기 &raquo;</a>
        </article>
        {% endfor %}
      </div>
    {% else %}
      <p>아직 게시된 포스트가 없습니다.</p>
    {% endif %}
  </div>
</div>

<style>
  .blog-page {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .blog-header {
    margin-bottom: 40px;
    text-align: center;
  }
  
  .blog-description {
    color: #666;
    font-size: 1.1em;
  }
  
  .post-card {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
  }
  
  .post-title {
    margin-bottom: 10px;
  }
  
  .post-title a {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  .post-title a:hover {
    color: var(--secondary-color);
  }
  
  .post-meta {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .post-category {
    background-color: var(--primary-color);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    margin-left: 5px;
  }
  
  .post-excerpt {
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  .read-more {
    display: inline-block;
    color: var(--primary-color);
    font-weight: bold;
  }
  
  .read-more:hover {
    color: var(--secondary-color);
  }
</style>
