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
}

let currentRegionData = {}

const regionInput = document.querySelector('#region-input')
document.querySelector('#submit').addEventListener('click', submitRegion)

submitRegion()