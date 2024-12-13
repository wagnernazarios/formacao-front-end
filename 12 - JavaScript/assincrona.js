//! SETTIMEOUT
// faz parte da programção assincrona
// e executa uma linha ou bloco de codigo apenas uma vez
// depois de um determinado tempo pre estabelecido

// console.log("Exibindo uma string");

// setTimeout(function () {
//   console.log("Requisição assincrona");
// }, 2000); // irá só imprimir esse trecho depois de 2 segundos

// console.log("Exibindo uma string outra vez");

//! SETINTERVAL
// ele executa um trecho de codigo apos determinado tempo
// porem ele continuara executando o trecho de tempo em tempo
// como num loop infinito

// console.log("Exibindo uma string");

// setInterval(() => {
//   console.log("Assincronando ");
// }, 4000); // ele ira repetir essa função de 4 em 4 segundos

// console.log("Exibindo uma string outra vez");

// //! PROMISE

// const promessa = Promise.resolve(5 + 4);

// console.log("Um codigo qualquer");

// promessa
//   .then((value) => {
//     console.log(`a soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("outro codigo qualquer");

// //! TRATAMENTO DE ERROS NAS PROMISES
// // utilizado para quando houver um erro na promise

// Promise.resolve(4 * "ads")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores Invalidos");
//     }
//   })
//   .catch((err) => console.log(`Ocorreu um erro: ${err}`))
//   .finally(() => console.log("Codigo executado!"));

// //!REJEITANDO UMA PROMISSE
// // diferente do do erro nesse podemos rejeita uma promise
// // utilizando o REJECT

// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve(`O numero é maior que 10`);
//     } else {
//       reject(new Error(`O numero é muito baixo`));
//     }
//   });
// }

// const a = checkNumber(20);
// const b = checkNumber(5);

// console.log(a);
// b.then((v) => console.log(`O resultado e: ${v}`)).catch((err) =>
//   console.log(`Um erro ocorreu: ${err}`)
// );

//! VARIAS PROMISES
console.time();
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 1000);
});
const p2 = Promise.resolve(10 - 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("ERROR");
  }
});

console.timeEnd();

Promise.all([p1, p2, p3]).then((values) => console.log(values));

//! ASYNC FUNCTION
// Uma versão mais simlificada de promise

async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(7, 8).then((value) => console.log(`O valor da soma é: ${value}`));

console.log("Teste Async");

//! ASYNC AWAIT
//Ele espera o bloco assincrona para so depois executar
// e só funciona em funções async

function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a promisse");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a Promise, e Esperando resultado");
  const result = await resolveComDelay();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

//! GENERATORS
// Ele pausa a função e exibi um novo valor a cada chamada

function* generators() {
  yield 1; // cada um deles sera exibido a cada chamada
  yield 2;
}

const gen = generators();

console.log(gen.next()); // a cada chamada com o metodo next
// ele executa um novo valor
// aqui ele vale 1
console.log(gen.next()); // aqui ele vale 1 e 2
console.log(gen.next()); // aqui ele vale undefined
// pois só temos dois yield
