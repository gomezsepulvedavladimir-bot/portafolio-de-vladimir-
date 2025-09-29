// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Botón subir arriba
const btnArriba = document.getElementById('btnArriba');
window.addEventListener('scroll', () => {
    if(window.scrollY > 300) btnArriba.style.display = 'block';
    else btnArriba.style.display = 'none';
});
btnArriba.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

// Botones dinámicos mostrar/ocultar proyectos
const dynamicBtns = document.querySelectorAll('.dynamic-btn');
dynamicBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        target.style.display = (target.style.display === 'block') ? 'none' : 'block';
    });
});

// Botón ocultar/revelar info Sobre mí
const toggleInfoBtn = document.getElementById('toggleInfo');
const infoContent = document.getElementById('infoContent');
toggleInfoBtn.addEventListener('click', () => {
    infoContent.style.display = (infoContent.style.display === 'none') ? 'block' : 'none';
});

// Formulario contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert("¡Gracias! Hemos recibido tu mensaje.");
    contactForm.reset();
});
