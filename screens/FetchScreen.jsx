import { useState } from "react";

export default function FetchScreen() {
  const [lista, setLista] = useState([]);

  async function trazerLista() {
    const url = "https://api.tvmaze.com/shows";
    // eu solicito que o servidor me envie os dados
    const consulta = await fetch(url);
    // eu converto os dados recebidos em um objeto javascript JSON
    const dados = await consulta.json();
    //console.log(dados);
    setLista(dados);
    // depois que dados foi convertido em objeto JSON
    // eu posso manipular os dados e realizar o loop
    // para cada item do array de dados
    dados.forEach(
      // crio uma função anonima que recebe o item do array
      (filme) => {
        // para cada filme eu exibo o nome
        console.log(filme.name);
      }
    );
  }

  return (
    <div className="container">
      <h1 className="text-center">Exercício Fetch</h1>
      <button onClick={trazerLista}>Trazer lista</button>
        {
            lista.map(
                (filme) => {
                    return (
                        <div key={filme.id}>
                            <h2>{filme.name}</h2>
                            <img src={filme.image.medium} alt={filme.name} />
                        </div>
                    )
                }
            )
        }
    </div>
  );
}