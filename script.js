const title = document.querySelector('#title');

function resizeMessage(event){
  console.log(event);
}

window.addEventListener("resize", resizeMessage)