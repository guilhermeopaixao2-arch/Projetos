// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manipular formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve.');
    this.reset();
});
