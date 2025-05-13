
console.log(axios)

// primeiro request

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
    }

}

getData();


//imprimindo elemento

const container = document.querySelector("#user-container");
const select = document.querySelector("#users")

const printData = async () => {

    const data = await getData()

    data.forEach(element => {
        const option = document.createElement("option");
        option.textContent = element.name;
        select.appendChild(option)
        container.appendChild(select)
    });

}

printData()

