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