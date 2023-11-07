document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°9</h2>`);

let contador = 5;
const numero = 500;

for (let i = 1; i <= numero; i++) {
    (i % 4 == 0)
      ? document.write(`<p class="m-0">${i} <span class="fw-bold">(Múltiplo de 4)</span></p>`)
      : (i % 9 == 0)
        ? document.write(`<p class="m-0">${i} <span class="fw-bold">(Múltiplo de 9)</span></p>`)
        : document.write(`<p class="m-0">${i}</p>`);
     
    if(i === contador){
      document.write(`<p>------------------------------------------------</p>`)
      contador += 5; 
  }   
}

document.write(`</main>`);