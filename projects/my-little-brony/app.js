var app = angular.module("ponyApp", ["ngMessages"]);

app.controller("PonyController", ["$scope", "PonyService", function ($scope, PonyService) {
    $scope.ponies = PonyService;

    $scope.check = function (pony) {
        var matcher = pony.name.match(/\d+/g);
        if (matcher !== null) {
            alert("Error, pony name cannot container numbers!");
        } else {
            $scope.addPony(pony);
        }
    }

    PonyService.getPony().then(function (data) {});

    $scope.addPony = function (pony) {
        PonyService.addPony(pony).then(function (data) {
            $scope.pony = {};
        });
    }

    $scope.deletePony = function (pony, index) {
        PonyService.deletePony(pony, index).then(function (message) {});
    }

    $scope.updatePony = function (pony, index) {
        PonyService.updatePony(pony, index).then(function (data) {});
    }

}]);