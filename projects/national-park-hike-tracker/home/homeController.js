var app = angular.module("nationalParkApp");

app.controller("HomeController", ["$scope", "ParkService", function($scope, ParkService) {
    $scope.parks = ParkService;
    
    ParkService.getParks().then(function(response) {});
    
}]);