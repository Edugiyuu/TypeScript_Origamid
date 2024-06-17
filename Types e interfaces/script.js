"use strict";
//Funciona assim tbm
function preencherDados(dados) {
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
const pc = {
    nome: 'pc',
    preco: 2200,
    teclado: true
};
preencherDados(pc);
preencherDados({
    nome: '3DS',
    preco: 1200,
    teclado: false,
});
function pintarCategoria(categoria) {
    console.log(categoria);
}
pintarCategoria('design');
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
