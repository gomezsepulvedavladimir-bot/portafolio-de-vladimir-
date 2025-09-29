// Mostrar contenido de proyectos
const btnProyectos = document.querySelector('#proyectos button');
const proyectoContenido = document.getElementById('proyectoContenido');

btnProyectos.addEventListener('click', () => {
  if (proyectoContenido.style.display === 'block') {
    proyectoContenido.style.display = 'none';
  } else {
    proyectoContenido.style.display = 'block';
    proyectoContenido.classList.add('visible'); // Para animación fadeIn
  }
});

// Botón arriba
const btnArriba = document.getElementById('btnArriba');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnArriba.style.display = 'block';
  } else {
    btnArriba.style.display = 'none';
  }

  // Animación barras de habilidades
  document.querySelectorAll('.barra span').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      bar.style.width = bar.dataset.width; // Cada span debe tener data-width="70%" etc.
    }
  });
});

btnArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animación fade-in de secciones al entrar en pantalla
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