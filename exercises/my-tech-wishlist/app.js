var app = angular.module("techApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl: "phones/phones.html",
        controller: "PhonesController"
    })
        .when("/other", {
        templateUrl: "other/other.html",
        controller: "OtherController"
    })
        .otherwise({
        templateUrl: "phones/phones.html",
        controller: "PhonesController"
    });
});