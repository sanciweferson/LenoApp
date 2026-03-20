// src/core/route.js
// ✅ route.js

import { renderPage } from "./render.js";
export function router() {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    const path = link.getAttribute("href");

    // Deixa links âncora (#section) o navegador resolver normalmente
    if (path.startsWith("#")) return;

    e.preventDefault();
    history.pushState({}, "", path);
    renderPage();
  });

  window.addEventListener("popstate", renderPage);
}