document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°8</h2>`);

let numero = prompt(`Pirámide desde el 1 hasta el número ingresado \n Ingrese un número:`);

if(numero == "" || isNaN(numero)){
  document.write(`<p>No se ingresó ningún valor o el valor ingresado no corresponde a un número</p>`);
}else{
  numero = parseInt(numero);
  if(numero >= 1 && numero <= 50){
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <= i; j++) {
        document.write(`<span>${j}</span>`);
      }
      document.write(`<br>`);
    }
  }else{
      document.write(`<p>Número no válido! Debe ingresar un número entre 1 y 50</p>`);
  }
}

document.write(`</main>`);
