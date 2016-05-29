var app = angular.module("angularSite", []); 

app.controller("MainController", ["$scope", function($scope) {
    $scope.stringArray = ["Orange", "Apple", "Pear", "Banana", "Watermelon"]; 
    
}]);