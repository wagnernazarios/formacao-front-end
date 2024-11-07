let somar = function sum(a, b) {
  return a + b;
};

console.log(somar(16, 55));

//escopo da funcao ---

let y = 10;

function num() {
  let y = 20;
  console.log(`y dentro da função é: ${y}`);
}

console.log(`y fora da função é: ${y}`);

num();
