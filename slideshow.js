let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    // Oculta todas las diapositivas
    slides.forEach((slide) => (slide.style.display = "none"));

    // Incrementa el índice de la diapositiva
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reinicia al inicio
    }

    // Muestra la diapositiva actual
    slides[slideIndex - 1].style.display = "block";

    // Cambia la diapositiva cada 3 segundos
    setTimeout(showSlides, 3000); // 3000 ms = 3 segundos
}

// Inicia el slideshow
showSlides();
