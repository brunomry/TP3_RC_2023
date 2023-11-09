let elementoMain = document.getElementById("main");
let elementoSection = `<section class="container">
                        <h1 class="pb-3 text-center text-primary">Resolución de Ejercicio N°6 - TP3</h1>`;

//Solución N°1 usando función declarada
elementoSection += `<h4 class="mb-3">Solución N°1 usando función declarada:</h4>`;

let base1, altura1;

do{
  base1 = prompt(`Solución N°1 \n Perímetro de un Rectángulo \n Ingrese la base:`);
  altura1 = prompt(`Solución N°1 \n Perímetro de un Rectángulo  \n Ingrese la altura:`);
}while(base1 === "" || isNaN(base1) || altura1 === "" || isNaN(altura1));

base1 = parseFloat(base1);
altura1 = parseFloat(altura1);
  
function calcularPerimetro1(base, altura){
  return 2 * base1 + 2 * altura1;
}
  
elementoSection += `<p>Rectángulo 1: <span>Base: ${base1} - Altura: ${altura1}</span></p>
                    <p>El perímetro del rectángulo es igual a: ${calcularPerimetro1(base1,altura1)}</p>`;


//Solucion N°2 usando arrow function
elementoSection += `<h4 class="mb-3">Solución N°2 usando función flecha:</h4>`;

let base2, altura2;

do{
  base2 = prompt(`Solución N°2 \n Perímetro de un Rectángulo \n Ingrese la base:`);
  altura2 = prompt(`Solución N°2 \n Perímetro de un Rectángulo  \n Ingrese la altura:`);
}while(base2 === "" || isNaN(base2) || altura2 === "" || isNaN(altura2));

base2 = parseFloat(base2);
altura2 = parseFloat(altura2);
  
const calcularPerimetro2 = (base2, altura2) => 2 * base2 + 2 * altura2;
  
elementoSection += `<p>Rectángulo 2: <span>Base: ${base2} - Altura: ${altura2}</span></p>
                    <p>El perímetro del rectángulo es igual a: ${calcularPerimetro2(base2,altura2)}</p>`;

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;