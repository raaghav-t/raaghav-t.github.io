(() => {
  const endpoint = "https://script.google.com/macros/s/AKfycby_Rou3Y1QwihkAzC1yEBigtJtcsdjMnvEj-rXwKeJRIA57XOyE5Xhjb-eURbWeM3eK/exec";

  const normalizePath = (path) => {
    if (path === "/portfolio") return "/portfolio/";
    if (path === "/index.html") return "/";
    return path;
  };

  const path = normalizePath(window.location.pathname);
  const parameters = new URLSearchParams(window.location.search);
  const sourceEntry = parameters.has("utm_source")
    ? ["utm_source", parameters.get("utm_source") || ""]
    : parameters.entries().next().value || ["", ""];
  const [sourceTag, sourceValue] = sourceEntry;
  const userAgent = navigator.userAgent.toLowerCase();
  const visitType = /(bot|crawler|spider|headless|lighthouse|slurp|bingpreview)/.test(userAgent)
    ? "Likely automated"
    : "Browser";

  const payload = JSON.stringify({
    page: document.title || "Website",
    hostname: window.location.hostname,
    path,
    sourceTag,
    sourceValue,
    visitType,
  });

  void fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    body: payload,
  }).catch(() => {});
})();
