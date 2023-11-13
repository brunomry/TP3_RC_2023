let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio Auxliar N°4</h1>
                        <div class="row">`;

//Solución N°1 usando función declarada
elementoSection += `<article class="col-md-6">
                      <h4 class="mb-3">Solución N°1 usando función declarada:</h4>`;

let numero1 = prompt(`Solución N°1 \n Números primos menores o iguales a un número \n Ingrese un número:`);

function obtenerNumerosPrimos1(numero){
  let primos = [];
  let contador = 0;
  for(let i = 1; i <= numero; i++){
    for(let j = 1; j <= i; j++){
      if(i % j === 0) contador++;
    }
    if(contador === 2) primos.push(i);
    contador = 0;
  }
  return primos;
}

let primos1 = obtenerNumerosPrimos1(numero1);

//para mostrar números primos de ambas soluciones
function mostrarNumerosPrimos(numero, primos){
  if(isNaN(numero) || numero === "" || numero === null || !Number.isInteger(parseFloat(numero))){
    elementoSection +=`<p>No se ingresó ningún número o el valor ingresado no es válido</p>`;
  }else{   
    elementoSection += `<p>Los números primos menores o iguales a <span class="fw-bold">${numero}</span> son:</p>
                        <p>${primos.join(' - ')}</p>`;
  }
}

mostrarNumerosPrimos(numero1,primos1);
elementoSection += `</article>`;

//Solución N°2 usando función flecha
elementoSection += `<article class="col-md-6">
                      <h4 class="mb-3">Solución N°2 usando función flecha:</h4>`;

let numero2 = prompt(`Solución N°2 \n Números primos menores o iguales a un número \n Ingrese un número:`);

const obtenerNumerosPrimos2 = numero => {
  let primos = [];
  let contador = 0;
  for(let i = 1; i <= numero; i++){
    for(let j = 1; j <= i; j++){
      if(i % j === 0) contador++;
    }
    if(contador === 2) primos.push(i);
    contador = 0;
  }
  return primos;
}

let primos2 = obtenerNumerosPrimos2(numero2);
mostrarNumerosPrimos(numero2,primos2);
elementoSection += `</article>`;

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;
