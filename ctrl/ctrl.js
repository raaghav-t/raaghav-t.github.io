(function () {
  var tabs = Array.prototype.slice.call(
    document.querySelectorAll("[data-tab]"),
  );
  var panels = Array.prototype.slice.call(
    document.querySelectorAll("[data-tab-panel]"),
  );
  if (!tabs.length || !panels.length) return;

  function activateTab(tab, moveFocus) {
    var target = tab.getAttribute("data-tab");

    tabs.forEach(function (candidate) {
      var selected = candidate === tab;
      candidate.setAttribute("aria-selected", String(selected));
      candidate.tabIndex = selected ? 0 : -1;
    });

    panels.forEach(function (panel) {
      var active = panel.getAttribute("data-tab-panel") === target;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    if (moveFocus) tab.focus();
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      activateTab(tab, false);
    });

    tab.addEventListener("keydown", function (event) {
      var nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown")
        nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp")
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === null) return;

      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });
})();
