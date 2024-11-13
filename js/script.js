 
 
// Selecciona todos los elementos con la clase "Activo"
const elementos = document.querySelectorAll(".activo");

elementos.forEach(elemento => {
  elemento.addEventListener("click", () => {
      
      // Primero, desactiva la clase "encendido" en todos las activos
      elementos.forEach(i => i.classList.remove("encendido"));
      
      // Luego, activa la clase "encendido" solo en la clase activa clicada
      elemento.classList.add("encendido");
  });
});


 
// Selecciona el primer elemento <nav> en el documento y lo guarda en la constante 'navegacion'
const navegacion = document.querySelector("nav");

// Selecciona todos los elementos con las clases ".open" o ".active-close" y los guarda en 'botones'
const botones = document.querySelectorAll(".open,.active-close");

// Define una función que alterna la clase 'desplegado' en el elemento 'navegacion'
function toggleNavegacion() {
  // Si 'navegacion' tiene la clase 'desplegado', la quita; si no la tiene, la añade
  navegacion.classList.toggle("desplegado");
}

// Recorre cada elemento en el NodeList 'botones'
for (let i = 0; i < botones.length; i++) {
  // Añade un evento 'click' a cada botón, que ejecuta la función 'toggleNavegacion'
  botones[i].addEventListener("click", toggleNavegacion);
}



// Selecciona todos los elementos con la clase '.section-left' y los guarda en 'sectionsLeft'
const sectionsLeft = document.querySelectorAll(".section-left");

// Crea un nuevo Intersection Observer para observar cuando las secciones aparecen o desaparecen en la vista
const observer = new IntersectionObserver(entries => {
    // Recorre cada entrada (elemento observado) detectada por el Intersection Observer
    entries.forEach(entry => {
        // Comprueba si el elemento está intersectando (visible en la pantalla)
        if (entry.isIntersecting) {
            // Si el elemento es visible, añade la clase 'show' y quita la clase 'hidden'
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
        } else {
            // Si el elemento ya no es visible, quita la clase 'show' y añade la clase 'hidden'
            entry.target.classList.remove("show");
            entry.target.classList.add("hidden");
        }
    });
}, {
    // Configura el umbral para el observer: 
    // 'threshold: 0.1' significa que el efecto se activará cuando el 10% del elemento sea visible en la pantalla
    threshold: 0.1
});

// Aplica el observer a cada sección en 'sectionsLeft' para que observe su visibilidad en pantalla
sectionsLeft.forEach(section => {
    observer.observe(section);
});


// Selecciona todas las imágenes de la clase .slide
const slides = document.querySelectorAll(".slide");
let indiceImg = 0; // Índice de la imagen inicial

// Función para mostrar la imagen actual
function mostrarImagen() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active"); // Oculta todas las imágenes
        if (index === indiceImg) {
            slide.classList.add("active"); // Muestra solo la imagen actual
        }
    });
}

// Botón "anterior"
document.getElementById("anterior").addEventListener("click", () => {
    indiceImg = (indiceImg > 0) ? indiceImg - 1 : slides.length - 1;
    mostrarImagen();
});

// Botón "siguiente"
document.getElementById("siguiente").addEventListener("click", () => {
    indiceImg = (indiceImg < slides.length - 1) ? indiceImg + 1 : 0;
    mostrarImagen();
});

// Inicializa la primera imagen al cargar la página
mostrarImagen();
