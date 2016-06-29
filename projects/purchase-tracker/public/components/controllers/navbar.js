var app = angular.module("purchaseApp.Auth");

app.directive("navbar", ["UserService", function(UserService) {
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function(scope) {
            scope.userService = UserService;
        }
    }
}]);