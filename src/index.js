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
    data.weather = rawData.weather[0].description
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

function convert(value) {
    let answer
    if (conversion === "F") {
        answer = convertToF(value)
    } else if (conversion === "C") {
        answer = convertToC(value)
    }
    return answer
}

function convertToC(value) {
    let answer = value - 273.15
    return Math.round(answer)
}

function convertToF(value) {
    let answer = 1.8 * (value - 273) + 32
    return Math.round(answer)
}

function convertWind(value) {
    let answer
    if (conversion === "F") {
        answer = convertToMPH(value)
    } else if (conversion === "C") {
        answer = convertToKPH(value)
    }
    return answer
}

function convertToMPH(value) {
    let answer = value * 2.237
    answer = Math.round(answer)
    return answer + " mph"
}

function convertToKPH(value) {
    let answer = value * 3.6
    answer = Math.round(answer + "kph")
    return answer + " kph"
}

function update() {
    console.log(currentRegionData)
    if (!regionInput.value.includes(',')) {
        regionInput.value = regionInput.value + ", " + currentRegionData.country
    }
    weather.textContent = currentRegionData.weather
    feelsLike.textContent = 'Feels Like: ' + convert(currentRegionData.main.feels_like) + "°" + conversion
    temp.textContent = convert(currentRegionData.main.temp) + "°" + conversion
    high.textContent = convert(currentRegionData.main.temp_max) + "°" + conversion
    low.textContent = convert(currentRegionData.main.temp_min) + "°" + conversion
    humidity.textContent = 'Humidity: ' + currentRegionData.main.humidity + "%"
    windSpeed.textContent = 'Wind: ' + convertWind(currentRegionData.wind.speed)
}
function whatsTheWeatherLike(condition) {
    switch (condition) {
        case 'clear sky':
            break;
        case 'few clouds':
            break;
        case 'scattered clouds':
            break;
        case 'broken clouds':
            break;
        case 'shower rain':
            break;
        case 'rain':
            break;
        case 'thunderstorm':
            break;
        case 'snow':
            break;
        case 'mist':
            break;
    }
}

let currentRegionData = {}
let conversion = "F"

const regionInput = document.querySelector('#region-input')
const weather = document.querySelector('#weather')
const feelsLike = document.querySelector('#feelslike')
const temp = document.querySelector('#temp')
const high = document.querySelector('#high')
const low = document.querySelector('#low')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#windspeed')
document.querySelector('#submit').addEventListener('click', submitRegion)
document.querySelector("#region-input").addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    document.querySelector("#submit").click();
    event.preventDefault();
});

submitRegion()