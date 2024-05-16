import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [notas, setNotas] = useState([0]);
  const [promedio, setPromedio] = useState(0);

  const handleNotaChange = (index, value) => {
    const newNotas = [...notas];
    newNotas[index] = parseFloat(value) || 0;
    setNotas(newNotas);
    calculatePromedio(newNotas);
  };

  const addNota = () => {
    setNotas([...notas, 0]);
  };

  const clearNotas = () => {
    setNotas([0]);
    setPromedio(0);
  };

  const calculatePromedio = (notas) => {
    const sum = notas.reduce((acc, nota) => acc + nota, 0);
    const avg = notas.length ? sum / notas.length : 0;
    setPromedio(avg.toFixed(2));
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Notas</h1>
      </div>
      <div className="content">
        <div className="notas-container">
          {notas.map((nota, index) => (
            <input
              key={index}
              type="text"
              value={nota}
              onChange={(e) => handleNotaChange(index, e.target.value)}
              className="nota-input"
            />
          ))}
        </div>
        <div className="buttons-container">
          <button onClick={addNota} className="btn add">Agregar Nota</button>
          <button onClick={clearNotas} className="btn delete">Eliminar Notas</button>
        </div>
        <div className="promedio-display">
          <h2>Promedio: {promedio}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
