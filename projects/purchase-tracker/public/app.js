var app = angular.module("purchaseApp", ["ngRoute", "purchaseApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/purchases", {
            templateUrl: "components/purchases/purchases.html",
            controller: "PurchaseController"
        })
        .when("/signup", {
            templateUrl: "components/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            templateUrl: "",
            controller: "LogoutController"
        });
});