// Carrusel simple para mostrar 3 imágenes a la vez estilo "overflow oculto"

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(document.querySelectorAll('.puzzle-img'));
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const visibleCount = 3; // Cuántas imágenes mostrar a la vez
    let currentIndex = 0;

    function updateCarousel() {
        // Calcula el ancho real de cada item (incluyendo margen)
        const itemStyle = getComputedStyle(items[0]);
        const itemWidth = items[0].offsetWidth + parseInt(itemStyle.marginRight || 0);
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        // Deshabilita botones si está al inicio o final
        btnLeft.disabled = currentIndex === 0;
        btnRight.disabled = currentIndex >= items.length - visibleCount;
    }

    btnLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    btnRight.addEventListener('click', () => {
        if (currentIndex < items.length - visibleCount) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Inicializar
    updateCarousel();

    // Opcional: actualiza el carrusel si la ventana cambia de tamaño
    window.addEventListener('resize', updateCarousel);
});