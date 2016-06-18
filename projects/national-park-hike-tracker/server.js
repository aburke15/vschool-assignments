var express = require("express");
var app = express(); 
var cors = require("cors"); 
var mongoose = require("mongoose"); 
var bodyParser = require("body-parser"); 
var morgan = require("morgan"); 
var parkRoutes = require("./routes/parkRoutes");
var port = process.env.PORT || 5000;
var db = "mongodb://localhost/parks";

app.use(cors());
app.use(bodyParser.json());
app.use(morgan());
app.use("/parks", parkRoutes); 

mongoose.connect(db);

app.listen(port, function() {
    console.log("App is listening on port " + port); 
});