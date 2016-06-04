var app = angular.module("yodaSpeaks", []);

app.controller("SpeakController", ["$scope", "SpeakService", function ($scope, SpeakService) {
    $scope.phrases = SpeakService;

    $scope.getPhrase = function (phrase) {
        SpeakService.getYodaPhrase(phrase).then(function (response) {
            $scope.yodaPhrase = response.data;
        });
    }
}]);