interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {}


//---------------------------------------------------------------------

/* function normalizar(valor:string | string[]) {

  if (typeof valor === "string") {
    return valor.trim().toLowerCase()
  }else{
    return valor.map((item) => item.trim().toLowerCase())
  }
  
}
// ele não identifica o .toUpperCase() já que ele não sabe se é uma string ou um array de string
// console.log(normalizar(' PRODUTO').toUpperCase()) 
console.log(normalizar(' PRODUTO'))
console.log(normalizar(['PRODUTO 1','PRODUTO 2'])); */


//--------------------------------------------

function normalizar(valor:string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor:string | string[]) {

  if (typeof valor === "string") {
    return valor.trim().toLowerCase()
  }else{
    return valor.map((item) => item.trim().toLowerCase())
  }
  
}
// ele não identifica o .toUpperCase() já que ele não sabe se é uma string ou um array de string
// for isso usamos o overload

 console.log(normalizar(' PRODUTO').toUpperCase()) 
 console.log(normalizar([' PROdUTO 1 ', 'PRODUTO 2']).filter(Boolean));

//-------------------------------------------------------------------------------

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondar(valor:string): string
function arredondar(valor:number): number
function arredondar(valor:string | number): string | number {
  if (typeof valor === "number") {
    return Math.floor(valor)
  }else{
  /*   var valorString = Math.floor(Number(valor)).toString() 
  return valorString
  */
    var valorString = Math.floor(Number(valor))
    return valorString.toString()
  }
}

console.log(arredondar(5.2));
console.log(arredondar('4.2'));

