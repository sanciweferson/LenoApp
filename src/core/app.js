// src/core/app.js
import { renderLayout } from "../layout/index.js";
import { initScroll } from "../layout/header/scroll.js";
import { router } from "./route.js";
import { renderPage } from "./render.js";
import { initMenu } from "../layout/mobile/menuEvents.js";
import { initTheme } from "../layout/theme/theme.init.js";
import { initNewsletter } from "./newsletter.js";



export function initApp() {
  renderLayout();
  initMenu();
  initTheme();
  initScroll(); // 👈
  router();
  renderPage();
  initNewsletter(); // 👈
}