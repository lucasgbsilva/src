import { useState } from "react";
import { Link } from "react-router-dom";

export default function Calculadora() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function somarContadores() {
    setResultado(contador1 + contador2);
  }
  /**
   * Criar um novo botão que faça a MULTIPLICAÇÃO DE C1 C2 E A SOMA
   */
  return (
    <div className="App">
      <Link to="/contato">ir para calculadora</Link>

      <h1>Meu primeiro App em React</h1>
      <input type="text" value={contador1} />
      <input type="text" value={contador2} />
      <button onClick={() => setContador2(contador2 + 1)}>
        Clique aqui para c. 1
      </button>
      <button onClick={() => setContador1(contador1 + 1)}>
        Clique aqui para c. 2
      </button>
      <button>Somar os dois valores, resultado: {resultado}</button>
    </div>
  );
}