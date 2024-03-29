// Implementación del 'smooth scroll' 
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});



window.addEventListener('scroll', function() {
    
    var navbar = document.querySelector('.navbar');
    var inicioHeight = document.querySelector('#inicio').offsetHeight;

    // reevisa si el scrol se pasa de la seccion inicio
    if(window.pageYOffset > inicioHeight) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// mensaje enviar
document.querySelector('#contacto form').addEventListener('submit', function(e) {
    
    e.preventDefault();

    
    var confirmationMessage = document.querySelector('#confirmationMessage');
    confirmationMessage.style.display = 'block';

   
    this.reset();

   
    setTimeout(function() {
        confirmationMessage.style.display = 'none';
    }, 5000); 
});

