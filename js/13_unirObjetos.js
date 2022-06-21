const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const unionObjetos = {...producto, ...medidas};
console.log(producto);
console.log(unionObjetos);


