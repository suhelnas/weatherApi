"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_controller_1 = require("./Weather/controller/weather.controller");
class WeatherRoutes {
    static init(router) {
        router.post("/weather/by/city", weather_controller_1.WeatherController.getWeatherByCity);
    }
}
exports.WeatherRoutes = WeatherRoutes;
//# sourceMappingURL=routes.js.map