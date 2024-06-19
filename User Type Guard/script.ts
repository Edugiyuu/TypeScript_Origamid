async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
  }
  fetchCursos();
  
  function handleCursos(data: unknown) {
    if (data instanceof Array) {
      console.log('É instância de Array');
    }
    if (Array.isArray(data)) {
      console.log('É array');
    }
  }
  //--------------------------------------------------

// apartir do momento que coloco o is a função tem que ser BOOLEAN
  function isString(value: unknown): value is string {
//e aqui ela vai retornar true se o valor for string se não for string ela não executa
    return typeof value === 'string';
  }
  
  function handleData(data: unknown) {
    // verifica se o data é uma string usando a função isString
    if (isString(data)) {
      console.log(data.toUpperCase());
    }
    // se data não for string nada acontece
  }
  
  handleData('Origamid'); //  no console.log é ORIGAMID
  handleData(200); // no console.log é nada
//-----------------------------------------------------------

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
  }
  fetchProduto();
  
  interface Produto {
    nome: string;
    preco: number;
  }
  
  function isProduto(value: unknown): value is Produto {
    if (
      value &&
      typeof value === 'object' &&
      'nome' in value &&
      'preco' in value
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function handleProduto(data: unknown) {
    if (isProduto(data)) {
      console.log(data);
    }
  }
  