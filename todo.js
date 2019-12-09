const todoform = document.querySelector(".js-toDoForm"),
toDoInput = todoform.querySelector("input");
const todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintValue(text){
    console.log(text);
}
function handleSubmit(event){
    event.preventDefault();
    const value = toDoInput.value;
    paintValue(value);
}

function loadToDos(){

}
function init(){
    loadToDos();
todoform.addEventListener("submit", handleSubmit);
}

init();