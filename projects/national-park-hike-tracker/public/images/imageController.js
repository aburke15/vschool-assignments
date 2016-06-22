var app = angular.module("nationalParkApp"); 

app.controller("ImageController", ["$scope", "ParkService", "$location", function($scope, ParkService, $location) {
    $scope.parks = ParkService;
    
    ParkService.getParks().then(function(response) {}); 
}]);