/**
 *  Crear un programa que pida ingresar nombres separados por espacios y
 * devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:}
 * 
 * Ingrese nombres: Ada Greta Grace
 * ¡Hola Ada!
 * ¡Hola Greta!
 * ¡Hola Grace!
 * */

let nombre=prompt("Escriban sus nombres separador por un espacio");
const array= nombre.split(' ');

for (i=0; i<array.length; i++){
    console.log(`¡Hola, ${array[i]}!`);
}

//02
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
 * 
 * Ingrese números: 5 7 99 34 54 2 12
 * El menor número es: 2
 */

let numeros=prompt("Escriba números, acá le decimos cuál es el menor de ellos");
const array=numeros.split(' ');
let menor=Number(array[0]);

for (i=1; i<array.length; i++){
    if (Number(array[i]) < menor){ 
        menor=Number(array[i]);
    }
}

console.log(menor);

 // 03
 /**
  * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:
  * Ingrese números: 5 7 10 12 24
  * La suma de todos los números es: 58
  */

let numeros=prompt("Escriba números para ser sumados");
const array= numeros.split(' ');
suma=0;

for(i=0; i<array.length ; i++){
    suma= suma + Number(array[i]);
}

console.log(suma);


  // 04
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. 
 * El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. 
 * Ejemplo:
 * Ingrese valores: 5 7 99 34 54 2 12
 * Ingrese valor a buscar: 54
 * El valor 54 se encuentra entre los valores originales
 */
 
let numeros=prompt("Escriba una secuencia de números cualesquiera");
let buscar=Number(prompt("Valor a buscar:"));
let isValue = false;

const array=numeros.split(' ');

for (let i=0 ; i<array.length ; i++){
    if(Number(array[i])===buscar){
        isValue = true;
        break;
    }
}

if (isValue){
    alert(`El valor ${buscar} sí se encuentra en los valores originales`);
} else {
    alert(`El valor ${buscar} no se encuentra en los valores ingresados`);
}

// 05
/**
 * Crear un programa que permite ingresar valores separados por espacios, 
 * y luego preguntar qué valor se desea encontrar el índice. 
 * El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, 
 * o indicar si no se ha encontrado. Ejemplo:
 * Ingrese valores: 5 7 12 34 54 2 12
 * Ingrese valor a buscar: 12
 * El valor 12 se encuentra en el índice 12
 */

let numeros=prompt("Escriba una secuencia de números cualesquiera");
let buscar=Number(prompt("Valor a buscar:"));
let isNumberIndex = false;
let numberIndex = 0;

const array=numeros.split(' ');

for (let i=0 ; i<array.length ; i++){
    if(Number(array[i])===buscar){
        isNumberIndex = true;
        numberIndex = array.indexOf(array[i]);
        break;
    }
}

if (isNumberIndex){
    alert(`El valor ${buscar} sí se encuentra en los valores ingresados en el índice ${numberIndex}`);
} else {
    alert(`El valor ${buscar} no se encuentra en los valores ingresados`);
}

 // 06
 /**
  * Crear un programa que permita saber si Sam y Frodo están juntos. 
  * El programa debe permitir ingresar nombres separados por espacios, 
  * y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. 
  * Ejemplo:
  * Ingresar nombres: Sam Frodo Legolas
  * Sam y Frodo están juntos, ¡Frodo está a salvo!
  * Ingresar nombres: Sam Orco Frodo
  * Sam y Frodo están separados, ¡Frodo está en peligro!
  */

let caminantes = prompt("Ingrese nombres de personajes del Señor de los Anillos");
const array = caminantes.split(' ');
let isFrodoDanger = true;

for (let i=0 ; i<array.length ; i++){
    if(array[i]==="Frodo" && array[i+1]==="Sam" ||
    array[i]==="Sam" && array[i+1]==="Frodo"){
        isFrodoDanger = false;
        break;
    }
}

if (isFrodoDanger){
    alert("Frodo está en peligro!");
} else {
    alert("Sam y Frodo caminan juntos, Frodo estará bien :) ");
}

