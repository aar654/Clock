//query selectors to get HTML selectors
const date = document.querySelector("#date");
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const amPM = document.querySelector("#amPM")

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//function that updates the clock and calender every second
function clockUpdater(){
    let today = new Date();

    date.innerHTML = today.toLocaleDateString("en-US");
    
    if (today.getSeconds() < 10) {
        sec.innerHTML = "0" + today.getSeconds() + "";
    } else{
        sec.innerHTML = today.getSeconds() + "";
    }    

    if (today.getHours() > 12) {
        hr.innerHTML = today.getHours() - 12 + ":";
        amPM.innerHTML = "PM"
    } else {
        amPM.innerHTML = "AM"
    }

    if (today.getMinutes() < 10) {
        min.innerHTML = "0" + today.getMinutes() + ":";
    } else {
        min.innerHTML = today.getMinutes() + ":";
    }
}

setInterval(clockUpdater,1000)






