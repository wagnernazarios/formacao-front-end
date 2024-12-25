//! adicionando evento

const btn = document.querySelector("#my-button");

btn.addEventListener("click", () => {
  btn.setAttribute("value", "Clicou");
});

//! removendo evento

const btn2 = document.querySelector("#my-btn");
const btn3 = document.querySelector("#other-btn");

function exibirMensagem() {
  alert("Testando");
}

btn2.addEventListener("click", exibirMensagem);

btn3.addEventListener("click", () => {
  alert("Evento do btn 2 removido");
  btn2.removeEventListener("click", exibirMensagem);
});

//! argumentos do evento

const titulo = document.querySelector("h1");

titulo.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.offsetX);
  console.log(e.pointerType);
});

//! Propagação
// Quando um elemento sem querer
// dispara evento de outro elemento

const container = document.querySelector("#container");
const btnContainer = document.querySelector("#btn-container");

btnContainer.addEventListener("click", (e) => {
  // com propagação o botão ira ativa o evento dele e da div

  e.stopPropagation(); // metodo para para a propagação
  console.log("Evento 1");
});

container.addEventListener("click", (e) => {
  console.log("Evento 2");
});

//! Prevent Default
// para remover eventos padrões, como o redirecionamento
// para outra pagina ao clicar no link

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Não alterou a pagina");
});

//! eventos do teclado

document.addEventListener("keyup", (e) => {
  console.log(`O usuario  soltou a tecla: ${e.key}`);
});
// É um evento que dispara ao clicar e soltar a tecla

document.addEventListener("keydown", (e) => {
  console.log(`O usuario apertou a tecla: ${e.key}`);
});
// É um evento que dispara ao clicar  a tecla

//! outros eventos do mouse
// mouseup é quando tu preciona o botão do mouse e solta
// mousedown é quando tu preciona e segura o botão do mouse
// dblclick quando ouver dois clique

const h3 = document.querySelector("h3");

h3.addEventListener("mouseup", () => {
  console.log("soltou o botao");
});

h3.addEventListener("mousedown", () => {
  console.log("precionou o botao");
});

h3.addEventListener("dblclick", () => {
  console.log("deu 2 clicks no botao");
});

//! Movimento do mouse

// Pode indicar a posição do mouse e pode ser muito util para projeto reais

//document.addEventListener("mousemove", (e) => {
// console.log(`Posição no eixo X: ${e.x}`);
// console.log(`Posição no eixo Y: ${e.y}`);
//}

//! evento de scroll
// Podemos criar evento ao movimentar a pagina com o mouse ou clicando no scroll
// nesse caso devemos usar o objeto Window e não document, pois se trata da janela inteira

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 200) {
    // scrollY retorna a quantidade de pixels
    console.log("Passamos de 200px"); //que a janela foi rolada na direção vertical
  }
});

//! Evento de focus/blur
// serve para dar focus ou não a um elemento, normalmente usada em input

const input = document.querySelector("#my-input");

input.addEventListener("focus", () => {
  console.log("entrou no  input");
});

input.addEventListener("blur", () => {
  console.log("saiu no  input");
});

//! evento de carregamento de pagina

// Serve para evento ao terminar de carragar a pagina
window.addEventListener("load", () => {
  console.log("A pagina carregou");
});

// dispara um evento ao tentar carregar
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

//! debounce
// tecnica utilizada para eventos disparar menos vezes
// como o mousemove

const debounce = (f, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Execultando o movimento do mouse");
  }, 400)
);
