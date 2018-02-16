import * as weather from 'weather-js'
export interface IWeatherService {
    getWeatherByCity(city:string);
}

export class WeatherService implements IWeatherService {
    getWeatherByCity(city: string):Promise<any> {
        return new Promise(function (resolve, reject) {
            weather.find({search: city, degreeType: 'C'},function (err,result) {
                if(err)
                 reject(err);
                else {
                    let value = "Temperature of "+result[0].location.name+" is " + result[0].current.temperature;
                    resolve(value);
                }

            });
        })


    }
}