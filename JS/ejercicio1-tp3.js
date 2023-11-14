let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°1 - TP3</h2>
                          <div class="row">`;

let meses1 = [];
let meses2 = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto", "septiembre","octubre","noviembre","diciembre"];

//Solucion N°1
elementoSection += `<article class="col-md-6">
                      <h3>Solución N°1:</h3>
                      <h4>Lista de meses</h4>`;

elementoSection += `<ul>`
let mes = "";
let cancelar = false;
//este for aplica para ambas soluciones
for (let i = 0; i < 12; i++) {
  do{
    mes = prompt(`Listado de los 12 meses del año \n Ingrese el mes ${i+1}:`);
    if(mes === null){
      cancelar = true;
      break;
    } 
    if(mes === "" || !isNaN(mes) || !meses2.includes(mes.toLowerCase())){
      alert('No se ingresó el mes o el valor ingresado no es válido');
    }
  }while(mes === "" || !isNaN(mes) || !meses2.includes(mes.toLowerCase()));
  if(cancelar) break;

  mes = mes.charAt(0).toUpperCase() + mes.slice(1);
  meses1.push(mes);
}

if(meses1.length == meses2.length){
  for (let i = 0; i < meses1.length; i++) {
    elementoSection += `<li>${meses1[i]}</li>`
  }
}else{
  elementoSection += `<p>Se canceló la operación</p>`
}

elementoSection += `</ul></article>`;


//Solucion N°2 usando metodo map
elementoSection += `<article class="col-md-6">
                      <h3>Solución N°2:</h3>
                      <h4>Lista de meses</h4>`;

elementoSection += `<ul>`;

if(meses1.length == meses2.length){
  for (let i = 0; i < meses1.length; i++) {
    meses1.map(mes => elementoSection += `<li>${mes}</li>`);
  }
}else{
  elementoSection += `<p>Se canceló la operación</p>`
}

elementoSection += `</ul></article>`;

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;

