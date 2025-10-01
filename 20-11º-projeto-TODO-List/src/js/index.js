// Selecionar elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const todoItems = document.querySelector(".todo")
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')
const searchInput = document.querySelector('#search-input')
const eraseButton = document.querySelector('#erase-button')
const filterSelect = document.querySelector('#filter-select')

let oldInputValue;

//funçoes -------------------------------------
const saveTodo = (text, done = 0, save = 1) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneButton = document.createElement("button")
    doneButton.classList.add("done-button")
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneButton)

    const editButton = document.createElement("button")
    editButton.classList.add("edit-button")
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editButton)

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todo.appendChild(deleteButton)

    // salvar no localStorage
    if (done) {
        todo.classList.add("done")
    }

    if (save) {
        saveTodosLocalStorage({ text, done })
    }



    todoList.appendChild(todo);

    todoInput.value = ""
    todoInput.focus();

}

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        todoTitle = todo.querySelector("h3")

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text

            updateTodoLocalStorage(oldInputValue, text)
        }
    })
}

const getSearchTodos = (search) => {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3").innerText.toLowerCase();


        todo.style.display = "flex"

        const normalizedSearch = search.toLowerCase()
        if (!todoTitle.includes(normalizedSearch)) {
            todo.style.display = "none"
        }
    })
}

const filterTodo = (filterValue) => {
    const todos = document.querySelectorAll(".todo");

    switch (filterValue) {
        case "all":
            todos.forEach((todo) => todo.style.display = "flex")
            break;

        case "done":
            todos.forEach((todo) =>
                todo.classList.contains("done") ?
                    (todo.style.display = "flex") :
                    (todo.style.display = "none"))
            break;

        case "to-do":
            todos.forEach((todo) =>
                !todo.classList.contains("done") ?
                    (todo.style.display = "flex") :
                    (todo.style.display = "none"))
            break
        default:
            break;
    }

}


//Eventos ---------------------------------------
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputvalue = todoInput.value;

    if (inputvalue) {
        saveTodo(inputvalue);
    }
})

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div")
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    if (targetEl.classList.contains("done-button")) {
        parentEl.classList.toggle("done")
        updateTodoStatusLocalStorage(todoTitle)
    }

    if (targetEl.classList.contains('delete-button')) {
        parentEl.remove()
        removeTodosLocalStorage(todoTitle)
    }

    if (targetEl.classList.contains('edit-button')) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle;
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleForms()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value;

    if (editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()
})

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;

    getSearchTodos(search);
})

eraseButton.addEventListener("click", (e) => {
    e.preventDefault()

    searchInput.value = ""

    searchInput.dispatchEvent(new Event("keyup"))
})

filterSelect.addEventListener("change", (e) => {

    const filterValue = e.target.value

    filterTodo(filterValue)
})


//Local storage --------------------------------------

const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    return todos;
}

const loadTodos = () => {
    const todos = getTodosLocalStorage()

    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, 0)

    })
}

const removeTodosLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage()

    const filterTodos = todos.filter((todo) => todo.text !== todoText)

    localStorage.setItem("todos", JSON.stringify(filterTodos))

}

const saveTodosLocalStorage = (todo) => {

    const todos = getTodosLocalStorage()

    todos.push(todo)

    localStorage.setItem("todos", JSON.stringify(todos))


}

//Para manter os estatus do todo como o done
const updateTodoStatusLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage()

    todos.map((todo) => todo.text === todoText ? (todo.done = !todo.done) : null)

    localStorage.setItem("todos", JSON.stringify(todos))

}

//para manter a edição do todo no local storage
const updateTodoLocalStorage = (todoOldText, todoNewText) => {
    const todos = getTodosLocalStorage()

    todos.map((todo) => todo.text === todoOldText ? (todo.text = todoNewText) : null)

    localStorage.setItem("todos", JSON.stringify(todos))

}


loadTodos();