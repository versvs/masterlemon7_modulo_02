/**
 * Variables to be used during the following exercises
 */
const FIRST_ARRAY = ['primero', 'segundo', 'tercero', 'enésimo', 'último'];
const SECOND_ARRAY = ['juan', 'pepe', 'paco', 'mari'];
const THIRD_ARRAY = ['limón', 'pomelo', 'naranja', 'mandarina'];

const FIRST_OBJECT = {
  nombre: 'bicicleta',
  ruedas: 2
}


const SOURCE = {name: "Maria", surname: "Ibañez", country: "SPA"};
const TARGET = {name: "Luisa", age: 31, married: true};

const BOOKS = [
  {title: "Harry Potter y la piedra filosofal", isRead: true},
  {title: "Canción de hielo y fuego", isRead: false},
  {title: "Devastación", isRead: true},
];
  

/**
 * 
 *  1. ARRAY OPERATIONS
 * 
 */


/**
 *  Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 */
const head = (array) => {
  const [first] = array;
  return first;
};

console.log(head(FIRST_ARRAY));

/**
 *  Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 */
const tail = (array) => {
  const [first, ...tail] = array;
  return tail;
};

console.log(tail(FIRST_ARRAY));

/**
 *  Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el úlmo.
 *  Utiliza los métodos que ofrece Array.prototype.
 */
const init = (array) => array.slice(0, -1);

console.log(init(FIRST_ARRAY));

/**
 *  Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el úlmo elemento.
 */
const last = (array) => array.slice(-1);

console.log(last(FIRST_ARRAY));

/**
 * 
 *  2. CONCAT
 * 
 */


/**
 *  Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
 *  devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */
const concat = (a, b) => [...a, ...b];

console.log(concat(FIRST_ARRAY, SECOND_ARRAY));

/**
 *  CONCAT OPCIONAL (N ARRAYS)
 */
const nConcat = (...arrays) => {
  const concatenatedArrays = [];
  arrays.forEach((array) => concatenatedArrays.push(...array));
  return concatenatedArrays;
}
console.log(nConcat(FIRST_ARRAY, SECOND_ARRAY, THIRD_ARRAY));

/**
 * 
 *  3. CLONE
 * 
 */


/**
 *  Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source.
 */

function clone(source) {
  const clonedObject = {...source};
  return clonedObject;
}

console.log(clone(FIRST_OBJECT));

/**
 *  Implementa una función merge que, dados dos objetos de entrada source y target,
 *  devuelva un nuevo objeto con todas las propiedades de target y de source,
 *  y en caso de propiedades con el mismo nombre, source sobreescribe a target.
 */

function merge(source, target) {
  return ({...target, ...source});
}

console.log(merge(SOURCE, TARGET));



/**
 * 
 *  4. READ BOOKS
 * 
 */

function isBookRead(books, titleToSearch) {
  const readOrNot = !!(books.find(book => book.title === titleToSearch && book.isRead === true));
  console.log(`El libro ${titleToSearch} ${(readOrNot ? 'sí' : 'no')} ha sido leído`);
}

BOOKS.forEach(book => isBookRead(BOOKS, book.title));

/**
 * 
 *  5. SLOT MACHINE
 * 
 */

class SlotMachine {
  constructor() {
    this.coins = 0;
  }
  
  rollBoolean() {
    return Math.random() >= 0.5;
  }
  
  play() {
    this.coins++;
    if (this.rollBoolean() && this.rollBoolean() && this.rollBoolean()) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

const weAreGoingToBeRich = new SlotMachine();

for (let i = 0; i < 60; i++) {
  weAreGoingToBeRich.play();
}
