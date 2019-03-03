"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NameAndWeather_1 = require("./modules/NameAndWeather");
console.log("123456");
console.log("angular");
var name = new NameAndWeather_1.Name("转生的史莱姆", 1);
var weatherLocation = new NameAndWeather_1.WeatherLocation("晴");
console.log(name.nameMessage);
console.log(weatherLocation.weatherMesaage);
