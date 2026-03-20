export function Contact() {
  return /*html*/ `
    <section class="page">
      <div class="page__container">
        <h1 class="page__title">Contato</h1>
        <p class="page__subtitle">Fale com a gente. Respondemos em até 24h.</p>

        <div class="contact__grid">
          <form class="contact__form" id="js-contact-form">
            <div class="contact__field">
              <label class="contact__label" for="contact-name">Nome</label>
              <input class="contact__input" type="text" id="contact-name" placeholder="Seu nome completo" required />
            </div>
            <div class="contact__field">
              <label class="contact__label" for="contact-email">E-mail</label>
              <input class="contact__input" type="email" id="contact-email" placeholder="seu@email.com" required />
            </div>
            <div class="contact__field">
              <label class="contact__label" for="contact-subject">Assunto</label>
              <input class="contact__input" type="text" id="contact-subject" placeholder="Como podemos ajudar?" required />
            </div>
            <div class="contact__field">
              <label class="contact__label" for="contact-message">Mensagem</label>
              <textarea class="contact__input contact__textarea" id="contact-message" placeholder="Descreva sua dúvida ou sugestão..." rows="5" required></textarea>
            </div>
            <button type="submit" class="contact__btn">Enviar mensagem</button>
          </form>

          <div class="contact__info">
            <div class="contact__info-item">
              <h3 class="contact__info-title">E-mail</h3>
              <p>contato@lenoapp.com.br</p>
            </div>
            <div class="contact__info-item">
              <h3 class="contact__info-title">Suporte</h3>
              <p>suporte@lenoapp.com.br</p>
            </div>
            <div class="contact__info-item">
              <h3 class="contact__info-title">Horário de atendimento</h3>
              <p>Segunda a sexta, das 9h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}