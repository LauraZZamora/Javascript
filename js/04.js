// String o Cadenas de Texto

const producto = "Monitor de 20 pulgadas\"";
const producto2 = 'Monitor de 20 pulgadas\"';
const producto3 = String('Monitor 30 pulgadas');
const producto4 = new String('Monitor 50 pulgadas');

const tweet = "Monitor de 20";
const producto6 = "Monitor HD";

const email = 'correo@correo.com';

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);
console.log(typeof producto4);


console.log(tweet.length);
console.log(producto6);

// IndexOf (retorna posicion)

/*
    El método indexOf devuelve la posición en la cadena de la primera ocurrencia
    del valor pasado como parámetro.
    Si no encuentra ninguna ocurrencia devuelve un valor de -1

    0 indicaría que existe una ocurrencia en la primera posición (primer carácter) de la cadena, 
    1 que existe en la segunda posición (segundo carácter),
    2 en la tercera, etc.
*/
console.log(tweet.indexOf('Monitor'));
console.log(producto6.indexOf('tablet'));
console.log(email.indexOf('@'));

// Includes (retorna true o false)
console.log(tweet.includes('Monitor'));
console.log(producto6.includes('tablet'));