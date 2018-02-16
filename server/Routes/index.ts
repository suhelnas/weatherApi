import * as express from 'express';
import {WeatherRoutes} from "../infrastructure/routes";

export class Routes{
  static init(app:express.Application ,router:any){
    WeatherRoutes.init(router);
    app.use('/', router);
  }
}
