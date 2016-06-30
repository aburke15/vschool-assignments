var app = angular.module("purchaseApp");

app.controller("PurchaseController", ["$scope", "PurchaseService", function ($scope, PurchaseService) {
    $scope.purchases = PurchaseService;
    $scope.purchaseList = []; 


    PurchaseService.getPurchases().then(function (purchases) {
        $scope.purchaseList = purchases;
    });


    $scope.addPurchase = function (purchase) {
        PurchaseService.addPurchase(purchase).then(function (purchases) {
            $scope.purchaseList.push(purchases);
            $scope.purchase = {};
        });
    }

    $scope.deletePurchase = function (index, purchase) {
        var confirmed = confirm("Are you sure you want to delete?");

        if (confirmed) {
            PurchaseService.deletePurchase(purchase).then(function (response) {
                $scope.purchaseList.splice(index, 1);
                alert(response.message);
            });
        }
    }
    
    $scope.getTotal = function() {
        var totalPrice = 0; 
        for (var i = 0; i < $scope.purchaseList.length; i++) {
            totalPrice += $scope.purchaseList[i].price;
        }
        return totalPrice; 
    }

}]);