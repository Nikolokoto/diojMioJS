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

const checkCharacter = (character) => {
    if(character.length != 1) throw new Error ("Sólo se puede borrar un caracter");
}

const deleteCharacter = (phrase, toDelete) => {
    checkCharacter(toDelete);
    let charactersPhrase = phrase.split('');
    const filterPhrase = charactersPhrase.filter(character=>character.toLowerCase() !== toDelete.toLowerCase()); // filtro el array nuevo loopeando por caracter. Si el caracter es distinto al que recibi por parametro, lo guardo en mi nuevo array resultante
    return filterPhrase.join('');
}

let input = prompt("ELIMINADOR DE CARACTER - 1. Escriba una frase");
let characterToDelete = prompt("2. ¿Qué caracter desea eliminar de la frase?");
deleteCharacter(input, characterToDelete);