// Clase para representar la cola del cajero automático
class Cola {
    constructor() {
        this.cola = [];  // Aquí almacenaremos las personas en la cola
    }

    // Método para agregar una persona a la cola
    encolar(persona) {
        this.cola.push(persona);
        console.log(`${persona.nombre} ha sido agregado a la cola.`);
    }

    // Método para procesar la siguiente persona en la cola
    procesar() {
        if (this.cola.length > 0) {
            const persona = this.cola.shift();  // Extraemos a la primera persona en la cola
            console.log(`Atendiendo a ${persona.nombre}, Importe a retirar: ${persona.importe}, Hora de llegada: ${persona.hora}`);
        } else {
            console.log("No hay personas en la cola.");
        }
    }

    // Método para verificar si la cola está vacía
    estaVacia() {
        return this.cola.length === 0;
    }

    // Método para ver el siguiente en la cola sin procesarlo
    siguiente() {
        if (this.cola.length > 0) {
            const persona = this.cola[0];  // Mostramos la primera persona sin removerla
            console.log(`Siguiente persona en la cola: ${persona.nombre}`);
        } else {
            console.log("No hay personas en la cola.");
        }
    }
}

// Clase para representar a una persona
class Persona {
    constructor(nombre, importe, hora) {
        this.nombre = nombre;
        this.importe = importe;
        this.hora = hora;
    }
}

// Crear una nueva cola para el cajero
const colaCajero = new Cola();

// Agregar personas a la cola
colaCajero.encolar(new Persona("Juan Pérez", 100, "08:30 AM"));
colaCajero.encolar(new Persona("Ana Gómez", 200, "08:35 AM"));
colaCajero.encolar(new Persona("Luis Martínez", 50, "08:40 AM"));

// Ver el siguiente en la cola
colaCajero.siguiente();

// Procesar las personas en la cola
colaCajero.procesar();  // Atenderá a Juan Pérez
colaCajero.procesar();  // Atenderá a Ana Gómez
colaCajero.procesar();  // Atenderá a Luis Martínez

// Intentar procesar cuando la cola esté vacía
colaCajero.procesar();
