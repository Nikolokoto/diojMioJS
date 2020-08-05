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

function Review (criticianName, opinion, value) {
    this.criticianName = criticianName;
    this.opinion = opinion;

    const checkValue = (number) => {
        if(typeof number !== "number") throw new Error("La valoración no es un número");
        if (number < 0 || this.value > 5) throw new Error("La valoración no se encuentra dentro del rango aceptado");
    };

    checkValue(value);
    this.value = value;
    
};

function Book (title, author, publishYear, isbn) {
    this.title = title;
    this.author = author;

    const checkYear = (number) => {
        if(typeof number != "number") throw new Error("Debe ser un número!");
    };

    checkYear(publishYear);
    this.publishYear = publishYear;
    this.isbn = isbn;
    
    this.reviews = [];

    
    this.addReview = (user, title, opinion, value) => {
        const review = new Review(user, title, opinion, value);
        this.reviews.push(review);
    },

    this.reviewsAverage = (valuation) {
            const summation = this.reviews.reduce((acumulator, review) => acumulator + review.value, 0);
            const valuation = summation/this.reviews.length;
            return valuation
    },

    get printBook() {   //No funciona Get!!
        return `${this.title}, escrito por ${this.author}, publicado en el año ${this.publishYear} (ISBN: ${this.isbn}).`
    }
};

const Library = () => {
    const MyLibrary = {
        books: [],
    
        addBook: function (title, author, publishYear, isbn) {
            this.books.push({
                title,
                author,
                publishYear,
                isbn
            });
        },
    
        removeBook: function (title) {
            this.books = this.books.filter(book => book.title !== title);
            return this.books;
        }
    };

    return MyLibrary;
}

//EN CONSOLA
//undefined
const nikoBooks = Library();
//undefined
nikoBooks
//{books: Array(0), addBook: ƒ, removeBook: ƒ}
nikoBooks.addBook("Viajero Solitario", "Jack Kerouac", 1960, 881213);
//undefined
nikoBooks.books
//[{…}]0: {title: "Viajero Solitario", author: "Jack Kerouac", publishYear: 1960, isbn: 881213}length: 1__proto__: Array(0)


/***********************************************
 * Crear un objeto "receta" que tenga una lista 
 * de ingredientes con su cantidad, y un 
 * metodo que muestre un texto de 
 * las cantidades. Por ejemplo:
 * - La receta <nombre> lleva 2 tazas de harina,
 * 5 gramos de levadura, etc...
 */

const PizzaMass = {
    name: "masa de pizza",

    ingedients: [
            {ingredient: "harina", amount: "un kilo"},
            {ingredient: "agua", amount: "700 ml"},
            {ingredient: "levadura", amount: "10 g"},
            {ingredient: "miel", amount: "una cucharilla"},
            {ingredient: "sal", amount: "20 g"},
            {ingredient: "aceite de oliva", amount: "50 g"}
        ]/*,

    get PrintRecipe(){
        let print = `La receta para hacer ${this.name} lleva: `;
        this.ingredients.forEach(ingredient => print += `${ingredient.amount} de ${ingredient.ingredient}, `);//Me falló el ForEach
        return printIngredients.substr(0, print.length - 2) + '.';
    };*/
};

function Recipe (name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
};

function RecipesBook (){
    this.recipes = [];
        
    this.addRecipe = (name, ingredients) => {
        const recipe = new Recipe(name, ingredients);
        recipesBook.push(recipe);
    },

    get PrintRecipe () { /*No me funciona :`(*/
        let print = `La receta para hacer ${this.recipes[0].name} lleva: `;
        this.recipes[0].ingredients.forEach(ingredient => print += `${ingredient.amount} de ${ingredient.ingredient}, `);//cuando este getter lo tenía relacionado solo con el objeto PizzaMass (el ejercicio original, y con los "this" solo haciendo referencia al objeto original y no al array), me falló el ForEach
        return printIngredients.substr(0, print.length - 2) + '.';
    };
};

//EN CONSOLA
//undefined
const foodFaster = new RecipesBook;
//undefined
foodFaster.addRecipe(PizzaMass.name, PizzaMass.ingedients);
//undefined
foodFaster.recipes
//[Recipe]0: Recipe {name: "masa de pizza", ingredients: Array(6)}length: 1__proto__: Array(0)

/*************************************
  * Consigna Clase 46
  * Escribir una función que reciba un array
 * con números e imprima el mayor de los números usando
 * array.reduce
 */

const printGreaterNumber = numbersList => {
const greaterNumber = numbersList.reduce((acumulator, number) => {
    if(number > acumulator) {
        acumulator = number;
    }
    return acumulator;
}, 0);

console.log(greaterNumber);
};

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

function filmsAdmin () { //La consola me dice que no es una función creadora
    this.filmList = [],

    this.addFilm = (title, director, year, gender, status) => {
        this.filmList.push({
            title,
            director,
            year,
            gender,
            status
        });
    },

    this.modifyStatus = (titleSearched, state) => {
        const film = this.filmsList.find(film => film.title === titleSearched);
        film["status"] = state;
        return film;
    },

    this.removeFilm = (titleToDelete) => {
        this.filmList = this.filmList.filter(film => film.title !== titleToDelete);
    }

}

//EN CONSOLA
//undefined
const filmsNiko = new filmsAdmin();
//undefined
filmsNiko.addFilm("Buenos modales", "Dos brasileiros", 2000, "Fantasía darks", "vista");
//undefined
filmsNiko.filmList
//[{…}]0: {title: "Buenos modales", director: "Dos brasileiros", year: 2000, gender: "Fantasía darks", status: "vista"}length: 1__proto__: Array(0)