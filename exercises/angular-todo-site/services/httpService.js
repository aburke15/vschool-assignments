var app = angular.module("todo");

app.service("HttpService", ["$http", function ($http) {
    this.todo = {}; 
    this.todoList = []; 
    var baseURL = "http://mean.codingcamp.us/andreburke/todo/";
    
    this.getTodos = function() {
        return $http.get(baseURL).then(function(response) {
            return response.data; 
        }); 
    }
    
    this.postTodo = function(todo) {
        return $http.post(baseURL, todo).then(function(response) {
            return response.data; 
        });
    }
    
    this.deleteTodo = function(index) {
        return $http.delete(baseURL, index).then(function(response) {
            return response.data; 
        })
    }
    
}]);

