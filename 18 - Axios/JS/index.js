// primeiro request com axios

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",
            // configurando o header
            {
                headers: {
                    "Content-Type": "application/json"
                },
                custom: "header"
            })
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
    }

}



//imprimindo elemento -------------------------------------------------------------------------------

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

// POST ------------------------------------------------------------------------------------------------


const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts",
        {

            title: titleInput.value,
            body: bodyInput.value,
            userId: 1

        })

})


// GLobal Instance -------------------------------------------------------------------------------------