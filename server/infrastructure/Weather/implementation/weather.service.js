"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weather = require("weather-js");
var WeatherService = (function () {
    function WeatherService() {
    }
    WeatherService.prototype.getWeatherByCity = function (city) {
        var promise = weather.find({ search: 'San Francisco, CA', degreeType: 'F' });
        promise = promise.then(function (result) {
            return JSON.stringify(result, null, 2);
        });
        return promise;
    };
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map