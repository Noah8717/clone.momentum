const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

 function getTime(){
     const date = new Date();
     const hours = date.getHours();
     const minutes = date.getMinutes();
     const seconds = date.getSeconds();
     clockTitle.innerText = `${hours < 13 ? `${hours}`: `${hours}`-12}:${minutes < 10 ? `0${minutes}` : minutes}${hours < 13 ? `AM`:`PM`}`;
 }

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
