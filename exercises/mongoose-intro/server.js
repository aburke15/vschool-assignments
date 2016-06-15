var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 5000
var toyRouter = require("./routes/toyRoute");
app.use(bodyParser.json());
app.use(toyRouter);

mongoose.connect("mongodb://localhost/toys");

app.listen(port, function() {
    console.log("Sever is active on port " + port);
});

//var bumblebee = new Toy({
//    brand: "Transformers",
//    price: 10000,
//    age: [45, 100],
//    accessories: ["Guns", "Spinners"]
//});
//
//bumblebee.save(function (err, newToy) {
//    console.log(newToy);
//});
