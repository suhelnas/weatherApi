import * as express from 'express';
import {WeatherController} from "./Weather/controller/weather.controller";
export class WeatherRoutes{
    static init(router:express.Router){
        router.post("/weather/by/city",WeatherController.getWeatherByCity)

    }
}