
const title = document.querySelector("#title");
const className = "title";
function changeColor(){
  // const hasClass = title.classList.contains(className);
  // if(hasClass){
  //   title.classList.remove(className);
  // }else{
  //   title.classList.add(className);
  // }
  //toggle 이라는 기능의 사용은 위 5줄의 코드를 1줄로 줄여준다.
  title.classList.toggle(className);
}

window.addEventListener("click", changeColor);



