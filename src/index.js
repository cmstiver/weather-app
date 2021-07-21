import './style.css'

async function getWeatherData() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${regionInput.value}&appid=0283d69eb46dcc648f8829505b35b707`, {mode: 'cors'});
    const data = await response.json();
    return data
}

function cleanData(rawData) {
    let data = {}
    data.name = rawData.name
    data.main = rawData.main
    data.coord = rawData.coord
    data.country = rawData.sys.country
    data.weather = rawData.weather[0].main
    data.wind = rawData.wind
    currentRegionData = data
    update()
}

function submitRegion() {
    let rawWeatherData = new Promise((resolve, reject) => {
        resolve(getWeatherData());
    });
    rawWeatherData.then(rawData => {
        if (rawData.cod == '200') {
            cleanData(rawData)
        } else {
            alert("Invalid Region")
        }
    })
}

function update() {
    console.log(currentRegionData)
    regionInput.value = regionInput.value + ", " + currentRegionData.country
    weather.textContent = currentRegionData.weather
    feelsLike.textContent = currentRegionData.main.feels_like
    temp.textContent = currentRegionData.main.temp
    high.textContent = currentRegionData.main.temp_max
    low.textContent = currentRegionData.main.temp_min
    humidity.textContent = currentRegionData.main.humidity + "%"
    windSpeed.textContent = currentRegionData.wind.speed
    windGust.textContent = currentRegionData.wind.gust
}

let currentRegionData = {}

const regionInput = document.querySelector('#region-input')
const weather = document.querySelector('#weather')
const feelsLike = document.querySelector('#feelslike')
const temp = document.querySelector('#temp')
const high = document.querySelector('#high')
const low = document.querySelector('#low')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#windspeed')
const windGust = document.querySelector('#windgust')
document.querySelector('#submit').addEventListener('click', submitRegion)

submitRegion()