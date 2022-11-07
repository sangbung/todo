const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const TODOS_KEY = "toDos";

let ToDos = [];

function saveTodo(){
    localStorage.setItem("toDos",JSON.stringify(ToDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    ToDos = ToDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo){
    const ListItem = document.createElement("li");
    ListItem.id = newTodo.id;
    const Span = document.createElement("span");
    Span.innerHTML = newTodo.text;
    const btn = document.createElement("button");
    btn.classList.add("todoBtn");
    btn.classList.add("btn");
    btn.innerHTML = "🎄";
    btn.addEventListener("click",deleteTodo);
    ListItem.appendChild(Span);
    ListItem.appendChild(btn);
    todoList.appendChild(ListItem);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    ToDos.push(newTodoObj);   
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit",handleTodoSubmit);



const saveToDO = localStorage.getItem(TODOS_KEY);

if(saveToDO !== null){
    const parsedTodo = JSON.parse(saveToDO);
    ToDos = parsedTodo;
    parsedTodo.forEach((item) => paintTodo(item));
}