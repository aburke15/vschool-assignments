var app = angular.module("newApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
    })
});