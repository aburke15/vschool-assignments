var app = angular.module("nationalParkApp");

app.controller("HomeController", ["$scope", "ParkService", function($scope, ParkService) {
    $scope.parks = ParkService; 
    
    ParkService.getParks().then(function(response) {});
    
    $scope.addPark = function(park) {
        ParkService.addPark(park).then(function(response) {
            $scope.park = {}; 
        });
    }
    
    $scope.deletePark = function(park, index) {
        ParkService.deletePark(park, index).then(function(response) {});
    }
    
    $scope.like = function() {
        ParkService.like().then(function(response) {});
    }
    
}]);