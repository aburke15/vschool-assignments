var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var bodyParser = require("body-parser");
var port = process.env.PORT || 5000;
var url = "mongodb://localhost:27017/more-practice";
var db;

app.use(bodyParser.json());

app.get("/things", function(req, res) {
    var collection = db.collection("things");
    collection.find().toArray(function(err, items) {
        res.send(items); 
    });
}); 

app.post("/things", function(req, res) {
    var collection = db.collection("things"); 
    
    if (Object.keys(req.body).lenth === 0 && req.body.constructor === Object) {
        res.send("You must add a thing object to the body of the request."); 
    } else {
        collection.insertOne(req.body, function(err, result) {
            if(err) throw err; 
            res.send(result.ops[0]); 
        }); 
    }
}); 

app.delete("/things/:id", function(req, res) {
    var collection = db.collection("things"); 
    collection.deleteOne({_id: ObjectId(req.params.id)}, function(err, result) {
        if(err) throw err; 
        res.send({success: true, deletedCount: result.deletedCount}); 
    });
});

app.put("/things/:id", function(req, res) {
    var collection = db.collection("things"); 
    collection.updateOne({_id: ObjectId(req.params.id)}, function (err, result) {
        if(err) throw err; 
        res.send({sucess:true, updatedCount: result.updatedCount});
    });
});

MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    app.listen(port, function () {
        console.log("Server is active on port " + port);
    });
});