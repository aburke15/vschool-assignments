var app = angular.module("nationalParkApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/images", {
            templateUrl: "images/images.html",
            controller: "ImageController"
        })
        .when("/parks/:id", {
            templateUrl: "parks/park-detail.html",
            controller: "ParkDetailController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});