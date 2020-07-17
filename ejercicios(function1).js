// Funciones solas.
//1.
/***********************************************
 * 
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me 
 *    pide un nombre
 * 3. Toma ese nombre y me dice 
 *    "Hola <nombre>" en un alert. 
 * 
 ***********************************************/

const saludar = () => {
    let name = prompt("Escriba su nombre");
    alert(`Hola, ${name}!`)
}

saludar();



 //2.
 /***********************************************
 *
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 ***********************************************/

const elevarAlCuadrado = () => {
    let number = prompt("Escriba un número para elevar al cuadrado");
    alert(number*number);
}

elevarAlCuadrado();

 //3.
 /***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt. Cada vez
 *    que invoco la función, me muestra UN prompt y
 *    lo carga en el array.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/

 let array = [];

 const llenarArray = () => {
     let data = prompt("Escriba todo tipo de datos. Los almacenaremos y le mostraremos en un pop-up el último dato ingresado");
     array = data.split(' ');
     alert(array[array.length-1]);
     console.log(array);
 }

 llenarArray();