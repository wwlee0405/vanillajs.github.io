const weather = document.querySelector(".js-weather");



const API_KEY = "7cf5626e96dc6a310f0d15f2433c7fe5";
const COORDS = 'coords'

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function (response) {
    return response.json();
  }).then(function (json) {
    console.log(json);
    const temperate = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperate}℃ ${place}`  
  });
}

function saveCords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function init() {
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

init();
