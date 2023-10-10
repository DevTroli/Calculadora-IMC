import { useState } from 'react';
import './App.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoNumero = parseFloat(peso);

    if (alturaMetros > 0 && pesoNumero > 0) {
      const calculoIMC = pesoNumero / (alturaMetros * alturaMetros);
      setIMC(calculoIMC.toFixed(2));

      if (calculoIMC < 18.5) {
        setClassificacao('Abaixo do Peso');
      } else if (calculoIMC < 24.9) {
        setClassificacao('Peso Normal');
      } else if (calculoIMC < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (calculoIMC < 34.9) {
        setClassificacao('Obesidade Grau 1');
      } else if (calculoIMC < 39.9) {
        setClassificacao('Obesidade Grau 2');
      } else {
        setClassificacao('Obesidade Grau 3');
      }
    } else {
      setIMC('');
      setClassificacao('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <div className='inputs'>
          <label>Altura:</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div className='inputs'>
          <label>Peso:</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc && classificacao && (
          <div>
            <strong>Seu IMC é: {imc}</strong>
            <strong>sendo assim sua classificação no IMC é: {classificacao}</strong>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

