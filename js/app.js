const themeToggleBtn = document.querySelector("#theme-toggle");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input-field");
const toDoList = document.querySelector("#todo-list");

// Cambiar Tema

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
})