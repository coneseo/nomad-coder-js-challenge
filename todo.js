const todoform = document.querySelector(".js-toDoForm"),
toDoInput = todoform.querySelector("input");
const todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function paintValue(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "❌"
    li.id = newId;
    li.append(delBtn);
    li.append(span);
    todoList.append(li);
    const toDoObj = {
        id : newId,
        text : text
    }
    toDos.push(toDoObj);

    
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