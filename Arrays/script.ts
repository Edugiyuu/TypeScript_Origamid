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

interface NumeroDeAulas{
  
}
interface Cursos{
  aulas: number
  gratuito: boolean
  horas:number
  idDeAulas: number[]
  nivel: 'iniciante' | 'avancado'
  nome: string
  tags:string[]
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
 console.log(data);
 mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Cursos[]) {
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
