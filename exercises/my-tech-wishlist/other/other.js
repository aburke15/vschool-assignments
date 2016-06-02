var app = angular.module("techApp");

app.controller("OtherController", ["$scope", function ($scope) {
    $scope.techList = [
        {
            image: "img/lg-4k-77-inch-curved.jpg",
            name: "LG 4K OLED 77 inch TV",
            price: 4999.98,
        },
        {
            image: "img/BLH8675_b0.jpeg",
            name: "Horizon Hobby Chroma 4K",
            price: 699.99,
        },
        
    ];
    
    $scope.getTotal = function () {
        var totalPrice = 0; 
        for (var i = 0; i < $scope.techList.length; i++) {
            totalPrice += $scope.techList[i].price;
        }
        return totalPrice; 
    }
}]);