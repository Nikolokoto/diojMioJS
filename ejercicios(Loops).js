// 05
/**
 * Mostrar en consola el siguiente dibujo utilizando la estructura while, for y do while
 */

let i=1; 
let acumulador='';

 for (let i= 1 ; i <= 13 ; i++) {
    acumulador = acumulador + '*';
    console.log(acumulador);
 }

 // //////////////////////////

 let i=1;
 let acumulador='';

 do {
     acumulador = acumulador + '*';
     console.log(acumulador);
     i++
 } while (i<=13);