/***********************************************
 * 1. Hacer una función que guarde una persona
 *    en una lista de listas de datos de personas.
 *    Es decir, una lista con varias listas adentro.
 *    Deberia guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 ************************************************/ 

/***********************************************
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 ************************************************/

const actualList = [
    ["niko gutierrez", "31", "niko@email.com"]
];

const check = ([name, age, mail]) => {
    const userRepeated = actualList.find(user=>name===user[0] && age===user[1] && mail===user[2]) //return tacito
    if(userRepeated)/*si es true*/{
      throw new Error ("El usuario ya existe");
    }else{
        actualList.push([name, age, mail]);
    }
}

const saveUser = () => {
    const newUser = [];
    alert("Para registrarlo necesitamos los siguientes datos:");
    let someName = prompt("Nombre completo:");
    newUser.push(someName);
    let someAge = prompt("Edad (en caracteres numéricos la cantidad de años):");
    newUser.push(someAge);
    let someMail = prompt("Correo electrónico:");
    newUser.push(someMail);

    check([someName, someAge, someMail]);
    console.log(actualList);
}

saveUser();


 /***********************************************
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 ************************************************/

const listForName = (usersList) => {
    const usersNames = usersList.map(user => usersNames.push(user[0]));
    console.log(usersNames)
}

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
];

listForName(actualList);

 /***********************************************
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 ************************************************/
const findForMail = (usersList, aMail) => {
    
    const userFindForMail = usersList.filter(user => aMail === user[2]);
    if(userFindForMail){
        console.log(userFindForMail);
    } else {
        console.log("Ningún usuarix ha registrado esta dirección de correo :(");
    }
}

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
];
const mail = prompt("Escriba un correo para encontrar un registro de usuarix");

findForMail(actualList, mail);

 /***********************************************
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 ************************************************/

const findForName = (usersList, input) => { 
    const allNames = usersList.map(user => user[0]);//nuevo array con los nombres
    const idxFindForName = allNames.findIndex(name => name.indexOf(input) !== -1) 
    console.log(usersList[idxFindForName]);
}  

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
];

const inputName = prompt("Escriba el nombre completo o parte del nombre");

findForName(actualList, inputName);


//Y si quiero encontrar TODXS lxs usuarixs que coinciden con el input????
//Esta fue mi solución

const findForName = (usersList, input) => {

    const findUser = usersList.filter(user => user[0].includes(input));

    console.log(findUser);
}  

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"],
    ["joancita", "28", "joancita@email.com"]
];

const inputName = prompt("Escriba el nombre completo o parte del nombre");

findForName(actualList, inputName);

 /***********************************************
 * 5. Hacer una función para borrar personas por mail. / splice
 ************************************************/
const deleteUser = (usersList, mail) => {
    const index = usersList.findIndex(user => user[2] === mail);
    if(index === -1) throw new Error("El email no existe");
    usersList.splice(index, 1) // le paso el indice del email que quiero eliminar y la cantidad de elementos a eliminar desde ese punto, o sea, 1, un solo email quiero borrar

    console.log(usersList);
 }
 
 const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
 ];

 const mailUsertoDelete = prompt("Escriba el correo registrado de usuarix para eliminarle");
 
 deleteUser(actualList, mailUsertoDelete);

 /***********************************************
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 ************************************************/

const modifyName = (usersList, mail) => {
    const index = usersList.findIndex(user => user[2] === mail);
    if(index === -1) throw new Error("El email no existe");
    usersList[index][0] = prompt("Escriba un nuevo nombre de usuario");
 }

let actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
 ];

 const mailUserToChange = prompt("Escriba el correo para cambiar el nombre");

 modifyName(actualList, mailUserToChange);

 /***********************************************
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 ************************************************/

const modifyAge = (usersList, mail) => {
    const index = usersList.findIndex(user => user[2] === mail);
    if(index === -1) throw new Error("El email no existe");
    usersList[index][2] = prompt(`Escriba de nuevo la edad de usuarix con correo ${mail}`);
 }

let actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
 ];

 const mailUserToChange = prompt("Escriba el correo para cambiar el nombre");

 modifyAge(actualList, mailUserToChange);

/***********************************************
 * Observaciones: 
 *  - Pensar en arrays dentro de arrays variable = [ ['dato1', 2, true], [], [] ]
 *  - Utilizar funciones de los arrays, find (o findIndex), map o for of
 *  - Utilizar nombres de variables y funciones representativas
 * 
 ************************************************/

