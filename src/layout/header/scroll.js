export function initScroll() {
  const header = document.querySelector(".header-bar");
  const btnTop = document.getElementById("js-btn-top");
  const progress = document.getElementById("js-scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.round((scrollY / docHeight) * 100);

    // Header muda cor
    header.classList.toggle("header-bar--scrolled", scrollY > 60);

    // Botão aparece
    btnTop.classList.toggle("btn-top--visible", scrollY > 300);

    // Atualiza porcentagem
    progress.textContent = `${percent}%`;
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}