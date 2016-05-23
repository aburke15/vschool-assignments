var app = angular.module("learningAngular", []);

app.controller("MainController", ["$scope", function ($scope) {

    //var name = document.getElementById("name").value; 

    $scope.people = [
        {
            name: "Jim",
            age: 80,
            friends: ["Harold", "June", "Sue"]
        },
        {
            name: "Sally",
            age: 35,
            friends: ["Jake", "Mimi", "Suzy"]
        },
        {
            name: "Nancy",
            age: 63,
            friends: ["Jaren", "Landon", "Craig"]
        }
    ];
}]);