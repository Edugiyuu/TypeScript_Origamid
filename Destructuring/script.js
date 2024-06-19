"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    console.log(preco);
    console.log(nome.toLowerCase());
}
handleData({
    nome: 'Notebook',
    preco: 2000,
});
