const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWIG_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGretting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWIG_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHOWIG_CN);
  greeting.classList.add(SHOWIG_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGretting(currentUser);
  }
}

function init() {
  loadName();
}

init();
