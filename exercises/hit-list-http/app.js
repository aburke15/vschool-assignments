var app = angular.module("http", []);

app.controller("HttpController", ["$scope", "$http", function ($scope, $http) {
    $scope.hit = {};
    $http.get("http://mean.codingcamp.us:6543/hitlist.json")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                $scope.hit[i] = response.data[i];
            }
        }, function (error) {
            console.log(error);
        });
    
}]);