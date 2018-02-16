import {IWeatherService, WeatherService} from "../implementation/weather.service";
import {Util} from "../../Common/util.service";

export class WeatherController {
    static getWeatherByCity(req, res) {
        let weatherService: IWeatherService = new WeatherService();
        let promise = weatherService.getWeatherByCity(req.body.City);
        return global['DefaultCallbackHandle'](promise, function (err, data) {
            return Util.sendResponse(err, data, res)
        })

    }
}