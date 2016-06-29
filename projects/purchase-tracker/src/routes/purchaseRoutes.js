var express = require("express");
var purchaseRouter = express.Router();
var Purchase = require("../models/purchase");

purchaseRouter.route("/")
    .get(function (req, res) {
        Purchase.find({user: req.user._id}, function(err, purchases) {
            if (err) res.status(500).send(err); 
            else res.send(purchases); 
        });
    })
    .post(function(req, res) {
        var newPurchase = new Purchase(req.body);
        newPurchase.user = req.user._id; 
        
        newPurchase.save(function(err, purchase) {
            if (err) res.status(500).send(err); 
            else res.status(201).send(purchase); 
        });
    });

purchaseRouter.route("/:id")
    .get(function(req, res) {
        Purchase.findOne({_id: req.params.id, user: req.user._id}, {new: true}, function(err, purchase) {
            if (err) res.status(500).send(err); 
            else res.send(purchase); 
        });
    })
    .put(function(req, res) {
        Purchase.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true}, function(err, purchase) {
            if (err) res.status(500).send(err); 
            else res.send(purchase); 
        });
    })
    .delete(function(req, res) {
        Purchase.findOneAndRemove({_id: req.params.id, user: req.user._id}, function(err, purchase) {
            if (err) res.status(500).send(err); 
            else var response = {
                purchase: purchase,
                message: "Item successfully deleted"
            }
            res.send(response); 
        });
    }); 

module.exports = purchaseRouter;