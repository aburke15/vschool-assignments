var app = angular.module("uglyThings", []); 

app.controller("MainController", ["$scope", function($scope) {
    $scope.ugly = {};
    $scope.uglyList = []; 
    
    $scope.addUgly = function(ugly) {
        $scope.uglyList.push(ugly); 
        $scope.ugly = {}; 
    }
}]); 