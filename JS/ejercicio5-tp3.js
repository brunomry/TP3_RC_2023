
document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°5</h2>`);

do{
  let dni = prompt(`Calcular valor de letra de DNI \n Ingrese un número de DNI:`);
  
  if(dni !== "" && !isNaN(dni) && dni >= 0 && dni <= 99999999){
    let res = parseInt(dni) % 23;
    const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
  
    document.write(`<p>La letra del DNI "${dni}" es la <span class="fw-bold">${letras[res]}</span></p>`);
  }else{
    alert(`No se ingresó ningún DNI o El DNI ingresado no es válido. Por favor, vuelva a ingresar.`);
  } 
}while(confirm(`¿Desea ingresar otro número de DNI?`));

document.write(`</main>`);