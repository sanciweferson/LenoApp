// src/layout/mobile/menuEvents.js
import {
  setupMenuToggle,
  setupMenuStateOnLoad,
  setupLinkClicks,
  closeSideMenu
} from "./menuActions.js";

const MOBILE_BREAKPOINT = 768;

const handleResize = () => {
  const isDesktop = window.innerWidth >= MOBILE_BREAKPOINT;
  if (isDesktop) {
    closeSideMenu();
  }
};

export const initMenu = () => {
  const checkInterval = setInterval(() => {
    const toggleBtn = document.getElementById("js-menu-toggle");
    const sideMenu = document.getElementById("js-nav-aside");

    if (toggleBtn && sideMenu) {
      setupMenuToggle();
      setupMenuStateOnLoad();
      setupLinkClicks();

      // fecha ao clicar no overlay 👈
      document.getElementById("js-menu-overlay")
        ?.addEventListener("click", closeSideMenu);

      handleResize();
      window.addEventListener("resize", handleResize);

      clearInterval(checkInterval);
    }
  }, 50);

  setTimeout(() => clearInterval(checkInterval), 5000);
};