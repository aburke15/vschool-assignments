var app = angular.module("weatherApp"); 

app.controller("ForecastController", ["$scope", "LocationWeatherService", function($scope, LocationWeatherService) { 
    $scope.weather = LocationWeatherService;   
}]); 