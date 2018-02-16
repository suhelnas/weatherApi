import * as weather from 'weather-js'
export interface IWeatherService {
    getWeatherByCity(city:string);
}

export class WeatherService implements IWeatherService {
    getWeatherByCity(city: string) {

      let promise =  weather.find({search: 'San Francisco, CA', degreeType: 'F'});
     promise =  promise.then(function(result){
          return JSON.stringify(result,null,2)
      });
     return promise;

    }
}