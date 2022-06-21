const numeros = [10,20,30,40,50];
console.table(numeros);

numeros[5] = 60;
console.log(numeros);

numeros.push(70); /// añade al final del arreglo
numeros.unshift(-10,-20,-30); // añade al inicio del arreglo

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.log(meses);

meses.pop(); /// Elimina el ultimo elemento del arreglo
meses.shift(); // Elimina el primer elemento
meses.splice(2,1); // Posicion desde la que se quiere eliminar, numero de elementos eliminar
console.log(meses);


// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];  /// Agregar al inicio
const nuevoArreglo2 = ['Agosto', ...meses]; /// Agregar al final
console.log(nuevoArreglo);
console.log(nuevoArreglo2);


// Array Methods

const carrito = [
    {nombre: 'Monitor 20 pulgas', precio: 500},
    {nombre: 'Televisio 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifinos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

const frutas = ['Fresa', 'Pera', 'Manzana', 'Platano', 'Durazno'];
// foreach

frutas.forEach(
    function(fruta) {
        if(fruta == 'Pera') {
            console.log('Pera en array');
        }
    }
);

/// Includes

let resultado = frutas.includes('Mango'); // Retorna true or false si existe o no elemento

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {  // Retorna true or false si existe o no objeto en arreglo
    return producto.nombre === 'Celular';
})

//Reduce

resultado = carrito.reduce((total,producto) => total + producto.precio, 0);

// Filter
// Para obtener ciertos elementos

resultado = carrito.filter(function(producto) {
    return producto.precio > 400
})

console.log(resultado);