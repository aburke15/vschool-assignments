var express = require("express");
var app = express(); 
var bountyRoutes = express.Router();
var Bounties = require("../models/bounties");


bountyRoutes.route("/").get(function(req, res) {
    Bounties.find(function (err, bounties) {
        if(err) res.status(500).send(err);  
        else res.send(bounties);
    });
    console.log("retrieved");
}).post(function (req, res) {
    var newBounty = Bounties(req.body);
    newBounty.save(function(err, bounty) {
        if (err) res.status(500).send(err);  
        else res.send(bounty); 
    });
});

bountyRoutes.route("/:id").delete(function(req, res) {
    Bounties.findByIdAndRemove(req.params.id, function(err, bounty) {
        var response = {
            message: "Bounty deleted",
            id: bounty._id
        }
        res.send(response); 
    });
}).put(function(req, res) {
    Bounties.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, bounty) {
        if(err) res.status(500).send(err)
        else bounty.save();
        res.send(bounty); 
    });
});

module.exports = bountyRoutes;
