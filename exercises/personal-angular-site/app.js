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
        .when("/forecast", {
        templateUrl: "forecast/forecast.html",
        controler: "ForecastController"
    })
        .otherwise({
        templateUrl: "home/home.html",
        controller: "HomeController"
    });
});