/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
var Q = require("q");
var mongo = require('mongodb');
var db = require("../config/db");
var service = {};

service.findAllProducts = findAllProducts;
service.findById = findById;
service.removeById = removeById;
service.updateOne = updateOne;
service.updateMany = updateMany;

module.exports = service;

function findAllProducts() {
    var deferred = Q.defer();

    db.get().collection("products").find().toArray(function (err, results) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(results);
    });

    return deferred.promise;
}

function findById(id) {
    var deferred = Q.defer();

    db.get().collection("products").findOne({"_id": mongo.ObjectId(id)}, function (err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(result);
    });

    return deferred.promise;
}

function removeById(id) {
    var deferred = Q.defer();

    db.get().collection("products").findOneAndDelete({"_id": id}, function (err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(result);
    });

    return deferred.promise;
}

function updateOne(newValue) {
    var deferred = Q.defer();

    db.get().collection("products").updateOne({"_id": id}, newValue, function (err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(result);
    });

    return deferred.promise;
}

function updateMany(newValues, criteria) {
    var deferred = Q.defer();

    db.get().collection("products").updateMany(criteria, newValues, function (err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(result);
    });

    return deferred.promise;
}