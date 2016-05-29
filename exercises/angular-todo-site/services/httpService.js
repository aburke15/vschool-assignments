var app = angular.module("todo");

app.service("TodoService", ["$http", function ($http) {
    var baseURL = "http://mean.codingcamp.us/andreburke/todo/";

    this.getTodos = function () {
        return $http.get(baseURL).then(function (response) {
            return response.data;
        });
    }

    this.postTodo = function (todo) {
        return $http.post(baseURL, todo).then(function (response) {
            return response.data;
        });
    }

    this.deleteTodo = function (todo) {
        return $http.delete(baseURL + todo._id).then(function (response) {
            return response.data;
        });
    }

    this.updateTodo = function (todo) {
        return $http.put(baseURL + todo._id, todo).then(function (response) {
            return response.data;
        });
    }

}]);