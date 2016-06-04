var app = angular.module("weatherApp"); 

app.controller("ForecastController", ["$scope", "LocationWeatherService", function($scope, LocationWeatherService) { 
    $scope.weather = LocationWeatherService;   
}]); 

app.filter("temperature", function() {
    return function (temp) {
        return Math.floor(temp * (9/5) + 32) + " F°"
    }
});