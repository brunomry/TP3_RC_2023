let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio N°7 - TP3</h1>
                        <div class="row">`;

//Solución N°1 usando función declarada
elementoSection += `<article class="col-md-6">
                      <h4 class="mb-3">Solución N°1 usando función declarada:</h4>`;

let numero1;

numero1 = prompt(`Solución N°1 \n Tabla de multiplicar de un número \n Ingrese un número:`);

elementoSection += `<div>`
function mostrarTabla1(numero){
  for (let i = 0; i < 10; i++) {
    elementoSection += `<p>${numero} x ${i+1} = ${numero * (i+1)} </p>`;
  }
}

if(numero1 === null || numero1 === "" || isNaN(numero1) || !Number.isInteger(parseFloat(numero1))){
  elementoSection += `<p>No se ingresó ningún número o el valor ingresado no es válido</p>`;
}else{
  parseInt(numero1);
  mostrarTabla1(numero1);
}

elementoSection += `</div></article>`;

//Solucion N°2 usando arrow function
elementoSection += `<article class="col-md-6">
                      <h4 class="mb-3">Solución N°2 usando función flecha:</h4>`;

let numero2;

numero2 = prompt(`Solución N°2 \n Tabla de multiplicar de un número \n Ingrese un número:`);

elementoSection += `<div>`

const mostrarTabla2 = numero => {
  for (let i = 0; i < 10; i++) {
    elementoSection += `<p>${numero} x ${i+1} = ${numero * (i+1)} </p>`;
  }
}

if(numero2 !== null && numero2 !== "" && !isNaN(numero2) && Number.isInteger(parseFloat(numero2))){
  parseInt(numero2);
  mostrarTabla2(numero2);
}else{
  elementoSection += `<p>No se ingresó ningún número o el valor ingresado no es válido</p>`; 
}

elementoSection += `</div></article>`;

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;
