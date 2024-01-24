/* class Produto{
  nome: string;
  constructor(nome:string){
    this.nome = nome;
  }
}
const livro = new Produto("Harry Potter");

console.log(livro.nome); */
class Produto{
  nome: string;
  preco:number;
  constructor(nome:string, preco:number){
    this.nome = nome;
    this.preco = preco
  }
  precoReal(){
    return `RS ${this.preco}`
  }
}
const livro = new Produto("Harry Potter",100);

console.log(livro.nome);
console.log(livro.preco);
console.log(livro.precoReal());

console.log(livro instanceof Array);


class Jogo{
  jogadores: number;
  constructor(jogadores: number){
    this.jogadores = jogadores;
  }
}
class Livro{
  autor: string;
  constructor(autor: string){
    this.autor = autor;
  }
}

function buscarProduto(busca:string) {
  if (busca === 'Harry Potter') {
    return new Livro('J. K. Rowling')
  }
  if (busca === 'Dark Souls') {
    return new Jogo(1)
  }
  return null
}
const produto = buscarProduto('Harry Potter')

if (produto instanceof Livro) {
  console.log(produto.autor);
  
}

