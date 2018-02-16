"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather = require("weather-js");
class WeatherService {
    getWeatherByCity(city) {
        return new Promise(function (resolve, reject) {
            weather.find({ search: city, degreeType: 'C' }, function (err, result) {
                if (err)
                    reject(err);
                else {
                    let value = "Temperature of " + result[0].location.name + " is " + result[0].current.temperature;
                    resolve(value);
                }
            });
        });
    }
}
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map