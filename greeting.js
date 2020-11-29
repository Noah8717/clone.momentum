const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings");

 const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
   localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
   event.preventDefault(); //새로고침막기
   const currentValue = input.value; //입력값 변수에 담기
   paintGreeting(currentValue); //입력값으로 paintGreeting 실행
   saveName(currentValue);//입력값 localStorage에 저장
}

function askForName(){
   form.classList.add(SHOWING_CN);
   form.addEventListener("submit", handleSubmit) //submit을 하면 handleSubmit함수를 실행
}

 function paintGreeting(text){
     form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText= `Hello ${text}`;
 }
 function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
      askForName();
    } else{
        paintGreeting(currentUser);
    }
 }

 function init(){
    loadName();
 }

 init();