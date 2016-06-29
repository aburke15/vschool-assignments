var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var path = require("path"); 
var mongoose = require("mongoose");
var config = require("./config");
var expressJwt = require("express-jwt"); 
var port = process.env.PORT || 5050;

mongoose.connect(config.database, function () {
    console.log("Connection to mongodb successful"); 
});

app.use(bodyParser.json());
app.use(cors()); 
app.use(morgan("dev")); 
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", expressJwt({secret: config.secret})); 

app.use("/auth", require("./routes/authRoutes")); 
app.use("/api/purchases", require("./routes/purchaseRoutes"));

app.listen(port, function () {
    console.log("App is listening on port " + port);
});