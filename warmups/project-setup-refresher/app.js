var app = angular.module("angularModule", []);

app.controller("MainController", ["$scope", function ($scope) {
    $scope.total = 0; 
    $scope.sumUp = function (sumOne, sumTwo) {
        $scope.total = parseInt(sumOne) + parseInt(sumTwo);
        return $scope.total;
    }
}]);

app.controller("SecondController", ["$scope", function ($scope) {
    $scope.total = 0; 
    $scope.multiUp = function (pOne, pTwo) {
        $scope.total = parseInt(pOne) * parseInt(pTwo);
        return $scope.total;
    }
}]);