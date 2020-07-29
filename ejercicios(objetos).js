/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar un catalogo de 
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 * SOLUCIÓN FEDE
 */
const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    siguienteId: 1,
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    agregar: function(titulo, descripcion, precio) {
        const producto = {
            id: this.siguienteId,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
        this.siguienteId++;
    },
    borrar: function(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    },
    modificar: function(id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }
};

const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
    },
    buscarPorCatalogoId(catalogoId) {
        return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
    },
    agregar: function (catalogoId, cantidad) {
        const catalogoIndex = catalogo.buscarPorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(catalogoId);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogo.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.lista.push(obj);
            this.nextId++;
        } else {
            this.lista[carritoIndex].cantidad += cantidad;
        }
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};

/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */

const book = {
    title: "Viajero Solitario",
    author: "Jack Kerouack",
    publishYear: 1960,
    isbn: 881213,

    get printBook() {
        return `${this.title}, escrito por ${this.author}, publicado en el año ${this.publishYear} (ISBN: ${this.isbn}).`
    }, 

    reviews: [
    {
        name: "Un libro para aventurerxs", 
        review: "Recomendado para viajerxs e incansables caminantes", 
        value: 4
    },
    {
        name: "Donde las letras y las vivencias intensas se entrelazan", 
        review: "Mezcla de autobiografía cruda y una realización de la lengua genuina y radiante", 
        value: 5
    },
    {
        name: "Escrito por un drogadictx espiritual para vagabundxs de la misma ralea", 
        review: "La vida según un libertino orgulloso, educado e indingente que no va a ninguna parte", 
        value: 4
    }
    ],

    reviewsAverage: function(value){
        let summation = this.reviews.reduce((acumulador, review) => acumulador + review[value], 0);
        return summation/this.reviews.length-1;//Me devuelve NaN :/
    },

    addReview: function(reviews){
        const newReview = {};
        if(newReview = {name, review, value}) reviews.push(newReview);
    }
};


/***********************************************
 * Crear un objeto "receta" que tenga una lista 
 * de ingredientes con su cantidad, y un 
 * metodo que muestre un texto de 
 * las cantidades. Por ejemplo:
 * - La receta <nombre> lleva 2 tazas de harina,
 * 5 gramos de levadura, etc...
 */

const originalRecipe = {//Yiaaaaa
    name: "masa de pizza",
    ingedients: [
        {ingredient: "harina", amount: "un kilo"},
        {ngredient: "agua", amount: "700 ml"},
        {ingredient: "levadura", amount: "10 g"},
        {ingredient: "miel", amount: "una cucharilla"},
        {ingredient: "sal", amount: "20 g"},
        {ingredient: "aceite de oliva", amount: "50 g"}
    ],

    get PizzaMass(){
        let print = `La receta para hacer ${name} lleva: `;
        this.ingredients.forEach(ingredient => print += `${ingredient.amount} de ${ingredient.ingredient}, `);
        return printIngredients.substr(0, print.length - 2) + '.';
    }

};

/*************************************
  * Consigna Clase 46
  * Escribir una función que reciba un array
 * con números e imprima el mayor de los números usando
 * array.reduce
 */


const printGreaterNumber = (numbersList) => {
    const greaterNumber = numbersList.reduce((acumulador, number) => number < acumulador, 0);

    console.log(greaterNumber);
 }

 numbers = [47, 30, 85, 26, 31, 28, 50]

 printGreaterNumber(numbers);


 /*************************************
  * Crear una funcion que me devuelva un objeto
  * Este objeto va a permitirme guardar 
  * peliculas que quiera ver, haya visto, o este viendo
  * O  sea, tengo un objeto con una lista de peliculas,
  * cada pelicula tiene su nombre, su director, su año, 
  * su genero, y un estado que puede ser (pendiente, viendo, vista).
  * Lo que tengo que poder hacer es
  * 1. Agregar peliculas
  * 2. Cambiar el estado
  * 3. Remover peliculas
  * 4. Obtener una lista legible con console.log de peliculas 
  * por estado. Es decir, le pido un estado y me deuvelve las peliculas
  * correspondientes. (`nombre del año tanto, dirigida por quien`)
  */

 const filmsUser = () => {
    const films = {
        filmList: [],

        addFilm: function(title, director, year, gender, status){
            this.filmList.push({
                title,
                director,
                year,
                gender,
                status
            });
        },

        modifyStatus: function(state){//No me funciona :'(
            this.filmList[film][status]=state;
        },

        removeFilm: function(toDelete){
            this.filmList = this.filmList.filter(film => film.title !== toDelete);
        }
    };
    return films;
}

const filmsNiko = filmsUser();