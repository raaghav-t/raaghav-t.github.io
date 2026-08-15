(() => {
  const endpoint = "https://script.google.com/macros/s/AKfycbwRpg-G0i-_cbHF2aUW_ryQE2iAGmQR3Ray-qL-5_4aCRyRKrH2ZnGt-VKS8y4BnxdL/exec";

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
  const userAgent = navigator.userAgent.toLowerCase();
  const visitType = /(bot|crawler|spider|headless|lighthouse|slurp|bingpreview)/.test(userAgent)
    ? "Likely automated"
    : "Browser";

  const payload = JSON.stringify({
    page: pageNames[path] || document.title || "Website",
    path,
    visitType,
  });

  void fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    body: payload,
  }).catch(() => {});
})();
