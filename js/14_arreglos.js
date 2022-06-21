// Arreglos

const numeros = [10,20,30,40,50];

//Acceder a los valores de un arreglo
console.log(numeros);
console.log(numeros[4]);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.log(meses);


const arreglo = ["Hola", 10, true, "si", null, {nombre:"Juan", trabajo:"Programador"}, [1,2,3]];
console.log(arreglo);



//Conocer la extension de un arreglo
console.log(meses.length);


numeros.forEach(function(numero) {
    console.log(numero);
})