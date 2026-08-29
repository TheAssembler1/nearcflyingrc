---
layout: default
title: Events
permalink: /events/
description: Upcoming fly ins and events hosted by Northeast Aero RC Club.
---

<div class="page-header">
  <div class="wrap">
    <h1>Events</h1>
    <p>Fly ins and other events hosted at our field. Check back for updates or watch our Facebook group for the latest.</p>
  </div>
</div>

<section>
  <div class="event-list">
    {% assign events = site.events | sort: "date" | reverse %}
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
