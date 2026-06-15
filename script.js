//====================================
//CONFIGURACÓN DE LA FAUCET
//======================================

//REEMPLAZA ESTE ENLACE con tu enlace directo(DIRECT_ LINK) REAL DE ADSTERRA
const ADSTERRA_DIRECT_LINK="https://pl29643268.effectivecpmnetwork.com/a9/07/5f/a9075fd11c1f62df42160106d8bfd62b.js";


//variable de estado
let balance=0.0000;//Arranque en cero 4 decimales
let listoparaReclamar= true;
let tiempoRestante=300; //300  segundos = 5 minutos
let reloj;


//captura de elementos de HTML (Asegúrate de que esto Ids coincidan con tu HY=TML)
const botonReclamar=document.getElementById("claim-btn");
const textoBalance=document.getElementById("user-balance");
const textoReloj=document.getElementById("timer-text");

//=================================
//Lógica principal
//=======================================
//función que se ejecuta cuando el usuario le da click al boton de reclamar
botonReclamar.addEventListener("click", () => {
	//1. abril el anuncio de adsterra en una nueva pestaña
	window.open(ADSTERRA_DIRECT_LINK,"_blank");
	
	//2. sumar la recompensa al balance temporal en pantalla
	balance+= 0.0005;
	textoBalance.textContent= balance.toFixed(4)//Muestra 4 decimales
	
	//3. Desactiva el  boton para que no haciendo clik
	botonReclamar.disabled =true;
	botonReclamar.style.backgroundColor="#666";//lo ponemos en gris visualmente
	
	//4. iniciar la cuenta regresiva en 5 minutos
	tiempoRestante = 300; // reiniciamos 5 minutos
	actualizarpantallaReloj(); //ponemos el primer numero en pantalla
	
	//Arrancamos el temporisador para que reste 1 segundo cada segundo
	reloj=setInterval(() =>{
	tiempoRestante--;
	actualizarpantallaReloj();
	
	if(tiempoRestante <=0) {
		clearInterval(reloj);
		botonReclamar.disabled =false;
		botonReclamar.style.backgroundColor="";
	textoReloj.textContent= "Listo para reclamar";	
	} // Este cierra el if
	
    },1000);//
	
});//

// TU FUNCIÓN	 OPTIMISA  CON EL OPERADOR UNARIO
function actualizarpantallaReloj(){
let minutos= Math.floor(tiempoRestante /60);
 let screenshots=tiempoRestante % 60;	
  
  
// Tu operacion unaria para poner el cero a la izquierda  
let segundosFormateados=segundo < 10 ? "0" + segundo : segundo;

//tu template string
reloj.textContent=`Por Favor Espera: ${minutos}:${segundosFormateados}`;
	
}
		
		
		
		
	
	
	
	
	
	
	
	
