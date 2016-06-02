var app = angular.module("weatherApp");

app.controller("WeatherController", ["$scope", "LocationWeatherService", function ($scope, LocationWeatherService) {
    $scope.forecast = LocationWeatherService; 
    
}]);