// 07
/**
 * Crear un programa que pida ingresar "manzana", "pera"y "durazno" y devuelva un mensaje 
 * con la cantidad que hay de cada una. Ejemplo:
 * Ingrese frutas: manzana manzana pera durazno pera durazno manzana
 * Hay 3 🍎, 2 🍐 y 2 🍑
 */

 let fruits = prompt("Ingrese de estas fruticas para una ensalada: manzana o mango o banano o papaya");
 let manzana = 0;
 let mango = 0;
 let banano = 0;
 let papaya = 0;
 let no = true;
 const array = fruits.split(' ');
 
 for(let i=0 ; i<array.length ; i++){
     if(array[i]==="manzana"){
         manzana = manzana+1;
     } else if (array[i]==="mango"){
         mango = mango+1;
     } else if (array[i]==="banano"){
         banano=banano+1;
     } else if (array[i]==="papaya"){
         papaya=papaya+1;
     } else{
        no = false;
     }
 }

 if(manzana!=0 || mango!=0 || banano!=0 || papaya !=0){
    alert(`Tenemos ${manzana} manzanas, ${mango} mangos, ${banano} bananos y ${papaya} papayas para nuestra ensalada de frutas!!`);
 } else {
     alert("Yo no voy a comerme eso!!");
 }


 // 08
 /**
  * Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:
  * Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
  * Cuántas bananas come un mono?: 2
  * ¡Oh no!¡No hay suficientes bananas para los monos! 😭
  */

let monkeysAndBananas = prompt("Ingrese 'mono' o 'banana', de acuerdo a lo que hay");
let bananaPerMonkey = Number(prompt("¿Y cuántas bananas come cada mono?"));
const array = monkeysAndBananas.split(' ');
let monkey=0;
let banana=0;

for(let i=0 ; i<array.length ; i++){
    if(array[i]==="mono"){
        monkey=monkey+1;
    } else if(array[i]==="banana"){
        banana=banana+1;
    }
}

if((banana/monkey)<bananaPerMonkey){
    alert("Oh no! No hay suficientes bananas para tantos monos 😭");
} else {
    alert("La cantidad de bananas es suficiente para estos monos");
}

 // 09
 /**
  * Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:
  * Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
  * Resultado: 🐶🐶🐶🐶🐱🐱🐱
  */

let dogsAndCats = prompt("Ingrese 'perro' o 'gato', de acuerdo a lo que hay");
const array=dogsAndCats.split(' ').sort();

console.log(array.join(' '));

 // 10
 /**
  * Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:
  * 
  * Para una usuaria, debe mostrar: nombre usuaria + está conectada
  *
  * Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
  *
  * Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas
  *
  * Ejemplo:
  *
  * Ingrese nombres de usuarias: Ada
  * Ada está conectada
  *
  * Ingrese nombres de usuarias: Ada Grace
  * Ada y Grace están conectadas
  *
  * Ingrese nombres de usuarias: Ada Grace Marie
  * Ada, Grace y 1 persona(s) más están conectadas
  */

let users = prompt("¿Quiénes están conectadxs?");
let numberUsers=0;
const array = users.split(' ');

for(let i=0 ; i<array.length ; i++){
    if (array.length===0){
        console.log("Nadie está conectadx!");
    } else if(array.length===1){
        console.log(`${users} está conectadx`);
    } else if(array.length===2){
        console.log(`${array[0]} y ${array[1]} están conectadxs`);
    } else {
        console.log(`${array[0]}, ${array[1]} y ${array.length-2} personas más están conectadxs`)
    }
}

  // 11
  /**
   * Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error.
   * El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda. Ejemplo:
   * Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
   * ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸
   */

  let floweraAndSeedling = prompt("Ingrese primero alguna flor (girasol, orquidea, clavel, jazmin) y luego sus plántulas");
  const array = floweraAndSeedling.split(' ');
  
  if(array[0]!=="girasol" && array[0]!=="orquidea" && array[0]!=="clavel" && array[0]!=="jazmin") throw new Error ("No empieza con alguna flor. Nada va a germinar aquí"); 

  let germinating = [];
  let flower;
  
  for (let plant of array){
    if(plant === "girasol" || plant ==="orquidea" || plant ==="clavel" || plant === "jazmin"){
        flower = plant;
    }
    germinating.push(flower); // Aca ya se cual es la planta, porque la ultima vez que la encontre la puse en la variable flower
               }
    console.log(germinating.join(' '));

   // 12
   /**
    * Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. 
    * La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. 
    * El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga y a la derecha del veneno. 
    * Ejemplo:
    * Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
    * Plantas sobrevivientes: 🌱🌻🌱🌷
    */

  // 13
  /**
   * Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:
   * Ingrese símbolos: ⭐️⭐️⭐️💫✨
   * ¡Has perdido! Inténtalo nuevamente
   *
   * Ingrese símbolos: 💫💫💫💫💫
   * ¡Felicitaciones! Has ganado
   */

   let input = prompt("Ingrese 5 símbolos");



   // 14
   /**
    * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. Ejemplo:
    * Ingrese números: 5 7 99 34 54 2 12
    *
    * El array invertido es: [12, 2, 54, 34, 99, 7, 5]
    */

let numbers = prompt("Escriba números y se abrirá una ventana con ellos ordenados de mayor a menor");
const numbersArray = numbers.split(' ');
let print = numbersArray.reverse();

alert(print.join(', '));