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
const findForMail = usersList => {
    const mail = prompt("Escriba un correo para encontrar un registro de usuarix");
    const userFindForMail = usersList.filter(user => mail === user[2]);
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

findForMail(actualList);

 /***********************************************
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 ************************************************/

const findForName = usersList => {
    const inputName = prompt("Escriba el nombre completo o parte del nombre");
    
    const allNames = usersList.map(user => user[0]);
    console.log(allNames);//nuevo array con los nombres

    const idxFindForName = allnames.findIndex(name => name.indexOf(inputName) !== -1)
        
    if(idxFindForName){
        print = usersList.find(user => user===idxFindForName)
        console.log[print];
    }else{
        console.log("Ningún nombre o parte del nombre de usuarix corresponde con los registrados :(");
    }   
}  

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
];

findForName(actualList);


//Y si quiero encontrar TODXS lxs usuarixs que coinciden con el input????
//Este fue mi intento fallido:

const findForName = usersList => {
    const inputName = prompt("Escriba el nombre completo o parte del nombre");
    const findUser = []; //Para guardar todos los nombres de usuarios que coinciden con la búsqueda
    
    const allNames = usersList.map(user => user[0]);

    const indexOfFindName = allNames.findIndex(name => name.indexOf(inputName));
    console.log(indexOfFindName);
        
    if(indexOfFindName!==-1){
        findUser.push(usersList[indexOfFindName]);
        console.log(findUser);//
    }else{
        console.log("Ningún nombre o parte del nombre de usuario corresponde con los registrados :(");
    }
}  

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"],
    ["joancita"]
];

findForName(actualList);

 /***********************************************
 * 5. Hacer una función para borrar personas por mail. / splice
 ************************************************/
const deleteUser = usersList => {
    const toDelete = prompt("Escriba el correo registrado de usuarix para eliminarle");

    const mailToConserve = usersList.filter(user => user[2]!==toDelete);//Este fue el método que me resultó. ¿Cómo se haría con splice??
     
    console.log(mailToConserve);
 }
 
 const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
 ];
 
 deleteUser(actualList);
 
 /***********************************************
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 ************************************************/

 /***********************************************
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 ************************************************/

/***********************************************
 * Observaciones: 
 *  - Pensar en arrays dentro de arrays variable = [ ['dato1', 2, true], [], [] ]
 *  - Utilizar funciones de los arrays, find (o findIndex), map o for of
 *  - Utilizar nombres de variables y funciones representativas
 * 
 ************************************************/

