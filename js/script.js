// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
  const aberto = navList.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(aberto));
});

// Fecha o menu ao clicar em um link
navList.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Validação simples do formulário de contato
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!nome || !email || !mensagem) {
    status.textContent = 'Por favor, preencha nome, e-mail e mensagem.';
    status.className = 'form__status erro';
    return;
  }

  if (!emailValido) {
    status.textContent = 'Informe um e-mail válido.';
    status.className = 'form__status erro';
    return;
  }

  // Sem back-end: apenas simula o envio.
  // Para receber os dados de verdade, integre com um serviço
  // (ex.: Formspree, EmailJS) ou um endpoint próprio.
  status.textContent = 'Mensagem enviada! Em breve entraremos em contato.';
  status.className = 'form__status ok';
  form.reset();
});
