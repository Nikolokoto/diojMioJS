// 1
/***********************************************
 * 
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * array.reverse
 * 
 ***********************************************/

const printReverse = () => {
    let number = prompt("Escriba un número de más de un dígito. Este programa lo imprimirá al revés");
    const array = number.split('');
    let print = array.reverse(); 
    console.log(print.join(''));
}

printReverse();

 //2
 /***********************************************
 * 
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 * Split y join + sort
 *  
 ***********************************************/

const orderWord = () => {
    let word = prompt("Escriba una palabra. Este programa imprime la letras en orden alfabético");
    const array = word.split('');
    let print = array.sort();
    console.log(print.join(''));
}

orderWord();

// 3
 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 * Join y split
 *  
 ***********************************************/

const printTitle = () => {
    let phrase = prompt("Escriba una frase. Este programa la imprime en modo título (las primeras letras de cada palabra en mayúsculas");
    let word = phrase.split(' ');
    let newPhrase = [];

    for (let i=0 ; i<word.length ; i++){
        firstLetter = word[i][0];
        let withoutFirstLetter = word[i].slice(1);
        upperCaseLetter = firstLetter.toUpperCase();
        let upperCaseWord = upperCaseLetter + withoutFirstLetter;
        newPhrase.push(upperCaseWord);
    }
   title = newPhrase.join(' ');
   console.log(title);
}

printTitle();

 //4
/***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 * array.reduce
 *  
 ***********************************************/

const printLongestWord = () => {
    const phrase = prompt("Escriba una frase y le mostraremos cuál es su palabra más larga:");
    let spelling = phrase.split(' ');

    let longestWord = spelling.reduce((acumulador, word) => (word.length -1) < acumulador, 0);

    console.log(longestWord);
 }

 printLongestWord();