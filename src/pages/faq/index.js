export function Faq() {
  return /*html*/ `
    <section class="page">
      <div class="page__container">
        <h1 class="page__title">Perguntas Frequentes</h1>
        <p class="page__subtitle">Tire suas dúvidas sobre o Leno.</p>

        <div class="faq__list">
          <details class="faq__item">
            <summary class="faq__question">O Leno é gratuito?</summary>
            <p class="faq__answer">Sim! O plano Standard é 100% gratuito e já inclui acesso a todos os recursos essenciais. Para funcionalidades avançadas, temos planos a partir de R$ 19/mês.</p>
          </details>
          <details class="faq__item">
            <summary class="faq__question">O app funciona sem internet?</summary>
            <p class="faq__answer">Sim. O Leno possui modo offline completo. Seus dados são sincronizados automaticamente quando a conexão é restabelecida.</p>
          </details>
          <details class="faq__item">
            <summary class="faq__question">O Leno está disponível para iOS e Android?</summary>
            <p class="faq__answer">Sim! Disponível tanto para iOS quanto para Android. Baixe gratuitamente na App Store ou Google Play.</p>
          </details>
          <details class="faq__item">
            <summary class="faq__question">Meus dados ficam seguros?</summary>
            <p class="faq__answer">Sim. Utilizamos criptografia de ponta a ponta e seguimos as diretrizes da LGPD. Seus dados nunca são vendidos ou compartilhados.</p>
          </details>
          <details class="faq__item">
            <summary class="faq__question">Posso cancelar a qualquer momento?</summary>
            <p class="faq__answer">Claro! Sem contratos de longo prazo. Cancele sua assinatura a qualquer momento diretamente no app.</p>
          </details>
        </div>
      </div>
    </section>
  `
}





// // dados separados
// const faqItems = [
//   { question: "O Leno é gratuito?", answer: "Sim! O plano Standard é 100% gratuito..." },
//   { question: "O app funciona sem internet?", answer: "Sim. O Leno possui modo offline completo..." },
//   { question: "O Leno está disponível para iOS e Android?", answer: "Sim! Disponível tanto para iOS quanto para Android..." },
//   { question: "Meus dados ficam seguros?", answer: "Sim. Utilizamos criptografia de ponta a ponta..." },
//   { question: "Posso cancelar a qualquer momento?", answer: "Claro! Sem contratos de longo prazo..." },
// ]

// // componente menor
// const FaqItem = ({ question, answer }) => /*html*/ `
//   <details class="faq__item">
//     <summary class="faq__question">${question}</summary>
//     <p class="faq__answer">${answer}</p>
//   </details>
// `

// // página limpa
// export function Faq() {
//   return /*html*/ `
//     <section class="page">
//       <div class="page__container">
//         <h1 class="page__title">Perguntas Frequentes</h1>
//         <p class="page__subtitle">Tire suas dúvidas sobre o Leno.</p>
//         <div class="faq__list">
//           ${faqItems.map(FaqItem).join("")}
//         </div>
//       </div>
//     </section>
//   `
// }