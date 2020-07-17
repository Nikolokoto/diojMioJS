// 1
/***********************************************
 * 
 * Hacer una función que reciba una frase y devuelva
 * el número de vocales que tiene la misma.
 * indexOf o findIndex
 *  
 ***********************************************/
const countVowels = (vowels) => {
    const phrase = prompt("CONTADOR DE VOCALES - Escriba una frase:");
    const vowels = phrase.find(vowel => vowel === "a" && "e" && "i" && "o" && "u");//Me dice que tengo que declarar "vowels", pero se supone que lo estoy haciendo en la siguiente línea
    vowels();
    console.log =(vowels());
}

countVowels();


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

 const deleteLetter = eliminateCharacter => {
     const phrase = prompt("ELIMINAR CARACTER - Escriba una frase:");
     const character = prompt("¿Qué caracter desea borrar?");
     try{
         validation = character.split('');
         validation.length -1 < 1;
         throw new Error("No se puede eliminar más de uno.")
     } catch(err) {
         alert(err);
        }

    eliminateCharacter(() => phrase.find(letter => letter === character));
    console.log(phrase - deleteLetter)
 }

 deleteLetter();