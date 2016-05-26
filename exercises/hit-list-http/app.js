var app = angular.module("http", []);

app.controller("HttpController", ["$scope", "$http", function ($scope, $http) {
    $scope.hit = {};
    $http.get("http://mean.codingcamp.us:6543/hitlist.json")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                if (i % 2 === 0) {
                    $scope.hit[i] = response.data[i]; 
                } else {
                    $scope.hit[i] = response.data[i]; 
                }
            }
        console.log($scope.hit); 
        }, function (error) {
            console.log(error);
        });
}]);