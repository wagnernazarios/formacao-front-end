let lista = [1, 2, 3, 4];

console.log(lista);
console.log(typeof lista);

let letras = ["a", "e", "i", "o", "u"];

console.log(letras.length);

let alThings = lista.concat(letras);

console.log(alThings);

let maiuscula = "Algum texto";
console.log(maiuscula.toUpperCase());

//OBJETOS

let person = {
  name: "Wagner",
  age: 31,
  phone: 95821301,
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

//ADD and DELETE

const car = {
  engine: 2.0,
  brand: "VW",
  model: "Jiguan",
  km: 2000,
};

console.log(car);

car.door = 4; //  para add props;

console.log(car);

delete car.km; // para deletar props;

console.log(car);
