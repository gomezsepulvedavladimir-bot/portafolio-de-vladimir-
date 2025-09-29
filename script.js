// Fade-in de secciones
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Botón subir arriba
const btnArriba = document.getElementById('btnArriba');
window.addEventListener('scroll',()=>{ btnArriba.style.display = window.scrollY>300?'block':'none'; });
btnArriba.addEventListener('click',()=>{ window.scrollTo({top:0, behavior:'smooth'}); });

// Ocultar/Revelar info
const toggleBtn = document.getElementById('toggleInfo');
const infoContent = document.getElementById('infoContent');
toggleBtn.addEventListener('click',()=>{
    infoContent.style.display = (infoContent.style.display==='none')?'block':'none';
});

// Formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert(Gracias ${form.nombre.value}, recibimos tu correo: ${form.correo.value});
});
