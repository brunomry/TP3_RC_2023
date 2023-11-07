document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°2</h2>`);

//SOLUCION N°1 USANDO SWITCH-CASE

do{
  const nota = parseInt(prompt(`Solucion n°1 \n Rangos de nota \n Ingrese una nota:`));

  if(isNaN(nota)){
    alert(`Introduce un número válido`);
  }else{
    switch(nota){
      case 0:
      case 1:
      case 2:
        alert(`Muy deficiente`);
        break;
      case 3:
      case 4:
        alert(`Insuficiente`);
        break;
      case 5:
      case 6:
        alert(`Suficiente`);
        break;
      case 7:
        alert(`Bien`);
        break;
      case 8:
      case 9:
        alert(`Notable`);
        break;
      case 10:
        alert(`Sobresaliente`);
        break;
      default:
        alert(`Número erróneo`);
    }
  } 
}while(confirm(`¿Desea ingresar otra nota?`));

//SOLUCION N°2 USANDO IF-ELSE

do{
  const nota1 = parseInt(prompt(`Solucion n°2 \n Rangos de nota \n Ingrese una nota:`));

  if(isNaN(nota1)){
    alert(`Introduce un número válido`);
  }else if(nota1 >= 0 && nota1 <= 2){
            alert(`Muy deficiente`);
  }else if(nota1 >= 3 && nota1 <= 4){
    alert(`Insuficiente`);
  }else if(nota1 >= 5 && nota1 <= 6){
    alert(`Suficiente`);
  }else if(nota1 === 7){
    alert(`Bien`);
  }else if(nota1 >= 8 && nota1 <= 9){
    alert(`Notable`);
  }else if(nota1 === 10){
    alert(`Sobresaliente`);
  }else{
    alert(`Número erróneo`);
  }
}while(confirm(`¿Desea ingresar otra nota?`));

document.write(`</main>`);