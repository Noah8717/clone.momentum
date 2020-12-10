

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const bg = document.querySelector(".bg");
    bg.style.cssText= `background-image:url(./images/${imgNumber}.jpg)`;
    bg.classList.add("bgImage");

}

function getRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER + 1);

    return number;
}


function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();