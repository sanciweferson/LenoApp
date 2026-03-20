// src/components/ui.js  ← arquivo novo

import { Icons } from "./dados.js";
export const createLogoItem = (href = "/", showLabel = false) => {
  return /*html*/ `
    <a class="logo-link" href="${href}" aria-label="Ir para a página inicial">
      ${Icons.logo}
      ${showLabel ? `<span class="logo-link__name"></span>` : ""}
    </a>
  `;
};




// src/components/ui.js

export const createSocialItem = ({ href, icons }) => {
  return /*html*/`
    <li>
      <a href="${href}" target="_blank" rel="noopener noreferrer">
        ${Icons[icons] || ""}
      </a>
    </li>
  `;
};




