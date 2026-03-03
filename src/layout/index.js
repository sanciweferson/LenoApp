// src/layout/index.js
import { Header } from "./header/index.js";
import Footer from "./footer/index.js";

export function Layout(content) {
  return `
    ${Header()}
    <main id="page-content">
      ${content}
    </main>
  `;
}

export function renderLayout() {
  document.getElementById("app").innerHTML = Layout("");

  document.body.insertAdjacentHTML("beforeend", Footer());

  document.body.insertAdjacentHTML("beforeend", `
    <button id="js-btn-top" class="btn-top" aria-label="Voltar ao topo">
      <span id="js-scroll-progress" class="btn-top__percent">0%</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  `);
}