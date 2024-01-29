/* class Produto{
  nome: string;
  constructor(nome:string){
    this.nome = nome;
  }
}
const livro = new Produto("Harry Potter");

console.log(livro.nome); */

// Aula - Instanceof1
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
// Aula - Instanceof1

//Aula - InstanceOf 2
/* class Produto{
  nome: string;
  constructor(nome:string){
    this.nome = nome;
  }
  
}

class Jogo extends Produto{
  jogadores: number;
  constructor(nome:string,jogadores: number){
    super(nome)
    this.jogadores = jogadores;
  }
}
class Livro extends Produto{
  autor: string;
  constructor(nome:string,autor: string){
    //O super pelo q entendi ela é responsavel por recriar 
    //o constructor de Produto
    super(nome)
    this.autor = autor;
  }
}
function buscarProduto(busca:string) {
  if (busca === 'Harry Potter') {
    return new Livro('Harry Potter','J. K. Rowling')
  }
  if (busca === 'Dark Souls') {
    return new Jogo('Dark Souls',1)
  }
  return null
} */
//Aula - InstanceOf 2


const produto = buscarProduto('Harry Potter')

if (produto instanceof Produto) {
  console.log(produto.nome);
  
}
if (produto instanceof Livro) {
  console.log(produto.autor);
  
}
//verifica se o produto é um livro ou um jogo (não da pra usar sem esses ifs já q pode ser Livro, Jogo ou Null)
if (produto instanceof Jogo) {
  console.log(produto.jogadores);
}

