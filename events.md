---
layout: default
title: Events
permalink: /events/
description: Upcoming fly ins and events hosted by Northeast Aero RC Club.
---

<div class="page-header">
  <div class="wrap page-header-flex">
    <div id="events-calendar" class="calendar calendar-compact"></div>
    <div class="page-header-text">
      <h1>Events</h1>
      <p>Fly ins and other events hosted at our field. Check back for updates or watch our Facebook group for the latest.</p>
    </div>
  </div>
</div>

<script id="events-data" type="application/json">
  [
    {% assign events = site.events | sort: "date" %}
    {% for event in events %}
    {
      "title": {{ event.title | jsonify }},
      "url": {{ event.url | relative_url | jsonify }},
      "start": {{ event.date | date: "%Y-%m-%d" | jsonify }},
      "end": {{ event.end_date | default: event.date | date: "%Y-%m-%d" | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
</script>

<section>
  <h2>Upcoming</h2>
  <div class="event-list">
    {% assign events = site.events | sort: "date" %}
    {% for event in events %}
    <a class="event-row" href="{{ event.url | relative_url }}">
      <img class="event-thumb" src="{{ event.image | relative_url }}" alt="{{ event.title }}" loading="lazy">
      <div class="event-row-body">
        <h3>{{ event.title }}</h3>
        <p>{{ event.summary }}</p>
      </div>
    </a>
    {% endfor %}
  </div>
</section>

<script src="{{ '/assets/js/calendar.js' | relative_url }}"></script>
