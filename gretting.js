const form = document.querySelector(".js-form"), //도큐먼트의 .js-form를 변수 form에 저장
  input = form.querySelector("input"), //form의 input을 변수 input에 저장
  greeting = document.querySelector(".js-greetings"); //도큐먼트의 .js-greetings를 변수 greeting에 저장

const USER_LS = "currentUser",
  SHOWING_CN = "showing"; //CSS에서 설정한 display:block - 기본값 -> form과 greetings는 display:none으로 설정되어있음

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//이번트의 기본동작을 중지함
function handleSubmit(event) {
  event.preventDefault(); //메소드 preventDefault 기본동작 금지
  const currentValue = input.value; // 인풋으로 넣은 값을 변수에 저장함
  // console.log(currentValue); 인풋 값을 콘솔로 확인 할 수 있음
  paintGreeting(currentValue);
  saveName(currentValue); //input으로부터 온 값
}

function askForName() {
  form.classList.add(SHOWING_CN); //form을 보여줌
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  //화면에 text를 나타냄
  form.classList.remove(SHOWING_CN); //form을 지우고
  greeting.classList.add(SHOWING_CN); //greeting을 보여주고
  greeting.innerText = `Hello ${text}`; //text를 넣음
}

function loadName() {
  //이름 불러오기
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
