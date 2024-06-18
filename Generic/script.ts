/* // Exemplo 1
function retorno<Tipo>(a: Tipo) {
    return a;
  }


  console.log(retorno<string>('string aqui'));
  console.log(retorno<number>(200));


  function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
    return lista.slice(0, 5);
  }
  
  const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
  const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];
  
  const five1 = firstFive<number>(numeros);
  const five2 = firstFive<string>(frutas); */

  
