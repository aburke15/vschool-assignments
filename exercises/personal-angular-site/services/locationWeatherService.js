var app = angular.module("weatherApp");

app.service("LocationWeatherService", ["$http", function($http) {
    var locationUrl = "https://michele-zonca-google-geocoding.p.mashape.com/geocode/json?address="; 
    var weatherUrl = "https://simple-weather.p.mashape.com/weather?lat=";
    
    this.getWeather = function(location) {
        return $http.get(locationUrl + location + "&sensor=true", {
            headers: { "X-Mashape-Key" : "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U" }
        }).then(function (response) {  
            return response; 
        }); 
    }
    
    this.getCoordinates = function(lat, lng) {
        return $http.get(weatherUrl + lat + "&lng=" + lng, {
            headers: { "X-Mashape-Key" : "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U" }
        }).then(function(response) {
            return response; 
        });
    }
}]);