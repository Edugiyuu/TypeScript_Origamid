interface Produto {
  nome: string;
  preco: number;
}

let chave: keyof Produto;
// let chave: "nome" | "produto";
// é a mesma coisa
chave = 'nome';
chave = 'preco';

interface Jogos{
  nome: string
  data: string
}
let Jogo: keyof Jogos;

Jogo = 'data'

interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}