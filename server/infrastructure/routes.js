"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weather_controller_1 = require("./Weather/controller/weather.controller");
var WeatherRoutes = (function () {
    function WeatherRoutes() {
    }
    WeatherRoutes.init = function (router) {
        router.post("/weather/by/city", weather_controller_1.WeatherController.getWeatherByCity);
    };
    return WeatherRoutes;
}());
exports.WeatherRoutes = WeatherRoutes;
//# sourceMappingURL=routes.js.map