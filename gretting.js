const form = document.querySelector('.js-form'),
input = form.querySelector('input'),
greetings = document.querySelector('.js-greetings');

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function askForName(){
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
}

const countrySelect = document.querySelector('select');
function selectCountry(){
        const countryLS = localStorage.getItem("country");
        const country = countrySelect[countrySelect.selectedIndex].value;
        localStorage.setItem("country", country);
        console.log(country);  
}

function init(){
if(localStorage.getItem("country") != null){
    countrySelect.value = localStorage.getItem("country");
}
  countrySelect.addEventListener("change", selectCountry);
}

init();



