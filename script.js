// Generar un número aleatorio entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

// Función para comprobar el número ingresado por el usuario
function chequearResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);
    intentos++;
    intento.textContent = intentos;

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Ingresa un número entre 1 y 100";
        mensaje.style.color = "red";
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = "¡Felicitaciones! ¡Has adivinado el número!";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
        document.getElementById('reiniciarBtn').style.display = 'block';
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "¡Más alto! ¡El número a adivinar es más alto!";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Más bajo! ¡El número a adivinar es más bajo!";
        mensaje.style.color = "red";
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    numeroAzar = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    intento.textContent = intentos;
    mensaje.textContent = "¡A jugar!";
    mensaje.style.color = "#333";
    numeroEntrada.disabled = false;
    numeroEntrada.value = '';
    document.getElementById('reiniciarBtn').style.display = 'none';
}
