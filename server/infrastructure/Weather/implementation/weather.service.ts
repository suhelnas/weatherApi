import * as weather from 'weather-js'
export interface IWeatherService {
    getWeatherByCity(city:string);
}

export class WeatherService implements IWeatherService {
    getWeatherByCity(city: string) {
        return weather.find({search: city, degreeType: 'C'},function(err,result){
          return JSON.stringify(result,null,0)
      });

    }
}