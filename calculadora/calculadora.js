
/*
 Acceder al documento y con getElementById  obtenemos el elemento
 de nuestra pagina que tenga el id = xxxxx y guardamos el valor en la variable numero1
*/

/*
var numero1 = document.getElementById('numero1').value;
var numero2 = document.getElementById('numero2').value;
var resultado = numero1+numero2;
*/

/*pero esto lo debemos de colocar en una funcion para que se tomen los valores cuando
se presione el boton */


function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
   
    /*
     parseFloat sirve para converir o transformar el valor 
     que tenemos dentro de los parentesis a un valor tipo 
     float(que es un numero que puede terner decimales)
    */
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}