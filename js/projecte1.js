document.getElementById('cambiarColorBtn').addEventListener('click', function() {
    // Generamos un color aleatorio en formato hexadecimal
    var colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Cambiamos el color de fondo de la página
    document.body.style.backgroundColor = colorAleatorio;
});

// script.js
document.getElementById('cambiarColorBtn').addEventListener('mouseover', function() {
    // Generamos un color aleatorio en formato hexadecimal
    var colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Cambiamos el color de fondo del botón
    this.style.backgroundColor = colorAleatorio;
});