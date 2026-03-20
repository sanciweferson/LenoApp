// src/routes.js
import { Home } from "./pages/home"
import { Details } from "./pages/details"
import { Faq } from "./pages/faq"
import { Terms } from "./pages/termos"
import { Privacy } from "./pages/privacidade"
import { Contact } from "./pages/contato"

export const routes = {
  "/": { page: Home, title: "Home | Leno App" },
  "/details": { page: Details, title: "Detalhes | Leno App" },
  "/faq": { page: Faq, title: "FAQ | Leno App" },
  "/termos": { page: Terms, title: "Termos de Uso | Leno App" },
  "/privacidade": { page: Privacy, title: "Privacidade | Leno App" },
  "/contato": { page: Contact, title: "Contato | Leno App" },
};