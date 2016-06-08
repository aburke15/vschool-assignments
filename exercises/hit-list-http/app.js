var app = angular.module("hitApp", []);

app.controller("HitController", ["$scope", "HitListService", function ($scope, HitListService) {
    $scope.hits = HitListService; 
    HitListService.getHitList().then(function(response) {});
}]);