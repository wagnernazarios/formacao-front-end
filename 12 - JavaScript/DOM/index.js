//! selecionando tag do html

let listItens = document.getElementsByTagName("li");

//! Selecionando pelo id

let title2 = document.getElementById("title");

console.log(title);

//! selecionando pela classe

let produto = document.getElementsByClassName("product");

//! selecionando pelo css seletores

// para selecionar mais de 1

let produto2 = document.querySelectorAll(".product");

// selecionar so 1

let mainContainer = document.querySelector("#container");

//! ALTERANDO HTML

// InsertBefore
// ele insere uma elemento antes de alguma tag
// mas o elemento deve ser craido antes com o createElement

const p = document.createElement("p");

const header = title2.parentElement;

header.insertBefore(p, title2);

// appendChild
// com ele é possivel adicionar um elemento
// dentro do outro

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChild
// com ele é possivel substituir uma tag por outra

const h2 = document.createElement("h2");

h2.textContent = "novo titulo";

header.replaceChild(h2, title2);

// nó de texto
// para isso usaremos o metodo createTextNode

const myText = document.createTextNode("Novo titulo de novo");

const h3 = document.createElement("h3");
h3.appendChild(myText);
mainContainer.appendChild(h3);

// setAttribute
// serve para alterar atributos do html

const firstLink = document.querySelector("a");

firstLink.setAttribute("href", "https://google.com"); // primeiro voce diz qual atributo quer alterar e depois o valor desse atributo
