var app = angular.module("yodaSpeaks");

app.service("SpeakService", ["$http", function ($http) {
    var theUrl = "https://yoda.p.mashape.com/yoda?sentence=";
    var self = this;

    this.getYodaPhrase = function (phrase) {
        return $http.get(theUrl + phrase, {
            headers: { "X-Mashape-Key": "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U" }
        }).then(function (response) {
            return response; 
        });
    }
}]);