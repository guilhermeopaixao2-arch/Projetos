/* =========================================================================
   PEIXOTO TERRAPLENAGEM — JS
   Menu mobile, validação/estados do formulário, scroll-reveal, curvas de
   nível animadas, parallax sutil no hero e contador dos números.
   GSAP + ScrollTrigger auto-hospedados (js/vendor). Se não carregarem, tudo
   cai de volta pro comportamento sem biblioteca (ver cada seção abaixo).
   ========================================================================= */
(function () {
  "use strict";

  /* =======================================================================
     CONFIGURAÇÃO — o único lugar para mexer
     =======================================================================
     Chave do Web3Forms: faz o formulário chegar por e-mail, sem back-end.
     Como pegar (2 minutos, de graça):
       1. Entre em https://web3forms.com
       2. Digite o e-mail que vai RECEBER os pedidos e clique em criar
       3. A chave chega nesse e-mail — cole ela entre as aspas abaixo

     Enquanto estiver vazia, o formulário NÃO finge que enviou: ele monta o
     pedido e oferece o botão para mandar pelo WhatsApp. Nenhum orçamento
     se perde nem antes nem depois de configurar.
     ===================================================================== */
  var WEB3FORMS_KEY = "";

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

  /* ---------- 2. SCROLL-REVEAL (fade in / slide up) ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  var hasGSAP = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";

  if (hasGSAP) gsap.registerPlugin(ScrollTrigger);

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else if (hasGSAP) {
    // Entrada escalonada: quando um grupo de itens entra junto (ex.: grid de
    // cards), anima em sequência em vez de todos ao mesmo tempo.
    ScrollTrigger.batch(reveals, {
      start: "top 88%",
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" });
      }
    });
  } else {
    // Sem GSAP disponível (falha de carregamento): volta pro comportamento
    // original com IntersectionObserver puro.
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

  /* ---------- 2b. CURVAS DE NÍVEL — desenho ao carregar ---------- */
  if (hasGSAP && !reduceMotion) {
    var contourPaths = document.querySelectorAll(".hero .contours path");
    contourPaths.forEach(function (path, i) {
      var length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.2 + i * 0.12
      });
    });
  }

  /* ---------- 2c. PARALLAX sutil no hero ---------- */
  if (hasGSAP && !reduceMotion) {
    gsap.to(".hero .contours, .hero__terrain", {
      y: 20,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
    });
  }

  /* ---------- 2d. CONTADOR dos números do hero ---------- */
  // Só anima quando o texto já for um número real (ex.: "18"). Enquanto for
  // o placeholder "[N]", pula sem quebrar — ativa sozinho quando o dado
  // real for preenchido no HTML.
  if (hasGSAP && !reduceMotion) {
    document.querySelectorAll(".hero__stat b").forEach(function (el) {
      var target = el.childNodes[0];
      if (!target || target.nodeType !== Node.ELEMENT_NODE) target = el.querySelector(".ph") || el;
      var raw = target.textContent.trim();
      var value = parseInt(raw.replace(/\D/g, ""), 10);
      if (!raw.match(/^\d+$/) || isNaN(value)) return;

      var counter = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: function () {
          gsap.to(counter, {
            val: value,
            duration: 1.2,
            ease: "power1.out",
            onUpdate: function () { target.textContent = Math.round(counter.val); }
          });
        }
      });
    });
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
      // Dado mudou: o link do WhatsApp montado antes ficou velho, some com ele.
      clearFallback();
    });
  });

  /* ---------- 3b. REDE DE SEGURANÇA: WHATSAPP ----------
     Um pedido de orçamento nunca pode sumir em silêncio. Se não há chave
     configurada, ou se o envio falha (rede caiu, serviço fora do ar), o
     cliente recebe o MESMO pedido pronto para mandar no WhatsApp. */

  // O número sai do botão flutuante — assim continua existindo uma fonte da
  // verdade só: o "550000000000" que você troca no index.html vale aqui também.
  function wppNumber() {
    var link = document.querySelector(".wpp-float");
    var m = link && link.href.match(/wa\.me\/(\d+)/);
    return m ? m[1] : "";
  }

  function wppMessage() {
    function val(id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : "";
    }
    var linhas = [
      "Olá! Pedido de orçamento pelo site:",
      "",
      "Nome: " + val("nome"),
      "Telefone: " + val("telefone"),
      "E-mail: " + val("email"),
      "Cidade do terreno: " + val("cidade")
    ];
    if (val("servico")) linhas.push("Serviço: " + val("servico"));
    if (val("mensagem")) linhas.push("", val("mensagem"));
    return linhas.join("\n");
  }

  function clearFallback() {
    var old = form.querySelector(".form__fallback");
    if (old) old.parentNode.removeChild(old);
  }

  function renderFallback() {
    clearFallback();
    var num = wppNumber();
    if (!num) return;
    var a = document.createElement("a");
    a.className = "btn btn--secondary btn--block form__fallback";
    a.href = "https://wa.me/" + num + "?text=" + encodeURIComponent(wppMessage());
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "Enviar este pedido pelo WhatsApp";
    statusEl.insertAdjacentElement("afterend", a);
  }

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
    clearFallback();
    submitBtn.disabled = true;
    var originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Enviando...";
    statusEl.textContent = "";

    function restore() {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }

    function ok() {
      restore();
      form.reset();
      statusEl.className = "form__status is-success";
      statusEl.textContent = "Pedido enviado. Retornaremos em breve.";
    }

    function offerWhatsApp(motivo) {
      restore();
      statusEl.className = "form__status is-error";
      statusEl.textContent = motivo;
      renderFallback();
    }

    // Sem chave: não fingimos envio — mandamos pelo canal que já funciona.
    if (!WEB3FORMS_KEY) {
      offerWhatsApp("Falta um passo: confirme o envio pelo WhatsApp.");
      return;
    }

    var dados = new FormData(form);
    dados.append("access_key", WEB3FORMS_KEY);
    dados.append("subject", "Novo pedido de orçamento pelo site");
    dados.append("from_name", "Site Peixoto Terraplenagem");

    fetch(form.action, {
      method: "POST",
      body: dados,
      headers: { Accept: "application/json" }
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.success) ok();
        else offerWhatsApp("Não conseguimos enviar agora. Mande pelo WhatsApp:");
      })
      .catch(function () {
        offerWhatsApp("Não conseguimos enviar agora. Mande pelo WhatsApp:");
      });
  });
})();
