/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
var Q = require("q");
var db = require("../config/db");
var service = {};

service.getAllProducts = getAllProducts;

module.exports = service;

function getAllProducts() {
    var deferred = Q.defer();

    db.get().collection("products").find().toArray(function (err, results) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(results);
    });

    return deferred.promise;
}