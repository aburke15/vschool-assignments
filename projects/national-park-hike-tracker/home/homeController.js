var app = angular.module("nationalParkApp");

app.controller("HomeController", ["$scope", "ParkService", function($scope, ParkService) {
    $scope.parks = ParkService;
    $scope.location;
    $scope.images; 
    $scope.length; 
    
    ParkService.getParks().then(function(response) {});
    
    $scope.addPark = function(park) {
        
    }
    
    $scope.isLocation = function() {
        $scope.location = true; 
        $scope.images = false; 
        $scope.length = false; 
    }
    
    $scope.isImages = function() {
        $scope.images = true;
        $scope.location = false; 
        $scope.length = false; 
    }
    
    $scope.isLength = function() {
        $scope.length = true; 
        $scope.images = false; 
        $scope.location = false; 
    }
    
}]);