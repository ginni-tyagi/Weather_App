const apiKey = "e6c15e6d1352631deb680968244e94cd";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const cityName = document.getElementById("cityInput").value;

    getWeather(cityName);

});

async function getWeather(city) {

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        document.getElementById("city").innerHTML =
        " 📍 City: " + data.name;

        document.getElementById("temp").innerHTML =
        " 🌡️ Temperature: " + data.main.temp + " °C";

        document.getElementById("weather").innerHTML =
        "☁️Weather: " + data.weather[0].main;

        document.getElementById("humidity").innerHTML =
        "💧Humidity: " + data.main.humidity + "%";

        document.getElementById("windspeed").innerHTML =
        "🌬️ Wind Speed: " + data.wind.speed + " km/h";
        
    

    }

    catch(error){

        console.log("Error:", error);

    }

}