# 📱 Leno App — Landing Page

> Landing page moderna para o **Leno**, um app mobile de produtividade e bem‑estar para desenvolvedores, criadores e profissionais modernos.

---

## 🚀 Sobre o projeto

Desenvolvida com HTML, CSS e JavaScript puro (Vanilla JS), utilizando arquitetura modular com componentes, roteamento client-side e cache de páginas — sem nenhum framework.

---

## ✨ Funcionalidades

- 🎨 **Tema claro/escuro** com persistência
- 📱 **Menu mobile** com drawer animado
- 🔝 **Botão "voltar ao topo"** com indicador de progresso de scroll
- 🎯 **Header dinâmico** ao rolar a página
- 🗺️ **Roteamento client-side** com cache
- ♿ **Acessibilidade** — ARIA, roles semânticos
- ⚡ **Performance** — lazy loading e cache de componentes

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura e acessibilidade |
| CSS3 (custom properties) | Estilo, temas e animações |
| JavaScript ES Modules | Lógica e roteamento |
| Google Fonts (Syne + DM Sans) | Tipografia |
| Font Awesome 6 | Ícones |

---

## 📁 Estrutura
```
leno-app/
├── index.html
├── css/
├── src/
│   ├── core/        # app, router, render, cache
│   ├── layout/      # header, footer, mobile, theme
│   ├── components/  # dados, ícones
│   └── routes.js
└── images/
```

---

## ▶️ Como rodar
```bash
git clone https://github.com/seu-usuario/leno-app.git
cd leno-app
npx serve .
```

> ⚠️ Requer servidor local por usar ES Modules.

---

Feito com ♥ no Brasil
```

---

**Descrição do repositório** (campo "About" no GitHub, máx. ~350 chars):
```
Landing page do Leno App — app mobile de produtividade e bem‑estar. Desenvolvida com Vanilla JS, arquitetura modular, roteamento client-side, tema dark/light e menu mobile. Sem frameworks.
```

---

**Mensagem do primeiro commit:**
```
feat: initial commit — landing page Leno App

- Estrutura HTML semântica e acessível (ARIA, roles)
- Layout modular com header, footer e componentes JS
- Roteamento client-side com cache de páginas
- Tema claro/escuro com persistência
- Menu mobile com drawer animado
- Header dinâmico e botão back-to-top com progresso de scroll
- Estilização com CSS custom properties e responsividade