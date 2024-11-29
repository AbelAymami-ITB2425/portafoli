function mostrarMissatgeBenvinguda() {
    const fecha = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaActual = fecha.toLocaleDateString('ca-ES', opcionesFecha);
    alert(`Benvingut/da al meu portafoli! Avui és ${fechaActual}.`);
}

// Ejecutar la función cuando se cargue la página
window.onload = mostrarMissatgeBenvinguda;