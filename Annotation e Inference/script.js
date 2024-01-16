"use strict";
/* const produto: string = 'Livro';

let preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Audi',
  portas: 5,
}; */
const produto = 'Livro';
let preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5,
};
const barato = preco < 200 ? true : 'produto caro';
function Somar(numero1, numero2) {
    return numero1 + numero2;
}
console.log(Somar(20, 20));
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
console.log(transformarPreco(nintendo));
