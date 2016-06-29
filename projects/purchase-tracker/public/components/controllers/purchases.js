var app = angular.module("purchaseApp");

app.controller("PurchaseController", ["$scope", "PurchaseService", function ($scope, PurchaseService) {
    $scope.purchases = PurchaseService;
    $scope.purchaseList = [];


    PurchaseService.getPurchases().then(function (purchases) {
        $scope.purchaseList = purchases;
        console.log(purchases);
    });


    $scope.addPurchase = function (purchase) {
        PurchaseService.addPurchase(purchase).then(function (purchases) {
            $scope.purchaseList.push(purchases);
            $scope.purchase = {};
        });
    }

}]);