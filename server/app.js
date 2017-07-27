/**
 * Created by Stanislau_Hramatskiu on 7/20/2017.
 */
var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var expressJwt = require('express-jwt');

var config = require('./config/enviroments.json');
var corsOptions = require('./config/cors');
var routes = require('./config/user.routes');
var productService = require('./service/product.service');
var secure = require('./config/secure');
var db = require('./config/db');

var app = express();

// Add headers
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('assets'));

app.use(expressJwt(secure).unless({path: config.unprotectedRoutes, ext: config.assetsExt}));

app.use("/products", function (req, resp) {
    productService.getAllProducts()
        .then(function (value) {
            resp.send(JSON.stringify(value));
        })
        .catch(function (err) {
            resp.status(400).send(err);
        });
});

app.use("/users", routes);

db.connect(config.dbUrl, function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
        app.listen(config.serverPort, function () {
            console.log("Server started on " + config.serverPort);
        });
    }
});