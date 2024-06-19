const { body } = document;

/* function handleData({ nome, preco }: { nome: string; preco: number }) {
  nome.includes('book');
  preco.toFixed();
} */
interface Produto{
  nome:string
  preco:number
}
function handleData({ nome, preco }: Produto) {
  console.log(preco);
  console.log(nome.toLowerCase());
  
}

handleData({
  nome: 'Notebook',
  preco: 2000,
});
