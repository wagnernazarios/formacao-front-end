//IMC DATA
const data = [
    {
        min: 0,
        max: 18.5,
        classification: "menor que 18,5",
        info: "Magreza",
        obesity: 0
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "entre 18,5 e 24,9",
        info: "Normal",
        obesity: 0
    },
    {
        min: 25,
        max: 29.9,
        classification: "entre 25 e 29,9",
        info: "Sobrepeso",
        obesity: "I"
    },
    {
        min: 30,
        max: 39.9,
        classification: "entre 30 e 39,9",
        info: "Obesidade",
        obesity: 'II'
    },
    {
        min: 40,
        max: 100,
        classification: "maior que 40",
        info: "Obesidade grave",
        obesity: 'III'
    }
];


//*seleção de elementos

const imcTable = document.querySelector('#imc-table');
const heightInputs = document.querySelector('#height');
const weightInputs = document.querySelector('#weight');
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultContainer = document.querySelector("#result-container");
const calcContainer = document.querySelector("#calc-container");
const numberSpan = document.querySelector("#imc-number span");
const infoSpan = document.querySelector("#imc-info span");
const backBTn = document.querySelector("#back-btn");


//funcoes
function createTable(data) {
    data.forEach((item) => {

        const div = document.createElement('div');
        div.classList.add('table-data');

        const classification = document.createElement('p');
        classification.innerText = item.classification;

        const info = document.createElement('p');
        info.innerText = item.info;

        const obesity = document.createElement('p');
        obesity.innerText = item.obesity;

        div.appendChild(classification);
        div.appendChild(info);
        div.appendChild(obesity);

        imcTable.appendChild(div);
    });
}

function clearInputs() {
    heightInputs.value = "";
    weightInputs.value = "";

    numberSpan.classList = "";
    infoSpan.classList = "";

}

function validDigits(text) {

    return text.replace(/[^0-9,]/g, "");

}

function calcImc(weight, height) {
    const imc = weight / (height * height);
    return imc.toFixed(1);
}

function showOrHideResults() {
    calcContainer.classList.toggle("hide")
}
//inicializaçao
createTable(data);



//Eventos
calcBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const height = +heightInputs.value.replace(",", ".")
    const weight = +weightInputs.value.replace(",", ".")

    const imc = calcImc(weight, height);
    if (!weight || !height) return;

    let info;

    data.forEach((item) => {
        if (imc >= item.min && imc <= item.max) {
            info = item.info;
        }
    })

    resultContainer.classList.remove("hide");
    calcContainer.classList.add("hide");
    if (!info) return;
    numberSpan.innerText = imc;
    infoSpan.innerText = info;

    switch (info) {
        case "Magreza":
            numberSpan.classList.add('low');
            infoSpan.classList.add('low');
            break
        case "Normal":
            numberSpan.classList.add('good');
            infoSpan.classList.add('good');
            break
        case "Sobrepeso":
            numberSpan.classList.add('medium');
            infoSpan.classList.add('medium');
            break
        case "Obesidade":
            numberSpan.classList.add('high');
            infoSpan.classList.add('high');
            break
        case "Obesidade grave":
            numberSpan.classList.add('high');
            infoSpan.classList.add('high');
            break
    }


})

clearBtn.addEventListener('click', (e) => {
    clearInputs();
    e.preventDefault();
})

backBTn.addEventListener("click", (e) => {
    e.preventDefault();
    resultContainer.classList.add("hide");
    calcContainer.classList.remove("hide");
    clearInputs();

})

weightInputs.addEventListener('input', (e) => {
    const updateValue = validDigits(e.target.value)

    e.target.value = updateValue;
})

heightInputs.addEventListener('input', (e) => {
    const updateValue = validDigits(e.target.value)

    e.target.value = updateValue;
})

