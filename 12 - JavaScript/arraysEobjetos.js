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

// const users = ["Wagner", "Jean", "Ana", "Kellen"];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// //PUSH & POP

// const letters = ["a", "b", "c"];
// console.log(letters);

// letters.push("d"); // add um elemento no final do array
// console.log(letters);

// letters.pop(); // remove o ultimo elemento do array
// console.log(letters);

// let lettersRemoved = letters.pop(); // vai exibir somente o elemento removido
// console.log(lettersRemoved);

// lettersRemoved = letters.push(); // vai exibir o tamanho do array
// console.log(lettersRemoved);

// letters.push("x", "y", "z"); // add varios elementos no final do array
// console.log(letters);

// // SHIFT & UNSHIFT

// letters.unshift("h", "i", "j"); //add elemento no inicio do array
// console.log(letters);

// letters.shift(); //remove o primeir elemento do array
// console.log(letters);

// lettersRemoved = letters.unshift(); //exibi o tamanho do array
// console.log(lettersRemoved);

// // INDEXOF & LASTINDEXOF

// const myElements = ["morango", "maçã", "abacate", "pêra", "abacate"];

// console.log(myElements.indexOf("maçã")); //exibi a posição do elemento
// console.log(myElements.indexOf("abacate")); // quando há repetições o indexof só exibi o primeiro elemento

// console.log(myElements[2]); //vai exibir o elemento do index 2
// console.log(myElements[myElements.indexOf("abacate")]); //também vai exibir o elemento do index 2

// console.log(myElements.lastIndexOf("abacate")); //exibi o ultimo elemento do array caso seja repetido

// console.log(myElements.indexOf("mamão")); // vai exibir -1 como indice pois ele não existe
// console.log(myElements.lastIndexOf("mamão")); // vai exibir -1 como indice pois ele não existe

// // SLICE
// // Cria um array menor de um array maior por um intervalo criado por parametros

// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4); // só o indice 2 e 3 serão exibido, pois ele ignora o ultimo indice do parametro

// console.log(testeSlice);

// console.log(subArray);

// const subArray2 = testeSlice.slice(2, 4 + 1); // assim o ultimo indice do paramentro será exibido tbm.

// console.log(subArray2);

// const subArray3 = testeSlice.slice(9, 15); //irá retornar um array vazio pois não existe esses indices

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2, 15); //irá retornar todos elementos a partir do indice 2

// console.log(subArray4);

// // FOREACH
// // ele percorre todo array igual o for/while mas sendo um metodo

// const num = [1, 2, 3, 4, 5, 6];

// num.forEach((number) => {
//   console.log(`${number}º posição`);
// });

// const posts = [
//   { title: "Primeiro post", category: "PHP" },
//   { title: "segundo post", category: "Javascript" },
//   { title: "terceiro post", category: "Python" },
// ];

// posts.forEach((e) => {
//   console.log(`Exibindo post: ${e.title} da categoria ${e.category}`);
// });

// INCLUDES
// VErifica se o array possui determido dado e retorna um booleano

// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat")); // true
// console.log(brands.includes("Ford")); // false

// if (brands.includes("VW")) {
//   console.log("Há carros da marca Volkswagen");
// }

// // REVERSE
// // Ele inverte o array
// // cuidado pois ele inverte o array original

// const reverseTest = [1, 2, 3, 4, 5];

// console.log(reverseTest);
// console.log(reverseTest.reverse());

// //TRIM
// // remove tudo que não é texto

// const trinTest = "     Testando o trim \n";

// console.log(trinTest);
// console.log(trinTest.trim());

// console.log(trinTest.length);
// console.log(trinTest.trim().length);

// //PADSTART
// // ele inseri um texto no inicio da string

// const testandoPadstart = "1";

// const newNumber = testandoPadstart.padStart(3, 0);

// console.log(testandoPadstart);
// console.log(newNumber);

// const newnumber2 = testandoPadstart.padEnd(3, ".");

// console.log(newnumber2);

// //SPLIT
// // ele cria um array apartir de uma string

// const frase = "O rato roeu a roupa do rei de roma";

// const arrayDaFrase = frase.split(" ");

// console.log(frase);
// console.log(arrayDaFrase);

// // JOIN
// //ele une arrays

// console.log(arrayDaFrase.join(" "));

// const itensASerComprado = ["mouse", "monitor", "teclado"];

// console.log(`Precisamos comprar: ${itensASerComprado.join(", ")}.`);

// //REPEAT

// const palavra = "Testing \n";

// console.log(palavra.repeat(4));

// // REST PARAMETERS
// // possibilita colocar quantos parametros quiser

// const somaInfinita = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// };

// console.log(somaInfinita(15, 55, 15, 3, 4, 8));

//FOR...OF
// for de forma simplificada

const somaInfinita2 = (...args) => {
  let total = 0;
  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(2, 5, 7, 88, 6, 9, 9, 4));

// Destruturing em objetos
// uma forma de criar variaveis apartir de objetos de forma simples

const infoDetais = {
  firstName: "Wagner",
  lastName: "Nazario",
  job: "Developer",
};

const { firstName, lastName, job } = infoDetais; // as variaveis são os nomes das chaves

console.log(firstName, job);

// destricturing com arrays
// inves de usar a chave como no objeto, podemos usar nomes fiction

const myList = [
  ["Avião", "Jato"],
  ["Carro", "Onibus"],
  ["Submarino", "Bote"],
];

const [aero, terrestre, marinho, hibrido] = myList;

console.log(aero, terrestre, marinho);

// JSON

const myJSON = '{"Name": "Wagner", "Age": "31"}';

console.log(myJSON);
console.log(typeof myJSON);

// convertendo JSON/OBJETO

const myOBJ = JSON.parse(myJSON);

console.log(myOBJ);
console.log(typeof myOBJ);
