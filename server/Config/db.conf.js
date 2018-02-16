"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbConfig = (function () {
    function DbConfig() {
    }
    DbConfig.getDbDefaultCallbackHandle = function () {
        return function (promise, cb) {
            if (cb == null)
                return promise;
            return promise.then(function (data) {
                cb(null, data);
            }).catch(function (err) {
                cb(err);
            });
        };
    };
    return DbConfig;
}());
exports.DbConfig = DbConfig;
//# sourceMappingURL=db.conf.js.map