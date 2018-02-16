"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var RoutesConf = (function () {
    function RoutesConf() {
    }
    RoutesConf.init = function (application) {
        application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
        application.use(bodyParser.json({ limit: '1000mb' }));
    };
    return RoutesConf;
}());
exports.RoutesConf = RoutesConf;
//# sourceMappingURL=routes.conf.js.map