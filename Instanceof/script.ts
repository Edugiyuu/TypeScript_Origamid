//Aula - Instanceof1

//Primeira forma de ser feita:
class Celular{
  nome: string;
  marca: string;
  constructor(nome:string, marca: string){
    this.nome = nome;
    this.marca = marca;
  }
}
class Console{
  nome: string;
  marca: string;
  constructor(nome:string, marca: string){
    this.nome = nome;
    this.marca = marca;
  }
}

//Segunda forma de ser feita:
/* class AparelhoEletronico {
  nome: string;
  marca: string;
  constructor(nome: string, marca: string) {
    this.nome = nome;
    this.marca = marca;
  }
}

class Celular extends AparelhoEletronico {
  constructor(nome: string, marca: string) {
    super(nome, marca);
  }
}

class Console extends AparelhoEletronico {
  constructor(nome: string, marca: string) {
    super(nome, marca);
  }
} */
// A primeira forma achei mais facil de entender

function criarAparelhoEletronico(nome:string,marca?:string) {
  if (nome === 'A23') {
    return new Celular ("A23","Apple")
  }
  if (nome === 'Nintendo Switch') {
    return new Console('Nintendo Switch','Nintendo')
  }
  return null
}

const algumProduto = criarAparelhoEletronico('Nintendo Switch')

if (algumProduto instanceof Celular) {
  console.log("O produto feito é um Celular " + algumProduto.nome);
}
if (algumProduto instanceof Console) {
  console.log("O produto feito é um Console portatil " + algumProduto.nome);
}

//---------------------------------------------
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

/* 
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
}  */

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

/* 
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
  */
