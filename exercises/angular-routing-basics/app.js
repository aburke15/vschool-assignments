var app = angular.module("routingApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
        .when("/whyilove", {
            templateUrl: "whyilove/ilove.html",
            controller: "ILoveController"
        })
        .otherwise({
           templateUrl: "home/home.html",
            controller: "HomeController"
        });
});