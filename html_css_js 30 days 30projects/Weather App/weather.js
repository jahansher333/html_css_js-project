const API_KEY = "23b2b59c453f486fadf194355252008";
const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=";

let cityEl = document.getElementById("city");
let temp = document.getElementById("temp");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let search = document.querySelector("#search");
let searchBtn = document.querySelector("#search_btn");
let display_weather = document.querySelector(".weather_data");
let icon = document.querySelector(".icon");
let error = document.getElementById("error");

async function fetchWeatherData(cityName) {
    const response = await fetch(BASE_URL + cityName + "&aqi=yes");
    let data = await response.json();
    if (response.status == 400) {
        error.style.display = "block";
        display_weather.style.display = "none";
    }
    else{
    error.style.display = "none";
    display_weather.style.display = "block";
    console.log(data);
    cityEl.innerHTML = data.location.name;
    temp.innerHTML = Math.round(data.current.temp_c) + "°C";
    wind.innerHTML =   data.current.wind_kph + " km/h";
    humidity.innerHTML =  data.current.humidity + "%";
  }

 if(data.current.condition.text == "Sunny"){
    icon.src = "./sun_1164965.png";
}
else if(data.current.condition.text == "Partly cloudy"){
    icon.src = "./weather_6182823.png";
}
else if(data.current.condition.text == "Cloudy"){
    icon.src = "./cloud.png";  // correct path
}
else if(["Patchy rain possible","Light rain shower","Light rain","Moderate rain at times","Moderate rain","Heavy rain at times","Heavy rain"].includes(data.current.condition.text)){
    icon.src = "./rain.png";
}
else if(data.current.is_day==0){
    icon.src = "./moon_14689281.png";
}
else{
    icon.src = "./weather_6182823.png";
}
  
}
  


searchBtn.addEventListener("click", function() {
    fetchWeatherData(search.value);
    search.value = "";
    
});
