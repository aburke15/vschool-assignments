var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");

var todoList = [
    {
        "name": "The name",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false, 
        "id": "23k4lh23h2"
    },
];

app.use(bodyParser.json());

app.get("/todo", function (req, res) {
    res.send(todoList);
    console.log("Retrieved");
});

app.post("/todo", function (req, res) {
    req.body.id = uuid.v1();
    todoList.push(req.body);
    res.send(req.body);
});

app.delete("/todo/:todoId", function(req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if(todoList[i].id === req.params.todoId) {
            todoList.splice(i, 1);
            res.send("Item deleted"); 
        }
    }
});

app.put("/todo/:todoId", function(req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if(todoList[i].id === req.params.todoId) {
            todoList[i] = req.body; 
            res.send(todoList[i]); 
        }
    }
    return res.send("No matching ID found"); 
});

app.listen(8000, function () {
    console.log("Server is active on port 8000");
});