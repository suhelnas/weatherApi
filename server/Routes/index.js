"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../infrastructure/routes");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        routes_1.WeatherRoutes.init(router);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map