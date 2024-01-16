const primera = document.getElementById("primera");
const cuenta = document.getElementById("cuenta");
const titulo = document.getElementById("titulo");
const ppal = document.getElementById("contenido");
let porcentaje = 100;

function cuentaAtras(){ /*cuenta atrás*/

	/*se declara aquí como constante para que no de problemas más adelante y 
	no se le pueda dar otro valor al intervalo después*/

	const intervalo = setInterval(() => {
		cuenta.innerText = porcentaje + '%'; /*para meterlo en el p*/

		porcentaje--; /*actualizar porcentaje*/

		let opacidad = porcentaje / 100; /*para que la opacidad vaya a la par del porcentaje*/

		primera.style.opacity = opacidad; /*para cambiar el estilo*/

		if(porcentaje <= 0){ /*si hemos llegado a cero*/
			clearInterval(intervalo); /*para que pare*/
			cuenta.innerText = porcentaje + '%'; /*para meterlo en el p*/

			primera.style.opacity = opacidad; /*cuando la cuenta termine la opacidad es 0*/
			ppal.classList.remove('aparece');

			if(opacidad === 0){ /*=== y no = porque si no es una asignación no un igual!*/
			primera.classList.add('aparece'); /*cuando la cuenta termine primera pasa a display none*/
			} 
		}
		//console.log(intervalo);para ver que funciona

	},100);
}
	cuentaAtras(); /*iniciar la función cuentaAtras*/

/*dark-mode*/

const darkModeToggle = document.getElementById("oscuro"); /*con toggle para que cuando no tenga la clase se la ponga y viceversa*/

const darkModeEncendido = () => { /*se crea como const por si depués se necesitan*/
	document.body.classList.add("dark-mode"); /*añadirle la clase*/
};

const darkModeApagado = () => { /*se crea como const por si depués se necesitan*/
	document.body.classList.remove("dark-mode"); /*quitarle la clase*/
};

darkModeToggle.addEventListener("click", () => { /*cada vez que hacemos click cambiamos el modo*/

	if(document.body.classList.contains("dark-mode")) {
        darkModeApagado();
    }else{
        darkModeEncendido();
    }
});