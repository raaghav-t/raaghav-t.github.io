(() => {
  const endpoint = "https://script.google.com/macros/s/AKfycbyHEDITtPmHTkJD_6oPEvoKr6sfRWSi_Y8Inh2O3hEiyKbQbzzFa6x8itoyThb0zplx/exec";

  const normalizePath = (path) => {
    if (path === "/portfolio") return "/portfolio/";
    if (path === "/index.html") return "/";
    return path;
  };

  const path = normalizePath(window.location.pathname);
  // Link labels are intentionally expressed as bare query keys, such as ?acv.
  const sourceTag = [...new URLSearchParams(window.location.search).keys()][0] || "";
  const userAgent = navigator.userAgent.toLowerCase();
  const visitType = /(bot|crawler|spider|headless|lighthouse|slurp|bingpreview)/.test(userAgent)
    ? "Likely automated"
    : "Browser";

  const payload = JSON.stringify({
    page: document.title || "Website",
    hostname: window.location.hostname,
    path,
    sourceTag,
    visitType,
  });

  void fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    body: payload,
  }).catch(() => {});
})();
