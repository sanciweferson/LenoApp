import { routes } from "../routes.js";
import { hasPage, savePage, getPage } from "./cache.js";

export function renderPage() {
  const path = window.location.pathname;
  const main = document.querySelector("main");

  if (!main) return;

  if (hasPage(path)) {
    main.innerHTML = getPage(path);
    return;
  }

  const page = routes[path];

  if (!page) {
    main.innerHTML = "<h1>404</h1>";
    return;
  }

  const content = page();
  savePage(path, content);

  main.innerHTML = content;
}