// // *ARRAYS
// let lista = [1, 2, 3, 4];

// console.log(lista);
// console.log(typeof lista);

// let letras = ["a", "e", "i", "o", "u"];

// console.log(letras.length);

// let alThings = lista.concat(letras);

// console.log(alThings);

// let maiuscula = "Algum texto";
// console.log(maiuscula.toUpperCase());

// // *OBJETOS

// let person = {
//   name: "Wagner",
//   age: 31,
//   phone: 95821301,
// };

// console.log(person);
// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person);

// // *ADD and DELETE

// const car = {
//   engine: 2.0,
//   brand: "VW",
//   model: "Jiguan",
//   km: 2000,
// };

// console.log(car);

// car.door = 4; //  para add props;

// console.log(car);

// delete car.km; // para deletar props;

// console.log(car);

// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// //mutação
// // ele não cria um objeto novo, e sim uma referencia

// const a = {
//   nome: "Wagner",
// };

// const b = a;
// console.log(a);
// console.log(b);

// b.age = 31;
// console.log(a);
// console.log(b);

// delete b.age;
// console.log(a);
// console.log(b);

// LOOP EM ARRAYS

const users = ["Wagner", "Jean", "Ana", "Kellen"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

//PUSH & POP

const letters = ["a", "b", "c"];
console.log(letters);

letters.push("d"); // add um elemento no final do array
console.log(letters);

letters.pop(); // remove o ultimo elemento do array
console.log(letters);

let lettersRemoved = letters.pop(); // vai exibir somente o elemento removido
console.log(lettersRemoved);

lettersRemoved = letters.push(); // vai exibir o tamanho do array
console.log(lettersRemoved);

letters.push("x", "y", "z"); // add varios elementos no final do array
console.log(letters);

// SHIFT & UNSHIFT

letters.unshift("h", "i", "j"); //add elemento no inicio do array
console.log(letters);

letters.shift(); //remove o primeir elemento do array
console.log(letters);

lettersRemoved = letters.unshift(); //exibi o tamanho do array
console.log(lettersRemoved);
