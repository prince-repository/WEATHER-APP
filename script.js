const input = document.querySelector("#input");
const search = document.getElementById("search");
const weather_img = document.getElementById("weather-img");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const location_not_found = document.querySelector(".location-not-found");
const main = document.querySelector(".main");

async function checkWeather(city) {
  const api_key = "980efdfa305ede859c36564e14247b1f";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
  try {
    const response = await fetch(url);
    const weather_data = await response.json();

    if (weather_data.cod === "404") {
      location_not_found.style.display = "flex";
      main.style.display = "none";
      return;
    }

    location_not_found.style.display = "none";
    main.style.display = "flex";

    temp.innerText = `${Math.round(weather_data.list[0].main.temp - 273.15)}°C`;
    desc.innerText = `${weather_data.list[0].weather[0].description}`;
    humidity.innerText = `${weather_data.list[0].main.humidity}%`;
    wind_speed.innerText = `${weather_data.list[0].wind.speed}Km/Hr`;
    weather_img.src = `http://openweathermap.org/img/wn/${weather_data.list[0].weather[0].icon}.png`;

    const forecastElements = [
      { temp: "temp1", desc: "desc1", img: "img1", time: "time1" },
      { temp: "temp2", desc: "desc2", img: "img2", time: "time2" },
      { temp: "temp3", desc: "desc3", img: "img3", time: "time3" },
      { temp: "temp4", desc: "desc4", img: "img4", time: "time4" },
      { temp: "temp5", desc: "desc5", img: "img5", time: "time5" },
      { temp: "temp6", desc: "desc6", img: "img6", time: "time6" },
      { temp: "temp7", desc: "desc7", img: "img7", time: "time7" },
      { temp: "temp8", desc: "desc8", img: "img8", time: "time8" },
      { temp: "temp9", desc: "desc9", img: "img9", time: "time9" },
      { temp: "temp10", desc: "desc10", img: "img10", time: "time10" },
    ];

    forecastElements.forEach((forecast, index) => {
      const hourData = weather_data.list[index + 1];
      const time = new Date(hourData.dt * 1000);
      const hours = time.getHours();
      const minutes = time.getMinutes().toString().padStart(2, "0");

      document.getElementById(forecast.temp).innerText = `${Math.round(hourData.main.temp - 273.15)}°C`;
      document.getElementById(forecast.desc).innerText = hourData.weather[0].description;
      document.getElementById(forecast.img).src = `http://openweathermap.org/img/wn/${hourData.weather[0].icon}.png`;
      document.getElementById(forecast.time).innerText = `${hours}:${minutes}`;
    });
  } catch (error) {
    console.error(error);
  }
}

search.addEventListener("click", () => {
  checkWeather(input.value);
});
