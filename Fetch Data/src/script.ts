import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";


async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (!data) return;
  const trasacoes = data.map(normalizarTransacao)
  console.log(trasacoes);
  
}

handleData();