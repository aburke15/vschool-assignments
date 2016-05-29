var app = angular.module("todo", []);

app.controller("TodoController", ["$scope", "TodoService", function ($scope, TodoService) {
    $scope.todo = {};
    $scope.todoList = [];

    TodoService.getTodos().then(function (data) {
        $scope.todoList = data;
    });

    $scope.add = function (todo) {
        TodoService.postTodo(todo).then(function (todo) {
            $scope.todoList.push(todo);
            $scope.todo = {};
        });
    }
    
    $scope.delete = function (todo, index) {
        var confirmed = confirm("Are you sure you want to delete?");
        if (confirmed) {
            TodoService.deleteTodo(todo).then(function (message) {
                $scope.todoList.splice(index, 1);
                alert(message.msg);  
            });
        }
    }
    
    $scope.update = function (todo, index) {
        TodoService.updateTodo(todo).then(function(data) { 
            $scope.todoList[index] = data;
            todo.editing = false;
        });
    }

}]);