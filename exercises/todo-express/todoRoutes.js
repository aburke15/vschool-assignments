var express = require("express");
var todoRoutes = express.Router();
var todoList = require("./models/todoList");
var uuid = require("uuid");

todoRoutes.route("/").get(function(req, res) {
    res.send(todoList);
    console.log("Retrieved");
}).post(function(req, res) {
    req.body.id = uuid.v1();
    todoList.push(req.body);
    res.send(req.body);
});

todoRoutes.route("/:id").delete(function (req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if(todoList[i].id === req.params.id) {
            todoList.splice(i, 1);
            return res.send("Item deleted");
        }
    }
    res.send("No matching ID found");
}).put(function(req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if(todoList[i].id === req.params.id) {
            todoList[i] = req.body;
            return res.send(todoList[i]);
        }
    }
    res.send("No matching ID found");
});

module.exports = todoRoutes;
