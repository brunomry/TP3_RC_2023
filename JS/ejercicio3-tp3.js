document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°3</h2>`);

let cadenas = "";

do{
  const cadena = prompt(`Cadenas de texto concatenadas con un guión \n Ingrese una cadena:`);
  cadenas += " " + cadena + " -";
}while(confirm(`¿Desea seguir ingresando cadenas de texto?`));

if(cadenas.charAt(cadenas.length - 1 ) === "-") cadenas = cadenas.slice(0,-1);

document.write(`<p>Cadenas de texto ingresadas separadas por un guión: <span class="fw-bold">${cadenas}</span></p>`);
document.write(`</main>`);

