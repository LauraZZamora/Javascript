//"use strict"; // Correr JS en modo estricto
// Ejecutar el codigo javascript si cumple con las buenas parcticas, si no cumple marcara error

// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

producto.imagen = 'imagen.jpg';

Object.freeze(producto); // Para no permitir que el objeto sea modificado (no inserta, elimina o modifica)
// producto.color = 'negro';

Object.seal(producto);   // No permite agregar o eliminar pero si modificar
//console.log(Object.isFrozen(producto));

console.log(producto);