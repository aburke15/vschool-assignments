var app = angular.module("voteApp", []); 

app.controller("VoteController", ["$scope", "VoteService", function($scope, VoteService) {
    $scope.posts = VoteService; 
    
    VoteService.getPosts().then( function(response) {}); 
}]);