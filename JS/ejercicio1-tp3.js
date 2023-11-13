let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°1 - TP3</h2>
                          <div class="row">`;

let meses = [];

//Solucion N°1
elementoSection += `<article class="col-md-6">
                      <h3>Solución N°1:</h3>
                      <h4>Lista de meses</h4>`;

elementoSection += `<ul>`
let mes = "";
//este for aplica para ambas soluciones
for (let i = 0; i < 12; i++) {
  do{
    mes = prompt(`Listado de los 12 meses del año \n Ingrese el mes ${i+1}:`);
    if(mes === null) alert(`La operación fue cancelada`);
  }while(mes === "");
  mes = mes.charAt(0).toUpperCase() + mes.slice(1);
  meses.push(mes);
}

for (let i = 0; i < meses.length; i++) {
  elementoSection += `<li>${meses[i]}</li>`
}
elementoSection += `</ul></article>`;


//Solucion N°2 usando metodo map
elementoSection += `<article class="col-md-6">
                      <h3>Solución N°2:</h3>
                      <h4>Lista de meses</h4>`;

elementoSection += `<ul>`;
meses.map(mes => elementoSection += `<li>${mes}</li>`);
elementoSection += `</ul></article>`;

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;

