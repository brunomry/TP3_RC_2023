document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°6</h2>`);

for (let i = 1; i <= 30; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`<span>${i}</span>`);
  }
  document.write(`<br>`);
}

document.write(`</main>`);