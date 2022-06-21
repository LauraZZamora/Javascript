/*alert('HOLA');*/

var cajas = document.getElementsByTagName('div');
/*
 Document se refiere a todo el documento, es la raiz principal
 de todo.

 getElemntsByTagName Accede al documento y obtiene todos los elementos por 
 TagNname que es nombre de etiqueta basicamnete y guardarlas en esta
 variable.

 Si vamos a consola y dijitamos cajas, me va a mostrar un arreglo con mis cajas.
 Si dijitamos cajas[0] nos va a mostrar la primefra caja.
 si dijitamos cajas[0].textContent nos va a mostrar el contenido de la primera caja

*/

/*cajas[0].textContent = 'Hola mundo';*/ 
/*Cambiar el contenido de mi primer caja a Hola mundo */

/*cajas[0].innerHTML = '<h1>Hola</h1>';*/
/*innerHTML  permite obtener todo el contenido de la pagina incluyendo el html */


/*var cajas = document.getElementsByClassName('caja');*/
/* getElementsByClassName Accede a el documento y ontienen los elementos por su clase*/


var primeraCaja = document.getElementById('primeraCaja');
/* getElementsById Accede a el documento y ontienen los elementos por ID y
en este caso se utilisa Elments no Elements.

Los ID tienen que ser trabajados mas que todo con Javascript y no css.

Si vamos a la consola y escribimos primeraCaja, nos va a mostrar la primera caja,
si vamos a consola y escribimos primeraCaja.textContent = 'PRIMERA CAJA'no cambiara el contenido de la caja
*/

/*primeraCaja.textContent = 'Hola mundo';*/
/*primeraCaja.innerHTML = '<u>Hola Mundo</u>';*/



// -------------------------- CREANDO NODOS -----------------------

// -----1-PASO. Crear el elemento
var caja = document.createElement('div');

// -----2-PASO. Crear un nodo de texto
var contenido = document.createTextNode('Hola Mundo');

// -----3-PASO. Añadir el nodo de texto al elemento
caja.appendChild(contenido);
/*Seleccionar nuestra caja y con appendChild le vamos a incrustar
dentro el contenido*/

// -----4-PASO. Agregar atributos a la caja
//caja.setAttribute('class', 'caja naranja');

// -----5-PASO. Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
/*Queremos que dentro del contenedor me agreges la caja que estoy creando  */

contenedor.appendChild(caja);
/*Seleccionar nuestro contenedor y con appendChild le vamos a incrustar
dentro la caja*/




// ----------------MODIFICANDO LA CLASE O ID DE UN ELEMENTO -----------------------

caja.id = 'primera';
/*Podemos modificar el Id */

caja.className = 'caja naranja';
/*Podemos modificar el class */

// ---------------CONOCIENDO EL ELEMENTO PADRE-----------
var padre = cajas[0].parentNode;
/*Podemos conocer el elemento padre de un elemento */

padre.insertBefore(caja , primeraCaja);
/*Seleccionamos el elemnto padre y El primero es el elemento que queremos añadir es decir la caja que estamos creando
y el otro es (antes de que elemnto lo queremos poner) en este caso la primeraCaja  */

/*Con esto ya no necesitariamos el paso 5 de creacion de nodos */

//padre.insertBefore(caja,cajas[2]);
/*ponga la caja que estamos creando antes de la caja2 */


//----------------- REEMPLAZAR NODO-------

//padre.replaceChild(caja,cajas[2]);
/*Ponemos el elemento que queremos insertar y el 
elemento que queremos reemplazar  */


//--------------------- ELIMINAR NODO--------------

padre.removeChild(cajas[3]);