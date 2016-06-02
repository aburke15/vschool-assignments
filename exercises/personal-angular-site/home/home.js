var app = angular.module("weatherApp");

app.controller("HomeController", ["$scope", "LocationWeatherService", "$location", function ($scope, LocationWeatherService, $location) {
    $scope.location;
    $scope.weather;
    $scope.lat;
    $scope.lng;

    $scope.getWeather = function (location) {
        LocationWeatherService.getWeather(location).then(function (response) {
            $scope.lat = response.data.results[0].geometry.location.lat;
            $scope.lng = response.data.results[0].geometry.location.lng;
            $scope.location = "";

            LocationWeatherService.getCoordinates($scope.lat, $scope.lng).then(function (response) {
                $scope.weather = response.data;
                var temp = $scope.weather.split(" ");
                temp = temp[0];
                temp = parseInt(temp);
                console.log(temp);
                $location.path("/weather"); 
            });
        });
    }

    function celciusToFahrenheit(temp) {

    }
}]);