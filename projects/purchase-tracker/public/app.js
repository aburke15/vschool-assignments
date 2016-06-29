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
            templateUrl: "components/auth/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            template: "",
            controller: "LogoutController"
        })
        .otherwise({
            redirectTo: "/"
        });
});