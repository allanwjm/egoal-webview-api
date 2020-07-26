"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleCallback = exports.pushResolve = void 0;
var cache = {};
function pushResolve(uuid, resolve) {
    cache[uuid] = resolve;
}
exports.pushResolve = pushResolve;
function simpleCallback(uuid, result) {
    var resolve = cache[uuid];
    if (resolve) {
        resolve(result);
        delete cache[uuid];
    }
}
exports.simpleCallback = simpleCallback;
