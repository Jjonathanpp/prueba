// Definir un arreglo con los colores que quieres usar
const colores = [
    'lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink',    // Colores suaves
    'skyblue', 'salmon', 'khaki', 'mistyrose', 'lavender',                  // Colores cálidos
    'gold', 'lavenderblush', 'beige', 'aliceblue', 'honeydew',              // Colores pasteles
    'teal', 'turquoise', 'plum', 'orchid', 'violet',                       // Colores fríos
    'peachpuff', 'wheat', 'lemonchiffon', 'seashell', 'snow',               // Colores cálidos suaves
    'mediumaquamarine', 'aquamarine', 'chartreuse', 'lightseagreen', 'slateblue', // Colores vibrantes
    'lightgray', 'gainsboro', 'ivory', 'antiquewhite', 'oldlace'            // Colores más neutros
];

// Índice para saber cuál color se debe aplicar
let indice = 0;

// Función que cambia el color de fondo al siguiente color
document.getElementById('cambiar-color').addEventListener('click', function() {
    // Cambiar el color de fondo usando el arreglo de colores
    document.body.style.backgroundColor = colores[indice];

    // Incrementar el índice para el siguiente clic
    indice = (indice + 1) % colores.length; // Si llega al final, vuelve a empezar
});


// Mostrar la imagen cuando se hace clic en el nuevo botón
document.getElementById('mostrar-imagen').addEventListener('click', function() {
    const imagenContainer = document.getElementById('imagen-container');
    
    // Si la imagen está oculta, la mostramos
    if (imagenContainer.style.display === 'none') {
        imagenContainer.style.display = 'block';

        // Aquí defines la URL de la imagen que quieres mostrar
        imagenContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png" alt="Mi imagen personalizada" />';
    } else {
        // Si ya está visible, la ocultamos
        imagenContainer.style.display = 'none';
    }
});






document.getElementById('sobre-nosotros').addEventListener('click', function() {
    mostrarSeccion('seccion-sobre-nosotros');
});

document.getElementById('servicios').addEventListener('click', function() {
    mostrarSeccion('seccion-servicios');
});

document.getElementById('contacto').addEventListener('click', function() {
    mostrarSeccion('seccion-contacto');
});

function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostrar la sección correspondiente
    document.getElementById(seccionId).style.display = 'block';
}
