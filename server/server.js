"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_conf_1 = require("./Config/routes.conf");
var index_1 = require("./Routes/index");
var http = require("http");
var db_conf_1 = require("./Config/db.conf");
var app = express();
global['DefaultCallbackHandle'] = db_conf_1.DbConfig.getDbDefaultCallbackHandle();
routes_conf_1.RoutesConf.init(app);
index_1.Routes.init(app, express.Router());
http.createServer(app).listen(8080, 'localhost', function () {
    console.log('Starting server ...');
});
//# sourceMappingURL=server.js.map