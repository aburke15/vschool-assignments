var express = require("express");
var app = express(); 
var cors = require("cors"); 
var mongoose = require("mongoose"); 
var bodyParser = require("body-parser"); 
var morgan = require("morgan"); 
var parkRoutes = require("./routes/parkRoutes");
var port = process.env.PORT || 5000; 

app.use(cors());
app.use(bodyParser.json());
app.use(morgan());
app.use("/parks", parkRoutes); 

mongoose.connect("mongodb://localhost/parks");

app.listen(port, function() {
    console.log("Server is active on port " + port); 
});