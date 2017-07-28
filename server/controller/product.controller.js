/**
 * Created by Stanislau_Hramatskiu on 7/28/2017.
 */
var productService = require('../service/product.service');

var controller = {};

controller.findAll = findAll;
controller.find = find;

module.exports = controller;

function findAll(req, resp) {
    productService.findAllProducts()
        .then(function (value) {
            resp.send(JSON.stringify(value));
        })
        .catch(function (err) {
            resp.status(400).send(err);
        });
}

function find(req, resp) {
    console.log(req.params.id);
    productService.findById(req.params.id)
        .then(function (value) {
            console.log(value);
            resp.send(JSON.stringify(value));
        })
        .catch(function (err) {
            resp.status(400).send(err);
        })
}