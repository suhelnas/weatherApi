"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weather = require("weather-js");
var WeatherService = (function () {
    function WeatherService() {
    }
    WeatherService.prototype.getWeatherByCity = function (city) {
        return weather.find({ search: city, degreeType: 'C' }, function (err, result) {
            return JSON.stringify(result, null, 0);
        });
    };
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map