/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
//Mock data service
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
    /*return [
        { id: 0, purchase: "Хлеб", done: false, price: 15.9 },
        { id: 1, purchase: "Масло", done: false, price: 60 },
        { id: 2, purchase: "Картофель", done: true, price: 22.6 },
        { id: 3, purchase: "Сыр", done: false, price:310 }
    ];*/
}