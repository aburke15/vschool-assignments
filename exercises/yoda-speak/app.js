var app = angular.module("yodaSpeaks", []); 

app.controller("SpeakController", ["$scope", "SpeakService", function($scope, SpeakService) {
    $scope.phraseList = []; 
    $scope.phrase = "";
    
    $scope.getPhrase = function(phrase) { 
        SpeakService.getYodaPhrase(phrase).then(function(response) {
            console.log(response); 
            //$scope.phraseList = response.data; 
        })
    }
}]); 