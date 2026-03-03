import { renderPage } from "./render.js";

export function router() {

  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();

    const path = link.getAttribute("href");
    history.pushState({}, "", path);

    renderPage();
  });

  window.addEventListener("popstate", renderPage);
}