var express = require("express");
var app = express();
var parkRoutes = express.Router();
var Park = require("../models/park");

parkRoutes.route("/").get(function(req, res) {
    Park.find(function(err, park) {
        if (err) res.status(500).send(err);
        else res.send(park); 
    });
});

module.exports = parkRoutes;