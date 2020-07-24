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

/*********************************************** 
* Ejercicios(integral)-
* 5

* Hacer una función para borrar personas por mail. / splice
************************************************/
const deleteUser = usersList => {
   const toDelete = prompt("Escriba el correo registrado de usuarix para eliminarle");
   
   const mailsList = usersList.map(user => user[2]);
   console.log(mailsList)

   const mailToDelete = mailsList.findIndex(mail => mail===toDelete);
   mailsList.splice(mailToDelete,1);
   console.log(mailsList); //
   
   const newUsersList = [];
   const checkMails = usersList.map(user => user[2]!==mailToDelete);
       if(checkMails===true){
         newUsersList.push(mailsList);
         console.log(newUsersList)  
       }else{
           usersList[2].splice(checkMails);
       }
   console.log(newUsersList);
}

const actualList = [
   ["niko gutierrez", "30", "niko@email.com"],
   ["joan villanueva", "28", "joan@email.com"],
   ["katia crimson", "27", "katia@email.com"]
];

deleteUser(actualList);