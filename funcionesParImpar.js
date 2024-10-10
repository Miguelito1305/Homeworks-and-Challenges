// Función Regular
function esParImparRegular(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}

// Función Flecha
const esParImparFlecha = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}

// Ejemplos de uso:
console.log('--- Función Regular ---');
esParImparRegular(4); // 4 es par
esParImparRegular(7); // 7 es impar

console.log('--- Función Flecha ---');
esParImparFlecha(4); // 4 es par
esParImparFlecha(7); // 7 es impar
