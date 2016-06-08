var express = require("express"); 
var app = express(); 
var bodyParser = require("body-parser"); 
var morgan = require("morgan"); 
var port = process.env.PORT || 3000; 

app.use(bodyParser.json()); 

var phones = [
    {
        name: "Nexus 6P",
        oem: "Huawei"
    },
    {
        name: "Samsung GS7",
        oem: "Samsung"
    },
    {
        name: "Nexus 5X",
        oem: "LG"
    },
    {
        name: "HTC 10",
        oem: "HTC"
    },
];


app.use(function(req, res, next) {
    console.log("phones, on the way");
    next(); 
});

app.use(function(req, res, next) {
    console.log("keep it going for phones!");
    next(); 
});

app.use(function(req, res, next) {
    console.log("you're literally almost to phones..."); 
    next(); 
});

app.use(function(req, res, next) {
    console.log("yay phones!");
    next(); 
});

app.get("/phones", function(req, res) {
    res.send(phones); 
});

app.listen(port, function() {
    console.log("Server is active on port " + port);
});