var app = angular.module("purchaseApp");

app.controller("PurchaseController", ["$scope", "PurchaseService", function ($scope, PurchaseService) {
    $scope.purchases = PurchaseService;
    $scope.purchaseList = []; 

    $scope.getPurchases = function () {
        PurchaseService.getPurchases().then(function (purchases) {
            $scope.purchaseList = purchases; 
        });
    }

    $scope.addPurchase = function (purchase) {
        PurchaseService.addPurchase(purchase).then(function (purchases) {
            $scope.purchaseList.push(purchases);
            $scope.purchase = {}; 
        });
    }

}]);