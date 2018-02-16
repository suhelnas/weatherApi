"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_service_1 = require("../implementation/weather.service");
const util_service_1 = require("../../Common/util.service");
class WeatherController {
    static getWeatherByCity(req, res) {
        let weatherService = new weather_service_1.WeatherService();
        let promise = weatherService.getWeatherByCity(req.body.City);
        return global['DefaultCallbackHandle'](promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    }
}
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map