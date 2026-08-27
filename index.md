---
layout: default
---

<div class="hero">
  <div class="wrap">
    <h1>Northeast Aero RC Club</h1>
    <p>Also known as the NEARC Flying Tigers. We are an AMA chartered radio control flying club in West Monroe, Louisiana, flying planes, helicopters, jets, and more.</p>
    <div class="button-row">
      <a class="btn btn-primary" href="{{ site.facebook_group }}" target="_blank" rel="noopener">Join our Facebook group</a>
      <a class="btn btn-secondary" href="{{ site.field.map_link }}" target="_blank" rel="noopener">Get directions to the field</a>
    </div>
  </div>
</div>

<section>
  <h2>About the club</h2>
  <p>Northeast Aero RC Club has been flying at our field on Sheriff Fewell Road for years. We welcome pilots of every skill level. Guest pilots and members of the general public are welcome to come watch or fly. We offer pilot instruction and training for anyone who is new to the hobby. AMA membership is required to fly at the field.</p>
  <p>We hold regular club meetings, take part in community events, and support charitable causes. Our club follows a simple rule at the field: no drugs and no alcohol.</p>
</section>

<section>
  <h2>What we fly</h2>
  <div class="fact-grid">
    <div class="fact-card">
      <h3>Fixed wing</h3>
      <p>See our <a href="{{ '/planes/' | relative_url }}">planes page</a> for photos from the field.</p>
      <ul>
        <li>Electric and fuel or gas power</li>
        <li>3D, pattern, and pylon racing</li>
        <li>Giant scale and park flyers</li>
        <li>Jets and ducted fan</li>
        <li>Soaring</li>
      </ul>
    </div>
    <div class="fact-card">
      <h3>Rotor and more</h3>
      <p>See our <a href="{{ '/helis/' | relative_url }}">helis page</a> for photos from the field.</p>
      <ul>
        <li>Helicopters</li>
        <li>Multi rotor</li>
        <li>Rockets</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <h2>Our field</h2>
  <div class="fact-grid">
    <div class="fact-card">
      <h3>Location</h3>
      <p>{{ site.field.address }}</p>
      <p><a href="{{ site.field.map_link }}" target="_blank" rel="noopener">Get directions</a></p>
    </div>
    <div class="fact-card">
      <h3>Runways</h3>
      <ul>
        <li>Geotech fabric runway, 30 feet by 100 feet, west side</li>
        <li>Geotech fabric runway, 30 feet by 330 feet, east side</li>
        <li>Grass runways also available</li>
      </ul>
    </div>
    <div class="fact-card">
      <h3>On site</h3>
      <ul>
        <li>Asphalt pit area</li>
        <li>Covered shelter</li>
        <li>Electricity and power</li>
        <li>Fire extinguisher and first aid kit</li>
        <li>Porta pots</li>
        <li>Safety fences</li>
        <li>Setup tables and workbenches</li>
        <li>Spectator area, spectators welcome</li>
        <li>Startup stands</li>
        <li>Windsock poles and windsocks</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <h2>Get involved</h2>
  <p>Want to join, visit, or ask a question? The best way to reach us is through our Facebook group. You can also contact our club treasurer, Bill Mahan, by phone or email. See the <a href="{{ '/leaders/' | relative_url }}">leaders page</a> for who runs the club.</p>
  <div class="fact-grid">
    <div class="fact-card">
      <h3>Facebook</h3>
      <p><a href="{{ site.facebook_group }}" target="_blank" rel="noopener">Northeast Aero RC, NEARC</a></p>
    </div>
    <div class="fact-card">
      <h3>Phone</h3>
      <p><a href="tel:{{ site.contact.phone | replace: ' ', '' }}">{{ site.contact.phone }}</a></p>
    </div>
    <div class="fact-card">
      <h3>Email</h3>
      <p><a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a></p>
    </div>
    <div class="fact-card">
      <h3>AMA club page</h3>
      <p>Club number {{ site.club_number }}, {{ site.district }}</p>
      <p><a href="{{ site.ama_club_page }}" target="_blank" rel="noopener">View on modelaircraft.org</a></p>
    </div>
  </div>
</section>
