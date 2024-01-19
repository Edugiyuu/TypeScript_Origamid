
//Funciona assim tbm
/* function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
} */

interface InterfaceProduto{
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}

preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: false,
});

const pc: TypeProduto={
  nome:'pc',
  preco:2200,
  teclado:true
}


preencherDados(pc)

preencherDados({
  nome: '3DS',
  preco: 1200,
  teclado: false,
});

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
  console.log(categoria);
  
}

pintarCategoria('design')

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Product{
  nome:string;
  preco:string;
  descricao:string;
  garantia:string
}

function showProduct(data: Product) {
  document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <h2></h2>
    </div>
  `;
}