const date = document.querySelector("#date");
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();

date.innerHTML = today.toLocaleDateString("en-US");
hr.innerHTML = today.getHours() + ":";
min.innerHTML = today.getMinutes() + ":";
sec.innerHTML = today.getSeconds() + "";



