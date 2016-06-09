var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var uuid = require("uuid");
var todoRoutes = require("./todoRoutes");
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/todo", todoRoutes);


app.listen(port, function () {
    console.log("Server is active on port " + port);
});
