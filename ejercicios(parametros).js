// 1
/***********************************************
 * 
 * Hacer una función que reciba una frase y devuelva
 * el número de vocales que tiene la misma.
 * indexOf o findIndex
 *  
 ***********************************************/
const countVowels = phrase => {
    const spelling = phrase.split('');
    let count = 0;

    spelling.forEach(letters => {
        const vowels = ["a", "e", "i", "o", "u"];
        if (vowels.indexOf(letters) > -1){
            count ++;
        }        
    });
    console.log(count);
}

let input = prompt("CONTADOR DE VOCALES - Escriba una frase:");
countVowels(input);

 // 2
 /***********************************************
 * 
 * Hacer una función que tome, primero, una frase
 * y luego pida un caracter para remover de la 
 * frase ingresada.
 * Observaciones: validar que el caracter ingresado
 * sea solo uno. Si es más de uno tirar un error.
 *  
 ***********************************************/

const deleteCharacter = (phrase, toDelete) => {
    let charactersPhrase = phrase.split('');
    let validationToDelete = toDelete.split('');
    try {
        if(validationToDelete.length > 2){
            throw new Error ("Sólo se puede borrar un caracter");      
        } 
    }catch(err){
        alert(err);
      }
    
    const print = [];
    charactersPhrase.forEach(characters => {
        if(characters!==toDelete){
            print.push(characters)
        }
    });
    console.log(print.join(''));
}

let input = prompt("ELIMINADOR DE CARACTER - 1. Escriba una frase");
let character = prompt("2. ¿Qué caracter desea eliminar de la frase?");
Character(input, character);