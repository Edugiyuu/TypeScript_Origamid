interface Produto {
    nome: string;
    quantidade: number;
  }
  
  const produto1 = {
    nome: 'Notebook',
    quantidade: 10,
    cor: 'azul',
  };
  
  const produto2 = {
    nome: 'Geladeira',
    quantidade: 4,
    freezer: true,
  };
  
  const servico1 = {
    nome: 'Instalação',
  };
  
  function mostrarQuantidade(produto: Produto) {
    console.log(produto.quantidade + 20);
  }
  
  mostrarQuantidade(produto1);
  mostrarQuantidade(produto2);
  
  // erro, não possui quantidade
/*   mostrarQuantidade(servico1); */
  