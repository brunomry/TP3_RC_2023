let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio N°5 - TP3</h1>`;

let cadena = prompt(`Solución N°1 \n Cadena de texto compuesta por mayúsculas, minúsculas o combinación de ambas \n Ingrese un texto:`);

//Solución N°1 usando función declarada
elementoSection += `<h4 class="mb-3">Solución N°1 usando función declarada:</h4>`;

function mostrarInformacionCadena1(cadena){
   if(cadena === cadena.toUpperCase()){
    elementoSection += `<p>El texto "${cadena}" está formado solo por mayúsculas.</p>`;
   }else if(cadena === cadena.toLowerCase()){
    elementoSection += `<p>El texto "${cadena}" está formado solo por minúsculas.</p>`
   }else{
    elementoSection += `<p>El texto "${cadena}" está formado por una combinación de mayúsculas y minúsculas.</p>`
   }       
}

if(cadena !== null){
  mostrarInformacionCadena1(cadena);
}else{
  elementoSection += `<p>No se ingresó ningún texto.</p>`;
}

//Solucion N°2 usando arrow function y operador ternario
elementoSection += `<h4 class="mb-3">Solución N°2 usando función flecha y operador ternario:</h4>`;

const mostrarInformacionCadena2 = cadena => {
  (cadena === cadena.toUpperCase())
    ? elementoSection += `<p>El texto "${cadena}" está formado solo por mayúsculas.</p>`
    : (cadena === cadena.toLowerCase())
      ? elementoSection += `<p>El texto "${cadena}" está formado solo por minúsculas.</p>`
      : elementoSection += `<p>El texto "${cadena}" está formado por una combinación de mayúsculas y minúsculas.</p>`;  
}

(cadena === null) ? elementoSection += `<p>No se ingresó ningún texto.</p>` : mostrarInformacionCadena2(cadena);

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;