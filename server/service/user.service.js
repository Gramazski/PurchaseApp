/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
var Q = require("q");
var db = require("../config/db");

var service = {};

service.findByUsername = findByUsername;
service.create = create;

module.exports = service;

function findByUsername(username) {
    var deferred = Q.defer();

    db.get().collection("users").findOne({"username": username}, function (err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(result);
    });

    return deferred.promise;
}

function create(userParam) {
    return !(userParam.username == "user" && userParam.password == "pass");
}