document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°10</h2>`);

let filas, columnas;
do{
  filas = prompt(`Tabla de números en orden descendente \n\n Ingrese número de filas:`);
  columnas = prompt(`Tabla de números en orden descendente \n\n Ingrese número de columnas:`);
}while(filas == "" || columnas == "");

filas = parseInt(filas);
columnas = parseInt(columnas);

let table = `<div><table><tbody>`;

if(!isNaN(filas) && !isNaN(columnas)){
  let totalCeldas = filas * columnas;

  for(let i = 0; i < filas; i++){
      table += `<tr>`;
      for(let j = 0; j < columnas; j++){
          table += `<td>${totalCeldas--}</td>`;
      }
      table += `</tr>`;
  }
}else{
  document.write(`La cantidad de filas o columnas ingresada no corresponde a un número.`);
}

table += `</tbody></table></div>`;
document.write(`${table}</main>`);

