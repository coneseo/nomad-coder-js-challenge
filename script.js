
const title = document.querySelector("#title");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
function clickEvent(){
  let color = title.style.color;
  if(title.style.color == "blue"){
    title.style.color = "red";
  }else{
    title.style.color = "blue";
  }
}
title.addEventListener("click", clickEvent)

const superEventHandler = {
  mouseOnTop: function() {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLeave: function() {
    title.innerHTML = "The mouse is gone!";
    title.style.color = colors[1];
  },
  resize: function() {
    title.innerHTML = "You just Resized!";
    title.style.color = colors[2];
  },
  rightClick: function() {
    title.innerHTML = "this is right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseover", superEventHandler.mouseOnTop);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);

//wifi 상태를 감지하는 eventlistenr
function handleOffline(){
  console.log("bye bye");
}

function handleOnline(){
  console.log("hello");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);