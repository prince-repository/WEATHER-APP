// const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city},${10},${+91}&appid=${api_key}`;
const input = document.querySelector("#input");
const search = document.getElementById("search");
const weather_img = document.getElementById("weather-img");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");


const location_not_found = document.querySelector('.location-not-found');
const weather_details=document.querySelector('.weather-details');
const details=document.querySelector('.details');
const hourly=document.getElementById('hourly');
 const hourly_forecast=document.querySelector('.hourly-forecast');
 const main=document.querySelector('.main');

async function checkWeather(city) {
  const api_key = "980efdfa305ede859c36564e14247b1f";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
  try {
    const response = await fetch(url);
    const weather_data = await response.json();

    console.log(weather_data);

    if (weather_data.cod === '404') {
      // Show error message and hide weather information
      location_not_found.style.display = 'flex';
  main.style.display='none';
      function setFocus(){
      input.focus();
    }
   return;
    }


     // Reset the display to show weather information
     location_not_found.style.display = 'none';
    main.style.display='flex';
    function setFocus(){
      input.focus();
    }


    temp.innerText = `${Math.round(weather_data.list[0].main.temp-273.15)}°C`;
    desc.innerText = `${weather_data.list[0].weather[0].description}`;
    humidity.innerText = `${weather_data.list[0].main.humidity}%`;
    wind_speed.innerText = `${weather_data.list[0].wind.speed}Km/Hr`;
   
    

      weather_img.src = `http://openweathermap.org/img/wn/${weather_data.list[0].weather[0].icon}.png`;

 // Update the weather image based on the weather condition
//  switch (weather_data.list[0].weather[0].main) {
//   case 'Clouds':
//     weather_img.src = 'cloud (1).png';
//     break;
//   case 'Clear':
//     weather_img.src = 'clear.png';
//     break;
//   case 'Mist':
//     weather_img.src = 'mist.png';
//     break;
//   case 'Snow':
//     weather_img.src = 'snow.png';
//     break;
//     case 'Rain':
//       weather_img.src = 'rain.png';
//       break;  
 
// }



    
    // hourly forecast
    const temp1 = document.getElementById("temp1");
    const img1 = document.getElementById("img1");
    const desc1 = document.getElementById("desc1");

    const temp2 = document.getElementById("temp2");
    const img2 = document.getElementById("img2");
    const desc2 = document.getElementById("desc2");

    const temp3 = document.getElementById("temp3");
    const img3 = document.getElementById("img3");
    const desc3 = document.getElementById("desc3");

    const temp4 = document.getElementById("temp4");
    const img4 = document.getElementById("img4");
    const desc4 = document.getElementById("desc4");

    const temp5 = document.getElementById("temp5");
    const img5 = document.getElementById("img5");
    const desc5 = document.getElementById("desc5");

    const temp6 = document.getElementById("temp6");
    const img6 = document.getElementById("img6");
    const desc6 = document.getElementById("desc6");

    const temp7 = document.getElementById("temp7");
    const img7 = document.getElementById("img7");
    const desc7 = document.getElementById("desc7");

    const temp8 = document.getElementById("temp8");
    const img8 = document.getElementById("img8");
    const desc8 = document.getElementById("desc8");

    const temp9 = document.getElementById("temp9");
    const img9 = document.getElementById("img9");
    const desc9 = document.getElementById("desc9");

    const temp10 = document.getElementById("temp10");
    const img10 = document.getElementById("img10");
    const desc10 = document.getElementById("desc10");

    // Array of DOM elements to be updated
    const forecastTemp = [
      temp1,
      temp2,
      temp3,
      temp4,
      temp5,
      temp6,
      temp7,
      temp8,
      temp9,
      temp10,
    ];
    const forecastDesc = [
      desc1,
      desc2,
      desc3,
      desc4,
      desc5,
      desc6,
      desc7,
      desc8,
      desc9,
      desc10,
    ];
    const forecastImg = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
    ];

    // Assuming `weather_data` is an object that contains the weather data
    forecastTemp.map((data, index) => {
      // Update the temperature
      data.innerText = `${Math.round(weather_data.list[index].main.temp-273.15)}°`;

      // Optionally update the description and image as well (if available in your data)
      forecastDesc[index].innerText =
        weather_data.list[index].weather[0].description;
      forecastImg[index].src = `http://openweathermap.org/img/wn/${weather_data.list[index].weather[0].icon}.png`;
    });
  } catch (error) {
    console.log(error);
  }
}

search.addEventListener("click", () => {

  if(input.value=='')
    alert('please enter your city name')
  else{
    const city = search_input.value;
    checkWeather(city);
  }
  // const city = input.value;
  // checkWeather(city);
});
