(() => {
  const endpoint = "https://script.google.com/macros/s/AKfycbxT_U2Ng1TxHFcVNzh0MaHxfr1jwAkpaEnI1M4FZNMwwmAbQ-nSl-m1iwwVwS0ZQR0m/exec";

  const pageNames = {
    "/": "Homepage",
    "/portfolio/": "Portfolio",
    "/cv.html": "CV",
    "/projects.html": "Projects",
    "/research.html": "Research",
    "/project-satellite-MPC.html": "Satellite Rendezvous",
    "/project-krk-GameTheory.html": "KRK Solver",
    "/project-inverted-pendulum.html": "Inverted Pendulum",
  };

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
    page: pageNames[path] || document.title || "Website",
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
