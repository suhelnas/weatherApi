"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
class RoutesConf {
    static init(application) {
        application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
        application.use(bodyParser.json({ limit: '1000mb' }));
    }
}
exports.RoutesConf = RoutesConf;
//# sourceMappingURL=routes.conf.js.map