
const title = document.querySelector("#title");
const className = "title";
function changeColor(){
  const hasClass = title.classList.contains(className);
  if(!hasClass){
    title.classList.add(className);
  }else{
    title.classList.remove(className);
  }
}

window.addEventListener("click", changeColor);



