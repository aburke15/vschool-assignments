var app = angular.module("nameBadge", []);

app.controller("MainController", ["$scope", function ($scope) {
    $scope.person = {}; 
    $scope.badges = []; 
    $scope.colors = []; 
    
    $scope.addBadge = function(person) {
        $scope.badges.push(person); 
        $scope.person = {}; 
    }
    
}]);