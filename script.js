
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


const body = document.querySelector("body");
function changeColor() {
  const width = window.innerWidth;
  console.log(width);
  if (width > 1000) {
    body.style.backgroundColor = "#EEBC0F";
  } else if (width <= 1000 && width > 500) {
    body.style.backgroundColor = "#914EAC";
  } else{
    body.style.backgroundColor = "#2E8CD4";
  }
}

window.addEventListener("resize", changeColor);

const clock = document.querySelector(".clock");
function getTime(){
  const now = new Date();
  // Don't delete this.
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  const remainDays = xmasDay - now ;
  const days = Math.floor(remainDays / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (remainDays % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((remainDays % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((remainDays % (60 * 1000)) / 1000);

  clock.innerHTML = `${days < 10 ? `0${days}` : days}d ${hours < 10 ? `0${hours}`:hours}h 
  ${minutes < 10 ? `0${minutes}`:minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
//니콜라스 챌린지 정답(NINE_HOURS_MILLISECONDS 로 세계 어디서든 가능하도록)
  // const NINE_HOURS_MILLISECONDS = 32400000;
  // const xmasDay = new Date("2019-12-24:00:00:00+0900");
  // const now = new Date();
  // const difference = new Date(xmasDay - now - NINE_HOURS_MILLISECONDS);
  // const days = difference.getDate();
  // const minutes = difference.getMinutes();
  // const hours = difference.getHours();
  // const seconds = difference.getSeconds();


}

function init(){
  setInterval(getTime, 1000);
}

init();



