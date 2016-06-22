var app = angular.module("nationalParkApp");

app.controller("HomeController", ["$scope", "ParkService", function($scope, ParkService) {
    $scope.parks = ParkService; 
    
    ParkService.getParks().then(function(response) {});
    
    $scope.addPark = function(park) {
        ParkService.addPark(park).then(function(response) {
            $scope.park = {}; 
        });
    }
    
    $scope.isLocation = function() {
        ParkService.isLocation();  
    }
    
    $scope.isImage = function() {
        ParkService.isImage(); 
    }
    
    $scope.isLength = function() {
        ParkService.isLength();  
    }
    
}]);