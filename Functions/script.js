"use strict";
function calcular(forma) { }
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
// ele não identifica o .toUpperCase() já que ele não sabe se é uma string ou um array de string
// for isso usamos o overload
console.log(normalizar(' PRODUTO').toUpperCase());
console.log(normalizar([' PROdUTO 1 ', 'PRODUTO 2']).filter(Boolean));
function arredondar(valor) {
    if (typeof valor === "number") {
        return Math.floor(valor);
    }
    else {
        /*   var valorString = Math.floor(Number(valor)).toString()
        return valorString
        */
        var valorString = Math.floor(Number(valor));
        return valorString.toString();
    }
}
console.log(arredondar(5.2));
console.log(arredondar('4.2'));
