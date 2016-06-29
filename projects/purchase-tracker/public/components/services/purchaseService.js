var app = angular.module("purchaseApp");

app.service("PurchaseService", ["$http", function($http) {
    
    this.getPurchases = function() {
        return $http.get("/api/purchases").then(function(response) {
            return response.data; 
        });
    }
    
    this.addPurchase = function(purchase) {
        return $http.post("/api/purchases", purchase).then(function(response) {
            return response.data;  
        }, function(response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    }
    
    this.deletePurchase = function (purchase) {
        return $http.delete("/api/purchases/" + purchase._id).then(function(response) {
            console.log(response.data); 
            return response.data;
        }, function(response) {
            alert("Error " + response.status + ": " + response.statusText); 
        });
    }
}]);