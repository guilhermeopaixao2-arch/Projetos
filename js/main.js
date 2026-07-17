/* =========================================================================
   PEIXOTO TERRAPLENAGEM — JS
   Apenas: menu mobile, validação/estados do formulário, scroll-reveal.
   Sem bibliotecas. Sem carrossel, contador ou parallax.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- 1. MENU MOBILE ---------- */
  var hamburger = document.querySelector(".hamburger");
  var menu = document.getElementById("mobile-menu");

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Abrir menu");
  }

  if (hamburger && menu) {
    hamburger.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      hamburger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    // Fecha ao clicar num link do menu
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    // Fecha com ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- 2. SCROLL-REVEAL (fade in / slide up, 0.3s) ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 3. FORMULÁRIO — validação e estados ---------- */
  var form = document.getElementById("form-orcamento");
  if (!form) return;

  var statusEl = document.getElementById("form-status");
  var submitBtn = form.querySelector('button[type="submit"]');

  function setFieldError(field, hasError) {
    if (!field) return;
    field.classList.toggle("has-error", hasError);
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  function validate() {
    var ok = true;

    // Campos de texto obrigatórios
    ["nome", "telefone", "cidade"].forEach(function (id) {
      var input = document.getElementById(id);
      var empty = !input.value.trim();
      setFieldError(input.closest(".field"), empty);
      if (empty) ok = false;
    });

    // E-mail
    var email = document.getElementById("email");
    var emailBad = !validEmail(email.value);
    setFieldError(email.closest(".field"), emailBad);
    if (emailBad) ok = false;

    // Consentimento LGPD
    var consent = document.getElementById("consent");
    var consentError = form.querySelector('[data-for="consent"]');
    if (!consent.checked) {
      ok = false;
      if (consentError) consentError.style.display = "block";
      consent.closest(".field").classList.add("has-error");
    } else {
      if (consentError) consentError.style.display = "none";
      consent.closest(".field").classList.remove("has-error");
    }

    return ok;
  }

  // Limpa o erro do campo assim que o usuário corrige
  form.querySelectorAll("input, select, textarea").forEach(function (el) {
    el.addEventListener("input", function () {
      var field = el.closest(".field");
      if (field) field.classList.remove("has-error");
      var consentError = form.querySelector('[data-for="consent"]');
      if (el.id === "consent" && consentError) consentError.style.display = "none";
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusEl.className = "form__status";
    statusEl.textContent = "";

    if (!validate()) {
      statusEl.classList.add("is-error");
      statusEl.textContent = "Confira os campos destacados.";
      var firstError = form.querySelector(".has-error input, .has-error select, .has-error textarea");
      if (firstError) firstError.focus();
      return;
    }

    // Estado "enviando"
    submitBtn.disabled = true;
    var originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Enviando...";
    statusEl.textContent = "";

    /* ⚠ BACK-END: este formulário precisa de um destino real para enviar.
       Escolha uma das opções do briefing (seção 11) e substitua o bloco abaixo:

       A) Netlify Forms  → adicione ao <form>: data-netlify="true" e um input
          hidden "form-name"; remova o preventDefault e deixe o submit nativo.
       B) Formspree / Web3Forms → troque o action por:
             fetch(form.action, { method: "POST", body: new FormData(form),
               headers: { Accept: "application/json" } })
       C) Google Apps Script → POST para a Web App publicada, que grava numa
          planilha e dispara notificação no WhatsApp de quem atende.

       Enquanto não houver back-end, simulamos o sucesso para demonstrar os
       estados (enviando → sucesso). NÃO publique em produção sem conectar o
       destino — senão o orçamento cai num buraco (briefing, "risco operacional"). */

    setTimeout(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
      form.reset();
      statusEl.className = "form__status is-success";
      statusEl.textContent = "Pedido registrado. Retornaremos em breve. (Demonstração — conecte o back-end para envio real.)";
    }, 900);
  });
})();
