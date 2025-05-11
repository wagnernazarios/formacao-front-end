//ARROW FUNCTION

function sum(a, b) {
    return a + b
}
console.log(sum(5, 5))

//arrow
const sumArrow = (a, b) => a + b;
console.log(sum(5, 7))


//FILTER

const arr = [0, 1, 2, 3, 4, 5, 6];


console.log(arr);
const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
})

console.log(highNumbers);

const users = [
    { name: "Wagner", available: true },
    { name: "Jean", available: false },
    { name: "Maria", available: true },
    { name: "Kebler", available: false }
];

const userAvailables = users.filter((user) => user.available);

console.log(userAvailables);

//MAP


const products = [
    { name: "Camisa", price: 10.99, category: "Roupas" },
    { name: "Cafeteira", price: 150, category: "Eletro" },
    { name: "Fogão", price: 499, category: "Eletro" },
    { name: "Jeans", price: 59, category: "Roupas" }
];

products.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true;
    }
})

console.log(products)

// DESTRUCTuRING

const fruit = ["Maça", "Uva", "Laranja"];

const [f1, f2, f3] = fruit;

console.log(f1, f2, f3)  //fruit[0], fruit[1], fruit[2]

const productDetails = {
    name: "Mouse",
    price: 29.99,
    category: "Periférico",
    color: "Cinza"
}

const { name: productName, price, category, color } = productDetails;

console.log(`Um ${productName} que custa R$${price} e é da cor ${color}.`) // Um ${productDetails.name} que custa ${productDetails.price} e é da cor ${productDetails.color}


//SPREAD OPERATOR

const l1 = [1, 2, 3];

const l2 = [4, 5, 6];

const l3 = [...l1, ...l2];

console.log(l3);

const l4 = [0, ...l3, 7];

console.log(l4)


const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const carInfos = { km: 10000, price: 499.99 }

const car = { ...carName, ...carBrand, ...carInfos };

console.log(car)


//CLASSES

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productDiscounts(discount) {
        return this.price * ((100 - discount) / 100);
    }
}


const shirt = new Product("Camisa gola V", 29.99);

console.log(shirt)
console.log(`A camisa com desconto de 10% sai a ${shirt.productDiscounts(10).toFixed(2)}`)
console.log(`A camisa com desconto de 30% sai a ${shirt.productDiscounts(30).toFixed(2)}`)


// HERANÇA


class ProductWithAttributes extends Product {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }

    showColor() {
        console.log("As cores são: ")
        this.color.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapeú", 39.99, ["Preto", "Amarelo", "Verde"])

console.log(hat)
const details = hat.showColor();
