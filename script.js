//==============================
//CONFIGURACIÓN DE LA FAUCET
//===============================

//REMPLAZA ESTE ENLACE con tu enlace directo (DIRECT LINK) real Adstrra
const ADSTERRA_DIRECT_LINK="<script src="https://pl29643268.effectivecpmnetwork.com/a9/07/5f/a9075fd11c1f62df42160106d8bfd62b.js"></script>
";
console.log(ADSTERRA_DIRECT_LINK);

//Variable de  estado
let balance= 0.0000;
let tiempoRestante = 300;// 5 minutos en segundos
let reloj;

//captura de elementos de Html

const botonReclamar= document.getElementById("claim-btn");
const textoBalance =document.getElementById("user-balance");
const textoReloj= document.getElementById("timer-text");

//======================================
//LÓGICA PRINCIPAL
//====================================

//función  que se ejecuta cuando el usuario le da click al botón dereclamar    
botonReclamar.addEventListener("click", () => {
	// 1. abril el anuncio de 	Adsterra en una  nueva pestaña
window.open(ADSTERRA_DIRECT_LINK,"_blank");

//2 sumar la recompensa al balance  temporal  en pantalla
   balance += 0.0005;
   textoBalance.textContent = balance.toFixed(4); // Muestra 4 decimales : 0.0005;
   
  //3. Desactivar el botón para que no siga haciendo clik
   botonReclamar.disabled = true;
   botonReclamar.style.backgroundColor = "#666" ; // lo pone en gris visual mente
   
   //4.  Iniciar la cuenta regresiva de 5 minutos
   tiempoRestante=300;
   actualizarpantallaReloj();
   
   //Arrancamos el  temporizador para que reste 1 segundo cada segundo
   reloj= setInterval(() =>{
	   tiempoRestante--;
	   actualizarpantallaReloj();
	// si el tiempo llega  a cero , detenemos el reloj  y liberamos el botón
	   if(tiempoRestante <= 0){
		clearInterval(reloj);
		botonReclamar.disabled=false;
		botonReclamar.style.backgroundColor =""; //Devuelve su color morado original
		textoReloj.textContent ="¡Listo para reclamar!";
         
	   }//linea cerral
   },
 1000);
});
	//function de bajo de nuestro codigo
	function actualizarpantallaReloj() {
		
		const minutos= Math.floor(tiempoRestante / 60);
		const segundos=tiempoRestante % 60;
		const segundosFormateados= segundos < 10 ? "0" + segundos: segundos;
		textoReloj.textContent=`Espera: ${minutos}:${segundosFormateados}`; 	
	}
	







