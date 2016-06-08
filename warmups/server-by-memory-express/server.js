var express = require("express"); 
var app = express(); 
var uuid = require("uuid"); 
var bodyParser = require("body-parser"); 

app.use(bodyParser.json());

var listObj = [
    {
        "name": "Jim",
        "age": "30"
    },
    {
        "name": "Jill",
        "age": "23"
    },
    {
        "name": "June",
        "age": "21"
    }
];

app.get("/server", function(req, res) {
    res.send(listObj); 
});

app.post("/server", function(req, res) {
    req.body.id = uuid.v1(); 
    listObj.push(req.body); 
    res.send(req.body); 
});

app.delete("/server/:serverId", function(req, res) {
    for (var i = 0; i < listObj.length; i++) {
        if (listObj[i].id === req.params.serverId) {
            listObj.splice(i, 1); 
        }
    }
    res.send("Person deleted"); 
});

app.put("/server/:serverId", function(req, res) {
    for (var i = 0; i < listObj.length; i++) {
        if (listObj[i].id === req.params.serverId) {
            listObj[i] = req.body;
            return res.send(listObj[i]);
        }
    }
    res.send("No matching ID found."); 
});


app.listen(8001, function() {
    console.log("Server is currently active on port 8001"); 
});