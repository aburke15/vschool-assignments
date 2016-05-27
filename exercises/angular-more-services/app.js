var app = angular.module("cartoonCreator", []); 

app.controller("CartoonController", ["$scope", "CartoonService", function($scope, CartoonService) {
    $scope.cartoonList = []; 
    $scope.addCartoon = function(cartoon) {
        CartoonService.addCartoon(cartoon);
        $scope.cartoonList = CartoonService.cartoonList;
        $scope.cartoon = {}; 
    }
}]);