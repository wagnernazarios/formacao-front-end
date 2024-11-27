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

// const cachorro = {
//   raca: null,
//   patas: 4,
// };

// const pastorAlemao = Object.create(cachorro); //modo antigo de instanciar uma classe
// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);
// console.log(`Ele tem ${pastorAlemao.patas} patas`);

// const bulldog = Object.create(cachorro);
// bulldog.raca = "Bulldog";

// console.log(bulldog);

// // função como classe - função construtora
// // assim o codigo se torna reutilizavel e mais profissional

// function criarCacharro(nome, raca) {
//   const cachorro = Object.create({});

//   cachorro.nome = nome;
//   cachorro.raca = raca;

//   return cachorro;
// }

// const bob = criarCacharro("Bob", "Vira-lata"); // outra forma de instanciar
// console.log(bob);

// const jack = criarCacharro("Jack", "Labrador");
// console.log(jack);
// console.log(Object.getPrototypeOf(jack));

// // Funções como classes

// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const mel = new Cachorro("Mel", "Golden Retrivier"); // Essa é a forma mais usada e atual de instanciar
// console.log(mel);

// // Metodo na função construtora

// Cachorro.prototype.uivar = function () {
//   console.log("Auuuu");
// };

// console.log(mel.uivar());

// // Classes ES6
// // No ES6 abandonamos as funções e usamos o CLASS para criação de classes.
// // o CONSTRUCTOR é uma função nativa das classes

// class Cachorros {
//   constructor(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
//   }
// }

// const Pitbull = new Cachorros("Titã", "PItbull");
// console.log(Pitbull);

// // Classes ES6 II
// // as funções nas classes não precisam ter a palavra function

// class Caminhao {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }

//   descreverCaminhao() {
//     console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//   }
// }

// const scania = new Caminhao(6, "Vermelhor");
// console.log(scania); // dessa forma a função descreverCaminhao não irá aparecer.

// scania.descreverCaminhao();

// mudando propriedades pelo prototype
// usando o prototype para setar algumas propriedades
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const wagner = new Humano("Wagner", 31);
console.log(wagner);

Humano.prototype.idade = "Não definido";
console.log(Humano.prototype.idade);

// Symbols
// São propriedades que nunca mudam e criadas com a funcao Symbol

class Aviao {
  constructor(nome, turbinas) {
    this.nome = nome;
    this.turbinas = turbinas;
  }
}

const asas = Symbol(); // invocamos a funcão simbol

Aviao.prototype[asas] = 2; //Voce usa o prototype para setar o valor entre colchetes o nome do symbol

const boieng = new Aviao("Boieng", 8);
console.log(boieng);

console.log(boieng[asas]); // para ver o symbol

// GETTER e SETTER

class Posts {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Voce está lendo ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPosts = new Posts("Algum post", "Um post sobre programação");

console.log(myPosts);
console.log(myPosts.exibirTitulo);

myPosts.adicionarTags = "Programação, Javascript, Front-end";
console.log(myPosts, myPosts.exibirTitulo);

//HERANÇA
// com a palavra reservada 'extends' podemos obter propriedades de outras classes

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobos extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas); // para referenciar que patas é a mesma da classe Mamifero
    this.nome = nome;
  }
}

const will = new Lobos(4, "Will");

console.log(will);

// INSTANCEOF
// Serve para saber se uma classe tem heranca de outro ou instanciado

console.log(will instanceof Mamifero);
