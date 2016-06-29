var app = angular.module("purchaseApp.Auth"); 

app.controller("LoginController", ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.login = function(user) {
        UserService.login(user).then(function(response) {
            $location.path("/purchases");
        }, function(response) {
            alert("Login was not successful"); 
        });
    }
}]);