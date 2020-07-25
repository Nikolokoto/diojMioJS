  /***********************************************
 *Ejercicios(parámetros) 
 *2

 * 
 * Hacer una función que tome, primero, una frase
 * y luego pida un caracter para remover de la 
 * frase ingresada.
 * Observaciones: validar que el caracter ingresado
 * sea solo uno. Si es más de uno tirar un error.
 *  
 ***********************************************/
const checkCharacter = (character) => {
    let spelling = character.split('');

    if(spelling.length > 1) {
        throw new Error ("Sólo se puede borrar un caracter");
    }else{
        return checkCharacter;
    }
}

const deleteCharacter = (phrase, toDelete) => {
    checkCharacter(toDelete);
    let charactersPhrase = phrase.split('');
    let repeatDelete = 0;
    const newPhrase = [];
    const searchCharacter = charactersPhrase.map(character=>character!==toDelete)
        if(searchCharacter===true){
           newPhrase.push(searchCharacter);
        }else{
            repeatDelete++;
        }
    console.log(newPhrase.join(''));
}

let input = prompt("ELIMINADOR DE CARACTER - 1. Escriba una frase");
let characterToDelete = prompt("2. ¿Qué caracter desea eliminar de la frase?");
deleteCharacter(input, characterToDelete);

/*********************************************** 
* Ejercicios(integral)-
* 5

* Hacer una función para borrar personas por mail. / splice
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