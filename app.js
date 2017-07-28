/**
 * Created by Stanislau_Hramatskiu on 7/28/2017.
 */
var express = require("express");

var app = express();

app.use(express.static("client"));

app.listen("3000", function () {
    console.log("Server started on 3000");
});