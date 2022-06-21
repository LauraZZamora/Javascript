// Declaracion de funcion

function sumar() {
    console.log(10+10);
}

sumar();


//Expresion de la funcion

const sumar2 = function() {
    console.log(3+3);
}

sumar2();


// IIFE
//PERMITE QUE NO SE MEZCLEN LAS VARIABLES Y FUNCIONES CON LAS DE OTROS ARCHIVOS

(function()  {
    console.log('Esto es una funcion');
})();
