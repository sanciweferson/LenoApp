


// src/core/render.js
import { routes } from "../routes.js";
import { hasPage, savePage, getPage } from "./cache.js";

function setActiveLink(path) {
  document.querySelectorAll("[data-link]").forEach(link => {
    const isActive = link.getAttribute("href") === path;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}


const render404 = () => /*html*/`
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;gap:1rem;text-align:center;padding:2rem;">
    <h1 style="font-size:4rem;font-weight:800;margin:0;">404</h1>
    <p style="color:var(--muted-foreground);">Página não encontrada.</p>
    <a href="/" data-link style="padding:0.6rem 1.4rem;border-radius:var(--radius);border:1px solid var(--border);text-decoration:none;color:var(--foreground);">
      Voltar para Home
    </a>
  </div>
`;
// src/core/render.js
export function renderPage(instant = false) {
  const path = window.location.pathname;
  const main = document.getElementById("page-content"); // 👈



  if (!main) return;

  setActiveLink(path);
  window.scrollTo({ top: 0, behavior: instant ? "instant" : "smooth" }); // 👈

  const route = routes[path];

  if (!route) {
    document.title = "404 | Leno App";
    main.innerHTML = render404();
    return;
  }

  document.title = route.title;

  if (hasPage(path)) {
    main.innerHTML = getPage(path);
    return;
  }

  const content = route.page();
  savePage(path, content);
  main.innerHTML = content;
}




