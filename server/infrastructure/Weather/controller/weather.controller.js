"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weather_service_1 = require("../implementation/weather.service");
var util_service_1 = require("../../Common/util.service");
var WeatherController = (function () {
    function WeatherController() {
    }
    WeatherController.getWeatherByCity = function (req, res) {
        var weatherService = new weather_service_1.WeatherService();
        var promise = weatherService.getWeatherByCity(req.body.City);
        return global['DefaultCallbackHandle'](promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    return WeatherController;
}());
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map