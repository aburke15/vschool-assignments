var express = require("express");
var bountyRoutes = express.Router();
var bounties = require("../models/bounties");
var uuid = require("uuid");

bountyRoutes.route("/").get(function(req, res) {
    res.send(bounties);
    console.log("retrieved");
}).post(function (req, res) {
    req.body.id = uuid.v1();
    bounties.push(req.body);
    res.send(req.body);
});

bountyRoutes.route("/:id").delete(function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.id) {
            bounties.splice(i, 1);
            return res.send("Bounty deleted");
        }
    }
    res.send("No bounty with that ID");
}).put(function(req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.id) {
            bounties[i] = req.body;
            return res.send(bounties[i]);
        }
    }
    res.send("No bounty with that ID");
});

module.exports = bountyRoutes;
