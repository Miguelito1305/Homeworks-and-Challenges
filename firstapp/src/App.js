// src/App.js
import React from 'react';
import Contador from './Contador'; // Importamos el componente Contador

function App() {
  return (
    <div>
      <Contador valor={10} /> {/* Asignamos un valor inicial al contador */}
    </div>
  );
}

export default App;
