// This

//window.nombre = 'Un nombre'

const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }

    /* 
    informacion: () => {  // con arrow function de tendria que poner de forma global lo siguinete -> window.nombre = 'Un nombre'
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
    */
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();