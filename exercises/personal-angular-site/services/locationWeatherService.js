var app = angular.module("weatherApp");

app.service("LocationWeatherService", ["$http", function ($http) {
    var locationUrl = "https://michele-zonca-google-geocoding.p.mashape.com/geocode/json?address=";
    var weatherUrl = "https://simple-weather.p.mashape.com/weather?lat=";
    var self = this;
    this.weather;
    this.lng;
    this.lat;
    this.forecast; 

    this.getWeather = function (location) {
        return $http.get(locationUrl + location + "&sensor=true", {
            headers: {"X-Mashape-Key": "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U"}
        }).then(function (response) {
            self.lat = response.data.results[0].geometry.location.lat;
            self.lng = response.data.results[0].geometry.location.lng;
            return $http.get(weatherUrl + self.lat + "&lng=" + self.lng, {
                headers: {"X-Mashape-Key": "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U"}});
        }).then(function (response) {
            self.weather = response.data;
            return response.data; 
        });
    }
}]);