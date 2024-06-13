
# Juego de Adivinanza

Este repositorio contiene el código de un juego de adivinanza implementado en Javascript. El juego consiste en adivinar un número aleatorio generado por el programa en un rango del 1 al 100.

## Código Javascript

El archivo Javascript principal es `script.js`, que contiene las siguientes funciones y variables:

### Generar un número aleatorio

    let numeroAzar = Math.floor(Math.random() * 100) + 1;

Esta línea de código genera un número aleatorio entre 1 y 100 y lo guarda en la variable numeroAzar. Utilizamos Math.random() para generar un número decimal entre 0 y 1, luego lo multiplicamos por 100 para obtener un número entre 0 y 100, y finalmente utilizamos Math.floor() para redondear hacia abajo y obtener un número entero entre 0 y 99. Al sumar 1 al resultado, obtenemos un número aleatorio entre 1 y 100.

### Obtener elementos del DOM

    let numeroEntrada = document.getElementById('numeroEntrada');
    let mensaje = document.getElementById('mensaje');
    let intento = document.getElementById('intento');
    let intentos = 0;

Estas líneas de código obtienen referencias a los elementos del Document Object Model (DOM) utilizando el método getElementById(). El elemento con el id "numeroEntrada" representa el campo de entrada donde el usuario ingresa su número, el elemento con el id "mensaje" muestra mensajes de retroalimentación al usuario, y el elemento con el id "intento" muestra la cantidad de intentos realizados.

### Función para comprobar el número ingresado

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


Esta función se llama cuando el usuario presiona el botón de "Comprobar". Primero, obtiene el número ingresado por el usuario utilizando numeroEntrada.value y lo convierte a un número entero utilizando parseInt(). Luego, incrementa el contador de intentos y actualiza el DOM.

La función verifica si el número ingresado es válido (dentro del rango 1-100). Si no es válido, muestra un mensaje de error en el elemento "mensaje" y se detiene la ejecución. Si el número es válido, se compara con el número generado aleatoriamente (numeroAzar). Si son iguales, muestra un mensaje de felicitación, deshabilita el campo de entrada y muestra el botón de reinicio. Si el número ingresado es menor o mayor que el número aleatorio, muestra un mensaje correspondiente.

### Función para comprobar el número ingresado

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

Esta función permite reiniciar el juego generando un nuevo número aleatorio, reseteando el contador de intentos y los mensajes, habilitando nuevamente el campo de entrada y ocultando el botón de reinicio.


## Uso del juego

1.  Clona o descarga este repositorio en tu computadora.
2.  Abre el archivo `index.html` en tu navegador web.
3.  Verás una interfaz de usuario con un campo de entrada y un botón de "Comprobar".
4.  Ingresa un número válido entre 1 y 100 en el campo de entrada y presiona el botón de "Comprobar".
5.  Dependiendo de tu número ingresado, recibirás mensajes indicando si el número es mayor o menor que el número aleatorio, o si has adivinado correctamente.
6.  Si adivinas correctamente, el campo de entrada se deshabilitará y se mostrará un mensaje de felicitación y un botón para reiniciar el juego.

¡Diviértete jugando!
