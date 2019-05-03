"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var environment_1 = require("../global/environment");
var server = /** @class */ (function () {
    //inicializa algo
    function server() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
    }
    server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
    };
    return server;
}());
exports.default = server;
