/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nasync function getWeatherData() {\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${regionInput.value}&appid=0283d69eb46dcc648f8829505b35b707`, {mode: 'cors'});\n    const data = await response.json();\n    return data\n}\n\nfunction cleanData(rawData) {\n    let data = {}\n    data.name = rawData.name\n    data.main = rawData.main\n    data.coord = rawData.coord\n    data.country = rawData.sys.country\n    data.weather = rawData.weather[0].description\n    data.wind = rawData.wind\n    data.icon = rawData.weather[0].icon\n    currentRegionData = data\n    update()\n}\n\nfunction submitRegion() {\n    let rawWeatherData = new Promise((resolve, reject) => {\n        resolve(getWeatherData());\n    });\n    rawWeatherData.then(rawData => {\n        if (rawData.cod == '200') {\n            cleanData(rawData)\n        } else {\n            alert(\"Invalid Region\")\n        }\n    })\n}\n\nfunction convert(value) {\n    let answer\n    if (conversion === \"F\") {\n        answer = convertToF(value)\n    } else if (conversion === \"C\") {\n        answer = convertToC(value)\n    }\n    return answer\n}\n\nfunction convertToC(value) {\n    let answer = value - 273.15\n    return Math.round(answer)\n}\n\nfunction convertToF(value) {\n    let answer = 1.8 * (value - 273) + 32\n    return Math.round(answer)\n}\n\nfunction convertWind(value) {\n    let answer\n    if (conversion === \"F\") {\n        answer = convertToMPH(value)\n    } else if (conversion === \"C\") {\n        answer = convertToKPH(value)\n    }\n    return answer\n}\n\nfunction convertToMPH(value) {\n    let answer = value * 2.237\n    answer = Math.round(answer)\n    return answer + \" mph\"\n}\n\nfunction convertToKPH(value) {\n    let answer = value * 3.6\n    answer = Math.round(answer + \"kph\")\n    return answer + \" kph\"\n}\n\nfunction update() {\n    if (!regionInput.value.includes(',')) {\n        regionInput.value = regionInput.value + \", \" + currentRegionData.country\n    }\n    weather.textContent = currentRegionData.weather\n    feelsLike.textContent = 'Feels Like: ' + convert(currentRegionData.main.feels_like) + \"°\" + conversion\n    temp.textContent = convert(currentRegionData.main.temp) + \"°\" + conversion\n    high.textContent = convert(currentRegionData.main.temp_max) + \"°\" + conversion\n    low.textContent = convert(currentRegionData.main.temp_min) + \"°\" + conversion\n    humidity.textContent = 'Humidity: ' + currentRegionData.main.humidity + \"%\"\n    windSpeed.textContent = 'Wind: ' + convertWind(currentRegionData.wind.speed)\n    icon.src = `http://openweathermap.org/img/wn/${currentRegionData.icon}@2x.png`\n}\nfunction whatsTheWeatherLike(condition) {\n    switch (condition) {\n        case 'clear sky':\n            break;\n        case 'few clouds':\n            break;\n        case 'scattered clouds':\n            break;\n        case 'broken clouds':\n            break;\n        case 'shower rain':\n            break;\n        case 'rain':\n            break;\n        case 'thunderstorm':\n            break;\n        case 'snow':\n            break;\n        case 'mist':\n            break;\n    }\n}\n\nlet currentRegionData = {}\nlet conversion = \"F\"\n\nconst regionInput = document.querySelector('#region-input')\nconst weather = document.querySelector('#weather')\nconst feelsLike = document.querySelector('#feelslike')\nconst temp = document.querySelector('#temp')\nconst high = document.querySelector('#high')\nconst low = document.querySelector('#low')\nconst humidity = document.querySelector('#humidity')\nconst windSpeed = document.querySelector('#windspeed')\nconst icon = document.querySelector('#weathericon')\ndocument.querySelector('#submit').addEventListener('click', submitRegion)\ndocument.querySelector(\"#region-input\").addEventListener(\"keyup\", event => {\n    if(event.key !== \"Enter\") return;\n    document.querySelector(\"#submit\").click();\n    event.preventDefault();\n});\n\nsubmitRegion()\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;