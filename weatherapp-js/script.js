const input = document.getElementById('cityInput');
const button = document.getElementById('getWeatherBtn');
const resultDiv = document.getElementById('weatherResult');
const apikey = '2c8bf1ffa9d12294f473e9303fd223eb';
const url = 'https://api.openweathermap.org/data/2.5/weather?q={islamabad}&appid={2c8bf1ffa9d12294f473e9303fd223eb}';



async function checkWeather(city) { 
        const response = await fetch(url + city + `&appid{apikey}`);
        var data = await response.json();
        
        console.log(data);
        
        document.getElementsByClassName('.city').innerHTML = data.name;
        document.getElementsByClassName('.temp').innerHTML = data.main.temp + "°C";
        document.getElementsByClassName('.humidity').innerHTML = data.main.humidity + "%";
        document.getElementsByClassName('.wind ').innerHTML = data.wind.speed + "km/h";

        
}

