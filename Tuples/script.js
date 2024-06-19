"use strict";
const produto1 = ["Notebook", 2500];
const produto2 = ["Notebook", 2500];
produto2[0].toLowerCase();
produto2[1].toFixed();
if (typeof produto1[0] === 'string') {
    console.log(produto1[0].toLowerCase());
}
const [nome, preco] = produto2;
console.log(nome);
//------------------------------------------
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText('button');
if (button) {
    const [buttonElement, buttonText] = button;
}
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    somarVendas(data);
}
function somarVendas(vendas) {
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total1 += vendas[i][1];
    }
    document.body.innerHTML += `<p>Total: R$ ${total1}</p>`;
}
fetchVendas();
