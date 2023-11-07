document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°4</h2>`);

let suma = 0, contadorNumeros = 0;
let operacionSuma = "";

do{
  let numero = parseFloat(prompt(`Suma de números ingresados \n Ingrese un número:`));
  if(isNaN(numero)){
    alert(`No es número`);
  }else{
    suma += numero;
    contadorNumeros++;
    operacionSuma += " " + numero + " +";
  }
}while(confirm(`¿Desea seguir ingresando números?`));

if(operacionSuma.charAt(operacionSuma.length - 1 ) === "+") operacionSuma = operacionSuma.slice(0,-1);

(contadorNumeros >= 2)
  ? document.write(`<p>La suma de los números ingresados es igual a <span class="fw-bold">${suma}</span> ya que <span class="fw-bold">${operacionSuma} = ${suma}</span></p>`)
  : document.write(`<p>La cantidad de números ingresados es menor a 2</p>`);

document.write(`</main>`);

