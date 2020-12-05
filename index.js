// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector(".js-select");

const COUNTRY_LS = "country",
  SHOWIG_CN = "showing";

function saveCountry(text) {
  const selected = select.options[select.selectedIndex].value;
  localStorage.setItem(COUNTRY_LS, selected);
}

function selectCountry(event) {
  event.preventDefault();
  const coutryValue = select.value;
  paintCountry(coutryValue);
  saveCountry(coutryValue);
}

function askForCountry() {
  select.classList.add(SHOWIG_CN);
  select.addEventListener("change", selectCountry);
}

function paintCountry() {
  select.classList.add(SHOWIG_CN);
}

function loadCountry() {
  const countryUser = localStorage.getItem(COUNTRY_LS);
  if (countryUser === null) {
    askForCountry();
  } else {
    paintCountry(countryUser);
  }
}

function init() {
  loadCountry();
}

init();
