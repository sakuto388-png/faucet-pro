// 1. Variables para controlar el estado de la Faucet
let balance = 0.0000;
let tiempoRestante = 300; // 5 minutos en segundos
let contadorIntervalo;

// 2. Capturar los elementos del HTML para poder cambiarlos
const botonReclamar = document.getElementById('claim-btn');
const textoBalance = document.getElementById('user-balance');
const textoTemporizador = document.getElementById('timer-text');

// 3. Función principal del Reclamo
botonReclamar.addEventListener('click', () => {
    // Sumar recompensa al balance
    balance += 0.0005;
    // Actualizar el texto en la pantalla (fijando a 4 decimales)
    textoBalance.innerHTML = `${balance.toFixed(4)} <span>USDT</span>`;
    
    // Desactivar el botón para que no sigan haciendo clic
    botonReclamar.disabled = true;
    botonReclamar.style.opacity = "0.5";
    botonReclamar.style.cursor = "not-allowed";
    
    // Iniciar la cuenta regresiva
    tiempoRestante = 300; // Reiniciar los 5 minutos
    iniciarTemporizador();
});

// 4. Función que maneja el reloj (cuenta regresiva)
function iniciarTemporizador() {
    // Ejecutar esta lógica cada 1 segundo
    contadorIntervalo = setInterval(() => {
        tiempoRestante--;

        // Calcular minutos y segundos restantes
        let minutos = Math.floor(tiempoRestante / 60);
        let segundos = tiempoRestante % 60;

        // Formatear los segundos para que siempre tengan dos dígitos (ej: 05 en vez de 5)
        if (segundos < 10) segundos = "0" + segundos;

        // Mostrar el tiempo en la pantalla
        textoTemporizador.innerText = `Próximo reclamo en: ${minutos}:${segundos}`;

        // Cuando el tiempo llegue a cero
        if (tiempoRestante <= 0) {
            clearInterval(contadorIntervalo); // Detener el reloj
            textoTemporizador.innerText = "¡Listo para reclamar!";
            
            // Reactivar el botón
            botonReclamar.disabled = false;
            botonReclamar.style.opacity = "1";
            botonReclamar.style.cursor = "pointer";
        }
    }, 1000);
}