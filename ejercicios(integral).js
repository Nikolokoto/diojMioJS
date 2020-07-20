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
    const usersNames = [];
    usersList.map(user => {
        usersNames.push(user[0]);
        return usersNames
    });
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

//INTENTO 1

const findForName = usersList => {
    const inputName = prompt("Escriba el nombre completo o parte del nombre");
    /*let spellingInput = inputName.split('');
    console.log(spellingInput); // quizá este paso es innecesario*/
    
    const allNames = [];
    searchNames = usersList.map(user => {
        user[0].forEach(name => { // no entiende que quiero ejecutar en "user" en posición [0]
            name.split('');
        });
        return allnames.push(searchNames);
    });
    console.log(allNames);  // no funciona :(

    /**
    let spellingNames = [];
    allNames.map(name => {
        const lettersName = name.split('');
        spellingNames.push(lettersName);
        return spellingNames;
    });
    console.log(spellingNames);  // quizá este paso es innecesario*/

    const userFindForName = [];
    const repeatLetter = allNames.find(name => {
        if(allnames[name][0]===inputName[0] && letters[name][1]===inputName[1] &&
        letters[name][2]===inputName[2] && letters[name][3]===inputName[3])
        return repeatLetter;
    });
    console.log(repeatLetter); // ni idea qué pasa acá

    if(repeatLetter===true){
        userFindForName.push(allNames[name]);
        console.log(userFindForName); 

        print = usersList.find(user => user===userFindForName)
        if (print===true){
            console.log[print];
        }
    }else{
        console.log("Ningún nombre o parte del nombre de usuario corresponde con los registrados :(");
    } 
}  

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
];

findForName(actualList);

//INTENTO 2

const findForName = usersList => {
    const inputName = prompt("Escriba el nombre completo o parte del nombre");

const userFindForName = [];
    const repeatLetter = usersList.find(user => {
        if(usersList[user][0][0]===inputName[0] && usersList[user][0][1]===inputName[1] && // no entiende que quiero ejecutar en "user" en posición [0]
        usersList[user][0][2]===inputName[2] && usersList[user][0][3]===inputName[3])
        return repeatLetter;
    });
    console.log(repeatLetter); // no funciona

    if(repeatLetter===true){
        userFindForName.push(repeatLetter);
        console.log(userFindForName);

        print = usersList.find(user => user===userFindForName)
        if (print===true){
            console.log[print];
        }
    }else{
        console.log("Ningún nombre o parte del nombre de usuario corresponde con los registrados :(");
    }
}  

const actualList = [
    ["niko gutierrez", "30", "niko@email.com"],
    ["joan villanueva", "28", "joan@email.com"],
    ["katia crimson", "27", "katia@email.com"]
];

findForName(actualList);

 /***********************************************
 * 5. Hacer una función para borrar personas por mail. / splice
 ************************************************/
const deleteUser = usersList => {
    const toDelete = prompt(`Ingrese el índice del usuario para eliminar:
                            ${usersList}`);
    
    usersList.find(users => {
        
    })
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

