//! SetTimeout
// faz parte da programção assincrona
// e executa uma linha ou bloco de codigo
// depois de um determinado tempo pre estabelecido

console.log("Exibindo uma string");

setTimeout(function () {
  console.log("Requisição assincrona");
}, 2000); // irá só imprimir esse trecho depois de 2 segundos

console.log("Exibindo uma string outra vez");

//! setInterval
// ele executa um trecho de codigo apos determinado tempo
// porem ele continuara executando o trecho de tempo em tempo
// como num loop infinito

// console.log("Exibindo uma string");

// setInterval(() => {
//   console.log("Assincronando ");
// }, 4000); // ele ira repetir essa função de 4 em 4 segundos

// console.log("Exibindo uma string outra vez");
