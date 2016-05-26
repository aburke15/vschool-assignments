var app = angular.module("starWars", []); 

app.controller("MainController", ["$scope", "$http", function($scope, $http) {
    $scope.starwars = []; 
    $scope.starwarsList = []; 
    
    
    
    $http.get("http://swapi.co/api/films/1/")
    .then(function (response) {
        //console.log(response.data);
        $scope.starwars = response.data; 
        //console.log($scope.starwars); 
    }, function (error) {
        console.log(error); 
    }); 
    
    $scope.addStarWars = function(starwars) {
        $scope.starwarsList.push(starwars); 
    }
    
    $scope.addStarWars($scope.starwars); 
    
}]); 