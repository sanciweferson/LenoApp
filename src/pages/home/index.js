
// src/pages/home/index.html

import { Button } from "../../components/button.js";

export function Home() {
  
  var name = "sa"

  return /*html*/`
    <section>
      <h1>Home</h1>
      <p>Bem-vindo à SPA!</p>
      ${Button()}

  ${name}
      
    </section>
  `
}