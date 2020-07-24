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
    try {
        let validationToDelete = toDelete.split('');
        if(ToDelete.length > 2){
            throw new Error ("Sólo se puede borrar un caracter");      
        } 
    }catch(err){
        alert(err);
      }
    
    const toFind = charactersPhrase.find(character => {
        character!==toDelete
    });

    print = [];
    if (toFind===true){
        print.push(toFind);
        console.log(print.join(''));
    } 
}

let input = prompt("ELIMINADOR DE CARACTER - 1. Escriba una frase");
let characterToDelete = prompt("2. ¿Qué caracter desea eliminar de la frase?");
deleteCharacter(input, characterToDelete);

////

const deleteCharacter = (phrase, toDelete) => {
    let charactersPhrase = phrase.split('');
    console.log(charactersPhrase);
    
    const checkToDelete = () => {
        let spellToDelete = toDelete.split('');

        try {  
            if(spellToDelete.length > 1){
                throw new Error ("Sólo se puede borrar un caracter");
            } 
            
        }catch(err){
            alert(err);
        }
    }
    
    print = [];

    const toFind = charactersPhrase.forEach(character => {
        if(character===checkToDelete){
         print.push(toFind);
            console.log(print.join(''));
        }else {
        console.log(`Caracter eliminado: ${toFind}`); 
         }     
    });
}

let input = prompt("ELIMINADOR DE CARACTER - 1. Escriba una frase");
let characterToDelete = prompt("2. ¿Qué caracter desea eliminar de la frase?");
deleteCharacter(input, characterToDelete);