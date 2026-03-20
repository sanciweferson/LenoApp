// ✅ src/layout/header/scroll.js
export function initScroll() {
  const header = document.querySelector(".header-bar");
  const btnTop = document.getElementById("js-btn-top");
  const progress = document.getElementById("js-scroll-progress");

  if (!header || !btnTop || !progress) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? Math.round((scrollY / docHeight) * 100) : 0; // 👈

    header.classList.toggle("header-bar--scrolled", scrollY > 60);
    btnTop.classList.toggle("btn-top--visible", scrollY > 300);
    progress.textContent = `${percent}%`;
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}