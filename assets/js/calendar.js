(function () {
  var container = document.getElementById("events-calendar");
  var dataEl = document.getElementById("events-data");
  if (!container || !dataEl) return;

  var events = [];
  try {
    events = JSON.parse(dataEl.textContent);
  } catch (e) {
    events = [];
  }

  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function parseDate(str) {
    var parts = str.split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var parsed = events.map(function (e) {
    return { title: e.title, url: e.url, start: parseDate(e.start), end: parseDate(e.end) };
  });

  var upcoming = parsed
    .filter(function (e) { return e.end.getTime() >= today.getTime(); })
    .sort(function (a, b) { return a.start - b.start; });

  var viewDate = upcoming.length
    ? new Date(upcoming[0].start.getFullYear(), upcoming[0].start.getMonth(), 1)
    : new Date(today.getFullYear(), today.getMonth(), 1);

  function eventsOnDay(day) {
    return parsed.filter(function (e) {
      return day.getTime() >= e.start.getTime() && day.getTime() <= e.end.getTime();
    });
  }

  function render() {
    container.innerHTML = "";

    var header = document.createElement("div");
    header.className = "calendar-header";

    var prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "calendar-nav";
    prevBtn.setAttribute("aria-label", "Previous month");
    prevBtn.textContent = "‹";
    prevBtn.addEventListener("click", function () {
      viewDate.setMonth(viewDate.getMonth() - 1);
      render();
    });

    var title = document.createElement("div");
    title.className = "calendar-title";
    title.textContent = monthNames[viewDate.getMonth()] + " " + viewDate.getFullYear();

    var nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "calendar-nav";
    nextBtn.setAttribute("aria-label", "Next month");
    nextBtn.textContent = "›";
    nextBtn.addEventListener("click", function () {
      viewDate.setMonth(viewDate.getMonth() + 1);
      render();
    });

    header.appendChild(prevBtn);
    header.appendChild(title);
    header.appendChild(nextBtn);
    container.appendChild(header);

    var grid = document.createElement("div");
    grid.className = "calendar-grid";

    dayNames.forEach(function (name) {
      var cell = document.createElement("div");
      cell.className = "calendar-dow";
      cell.textContent = name;
      grid.appendChild(cell);
    });

    var firstOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    var startOffset = firstOfMonth.getDay();
    var daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

    for (var i = 0; i < startOffset; i++) {
      var blank = document.createElement("div");
      blank.className = "calendar-day calendar-day-empty";
      grid.appendChild(blank);
    }

    for (var d = 1; d <= daysInMonth; d++) {
      var day = new Date(viewDate.getFullYear(), viewDate.getMonth(), d);
      var dayEvents = eventsOnDay(day);
      var cellEl = dayEvents.length ? document.createElement("a") : document.createElement("div");

      cellEl.className = "calendar-day";
      if (dayEvents.length) {
        cellEl.className += " has-event";
        cellEl.href = dayEvents[0].url;
        cellEl.title = dayEvents.map(function (e) { return e.title; }).join(", ");
      }
      if (day.getTime() === today.getTime()) {
        cellEl.className += " is-today";
      }

      var num = document.createElement("span");
      num.className = "calendar-day-num";
      num.textContent = d;
      cellEl.appendChild(num);

      grid.appendChild(cellEl);
    }

    container.appendChild(grid);
  }

  render();
})();
