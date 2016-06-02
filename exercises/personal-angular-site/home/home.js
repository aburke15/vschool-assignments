var app = angular.module("weatherApp");

app.controller("HomeController", ["$scope", "LocationWeatherService", "$location", function ($scope, LocationWeatherService, $location) {

    $scope.getWeather = function (location) {
        LocationWeatherService.getWeather(location).then(function (response) {
            $scope.location = "";
            $location.path("/weather");
        });
    }
}]);