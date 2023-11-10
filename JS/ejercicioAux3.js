let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio Auxiliar N°3</h1>`;

//Solución N°1 usando función declarada
elementoSection += `<h4 class="mb-3">Solución N°1 usando función declarada:</h4>`;

let celsius1 = prompt(`Solución N°1 \n Convertir grados Celsius a grados Fahrenheit \n Ingrese la temperatura:`);

function convertirGrados1(celsius){
  return celsius * 9/5 + 32;
}

if(isNaN(celsius1) || celsius1 === "" || celsius1 === null){
  elementoSection += `<p>No se ingresó la temperatura o el valor ingresado no es válido</p>`;
}else{
  parseFloat(celsius1);
  elementoSection +=`<p>${celsius1} grados Celsius equivalen a ${convertirGrados1(celsius1)} grados Fahrenheit</p>`;
}

//Solución N°2 usando función flecha
elementoSection += `<h4 class="mb-3">Solución N°2 usando función flecha:</h4>`;

let celsius2 = prompt(`Solución N°2 \n Convertir grados Celsius a grados Fahrenheit \n Ingrese la temperatura:`);;
 
const convertirGrados2 = celsius => celsius * 9/5 + 32;

if(!isNaN(celsius2) && celsius2 !== "" && celsius2 !== null){
  parseFloat(celsius2);
  elementoSection += `<p>${celsius2} grados Celsius equivalen a ${convertirGrados2(celsius2)} grados Fahrenheit</p>`;
}else{
  elementoSection += `<p>No se ingresó la temperatura o el valor ingresado no es válido</p>`;
}

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;