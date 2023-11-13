let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio Auxiliar N°2</h1>`;

let numeros = [];
let numero;

//Validaciones para las 2 soluciones
do{
  numero = prompt(`Número pares de una lista (Arreglo) \n Ingrese un número:`);
  if(numero !== null && numero !== "" && !isNaN(numero)){
    parseFloat(numero);
    numeros.push(numero);
  }else{
    alert(`No se ingresó ningún número o El número ingresado no es válido.`);
  }
}while(confirm(`¿Desea ingresar otro número?`))

//para mostrar los números del arreglo en pantalla
elementoSection += `<h3>Lista de números: </h3>`;

if(numeros.length !== 0){
  numeros.forEach((numero, i) => elementoSection += `<p class="ms-3 my-0"> - Número ${i+1}: ${numero}</p>`);
}else{
  elementoSection += `<p>No se ingresó ningún número</p>`;
}


//Solución N°1 usando función declarada
elementoSection += `<h4 class="my-3">Solución N°1 usando función declarada:</h4>`;

function sonPares1(numeros){
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) pares.push(numeros[i]);
  }
  return pares;
}

let numerosPares1 = sonPares1(numeros);

//Función para mostrar números pares de ambas soluciones
const mostrarNumerosPares = numerosPares =>{
  if(numerosPares.length !== 0){
    elementoSection += `<p class="my-0">Números pares: </p>`;
    numerosPares.forEach((numero, i) => elementoSection += `<p class="ms-5 my-0"> ${i+1}. <span class="fw-bold"> número ${numero}</span></p>`);
  }else{
    elementoSection += `<p>La lista no contiene números pares o está vacía</p>`;
  }
}

mostrarNumerosPares(numerosPares1);


//Solución N°2 usando función flecha y filter
elementoSection += `<h4 class="my-3">Solución N°2 usando función flecha y filter:</h4>`;

const sonPares2 = numeros => numeros.filter(numero => numero % 2 == 0);
let numerosPares2 = sonPares2(numeros);

mostrarNumerosPares(numerosPares2);

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;
