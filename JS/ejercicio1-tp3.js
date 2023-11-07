document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°1</h2>`);

let edad = prompt(`Ser mayor de edad para conducir \n Ingrese una edad:`);

if(edad === ""){
  document.write(`<p>No se ingresó ninguna edad correspondiente a una persona</p>`);
}else{
  edad = parseInt(edad);
  (isNaN(edad)) 
    ? document.write(`<p>La edad ingresada no corresponde a un número</p>`)
    : (edad >= 18)     
        ? document.write(`<p>La persona es mayor de edad ya que tiene <span class="fw-bold">${edad}</span> años, por lo tanto <span class="fw-bold">puede conducir</span></p>`)
        : document.write(`<p>La persona es menor de edad ya que tiene <span class="fw-bold">${edad}</span> años, por lo tanto <span class="fw-bold">no puede conducir</span></p>`);
}

document.write(`</main>`);