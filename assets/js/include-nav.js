(function () {
  // Pages using the shared navigation automatically receive visit tracking.
  // This keeps new navigation-based pages from needing a second script tag.
  var currentScript = document.currentScript;
  if (currentScript && !document.querySelector('script[data-visit-notify]')) {
    var notifier = document.createElement("script");
    notifier.src = new URL("visit-notify.js", currentScript.src).href;
    notifier.dataset.visitNotify = "";
    document.head.appendChild(notifier);
  }

  var targets = document.querySelectorAll('[data-include="nav"]');
  if (!targets.length) return;

  function normalizedPagePath(path) {
    if (path === "/index.html") return "/";
    return path;
  }

  function addSourceTags(container) {
    var sourceTag = (document.body.dataset.sourceTag || "").trim();
    if (!sourceTag) return;

    var currentPath = normalizedPagePath(window.location.pathname);

    container.querySelectorAll("a[href]").forEach(function (link) {
      var rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.charAt(0) === "#") return;

      var url;
      try {
        url = new URL(rawHref, document.baseURI);
      } catch (_) {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (normalizedPagePath(url.pathname) === currentPath) return;
      if (url.search) return;

      link.setAttribute("href", url.pathname + "?" + sourceTag + url.hash);
    });
  }

  function activateAndFilter(container) {
    addSourceTags(container);

    var navKey = (document.body.dataset.nav || "").trim();
    if (navKey) {
      var active = container.querySelector('[data-nav-key="' + navKey + '"]');
      if (active) active.classList.add("active");
    }

    var hide = (document.body.dataset.hideNav || "")
      .split(",")
      .map(function (s) { return s.trim(); })
      .filter(Boolean);

    hide.forEach(function (item) {
      var el = container.querySelector('[data-nav-item="' + item + '"]');
      if (el) el.remove();
    });
  }

  fetch("/partials/nav.html", { cache: "no-cache" })
    .then(function (res) { return res.text(); })
    .then(function (html) {
      targets.forEach(function (target) {
        target.outerHTML = html;
      });
      var navs = document.querySelectorAll("aside.nav.glass");
      navs.forEach(activateAndFilter);
    })
    .catch(function () {
      console.warn("Nav include failed to load.");
    });
}());
