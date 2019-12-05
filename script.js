
const title = document.querySelector("#title");
const className = "title";
function changeColor(){
  const hasClass = title.classList.contains(className);
  if(hasClass){
    title.classList.remove(className);
  }else{
    title.classList.add(className);
  }
}

window.addEventListener("click", changeColor);



