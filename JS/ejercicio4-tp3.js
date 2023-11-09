let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio N°4 - TP3</h1>`;

//Solución N°1 usando función declarada
elementoSection += `<h4 class="mb-3">Solución N°1 usando función declarada:</h4>`;

let numero1 = prompt(`Solución N°1 \n Número par o impar \n Ingrese un número:`);

function esPar1(numero){
  if(numero % 2 === 0){
    elementoSection += `<p>El número ${numero1} es PAR</p>`;
  }else{
    elementoSection += `<p>El número ${numero1} es IMPAR</p>`;
  }
}

if(numero1 === null || isNaN(numero1) || numero1 === "" || !Number.isInteger(parseFloat(numero1))){
  elementoSection += `<p>No se ingresó ningún número o el valor ingresado no es válido.</p>`;
}else{
  parseInt(numero1);
  esPar1(numero1);
}

//Solucion N°2 usando arrow function
elementoSection += `<h4 class="mb-3">Solución N°2 usando función flecha:</h4>`;

let numero2 = prompt(`Solución N°2 \n Número par o impar \n Ingrese un número:`);

const esPar2 = numero => {
  (numero % 2 === 0) 
    ? elementoSection += `<p>El número ${numero2} es PAR</p>`
    : elementoSection += `<p>El número ${numero2} es IMPAR</p>`;
}

(numero2 !== null && !isNaN(numero2) && numero2 !== "" && Number.isInteger(parseFloat(numero2)))
  ? esPar2(parseInt(numero2))
  : elementoSection += `<p>No se ingresó ningún número o el valor ingresado no es válido.</p>`;

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;

