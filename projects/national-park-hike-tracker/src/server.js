var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");
var port = process.env.PORT || 5000;
var db = "mongodb://localhost/api/parks";

mongoose.connect(db);

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/parks", require("./routes/parkRoutes"));

app.listen(port, function() {
    console.log("App is listening on port " + port);
});
