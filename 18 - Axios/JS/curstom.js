const postFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        accept: "aplication/json",
        authorization: "meunovotoken"
    }
})