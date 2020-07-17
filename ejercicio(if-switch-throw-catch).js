// 01
/*****************************************************************
 * Completar las condiciones
 */
// === o !==

if(1 !== 2){
    console.log("Debe entrar");
}
// === o !==
if(2 === 2) {
    console.log("NO debe entrar");
}
// >, >= o <
if(1 === 1) {
    console.log("Debe entrar");
}

if(
    1 < 2 // >, >=, !==
    && 
    5 >= 5 // <, <=, >, >=
) {
    console.log("Debe entrar");
}

// 02
/*************************************************************************************
 * Pedir dos prompts, deben ser largoPelo y barba.
 * Largo pelo pueden ser dos valores, "largo" o "corto". 
 * Barba puede ser "si" o "no".
 * Hacer if-elseif-else para ofrecer corte de pelo si el pelo es largo, y afeitada si
 * barba es "si". 
 * alert("Corte y afeitada") o alert("Corte").
 * Poner un alert en caso de que no se haga ni corte ni afeitada.
 ****************************************************************************************/
let largoPelo = prompt("¿Qué tan largo tiene el cabello?");
let barba = prompt("¿Tiene barba?");

if(largoPelo === "largo" && barba === "sí") {
    alert("le ofrecemos corte y afeitada");
} else if(largoPelo === "largo" && barba === "no") {
    alert("Te ofrecemos un corte de cabelo :)");
} else if(largoPelo ==="corto" && barba === "sí") {
    alert("Te ofrecemos una afeitada");
} else {
    alert("Mejor cómprame una cerveza :) ");
}

// 03
/******************************************************************************
 * 
 * 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra 
 *    con IF-ELSE IF-ELSE
 * 
 ****************************************************************************/

let mes = prompt("Escriba el número de un mes y le decimos cuál es su nombre");

if(mes=="1"){
    alert("Es enero");
} else if(mes=="2"){
    alert("Es febrero");
} else if(mes=="3"){
    alert("Es marzo");
} else if(mes=="4"){
    alert("Es abril");
} else if(mes=="5"){
    alert("Es mayo");
} else if(mes=="6"){
    alert("Es junio");
} else if(mes=="7"){
    alert("Es julio");
} else if(mes=="8"){
    alert("Es agosto");
} else if(mes=="9"){
    alert("Es septiembre");
} else if(mes=="10"){
    alert("Es octubre");
} else if(mes=="11"){
    alert("Es noviembre");
} else if(mes=="12"){
    alert("Es diciembre");
} else {
    alert("Ese número no corresponde con un mes!");
}

// ///

let mes = parseInt(prompt("Escriba el número de un mes y le decimos cuál es su nombre"));

switch (mes) {
    case 1:
        alert("Es enero");
        break;
    case 2:
        alert("Es febrero");
        break;
    case 3:
        alert("Es marzo");
        break;
    case 4:
        alert("Es abril");
        break;
    case 5:
        alert("Es mayo");
        break;
    case 6:
        alert("Es junio");
        break;
    case 7:
        alert("Es julio");
        break;
    case 8:
        alert("Es agosto");
        break;
    case 9:
        alert("Es septiembre");
        break;
    case 10:
        alert("Es octubre");
        break;
    case 11:
        alert("Es noviembre");
        break;
    case 12:
        alert("Es diciembre");
        break;
    default:
        alert("Ese número no corresponde con un mes!");
}

 // 04
 /******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto 
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 ******************************************************************************/

let diaDeLaSemana = prompt("Escriba el nombre de la semana y le diremos a qué número corresponde");

try{diaDeLaSemana();
    }catch(err){
        if(diaDeLaSemana=="lunes"){
            alert("1");
        } else if(diaDeLaSemana=="martes"){
            alert("2");
        } else if(diaDeLaSemana=="miercoles"){
            alert("3");
        } else if(diaDeLaSemana=="jueves"){
            alert("4");
        } else if(diaDeLaSemana=="viernes"){
            alert("5");
        } else if(diaDeLaSemana=="sabado"){
            alert("6");
        } else if(diaDeLaSemana=="domingo"){
            alert("7");
        } else{
            throw new Error("La palabra ingresada no corresponde a un día de la semana");
        } 
    }



