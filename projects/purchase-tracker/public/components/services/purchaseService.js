var app = angular.module("purchaseApp");

app.service("PurchaseService", ["$http", function($http) {
    var self = this;
    this.purchaseList = [];
    
    this.getPurchases = function() {
        return $http.get("/api/purchases").then(function(response) {
            self.purchaseList = response.data; 
        });
    }
    
    this.addPurchases = function(purchase) {
        return $http.post("/api/purchases", purchase).then(function(response) {
            self.purchaseList.push(response.data); 
        });
    }
}]);