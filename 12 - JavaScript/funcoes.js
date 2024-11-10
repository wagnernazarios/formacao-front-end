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

// arrow function

const testantoArrow = ((n) => {
  if (n % 2 === 0) {
    console.log("Esse número é par");
    return;
  }
  console.log("esse numero é impar");
})(12);

const raizQuadrada = (x) => {
  return x * x;
};

console.log(raizQuadrada(6));

const multi = (m, n) => {
  if (n == undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multi(15));
console.log(multi(6, 8));

// closure

function somefunction() {
  let text = "Alguma coisa";

  function display() {
    console.log(text);
  }

  display();
}

somefunction();

// recursion

(function untilTen(n, m) {
  if (n < 10) {
    console.log("A função para de funcionar!");
  } else {
    let x = n - m;

    console.log(x);

    untilTen(x, m);
  }
})(140, 10);
