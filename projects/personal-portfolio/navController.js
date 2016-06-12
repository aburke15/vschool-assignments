var app = angular.module("portfolioApp");

app.controller("NavController", ["$scope", "$location", function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path(); 
    }
    $scope.navbar = false; 
}]);