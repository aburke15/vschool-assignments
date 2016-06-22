var express = require("express");
var app = express();
var parkRoutes = express.Router();
var Park = require("../models/park");

parkRoutes.route("/").get(function (req, res) {
    Park.find(function (err, parks) {
        if (err) res.status(500).send(err);
        else res.send(parks);
    });
    console.log("Successfully retrieved");
}).post(function (req, res) {
    var newPark = new Park(req.body);
    newPark.save(function (err, park) {
        if (err) res.status(500).send(err);
        else res.send(park);
    });
    console.log("Successfully posted");
});

parkRoutes.route("/:id").delete(function (req, res) {
    Park.findByIdAndRemove(req.params.id, function (err, park) {
        if (err) res.status(500).send(err);
        else var response = {
            message: "Item deleted",
            id: park._id
        }
        res.send(response);
    });
}).put(function (req, res) {
    Park.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, park) {
        if (err) res.status(500).send(err);
        else park.save();
        res.send(park);
    });
    console.log("Successfully updated");
}).get(function (req, res) {
    Park.findOne(req.params.id, function (err, park) {
        if (err) res.status(500).send(err);
        else res.send(park);
    });
    console.log("Successfully retrieved id");
});

module.exports = parkRoutes;