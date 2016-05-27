var app = angular.module("todo", []);

app.controller("TodoController", ["$scope", "HttpService", function ($scope, HttpService) {
    $scope.todo = {};
    $scope.todoList = [];

    HttpService.getTodos().then(function (data) {
        $scope.todoList = data;
    });

    $scope.add = function (todo) {
        HttpService.postTodo(todo).then(function (todo) {
            $scope.todoList.push(todo);
            $scope.todo = {};
        });
    }

    $scope.delete = function (index) {
        var confirmed = confirm("Are you sure you want to delete?");
        if (confirmed) {
            HttpService.deleteTodo(index).then(function (response) {
                $scope.todoList.splice(index, 1);
            });
        }
    }

    $scope.update = function (todo, index) {
        HttpService.deleteTodo(todo).then(function(todo) {
            $scope.todoList[index] = todo;
            todo.editing = false;
        });
        
//        $http.put(baseURL + todo._id, todo).then(function (response) {
//            $scope.todoList[index] = response.data;
//            todo.editing = false;
//        });
    }

}]);