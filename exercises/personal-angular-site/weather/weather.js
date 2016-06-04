var app = angular.module("weatherApp");

app.controller("WeatherController", ["$scope", "LocationWeatherService", "$location", function ($scope, LocationWeatherService, $location) {
    $scope.weather = LocationWeatherService;
    $scope.icon = $scope.weather.weatherIcons[$scope.weather.conditionCode];
    $scope.getForecast = function () {
        LocationWeatherService.getForecast().then(function () {
            $location.path("/forecast");
        });
    }
}]);

app.filter("temperatureConvert", function() {
    return function (temp) {
        return Math.floor(temp * (9/5) + 32) + " F°"
    }
});