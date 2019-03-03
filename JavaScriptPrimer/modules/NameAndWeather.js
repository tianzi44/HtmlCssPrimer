"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Name = (function () {
    function Name(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    ;
    Object.defineProperty(Name.prototype, "nameMessage", {
        get: function () {
            return "\u59D3\u540D\uFF1A" + this.name + " \u5E74\u9F84:" + this.age + "\u5C81";
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
var WeatherLocation = (function () {
    function WeatherLocation(weather) {
        this.weather = weather;
        this.weather = weather;
    }
    Object.defineProperty(WeatherLocation.prototype, "weatherMesaage", {
        get: function () {
            return "\u672C\u5730\u7684\u5929\u6C14" + this.weather;
        },
        enumerable: true,
        configurable: true
    });
    return WeatherLocation;
}());
exports.WeatherLocation = WeatherLocation;
