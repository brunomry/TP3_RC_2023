let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio Auxiliar N°1</h1>`;

//Solución: usando función flecha, Math.max(valores) y spread operator
let numeros = [];
let numero;

do{
  numero = prompt(`Número Mayor de una lista (Arreglo) \n Ingrese un número:`);
  if(numero !== null && numero !== "" && !isNaN(numero)){
    parseFloat(numero);
    numeros.push(numero);
  }else{
    alert(`No se ingresó ningún número o El número ingresado no es válido.`);
  }
}while(confirm(`¿Desea ingresar otro número?`))

numeros.forEach((numero, i) => elementoSection += `<p class="mb-0">Número ${i+1}: ${numero}</p>`);

elementoSection += `<h4 class="mb-3">Solución usando función flecha, Math.max y spread operator:</h4>`;

const esMayor = numeros => Math.max(...numeros);

(numeros.length >= 2) 
  ? elementoSection += `<p class="mt-2">El número ${esMayor(numeros)} es el mayor </p>` 
  : elementoSection += `<p>La lista de números debe contener al menos 2 números.</p>`;
              
elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;

