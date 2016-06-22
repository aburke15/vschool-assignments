var app = angular.module("nationalParkApp");

app.controller("ParkDetailController", ["$scope", "$routeParams", "ParkService", function ($scope, $routeParams, ParkService) {
    $scope.id = $routeParams.id;
    $scope.park = ParkService; 

    ParkService.getOne($scope.id).then(function (response) {});
    
}]);