function showCurrentDate(latestDate) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[latestDate.getDay()];
  let month = months[latestDate.getMonth()];
  let date = latestDate.getDate();
  let year = latestDate.getFullYear();
  let hours = latestDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = latestDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dateToday = document.querySelector("#current-date-time");
  dateToday.innerHTML = `${day}, ${date} ${month} ${year}<br />${hours}:${minutes}`;
  return dateToday;
}
let currentDate = new Date();
showCurrentDate(currentDate);

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "4cf67821f8a1ed58161e24f9867203f3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp_max);
  let temperatureMin = Math.round(response.data.main.temp_min);
  let humidity = Math.round(response.data.main.humidity);
  let cloud = response.data.weather[0].description;
  let name = response.data.name;
  let messagename = `${name}`;
  city.innerHTML = messagename;
  let h2 = document.querySelector("h2");
  h2.innerHTML = messagename;
  let cloudMessage = `The forecast for today is ${cloud}.`;
  let tempMessage = `The maximum temperature is ${temperature} and`;
  let tempMin = `the minimum temperature is ${temperatureMin}.`;
  let humidMessage = `Humidity is ${humidity}.`;
  let forecast = `${cloudMessage} 
  ${tempMessage} 
  ${tempMin} 
  ${humidMessage}`;
  let cardText = document.querySelector(".cardText");
  cardText.innerHTML = forecast;
}

let apiKey = "4cf67821f8a1ed58161e24f9867203f3";
let units = "metric";
let city = "paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
