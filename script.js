// Botón subir arriba
const btnArriba = document.getElementById('btnArriba');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnArriba.style.display = 'block';
    } else {
        btnArriba.style.display = 'none';
    }
});

btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animación fade-in de secciones
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
