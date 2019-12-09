const todoform = document.querySelector(".js-toDoForm"),
toDoInput = todoform.querySelector("input");
const todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintValue(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = text;
    delBtn.innerText = "❌"
    li.append(delBtn);
    li.append(span);
    todoList.append(li);
    
}
function handleSubmit(event){
    event.preventDefault();
    const value = toDoInput.value;
    paintValue(value);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
}
function init(){
    loadToDos();
todoform.addEventListener("submit", handleSubmit);
}

init();