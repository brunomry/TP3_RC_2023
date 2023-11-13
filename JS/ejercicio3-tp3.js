let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio N°3 - TP3</h1>
                        <div class="row justify-content-center">`;

//Solución
const getRandomInt = (min,max) => Math.floor(Math.random() * (max - min) + min);

let suma = 0, contador = 0;
let sumas = [], apariciones = [];

//primera forma 
for (let i = 0; i <= 12; i++) {
  apariciones.push(contador);
}
//segunda forma: apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0]
//tercera forma: apariciones = Array(13).fill(0);

for (let i = 0; i < 50; i++) {
  let dado1 = getRandomInt(1,6);
  let dado2 = getRandomInt(1,6);
  suma = dado1 + dado2;
  sumas.push(suma);
  apariciones[suma]++;
}

let cadenaSumas = sumas.join(' - ');

elementoSection += `<article class="col-md-12">
                      <h4 class="mb-3">Simulamiento de 50 lanzamientos de 2 dados</h4>
                      <p>Resultados de la suma de valores de los dados en cada lanzamiento:</p>
                      <p>${cadenaSumas}</p>
                    </article>`;

elementoSection += `<article class="col-md-6 mt-3">
                      <h5>Tabla de apariciones de cada suma</h5>
                      <table class="table border border-1 border-dark table-light table-striped-columns text-center w-75 mt-3">
                        <tbody>
                          <tr>
                            <th>Suma</th>
                            <th>Apariciones</th>
                          </tr>`;

for(let i = 2; i <= 12; i++){
  elementoSection += `<tr>
                        <td>${i}</td>`;
  for(let j = 0; j < 1; j++){   
    elementoSection += `<td class="w-50 text-success fw-bold">${apariciones[i]}</td>`;
  }
  elementoSection += `</tr>`;
}

elementoSection += `</tbody></table></article></div></section>`;
elementoMain.innerHTML = elementoSection;