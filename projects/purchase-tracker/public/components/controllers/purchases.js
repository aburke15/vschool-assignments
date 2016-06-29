var app = angular.module("purchaseApp");

app.controller("PurchaseController", ["$scope", "PurchaseService", function ($scope, PurchaseService) {
    $scope.purchases = PurchaseService;

    $scope.getPurchases = function () {
        PurchaseService.getPurchases().then(function (response) {});
    }

    $scope.addPurchase = function (purchase) {
        PurchaseService.addPurchase(purchase).then(function (response) {});
    }

}]);