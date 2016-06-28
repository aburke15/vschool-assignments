var app = angular.module("purchaseApp");

app.controller("PurchaseController", ["$scope", "PurchaseService", function($scope, PurchaseService) {
    $scope.purchases = PurchaseService; 
    
    $scope.getPurchases = function() {
        
    }
}])