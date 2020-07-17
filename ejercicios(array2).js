// 01
/**
 * Crear un documento con el nombre arr_006.js
 * Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
 * Smells Like Teen Spirit
 * In Bloom
 * Come As You Are
 * Immodium
 * Lithium
 * Polly
 * Territorial Pissings
 * Drain You
 * Lounge Act
 * Pay To Play
 * On a Plain
 * Endless, Nameless
 * Reemplazar Immodium por Breed
 * Reemplazar Pay To Play por Stay Away
 * Reemplazar Tim por Something in the Way
 * Mostrar en consola la lista de canciones modificada
 * El resultado debería ser:
 **/
const discoNevermind = [
    "Smells Like Teen Spirit",
    "In Bloom",
    "Come As You Are",
    "Immodium",
    "Lithium",
    "Polly",
    "Territorial Pissings",
    "Drain You",
    "Lounge Act",
    "Pay To Play",
    "On a Plain",
    "Endless, Nameless"
]

discoNevermind.splice(3,1,"Breed");
discoNevermind.splice(9,1,"Stay Away");
discoNevermind.splice(discoNevermind.length-1,1,"Something in the Way");

console.log(discoNevermind.join(', '));

// 02
/**
 * Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
 * Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
 * Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
 * Mostrar en consola la cantidad de etiquetas guardadas en el array
 */

const etiquetasHtml = [
    "head",
    "body",
    "main",
    "article",
    "Footer"
]

etiquetasHtml[1]=etiquetasHtml[1].toUpperCase();
etiquetasHtml[4]=etiquetasHtml[4].toLowerCase();
console.log(etiquetasHtml);
console.log(`La cantidad de arrays es ${etiquetasHtml.length}`);


 // 03
 // Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando shift y unshift.

const frutas = ['Manzana', 'Banana'];
frutas.shift();

frutas.unshift('Mandarina');
console.log(frutas.join(', '));

// 04
/**
 * Declarar una variable llamada concreteAndGold y asignarle un array vacio []
 * Agregar al array las siguientes canciones:
 * T-Shirt
 * Run
 * Make It Right
 * The Sky Is a Neighborhood
 * La Dee Da
 * Dirty Water
 * Arrows
 * Happy Ever After (Zero Hour)
 * Sunday Rain
 * The Line
 * Concrete and Gold
 * 
 * No se puede utilizar índices numéricos
 * Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
 * Los elementos tienen que guardarse en el mismo orden que se van ingresando
 * Mostrar en consola la primera y última canción
 * Mostrar en consola el contenido del array
 * Resultado esperado:
 */
const concreteAndGold = [];

concreteAndGold.push("T-Shirt",
        "Run", 
        "Make It Right", 
        "The Sky Is a Neighborhood", 
        "La Dee Da", 
        "Dirty Water", 
        "Arrows", 
        "Happy Ever After (Zero Hour)", 
        "Sunday Rain", 
        "The Line", 
        "Concrete and Gold");

let firstSong = concreteAndGold.shift();
let lastSong = concreteAndGold.pop();
console.log(firstSong, lastSong);
console.log(firstSong + ', ' + concreteAndGold + ', ' + lastSong);
  

// 05
/**
 * Crear un documento con el nombre arr_014.js
 * Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
 * Eliminar el primer elemento, y agregarlo al final del array.
 * Mostrar el resultado final.
 * Resultado esperado
 */

const numbers = [6, 1, 2, 3, 4, 5];
let newLastNumber = numbers.shift();
console.log(numbers.join(', ') + ', ' + newLastNumber);


//06

// Ordernar el siguiente array de menor a mayor *google*
const numbers = [3,2,5,7,4,1,6];
console.log(numbers.sort());