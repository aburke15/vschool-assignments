var app = angular.module("purchaseApp.Auth"); 

app.controller("LogoutController", ["UserService", function(UserService) {
    UserService.logout();
}]);