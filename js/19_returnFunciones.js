function sumar(n1, n2) {
    return n1 + n2;
}

const resusltado = sumar(2,3);

console.log(resusltado);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 + total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(totalPagar);