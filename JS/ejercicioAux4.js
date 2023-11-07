document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°11</h2>`);

let edades = [], nombres = [];
let edad, nombre;

for (let i = 0; i < 3; i++) {
  do{
    nombre = prompt(`Indicar el nombre de la persona mayor \n Persona ${i+1} \n Ingrese el nombre de la persona:`);
    edad = prompt(`Persona ${i+1} \n Ingrese la edad de ${nombre}:`);
  }while(edad === "" || isNaN(edad) || nombre === "");
  
  edades.push(parseInt(edad));
  nombres.push(nombre);
}

let edadMayor = Math.max(edades[0],edades[1],edades[2]);
let nombreMayor = "";

for (let i = 0; i < edades.length; i++){
  if(edades[i] === edadMayor){
    nombreMayor = nombres[i];
  } 
}

for (let i = 0; i < 3; i++){
  document.write(`<p>${i+1}- ${nombres[i]} tiene ${edades[i]} años</p>`)
}

document.write(`<p><span class="fw-bold">${nombreMayor} es el mayor de los 3 ya que tiene ${edadMayor} años</span></p>`);

document.write(`</main>`);
