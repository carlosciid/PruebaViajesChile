// Implementación del 'smooth scroll' (desplazamiento suave)
// Selecciona todos los enlaces de la barra de navegación que comiencen con "#" (anclas)
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    // Añade un escuchador de eventos de clic a cada ancla
    anchor.addEventListener('click', function (e) {
        // Previene el comportamiento predeterminado del enlace (navegación directa)
        e.preventDefault();
        // Encuentra el elemento destino utilizando el valor del atributo 'href' del ancla
        const target = document.querySelector(this.getAttribute('href'));
        // Realiza el desplazamiento suave hacia el elemento destino
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Añade un escuchador de eventos de desplazamiento a la ventana
window.addEventListener('scroll', function() {
    // Selecciona el elemento de la barra de navegación
    var navbar = document.querySelector('.navbar');
    // Obtiene la altura de la sección de inicio para determinar el límite de desplazamiento
    var inicioHeight = document.querySelector('#inicio').offsetHeight;

    // Verifica si el desplazamiento vertical de la página supera la altura de la sección de inicio
    if(window.pageYOffset > inicioHeight) {
        // Añade la clase 'nav-scrolled' a la barra de navegación para cambiar su estilo
        navbar.classList.add('nav-scrolled');
    } else {
        // Remueve la clase 'nav-scrolled' de la barra de navegación si el desplazamiento es menor
        navbar.classList.remove('nav-scrolled');
    }
});

// Implementación del mensaje de confirmación al enviar el formulario de contacto
// Añade un escuchador de eventos de envío al formulario de contacto
document.querySelector('#contacto form').addEventListener('submit', function(e) {
    // Previene el comportamiento predeterminado del formulario (envío directo)
    e.preventDefault();

    // Selecciona el elemento que muestra el mensaje de confirmación
    var confirmationMessage = document.querySelector('#confirmationMessage');
    // Muestra el mensaje de confirmación
    confirmationMessage.style.display = 'block';

    // Resetea el formulario, borrando los campos introducidos por el usuario
    this.reset();

    // Oculta el mensaje de confirmación después de 5 segundos
    setTimeout(function() {
        confirmationMessage.style.display = 'none';
    }, 5000); 
});
