var express = require("express");
var app = express();
var bodyPaser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(bodyPaser.json());
app.use(cors());

var bounties = [
    {
        "firsName": "Mace",
        "lastName": "Windo",
        "living": "true",
        "bountyAmount": "100000000000",
        "type": "Jedi",
        "id": "72e0fdf0-2cd6-11e6-b03b-0901217bb519"
    },
    {
        "firsName": "Darth",
        "lastName": "Vader",
        "living": "true",
        "bountyAmount": "100000000000",
        "type": "Sith",
        "id": "72e0fdf0-2csda-11e6-b03b-0901217bb519"
    },
    {
        "firsName": "Darth",
        "lastName": "Bane",
        "living": "true",
        "bountyAmount": "50100000000000",
        "type": "Sith",
        "id": "72e0fdf0-2cgg-11e6-b03b-0901217bb519"
    },

];

app.get("/bounty", function (req, res) {
    res.send(bounties);
    console.log("retrieved");
});

app.post("/bounty", function (req, res) {
    req.body.id = uuid.v1();
    bounties.push(req.body);
    res.send(req.body);
});

app.put("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties[i] = req.body;
            return res.send(bounties[i]);
        }
    }
    res.send("No bounty with that ID");
});

app.delete("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice(i, 1);
            res.send("Bounty deleted");
        }
    }
});

app.listen(8000, function () {
    console.log("Server is active on port 8000");
});