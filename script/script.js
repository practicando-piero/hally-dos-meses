document.addEventListener('DOMContentLoaded', () => {
    const tituloToURL = {
        'Encuentro sorpresa en el baño de KFC: abrazo, susto y una historia para siempre': 'noticia-kfc.html',
        '¿Quieres ser mi novia? — Una pregunta escrita en chocolate que cambió todo': 'noticia-tiramisu.html',
        '¿Quieres ser mi novia? — La noche más hermosa bajo las luces del Museo Larco': 'noticia-cena.html',
        'Entre pizzas, cartas y piezas de LEGO: celebramos el primer mes de novios': 'noticia-flor-lego.html',
        'Entre besitos y abrazos, capturamos uno de los pocos retratos de nosotros': 'noticia-retrato.html'
    };

    const titulos = document.querySelectorAll('.noticia h3');

    titulos.forEach(titulo => {
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', () => {
            const texto = titulo.textContent.trim();
            const url = tituloToURL[texto];
            if (url) {
                window.location.href = url;
            } else {
                console.warn('No se encontró una URL para el título:', texto);
            }
        });
    });
});
