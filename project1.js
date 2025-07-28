const apiKey = "c86c3b911da2f6fec0e36708999091a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    alert("City not found or API error!");
    return;
  }

  const data = await response.json();
  console.log(data);
  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


 switch (data.weather[0].main) {
  case "Clear":
    weatherIcon.src = "images/clear.png";
    break;
  case "Clouds":
    weatherIcon.src = "images/clouds.png";
    break;
  case "Rain":
    weatherIcon.src = "images/rain.png";
    break;
  case "Drizzle":
    weatherIcon.src = "images/drizzle.png";
    break;
  case "Mist":
    weatherIcon.src = "images/mist.png";
    break;
  default:
    weatherIcon.src = "images/default.png"; 
}

}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
  }
});

