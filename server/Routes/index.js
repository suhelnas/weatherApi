"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../infrastructure/routes");
class Routes {
    static init(app, router) {
        routes_1.WeatherRoutes.init(router);
        app.use('/', router);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map