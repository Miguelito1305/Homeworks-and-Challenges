import React, { useState } from 'react';

const Contador = ({ valor }) => {
    // Estado del contador, inicializado con la prop valor
    const [contador, setContador] = useState(valor);

    // Función para restar 1 al contador
    const handleSubstract = () => {
        setContador(contador - 1);
    };

    // Función para resetear el contador al valor inicial
    const handleReset = () => {
        setContador(valor);
    };

    return (
        <div>
            <h1>Contador</h1>
            <span>{contador}</span> {/* Muestra el valor del contador */}
            <div>
                <button onClick={handleSubstract}>Substraer</button>
                <button onClick={handleReset}>Resetear</button>
            </div>
        </div>
    );
};

export default Contador;
