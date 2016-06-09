var express = require("express");
var app = express();
var bodyPaser = require("body-parser");
var cors = require("cors");
var bountyRoutes = require("./routes/bountyRoutes");
var port = process.env.PORT || 3000;

app.use(bodyPaser.json());
app.use("/bounty", bountyRoutes);
app.use(cors());

app.listen(port, function () {
    console.log("Server is active on port " + port);
});
