var app = angular.module("weatherApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
        templateUrl: "home/home.html",
        controller: "HomeController"
    })
        .when("/weather", {
        templateUrl: "weather/weather.html",
        controller: "WeatherController"
    })
        .otherwise({
        templateUrl: "home/home.html",
        controller: "HomeController"
    });
});