// src/core/newsletter.js  ← arquivo novo
export function initNewsletter() {
  const form = document.querySelector(".footer__newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ← impede o recarregamento da página

    const input = form.querySelector("input[type='email']");
    const email = input?.value.trim();

    if (!email) return;

    // Aqui futuramente você integra com sua API
    console.log("Email cadastrado:", email);

    input.value = "";
    input.placeholder = "Obrigado! ✓";
    setTimeout(() => (input.placeholder = "seu@email.com"), 3000);
  });
}