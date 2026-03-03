
// src/main.js
import { router } from "./core/route.js"
import { initApp } from "./core/app.js"

window.addEventListener("DOMContentLoaded", () => {
  initApp()
  router()

})