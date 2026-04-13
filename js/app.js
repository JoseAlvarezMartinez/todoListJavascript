const themeToggleBtn = document.querySelector("#theme-toggle");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input-field");
const toDoList = document.querySelector("#todo-list");

// Cambiar Tema

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
})

// Estado y Renderizado

let todos = [];



function renderTodos() {
    toDoList.innerHTML = "";

    todos.forEach(todo => {
function toggleTodo(id) {
            todos = todos.map(todo => {
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            })
            renderTodos()
        }


        const li = document.createElement("li")
        li.innerHTML = `
            <input type="checkbox" onclick="toggleTodo(${todo.id})">
            ${todo.text}
            <button onclick="deleteTodo(${todo.id})">X</button>
        `;

        toDoList.appendChild(li)
    })
}

// Escuchar evento submit del formulario

toDoForm.addEventListener("submit", e => {
    e.preventDefault();

    const text = toDoInput.value.trim()

    if (text !== "") {
        const newToDo = {
            id: Date.now(),
            text,
            completed: false
        }

        todos.push(newToDo)
        toDoInput.value = ""
        renderTodos()
    }
})