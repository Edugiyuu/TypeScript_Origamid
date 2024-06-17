"use strict";
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30, 'algo'];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
maiorQue10(numeros);
function filtrarValores(data) {
    return data.filter((item) => typeof item === 'number');
}
console.log(filtrarValores(valores));
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    for (let i = 0; i < cursos.length; i++) {
        document.body.innerHTML += `
    <div>
      <h2>${cursos[i].nome}</h2>
      <p>Aulas:${cursos[i].aulas}</p>
      <div>
        <h3>Preço: ${cursos[i].gratuito}</h3>
      </div>
      <div>
        <h3>Nivel: ${cursos[i].nivel}</h3>
      </div>
    </div>
  `;
    }
}
