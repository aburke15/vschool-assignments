var app = angular.module("yodaSpeaks");

app.service("SpeakService", ["$http", function ($http) {
    var theUrl = "https://yoda.p.mashape.com/yoda?sentence=";
    var item = {
        "X-Mashape-Key": "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U"
    };

    this.getYodaPhrase = function (phrase) {
        return $http({
            method: 'GET',
            url: theUrl,
            headers: "accept, text/plain"
        }).then(function (response) {
            return response;
        }, function (error) {
            console.log("something is wrong");
        });
    }
}]);