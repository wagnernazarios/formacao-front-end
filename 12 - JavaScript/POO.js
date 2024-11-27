// const animal = {
//   nome: "Bob",
//   latir: () => {
//     // Metodos são funcoes criadas dentro de um obj
//     console.log("Au au");
//   },
// };

// console.log(animal.nome);

// animal.latir();

// // this em métodos

// const pessoa = {
//   nome: "Wagner",

//   getNome: function () {
//     return this.nome;
//   },

//   setNome: function (novoNome) {
//     this.nome = novoNome;
//   },
// };

// console.log(pessoa.getNome());

// pessoa.setNome("Joaquim");

// console.log(pessoa.getNome());

//BIND
// Bind para quando uma medoto seja instanciado o *this* consiga se referir ao elemento pai
// e acessa as outras propriedades da funcao

// const pessoa = {
//     saudacao: "Bom dia",
//     falar() {
//       console.log(this.saudacao);
//     },
//   };

//   pessoa.falar();

//   const falar1 = pessoa.falar
//   falar1()
//   // sem o bind o valor dessa constante sera undefined
//   // por o falar não consegue acessar os outros elementos da funcão pessoa

//   const falar2 = pessoa.falar.bind(pessoa); // com o bind o metodo falar consegue acessar as outras propriedades
//   falar2();

// //PROTOTYPE

// const text = "abcde";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);
// console.log(Object.getPrototypeOf(arr));
// console.log(Object.getPrototypeOf(arr) == Array.prototype);

// //

// const myObj = {
//   nome: "a",
// };

// console.log(myObj);
// const mySecondObj = Object.create(myObj); //Modo antigo de instanciar
// console.log(mySecondObj);

// Classes basicas

const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro); //modo antigo de instanciar uma classe
pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);
console.log(`Ele tem ${pastorAlemao.patas} patas`);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";

console.log(bulldog);

// função como classe - função construtora
// assim o codigo se torna reutilizavel e mais profissional

function criarCacharro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCacharro("Bob", "Vira-lata"); // outra forma de instanciar
console.log(bob);

const jack = criarCacharro("Jack", "Labrador");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

// Funções como classes

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const mel = new Cachorro("Mel", "Golden Retrivier"); // Essa é a forma mais usada e atual de instanciar
console.log(mel);

// Metodo na função construtora

Cachorro.prototype.uivar = function () {
  console.log("Auuuu");
};

console.log(mel.uivar());

// Classes ES6
// No ES6 abandonamos as funções e usamos o CLASS para criação de classes.
// o CONSTRUCTOR é uma função nativa das classes

class Cachorros {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const Pitbull = new Cachorros("Titã", "PItbull");
console.log(Pitbull);

// Classes ES6 II
// as funções nas classes não precisam ter a palavra function

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "Vermelhor");
console.log(scania); // dessa forma a função não aparece.

scania.descreverCaminhao();
