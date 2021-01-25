//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Our functions
function addTodo(event) {
    event.preventDefault()

    // console.log("Hello where can i find you friend?")

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //creating li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //buttons

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add('cbtn');
    todoDiv.appendChild(completeButton);

    const TrashButton = document.createElement('button');
    TrashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    TrashButton.classList.add('tbtn');
    todoDiv.appendChild(TrashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";


}


function deleteCheck(e) {
    const greened = e.target;
    if (greened.classList[0] === 'tbtn') {
        const tempa = greened.parentElement;
        tempa.classList.add('Fall');
        tempa.addEventListener("transitionend", function () {
            tempa.remove();
        })
    }
    if (greened.classList[0] === 'cbtn') {
        const tempb = greened.parentElement;
        tempb.classList.toggle('completed');
    }


}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.dsiplay = 'flex';
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.dsiplay = "flex";
                }
                else {
                    todo.style.dsiplay = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.dsiplay = "flex";
                }
                else {
                    todo.style.dsiplay = "none";
                }
                break;
        }
    });

}