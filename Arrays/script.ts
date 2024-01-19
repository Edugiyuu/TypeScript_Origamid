const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30,'algo'];

function maiorQue10(data: number[]) {
  return data.filter((n) => n > 10);
}
maiorQue10(numeros);

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === 'number');
}

console.log(filtrarValores(valores));
 
/* Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
Existem apenas dois níveis de cursos, Iniciante (iniciante) 
e Avançado (avancado). Se for para iniciante pinte o título de azul
para avançado pinte de vermelho. */

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

interface Aulas{
  nome:string;
  horas:number;
  aulas:string;
  gratuito:false;
  tags:string[];
  idAulas:number[];
  nivel:'iniciante' | 'avancado';
}
function mostrarCursos(cursos:Aulas[]) {
  cursos.forEach(curso => {
    document.body.innerHTML += `
    <div>
      <h2>${curso.nome}</h2>
      <p>${curso.horas} Horas</p>
      <p>${curso.aulas} Aulas</p>
    </div>
  `;
  });
}
