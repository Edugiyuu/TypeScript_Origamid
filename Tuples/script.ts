const produto1 = ["Notebook", 2500]
const produto2: [string,number] = ["Notebook",2500]
produto2[0].toLowerCase()
produto2[1].toFixed()

if (typeof produto1[0] === 'string') {
  console.log(produto1[0].toLowerCase());
  
}
const [nome , preco] = produto2

console.log(nome);

//------------------------------------------

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
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

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

function somarVendas(vendas: [string, number, string, ProdutoDetalhes][]) {

  let total1 = 0;
  for (let i = 0; i < vendas.length; i++) {
    total1 += vendas[i][1];
  }
  document.body.innerHTML += `<p>Total: R$ ${total1}</p>`;

}

fetchVendas()