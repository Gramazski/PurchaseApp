/**
 * Created by Stanislau_Hramatskiu on 7/28/2017.
 */
var productService = require('../service/product.service');

var controller = {};

module.exports = controller;

controller.getAllProducts = function (req, resp) {
    productService.getAllProducts()
        .then(function (value) {
            resp.send(JSON.stringify(value));
        })
        .catch(function (err) {
            resp.status(400).send(err);
        });
};