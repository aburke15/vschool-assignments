var express = require("express");
var app = express();
var uuid = require("uuid");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var port = process.env.PORT || 3000;
var postRoute = require("./routes/postRoute"); 
var cors = require("cors");
var mongoose = require("mongoose"); 

app.use(cors());
app.use(bodyParser.json());
app.use(morgan());
app.use("/posts", postRoute);

mongoose.connect("mongodb://localhost/posts");

app.listen(port, function () {
    console.log("Server is active on port " + port);
});