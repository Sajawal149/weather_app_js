const input = document.getElementById('cityInput');
const button = document.getElementById('getWeatherBtn');
const resultDiv = document.getElementById('weatherResult');
const apikey = '2c8bf1ffa9d12294f473e9303fd223eb';
const url = 'https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={API key}';

async function checkWeather(city) {
    try {
        const response = await fetch(url + city + `&appid{apikey}`);
        var data = await response.json();

        
        
    }
}

