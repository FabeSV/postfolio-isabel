 
 
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


// Slider sistema 

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let prevButton = document.getElementById("anterior");
    let nextButton = document.getElementById("siguiente");

    // Función para mostrar la imagen actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active"); // Quita la clase 'active' de todas
            if (i === index) {
                slide.classList.add("active"); // Añade 'active' solo a la imagen actual
            }
        });
    }

    // Botón siguiente
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length; // Cicla entre imágenes
        showSlide(currentIndex);
    });

    // Botón anterior
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cicla hacia atrás
        showSlide(currentIndex);
    });

    // Mostrar la primera imagen al cargar
    showSlide(currentIndex);
});


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



// Selecciona todos los enlaces dentro de la clase '.gallery' (las miniaturas de la galería)
const miniaturas = document.querySelectorAll(".gallery a");

// Selecciona el contenedor del modal donde se mostrará la imagen ampliada
const modal = document.querySelector(".modal");

// Selecciona la imagen dentro del modal
const imgModal = document.querySelector(".modal img");

// Selecciona los botones dentro del modal que funcionan como flechas de navegación
const flechas = document.querySelectorAll(".modal button");

// Inicializa una variable para llevar el índice de la imagen que se está mostrando en el modal
let indiceImg = 0;

// Añade un evento de clic a cada miniatura de la galería
miniaturas.forEach((miniatura, i) => {
    miniatura.addEventListener("click", evento => {
        // Evita que el enlace redirija la página al hacer clic
        evento.preventDefault();
        
        // Establece el índice actual de la imagen a la posición de la miniatura seleccionada
        indiceImg = i;
        
        // Cambia la imagen en el modal usando la URL del atributo 'href' de la miniatura seleccionada
        imgModal.setAttribute("src", miniatura.getAttribute("href"));
        
        // Añade la clase 'visible' al modal para mostrarlo en la pantalla
        modal.classList.add("visible");
    });
});

// Añade un evento de clic al modal para cerrarlo al hacer clic fuera de la imagen o en el fondo del modal
modal.addEventListener("click", () => {
    modal.classList.remove("visible"); // Quita la clase 'visible' para ocultar el modal
});

// Añade eventos de clic a las flechas de navegación dentro del modal
flechas.forEach((flecha, i) => {
    flecha.addEventListener("click", evento => {
        // Detiene la propagación para evitar que el clic cierre el modal
        evento.stopPropagation();

        // Si el botón es el primero (índice 0), retrocede a la imagen anterior
        if (i == 0) {
            indiceImg = indiceImg > 0 ? indiceImg - 1 : miniaturas.length - 1;
        } else { 
            // Si es el segundo botón (índice 1), avanza a la imagen siguiente
            indiceImg = indiceImg < miniaturas.length - 1 ? indiceImg + 1 : 0;
        }

        // Cambia la imagen en el modal a la nueva imagen calculada por el índice
        imgModal.setAttribute("src", miniaturas[indiceImg].getAttribute("href"));
        
        // Muestra en consola el índice actual de la imagen
        console.log(indiceImg);
    });
});


