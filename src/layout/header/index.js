
// src/layout/header/index.js

import { Icons, menuItems, downloadIcons, socialLinks } from "../../components/dados.js";


const createLogoItem = (href = "/", showLabel = false) => {
  return /*html*/ `
    <a class="logo-link" href="${href}" aria-label="Ir para a página inicial">
      ${Icons.logo}
      ${showLabel ? `<span class="logo-link__name"></span>` : ""}
    </a>
  `
}





const createToggleMenu =()=>{
  return /*html*/ `

 
      <button id="js-menu-toggle" type="button" class="nav__btn-toggle" aria-label="Abrir menu" aria-expanded="false">
        <span class="nav__icon--open">${Icons.hamburger}</span>
        <span class="nav__icon--close hidden">${Icons.close}</span>
      </button>
    
  `
}
const createNavItem = ({ href, label, icon }, variant = "", iconVariant = "") => {

  const variantClassMap = {
    mobile: "aside__link--mobile",
    desktop: "nav__desktop--links"
  };

  const variantClassIcons = {
    icon: "aside__icons--mobile",
    desktopIcons: "nav__desktop--icons"
  };

  return /*html*/`
    <li>
      <a class="${variantClassMap[variant] ?? ""}" href="${href}" data-link>
        <span class="${variantClassIcons[iconVariant] ?? ""}">
          ${Icons[icon] ?? ""}
        </span>
        <span>${label}</span>
      </a>
    </li>
  `;
};
 

const createThemeToggle = () => {
  return /*html*/ `
   <button class="nav__btn-theme" type="button" aria-label="Alternar tema">
       <span class="icon icon--moon">${Icons.moon}</span>
        <span class="icon icon--sun">${Icons.sun}</span>
   </button>
`
}



const createAppIcons = () => {
  return /*html*/ `

    <a href="#download" class="mobile-footer__btn mobile-footer__btn--apple" data-link>
      ${downloadIcons.apple}
      <span>App Store</span>
    </a>
    <a href="#download" class="mobile-footer__btn mobile-footer__btn--android" data-link>
      ${downloadIcons.android}
      <span>Play Store</span>
    </a>
  `
}


const createSocialItem = ({ href, icons }) => {
  return /*html */`
  <li>
    <a href="${href}" target="_blank" rel="noopener noreferrer">
      ${Icons[icons] || ""}
    </a>
    </li>
  `
}

export function Header() {
  const menuLinkDesktop = menuItems
    .map(link => createNavItem(link, "desktop", "desktopIcons"))
    .join("");
  const menuLinksMobile = menuItems.map(link => createNavItem(link, "mobile", "icon")).join("")
  const socialHTML = socialLinks
    .map(link => createSocialItem(link))
    .join("");
  return /*html*/`

    <header  class="header-bar">
      <nav  class="nav-bar">
      <div class="nav__logo">${createLogoItem()}</div>
      <div class="nav__btn-toggle">${createToggleMenu()}</div>
      <ul class="nav-desktop">${menuLinkDesktop}</ul>
      <div class="themeDesktop">${createThemeToggle()}</div>
      </nav>
    <aside class="aside-mobile" id="js-nav-aside">

  <!-- Header -->
  <div class="mobile-header">
  
  <button  class="nav__logo-leno">Leno
  </button>        
  <div >
    <span>${createThemeToggle()}</span>
  </div>
  </div>

  <!-- Links -->
 <div class="mobile-drawer">
  <ul class="menuLinksMobile">
    ${menuLinksMobile}

  </ul>

</div>

  <!-- Footer -->
<!-- Footer -->
<div class="mobile-footer">

  <p class="mobile-footer__label">Baixe o app</p>
  <div>
     <div class="mobile-footer__btn mobile-footer__btn--android" data-link>
       ${createAppIcons()}
     </div>
   <ul class="footer__social">${socialHTML}</ul>
</div>

</aside>
    </header>
  `
}