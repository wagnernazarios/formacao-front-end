// Selecionar elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')


//funçoes
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const todoAction = document.createElement("div")
    todoAction.classList.add("actions")
    todo.appendChild(todoAction)

    const doneButton = document.createElement("button")
    doneButton.classList.add("done-button")
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoAction.appendChild(doneButton)

    const editButton = document.createElement("button")
    editButton.classList.add("edit-button")
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todoAction.appendChild(editButton)

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoAction.appendChild(deleteButton)

    todoList.appendChild(todo);

    todoInput.value = ""
    todoInput.focus();

}

//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputvalue = todoInput.value;

    if (inputvalue) {
        saveTodo(inputvalue);

    }


})