var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var port = process.env.PORT || 3000; 

app.use(bodyParser.json());

var fruitsArray = [
    {
        type: "Apple",
        image: "https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg",
        price: .25
    },
    {
        type: "Orange",
        image: "http://science-all.com/images/wallpapers/orange-images/orange-images-22.png",
        price: .30
    },
    {
        type: "Watermelon",
        image: "https://www.organicfacts.net/wp-content/uploads/2013/05/watermelon2.jpg",
        price: 2.00
    },
    {
        type: "Peach",
        image: "http://kingofwallpapers.com/peach/peach-006.jpg",
        price: .50
    },
];

app.get("/fruits", function (req, res) {
    console.log(req.query);
    if (req.query.type) {
        var filteredFruits = fruitsArray.filter(function (fruit) {
            return req.query.type === fruit.type;
        });
    } else if (req.query.image) {
        var filteredFruits = fruitsArray.filter(function (fruit) {
            return req.query.image === fruit.image;
        });
    } else if (req.query.price) {
        var filteredFruits = fruitsArray.filter(function (fruit) {
            return req.query.price === fruit.price;
        });
    } else {
        return res.send(fruitsArray); 
    }
    res.send(filteredFruits);
});

app.post("/fruits", function (req, res) {
    req.body.id = uuid.v1();
    fruitsArray.push(req.body);
    res.send(req.body);
});

app.delete("/fruits/:fruitsId", function (req, res) {
    for (var i = 0; i < fruitsArray.length; i++) {
        if (fruitsArray[i].id === req.params.fruitsId) {
            fruitsArray.splice(i, 1);
            res.send("Fruit deleted");
        }
    }
});

app.put("/fruits/:fruitsId", function (req, res) {
    for (var i = 0; i < fruitsArray.length; i++) {
        if (fruitsArray[i].id === req.params.fruitsId) {
            fruitsArray[i] = req.body;
            return res.send(fruitsArray[i]);
        }
    }
    res.send("No matching fruit found");
});

app.listen(port, function () {
    console.log("Server is active on port 8000");
});