// Clase que representa a una Persona en el árbol genealógico
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        this.hijos = [];  // Aquí almacenamos los hijos de la persona
    }

    // Método para agregar un hijo a esta persona
    agregarHijo(hijo) {
        this.hijos.push(hijo);
        console.log(`${hijo.nombre} ha sido agregado como hijo de ${this.nombre}.`);
    }

    // Método para imprimir el árbol genealógico
    imprimirArbol(nivel = 0) {
        console.log(' '.repeat(nivel * 4) + this.nombre);  // Imprimir el nombre con sangría según el nivel
        this.hijos.forEach(hijo => hijo.imprimirArbol(nivel + 1));  // Imprimir los hijos con un mayor nivel de sangría
    }
}

// Ejemplo de uso:

// Crear a las personas
const abuelo = new Persona("Juan");
const padre = new Persona("Carlos");
const tio = new Persona("Luis");
const hijo1 = new Persona("Miguel");
const hijo2 = new Persona("Ana");

// Construir el árbol genealógico
abuelo.agregarHijo(padre);   // Carlos es hijo de Juan
abuelo.agregarHijo(tio);     // Luis es hijo de Juan
padre.agregarHijo(hijo1);    // Miguel es hijo de Carlos
padre.agregarHijo(hijo2);    // Ana es hija de Carlos

// Imprimir el árbol genealógico
console.log("Árbol genealógico:");
abuelo.imprimirArbol();
