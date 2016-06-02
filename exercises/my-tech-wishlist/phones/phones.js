var app = angular.module("techApp");

app.controller("PhonesController", ["$scope", function ($scope) {
    $scope.techList = [
        {
            image: "img/phpnblzg9.jpg",
            name: "OnePlus 3",
            price: 384.00,
        },
        {
            image: "img/Macbook-Pro-2016-1.jpg",
            name: "MacBook Pro 15 2016 refresh",
            price: 2499.00,
        }
    ];
    
    $scope.getTotal = function () {
        var totalPrice = 0; 
        for (var i = 0; i < $scope.techList.length; i++) {
            totalPrice += $scope.techList[i].price;
        }
        return totalPrice; 
    } 
}]);