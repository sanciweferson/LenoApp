
import { Icons, menuItems,  socialLinks } from "../../components/dados.js";

import { footerLinks, IconsFooter } from "../../components/dados.js";
function creatLogoItem(href = "/", showLabel = false) {
  return /*html*/ `
    <a class="logo-link" href="${href}" aria-label="Ir para a página inicial">
      ${Icons.logo}
      ${showLabel ? `<span class="logo-link__name"></span>` : ""}
    </a>
  `
}
const createNavItemFooter = ({ href, label, icon },  iconVariantFooter = "") => {
  const variantClassIconsFooter = {

    footer: "nav__desktop--links--footer"
  };
  return /*html*/`
    <li>
      <a  class="links-footer" href="${href}" data-link>
        <span class="${variantClassIconsFooter[iconVariantFooter] ?? ""}">
          ${Icons[icon] ?? ""}
        </span>
        <span>${label}</span>
      </a>
    </li>
  `;
};
const createSocialItem = ({ href, icons }) => {
  return /*html */`
  <li>
    <a href="${href}" target="_blank" rel="noopener noreferrer">
      ${Icons[icons] || ""}
    </a>
    </li>
  `
}

const creatFooterItem = ({ href, label,icons }, iconVariantFooter = "") => {
  const variantClassIconsFooter = {

    footer: "nav__desktop--links--footer"
  };
  return /*html*/`
    <li>
      <a class="links-footer"  href="${href}" data-link>
      <span class="${variantClassIconsFooter[iconVariantFooter] ?? ""}">
      ${IconsFooter[icons]}
      </span>
      ${label}</a>
    </li>
  `
}
const Footer = () => {
  const year = new Date().getFullYear();
  return /*html*/`

  <footer class="footer" aria-label="Rodapé do site">
 <div class="footer__container ">
   <div class="footer__about">
  <div class="footer__logo">
  ${creatLogoItem()}
  </div>
 <h4 class="footer__title">Sobre o Leno</h4>
       <p class="footer__description">
            O Leno é um app mobile que ajuda você a manter o foco e melhorar sua produtividade. O app oferece ferramentas para definir metas, acompanhar seu progresso e manter um equilíbrio saudável entre trabalho e vida pessoal.
     </p>
     </div>
 





 <nav class="footer__links" aria-label="Links rápidos">
   <h4 class="footer__title">Links Rápidos</h4>
       <ul class="footer__links-list">
         ${menuItems.map(link => createNavItemFooter(link, "footer")).join("")}
           
          
          ${footerLinks.map(link => creatFooterItem(link, "footer")).join("")}
          </ul>

 </nav>
 
        <div class="footer__right">
          <div class="footer__newsletter">
            <h4 class="footer__title">Fique por dentro</h4>
            <p class="footer__newsletter-text">Receba novidades e dicas de produtividade direto no seu e-mail.</p>
            <form class="footer__newsletter-form" aria-label="Formulário de newsletter">
              <input type="email" class="footer__newsletter-input" placeholder="seu@email.com" aria-label="Seu endereço de e-mail" required />
              <button type="submit" class="footer__newsletter-btn btn" aria-label="Assinar newsletter">Assinar</button>
            </form>
          </div>
<!-- -->
<div class="footer__social" aria-label="Redes sociais">

${socialLinks.map(link => createSocialItem(link)).join("")}

</div>
   </div>
      </div>

    <!-- Rodapé inferior -->
        <div class="footer__bottom">
          <p class="footer__copy">
            &copy; ${year} Leno App. Todos os direitos reservados.
          </p>
          <p class="footer__made">
            Feito com ♥ no Brasil
          </p>
        </div>

  </footer>


`
}
export default Footer