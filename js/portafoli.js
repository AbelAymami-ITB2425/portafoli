// Función para mostrar un mensaje de bienvenida en la consola del navegador
function mostrarmissatgeBenvinguda() {
    console.log("Benvinguts al meu portafoli!");
}

// Función para obtener la fecha actual
function dataactual() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
}
// Función para mostrar un mensaje de bienvenida en la consola del navegador durante más tiempo
function mostrarmissatgeBenvinguda() {
    console.log("Benvinguts al meu portafoli!");
    setTimeout(() => {
        console.clear();
    }, 5000); // Mostrar el mensaje durante 5 segundos
}