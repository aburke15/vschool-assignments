var app = angular.module("todo", []);

app.controller("TodoController", ["$scope", "$http", function ($scope, $http) {
    $scope.todo = {};
    $scope.todoList = [];
    var baseURL = "http://mean.codingcamp.us/andreburke/todo/";

    $scope.add = function (todo) {

        $http.post(baseURL, todo).then(function (response) {
            $scope.todoList.push(response.data);
            $scope.todo = {};
        });
        //        todo.completed = false;
        //        $scope.todoList.push(todo);
        //        $scope.todo = {};
    }

    $scope.delete = function (todo, index) {
        //        $scope.todoList.splice(index, 1);
        var confirm = confirm("Are you sure you want to delete?");

        if (confirm) {
            $http.delete(baseURL + todo._id, index).then(function (response) {
                $scope.todoList.splice(index, 1);
            });
        }
    }

    $scope.update = function (todo, index) {
        $http.put(baseURL + todo._id, todo).then(function (response) {
            $scope.todoList[index] = response.data;
            $scope.editing = false;
        });
        //        $scope.todoList[index] = todo;
        //        $scope.editing = false;
    }

    $http.get(baseURL).then(function (response) {
        $scope.todoList = response.data;
    });

}]);