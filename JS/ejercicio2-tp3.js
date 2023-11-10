let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                          <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio N°2 - TP3</h1>`;

//Solución
elementoSection += `<h4>Lista de ciudades</h4>`;

let ciudades = [];

do{
  let ciudad = prompt(`Arreglo de ciudades \n Ingrese una ciudad:`);
  if(ciudad === null) break;
  ciudades.push(ciudad);
}while(confirm(`¿Desea agregar otra ciudad?`));

if(ciudades.length >= 1){
  elementoSection += `<ul>`;
  ciudades.map(ciudad => elementoSection += `<li>${ciudad}</li>`);
  elementoSection += `</ul>`;
    
  elementoSection += `<p class="mt-3">El arreglo de ciudades tiene ${ciudades.length} elementos</p>`;
    
  elementoSection += `<ul>
                      <li>Elemento primera posición: ${ciudades[0]}</li>
                      <li>Elemento tercera posición: ${ciudades[2]}</li>
                      <li>Elemento última posición: ${ciudades[ciudades.length-1]}</li>
                      </ul>`;

  ciudades.push(`París`);
  elementoSection += `<ul>
                      <li>Se agregó una nueva ciudad en la última posición: ${ciudades[ciudades.length-1]}</li>
                      </ul>`;
    
  alert(`Ciudad segunda posición: ${ciudades[1]}`);
  
  let nuevaCiudad = "Barcelona";
  elementoSection += `<h4 class="mt-3">Lista de ciudades actualizada:</h4>`;
  ciudades.splice(1, 1, nuevaCiudad, ciudades[1]);
  elementoSection += `<p>Se reemplazó por la ciudad de ${nuevaCiudad} en la segunda posición</p>`;
  elementoSection += `<ul>`;
  ciudades.map(ciudad => elementoSection += `<li>Elemento: ${ciudad}</li>`);
  elementoSection += `</ul>`;
}else{
  elementoSection += `<p class="mt-3">No se ingresó ninguna ciudad</p>`;
  elementoSection += `<p class="mt-3">El arreglo de ciudades tiene ${ciudades.length} elementos</p>`;
}

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;

