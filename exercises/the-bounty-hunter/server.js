var express = require("express");
var app = express();
var bodyPaser = require("body-parser");
var cors = require("cors");
var bountyRoutes = require("./routes/bountyRoutes");
var mongoose = require("mongoose");
var port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyPaser.json());
app.use("/bounty", bountyRoutes);


mongoose.connect("mongodb://localhost/bounty");


app.listen(port, function () {
    console.log("Server is active on port " + port);
});
