/**
 * Created by Stanislau_Hramatskiu on 7/28/2017.
 */
var express = require('express');
var router = express.Router();
var productController = require('../controller/product.controller');

// routes
router.get('', productController.getAllProducts);

module.exports = router;